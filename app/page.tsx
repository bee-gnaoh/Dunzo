'use client';

import { useEffect, useState } from 'react';
import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, closestCorners } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { Task } from '@/types/task.type';
import { TASK_DATA, TASK_DATA_2 } from '@/mocks/tasks.mock';
import TaskColumn from '@/components/task/task-column';
import TaskCard from '@/components/task/task-card';

export default function Home() {
  const [tasks, setTasks] = useState<{ [key: string]: Task[] }>({
    todo: TASK_DATA,
    progress: TASK_DATA_2,
  });

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // todo: fix handle drag to smooth
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const sourceColumn = active.data.current?.column as 'todo' | 'progress';
    const taskId = active.data.current?.taskId;

    if (!sourceColumn || !taskId) return;

    const task = tasks[sourceColumn].find((t) => t.id === taskId);
    setActiveTask(task || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveTask(null);
    const { active, over } = event;
    if (!over) return;

    const sourceColumn = active.data.current?.column as string;
    const destinationColumn = over.data.current?.column as string;
    if (!sourceColumn || !destinationColumn || !tasks[sourceColumn] || !tasks[destinationColumn]) return;

    const activeIndex = tasks[sourceColumn].findIndex((t) => t.id === active.id);
    const overIndex = tasks[destinationColumn].findIndex((t) => t.id === over.id);
    if (activeIndex === -1) return;

    setTasks((prev) => {
      const updatedTasks = { ...prev };

      if (sourceColumn === destinationColumn) {
        updatedTasks[sourceColumn] = arrayMove(updatedTasks[sourceColumn], activeIndex, overIndex);
      } else {
        const [movedTask] = updatedTasks[sourceColumn].splice(activeIndex, 1);
        updatedTasks[destinationColumn] = [{ ...movedTask }, ...updatedTasks[destinationColumn]];
      }

      return updatedTasks;
    });
  };

  // todo : fix drag overlay
  if (!isClient) return;
  return (
    <DndContext collisionDetection={closestCorners} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="h-full w-full px-20 pt-5 flex justify-start items-start gap-5">
        {Object.entries(tasks).map(([columnId, columnTasks]) => (
          <SortableContext key={columnId} items={columnTasks.map((t) => t.id)}>
            <TaskColumn title={columnId} id={columnId} tasks={columnTasks} activeTaskId={activeTask?.id} />
          </SortableContext>
        ))}
      </div>
      {/* 🔥 Drag Overlay: Shows a floating version of the dragged task */}
      <DragOverlay>{activeTask ? <TaskCard task={activeTask} columnId={''} isOverlay /> : null}</DragOverlay>
    </DndContext>
  );
}
