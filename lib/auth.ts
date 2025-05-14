import { FirestoreAdapter } from '@auth/firebase-adapter';
import { Timestamp, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
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
    async signIn({ user, account }) {
      if (!user.email) return false;

      try {
        // Check if user exists
        const userQuery = query(collection(db, 'users'), where('email', '==', user.email));
        const userSnapshot = await getDocs(userQuery);
        
        const currentTimestamp = Date.now();
        
        // If user doesn't exist, create a new record
        if (userSnapshot.empty) {
          const newUserId = uuidv4();
          await setDoc(doc(db, 'users', newUserId), {
            available_credit: 5.0,
            creation_timestamp_ms: currentTimestamp,
            email: user.email,
            name: user.name,
            last_login_timestamp_ms: currentTimestamp,
          });
        } else {
          // Update last login time for existing user
          const userDoc = userSnapshot.docs[0];
          await updateDoc(doc(db, 'users', userDoc.id), {
            last_login_timestamp_ms: currentTimestamp,
          });
        }
        
        return true;
      } catch (error) {
        console.error('Error during sign in process:', error);
        return false;
      }
    },
    async session({ session, token }) {
      if (session.user && session.user.email) {
        try {
          const userQuery = query(collection(db, 'users'), where('email', '==', session.user.email));
          const userSnapshot = await getDocs(userQuery);
          
          if (!userSnapshot.empty) {
            const userData = userSnapshot.docs[0].data();
            session.user.credit = userData.available_credit;
            session.user.id = userSnapshot.docs[0].id;
          }
        } catch (error) {
          console.error('Error fetching user data for session:', error);
        }
      }
      
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Always redirect to /log after successful authentication
      return `${baseUrl}/log`;
    },
  },
  session: {
    strategy: 'jwt',
  },
};