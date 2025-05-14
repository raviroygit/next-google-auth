'use client';

import { motion } from 'framer-motion';
import { LoginButton } from '@/components/auth/login-button';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Cpu, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="h-8 w-8 text-blue-500" />
          <h1 className="text-4xl md:text-5xl font-bold">NextGen AI</h1>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
          Revolutionize Your Workflow with AI
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Harness the power of cutting-edge artificial intelligence to transform your ideas into reality.
          Join thousands of innovators already using NextGen AI.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <LoginButton className="w-full sm:w-auto" />
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center p-6 rounded-2xl bg-card border"
          >
            <Bot className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Smart Automation</h3>
            <p className="text-muted-foreground text-center">Automate repetitive tasks with AI-powered workflows</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center p-6 rounded-2xl bg-card border"
          >
            <Cpu className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-muted-foreground text-center">Gain insights with deep learning algorithms</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center p-6 rounded-2xl bg-card border"
          >
            <Sparkles className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Natural Language</h3>
            <p className="text-muted-foreground text-center">Communicate naturally with our AI models</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}