'use client';

import React from 'react';
import { SidebarInput, SidebarInset, SidebarTrigger } from '../ui/sidebar';
import { Button } from '../ui/button';
import { DynamicIcon } from 'lucide-react/dynamic';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Label } from '../ui/label';
import { Search } from 'lucide-react';

export default function AppTopBar() {
  return (
    <SidebarInset className="w-full">
      <div className="h-16 w-full flex justify-between items-center px-4">
        <SidebarTrigger className="-ml-1" />
        <form className="flex-1 w-full max-w-[500px] px-4">
          <div className="relative w-full">
            <Label htmlFor="search" className="sr-only">
              Search
            </Label>
            <SidebarInput id="search" placeholder="Type to search..." className="h-8 pl-7" />
            <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
          </div>
        </form>

        <div className=" flex justify-end items-center gap-2">
          <Button variant={'ghost'} className="h-8 w-8">
            <DynamicIcon name="bell" className="size-4" />
          </Button>
          <Button variant={'ghost'} className="h-8 w-8">
            <Avatar className="h-8 w-8 rounded-sm">
              <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
    </SidebarInset>
  );
}
