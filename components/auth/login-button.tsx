'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoginButtonProps {
  className?: string;
}

export function LoginButton({ className }: LoginButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      await signIn('google', { callbackUrl: '/log' });
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn('w-full', className)}
    >
      <Button
        variant="outline"
        size="lg"
        onClick={handleGoogleLogin}
        disabled={isLoading}
        className={cn(
          'w-full relative bg-white hover:bg-gray-50 text-black border border-gray-300',
          'flex items-center justify-center gap-3 h-12 px-6 rounded-xl',
          'transition-all duration-300 shadow-sm hover:shadow',
          isLoading && 'opacity-80'
        )}
      >
        {isLoading ? (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-black" />
        ) : (
          <>
            <img
              src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium">Continue with Google</span>
          </>
        )}
      </Button>
    </motion.div>
  );
}