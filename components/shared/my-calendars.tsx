'use client';

import React from 'react';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { Check, ChevronRight } from 'lucide-react';

export function MyCalendars({ calendars }: { calendars: { name: string; items: { title: string; active: boolean }[] }[] }) {
  return (
    <>
      {calendars.map((calendar, index) => (
        <Collapsible key={index} defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel
              asChild
              className="group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger>
                {calendar.name}
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="overflow-hidden group-data-[state=open]/collapsible:animate-slideDown group-data-[state=closed]/collapsible:animate-slideUp">
              <SidebarGroupContent>
                <SidebarMenu>
                  {calendar.items.map((item, idx) => (
                    <SidebarMenuItem key={idx}>
                      <SidebarMenuButton>
                        <div
                          data-active={item.active}
                          className="group/calendar-item flex aspect-square size-4 shrink-0 items-center justify-center rounded-sm border border-sidebar-border text-sidebar-primary-foreground data-[active=true]:border-sidebar-primary data-[active=true]:bg-sidebar-primary"
                        >
                          <Check className="hidden size-2 group-data-[active=true]/calendar-item:block" />
                        </div>
                        {item.title}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      ))}
    </>
  );
}
