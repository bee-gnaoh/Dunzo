'use client';

import { Header, Stats } from '@/components/home';

export default function Home() {
  return (
    <div className="h-full w-full px-20 pt-5">
      <Header />
      <Stats />
    </div>
  );
}
