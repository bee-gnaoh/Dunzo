'use client';

import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '../ui/sidebar';
import { CalendarCheck, LayoutGrid, NotebookPen, Settings } from 'lucide-react';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

const MenuItems: {
  groupTitle?: string;
  items: { title: string; icon: IconName; subIcon?: IconName }[];
}[] = [
  {
    items: [
      {
        title: 'Tasks',
        icon: 'circle-check',
      },
    ],
  },
  {
    groupTitle: 'Main Menu',
    items: [
      {
        title: 'Dashboard',
        icon: 'layout-grid',
      },
      {
        title: 'My Calendar',
        icon: 'calendar-check',
      },
      {
        title: 'My Notes',
        icon: 'notebook-pen',
      },
    ],
  },
  {
    groupTitle: 'Others',
    items: [
      {
        title: 'Settings',
        icon: 'settings',
      },
    ],
  },
];

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="h-16 border-b ">{/* <Header /> */}</SidebarHeader>
      <SidebarContent>
        {MenuItems.map((group, index) => (
          <React.Fragment key={index}>
            <SidebarGroup>
              {group.groupTitle && <SidebarGroupLabel>{group.groupTitle.toUpperCase()}</SidebarGroupLabel>}
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item, idx) => (
                    <SidebarMenuItem key={idx}>
                      <SidebarMenuButton
                        data-active={item.title === 'Tasks'}
                        className="group/menu-item flex items-center data-[active=true]:bg-transparent"
                      >
                        <DynamicIcon name={item.icon} className="size-4 group-data-[active=true]/menu-item:text-main-500" />
                        <div className="group-data-[active=true]/menu-item:text-main-500 group-data-[active=true]/menu-item:font-semibold">
                          {item.title}
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            {index !== MenuItems.length - 1 && <SidebarSeparator />}
          </React.Fragment>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
