'use client';

import { Task } from '@/types/task.type';
import React, { useMemo } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { PriorityColor } from '@/constants/task.constant';
import { DynamicIcon } from 'lucide-react/dynamic';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface TaskCardProps {
  columnId: string;
  task: Task;
  isOverlay?: boolean;
}

export default function TaskCard({ task, columnId, isOverlay = false }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: task.id,
    data: { column: columnId, taskId: task.id },
    disabled: isOverlay,
    transition: {
      duration: 150, // milliseconds
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    },
  });

  const style = useMemo(
    () => ({
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isDragging ? 0.5 : 1,
    }),
    [transform, transition, isDragging],
  );

  return (
    <div ref={isOverlay ? undefined : setNodeRef} aria-describedby={`${task.id}`}>
      <Card
        className={`w-full px-2 py-4 hover:shadow-md hover:border-neutral-500 select-none cursor-grab ${
          isOverlay ? 'bg-blue-400 shadow-lg scale-105' : 'bg-white shadow'
        }`}
        style={style}
        {...(isOverlay ? {} : attributes)} // ✅ Prevent errors
        {...(isOverlay ? {} : listeners)}
      >
        <CardHeader className="flex flex-row justify-between items-center p-0">
          {/* priority */}
          <div
            className="text-xs rounded-md px-2 py-1 text-neutral-50 cursor-pointer"
            style={{ backgroundColor: task.priority && `${PriorityColor[task.priority]}` }}
          >
            {task.priority}
          </div>
          <div className="p-1 cursor-pointer rounded-sm hover:bg-neutral-100">
            <DynamicIcon name="ellipsis-vertical" className="size-4" />
          </div>
        </CardHeader>

        <CardContent className="py-1 px-0 flex flex-col gap-2">
          {/* card-title */}
          <div className=" text-sm overflow-hidden text-ellipsis whitespace-pre-wrap line-clamp-2 hover:underline">
            {task.title}
          </div>
          {/* card-media */}
          {task.attachments && task.attachments[0] && (
            <div className="w-full rounded-lg overflow-hidden">
              <img width={'100%'} height={'100%'} src={task.attachments[0].url} alt="card-media" />
            </div>
          )}
        </CardContent>
        <CardFooter className="p-0 py-1 flex-col items-start gap-2">
          {/* tags */}
          <div className="flex gap-1 items-center">
            {task.tags.map((tag, tagKey) => (
              <div
                key={tagKey}
                className="text-xs bg-neutral-300 rounded-md px-2 py-1 text-neutral-950 cursor-pointer"
              >{`#${tag}`}</div>
            ))}
          </div>
          <div className="w-full flex justify-between">
            {/* assigns */}
            <div className="h-8 flex-1 flex items-center gap-1">
              {task.assignees.map((assignee, assigneeKey) => (
                <div key={assigneeKey} className={`w-8 h-8 bg-red-400 rounded-[50%] flex justify-center items-center`}>
                  {assignee[0]}
                </div>
              ))}
              <div className="w-8 h-8 rounded-[50%] flex justify-center items-center border border-dashed border-neutral-500 text-neutral-500 hover:border-neutral-700 hover:text-neutral-700">
                <DynamicIcon name="plus" className="size-4" />
              </div>
            </div>

            {/* status - comments???? */}
            <div className="flex justify-end items-center gap-1">
              {task.attachments?.length !== 0 && (
                <div className="flex items-center bg-neutral-100 text-neutral-800 py-1 px-2 rounded-md gap-0.5">
                  <DynamicIcon name="file-archive" className="size-4" />
                  {task.attachments?.length}
                </div>
              )}
              {task.commentsCount !== 0 && (
                <div className="flex items-center bg-neutral-100 text-neutral-800 py-1 px-2 rounded-md gap-0.5">
                  <DynamicIcon name="message-square-dot" className="size-4" />
                  {task.commentsCount}
                </div>
              )}
            </div>
            <div></div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
