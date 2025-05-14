'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Brain, Zap, Lock } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: <Bot className="h-8 w-8 text-blue-500" />,
      title: 'Advanced AI Chat',
      description: 'Engage with our sophisticated AI chatbot for natural conversations and assistance.',
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: 'Custom Model Training',
      description: 'Train AI models tailored to your specific needs and use cases.',
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: 'Real-time Processing',
      description: 'Experience lightning-fast response times with our optimized infrastructure.',
    },
    {
      icon: <Lock className="h-8 w-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and security measures to protect your data.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-20 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Powerful AI Features
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Discover the cutting-edge capabilities of our AI platform
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {feature.icon}
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}