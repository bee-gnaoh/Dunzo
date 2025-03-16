'use client';

import React from 'react';
import { Calendar } from '../ui/calendar';
import { SidebarGroup, SidebarGroupContent } from '../ui/sidebar';

export function DatePicker({ ...props }: React.ComponentProps<typeof Calendar>) {
  return (
    <div className="px-0">
      <SidebarGroup>
        <SidebarGroupContent>
          <Calendar {...props} />
        </SidebarGroupContent>
      </SidebarGroup>
    </div>
  );
}
