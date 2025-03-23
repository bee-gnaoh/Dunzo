'use client';

import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="h-full flex items-center">
      <Link href={'/'} className="text-lg leading-tight">
        Dunzo
      </Link>
    </div>
  );
}
