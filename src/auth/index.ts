import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '@/lib/db';

// const GOOGLE_ID = process.env.AUTH_GOOGLE_ID;
// const GOOGLE_SECRET = process.env.AUTH_GOOGLE_SECRET;

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      authorize: async (payload) => {
        console.log('XXX');
        console.log(payload);
        // const response = await fetch(request);
        // if (!response.ok) return null;
        // return (await response.json()) ?? null;
        return { email: 'test' };
      },
    }),
  ],
  callbacks: {
    signIn: async ({ account, profile }) => {
      console.log('XXX AUTH CALLBACK START XXXX');
      console.log(account);
      console.log(profile);
      console.log(account?.provider);
      console.log(profile?.email_verified);
      console.log('XXX AUTH CALLBACK END XXXX');
      if (account?.provider === 'google') {
        return !!profile?.email_verified;
      }

      return true;
    },
  },
  adapter: MongoDBAdapter(clientPromise),
});
