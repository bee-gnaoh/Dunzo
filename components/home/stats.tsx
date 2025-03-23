'use client';

import React from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';

export default function Stats() {
  return (
    <div className="mt-8 flex items-center justify-between gap-6 ">
      {/* card item */}
      <div className="w-1/4 min-h-10 rounded-md border border-neutral-200 p-2 flex items-center gap-4">
        <div className="h-12 w-12 flex items-center justify-center bg-success-1">
          <DynamicIcon name="check-circle" className="size-4 text-success-3 rounded-sm" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-sm font-semibold">{'5 Tasks Completed'}</p>
          <p className="text-sm text-neutral-500 ">{'In the last 7 days'}</p>
        </div>
      </div>

      <div className="w-1/4 min-h-10 rounded-md border border-neutral-200 p-2 flex items-center gap-4">
        <div className="h-12 w-12 flex items-center justify-center bg-warning-1 rounded-sm">
          <DynamicIcon name="calendar" className="size-4 text-warning-3" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-sm font-semibold">{'2 Due Soon'}</p>
          <p className="text-sm text-neutral-500 ">{'In the last 7 days'}</p>
        </div>
      </div>

      <div className="w-1/4 min-h-10 rounded-md border border-neutral-200 p-2 flex items-center gap-4">
        <div className="h-12 w-12 flex items-center justify-center bg-neutral-100 rounded-sm">
          <DynamicIcon name="list-todo" className="size-4 text-neutral-500" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-sm font-semibold">{'10 Updated'}</p>
          <p className="text-sm text-neutral-500 ">{'In the last 7 days'}</p>
        </div>
      </div>

      <div className="w-1/4 min-h-10 rounded-md border border-neutral-200 p-2 flex items-center gap-4">
        <div className="h-12 w-12 flex items-center justify-center bg-neutral-100 rounded-sm">
          <DynamicIcon name="copy-check" className="size-4 text-neutral-500" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-sm font-semibold">{'8 Created'}</p>
          <p className="text-sm text-neutral-500 ">{'In the last 7 days'}</p>
        </div>
      </div>
    </div>
  );
}
