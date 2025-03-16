'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function Header() {
  return (
    <div className="w-full flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 rounded-[50%]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start text-2xl leading-tight">
          <div className="truncate font-semibold">Hoang To Viet</div>
          <div className="truncate text-xs text-slate-400">@gnaohvt</div>
        </div>
      </div>
    </div>
  );
}
