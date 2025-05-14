'use client';

import { useSession } from 'next-auth/react';
import { UserButton } from '@/components/auth/user-button';
import { LoginButton } from '@/components/auth/login-button';

export function AuthStatus() {
  const { data: session, status } = useSession();
  
  if (status === 'loading') {
    return <div className="h-10 w-10 animate-pulse rounded-full bg-muted" />;
  }
  
  if (status === 'authenticated' && session?.user) {
    return <UserButton />;
  }
  
  return <LoginButton className="w-auto" />;
}