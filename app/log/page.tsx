'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { formatDistanceToNow } from 'date-fns';
import { Bot, Brain, CreditCard, Calendar, UserCircle, Zap, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [lastLoginDate, setLastLoginDate] = useState<string>('');
  
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
    
    if (session?.user) {
      setLastLoginDate(formatDistanceToNow(new Date(), { addSuffix: true }));
    }
  }, [session, status, router]);
  
  if (status === 'loading' || !session?.user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }
  
  const { user } = session;
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container py-20 px-4 mt-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Welcome back, {user.name}!</h1>
            <p className="text-muted-foreground mt-2">
              Your AI workspace is ready for innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-500" />
                    AI Credits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-3xl font-bold">{user.credit || 5.0}</p>
                      <p className="text-sm text-muted-foreground">Available credits</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Get More Credits
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-purple-500" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Bot className="h-8 w-8 p-1.5 rounded-full bg-purple-100 text-purple-500" />
                      <div>
                        <p className="font-medium">AI Chat Session</p>
                        <p className="text-sm text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="h-8 w-8 p-1.5 rounded-full bg-blue-100 text-blue-500" />
                      <div>
                        <p className="font-medium">Model Training</p>
                        <p className="text-sm text-muted-foreground">Yesterday</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <UserCircle className="h-5 w-5 text-indigo-500" />
                    Account Info
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Last Active</p>
                      <p className="font-medium">{lastLoginDate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Get started with these powerful AI features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-4">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Start AI Chat</p>
                      <p className="text-sm text-muted-foreground">Chat with our advanced AI assistant</p>
                    </div>
                    <Button>Launch</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center mr-4">
                      <Brain className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Train Model</p>
                      <p className="text-sm text-muted-foreground">Create a custom AI model</p>
                    </div>
                    <Button variant="outline">Start</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mr-4">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Generate Content</p>
                      <p className="text-sm text-muted-foreground">Create AI-powered content</p>
                    </div>
                    <Button variant="outline">Create</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
}