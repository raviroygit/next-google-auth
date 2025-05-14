'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { AuthStatus } from '@/components/auth/auth-status';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between',
        'px-6 md:px-10 py-4 transition-all duration-300',
        isHome ? 'bg-transparent' : 'bg-background/80 backdrop-blur-md border-b'
      )}
    >
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Sparkles className="h-6 w-6 text-blue-500" />
          <span className="text-lg">NextGen AI</span>
        </Link>
      </div>
      
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link>
        </nav>
        <AuthStatus />
      </div>
    </motion.header>
  );
}