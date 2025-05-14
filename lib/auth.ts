// lib/auth.ts
import { FirestoreAdapter } from '@auth/firebase-adapter';
import { collection, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { db } from './firebase';
import { v4 as uuidv4 } from 'uuid';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/',
    signOut: '/',
    error: '/',
    verifyRequest: '/',
    newUser: '/log',
  },
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      try {
        const userQuery = query(collection(db, 'users'), where('email', '==', user.email));
        const userSnapshot = await getDocs(userQuery);
        const now = Date.now();

        if (userSnapshot.empty) {
          const newUserId = uuidv4();
          await setDoc(doc(db, 'users', newUserId), {
            available_credit: 5.0,
            creation_timestamp_ms: now,
            email: user.email,
            name: user.name,
            last_login_timestamp_ms: now,
          });
        } else {
          const userDoc = userSnapshot.docs[0];
          await updateDoc(doc(db, 'users', userDoc.id), {
            last_login_timestamp_ms: now,
          });
        }

        return true;
      } catch (error) {
        console.error('signIn callback error:', error);
        return false;
      }
    },
    async session({ session }) {
      if (session.user?.email) {
        try {
          const userQuery = query(collection(db, 'users'), where('email', '==', session.user.email));
          const userSnapshot = await getDocs(userQuery);

          if (!userSnapshot.empty) {
            const userData = userSnapshot.docs[0].data();
            session.user.credit = userData.available_credit;
            session.user.id = userSnapshot.docs[0].id;
          }
        } catch (error) {
          console.error('session callback error:', error);
        }
      }

      return session;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/log`;
    },
  },
  session: {
    strategy: 'jwt',
  },
};
