'use client';

import React, { useMemo } from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';
import { Task } from '@/types/task.type';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import TaskCard from './task-card';

interface TaskColumnProps {
  id: string;
  tasks: Task[];
  title: string;

  activeTaskId?: string | null;
}

export default function TaskColumn({ tasks, title, id, activeTaskId }: TaskColumnProps) {
  const { setNodeRef, isOver, over } = useDroppable({
    id,
    data: { column: id },
  });

  return (
    <div ref={setNodeRef}>
      {/* box */}
      <div
        className={`flex flex-col rounded-xl border border-neutral-200 w-[300px] min-h-[100px] px-4 py-2 transition-all ${
          isOver ? 'bg-blue-200 border-2 border-blue-500' : 'bg-gray-200'
        }`}
      >
        {/* box - header */}
        <div className="flex justify-between items-center py-2 border-b border-b-neutral-300">
          <div className="text-lg font-semibold ">{title}</div>
          <div className="text-sm flex items-center gap-1">
            <div className="p-1 cursor-pointer rounded-sm hover:bg-neutral-100">
              <DynamicIcon name="plus" className="size-4" />
            </div>
            <div className="p-1 cursor-pointer rounded-sm hover:bg-neutral-100">
              <DynamicIcon name="ellipsis-vertical" className="size-4" />
            </div>
          </div>
        </div>

        {/* box - card */}
        <SortableContext items={tasks.map((task) => task.id)}>
          <div className="w-full flex flex-col items-center gap-2 mt-2">
            {tasks.map((task, index) => (
              <TaskCard key={`${id}-${index}`} task={task} columnId={id} />
            ))}
          </div>
        </SortableContext>
      </div>
    </div>
  );
}
