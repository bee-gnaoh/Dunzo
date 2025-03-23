export type Priority = 'high' | 'medium' | 'low';

export type Task = {
  id: string;
  title: string;
  description?: string;
  tags: string[]; // Example: ['#website', '#client']
  assignees: string[]; // Array of user IDs or names
  commentsCount: number;
  attachments?: {
    url: string;
    type: 'image' | 'document' | 'video' | 'other';
  }[]; // Array of attachments
  priority?: Priority;
  dueDate?: string; // ISO format date string
  checklist?: {
    text: string;
    completed: boolean;
  }[];
  // status: 'Todo' | 'In Progress' | 'In Review' | 'Done';
  status: string;
};
