'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';

export default function BlogPage() {
  const posts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Discover how artificial intelligence is transforming modern business operations and decision-making processes.',
      author: 'Dr. Sarah Chen',
      date: new Date('2024-03-15'),
      readTime: '5 min read',
      category: 'AI & Business',
    },
    {
      title: 'Understanding Machine Learning Models',
      excerpt: 'A comprehensive guide to different types of machine learning models and their practical applications.',
      author: 'James Wilson',
      date: new Date('2024-03-10'),
      readTime: '8 min read',
      category: 'Technical',
    },
    {
      title: 'Ethics in Artificial Intelligence',
      excerpt: 'Exploring the ethical considerations and challenges in AI development and implementation.',
      author: 'Prof. Michael Brown',
      date: new Date('2024-03-05'),
      readTime: '6 min read',
      category: 'Ethics',
    },
    {
      title: 'AI-Powered Customer Service',
      excerpt: 'How AI is revolutionizing customer service and improving user experience across industries.',
      author: 'Emma Thompson',
      date: new Date('2024-03-01'),
      readTime: '4 min read',
      category: 'Customer Experience',
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
            Latest Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Explore our latest articles on AI technology and innovation
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{post.category}</span>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span>{post.author}</span>
                    <span className="text-muted-foreground">
                      {formatDistanceToNow(post.date, { addSuffix: true })}
                    </span>
                  </div>
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