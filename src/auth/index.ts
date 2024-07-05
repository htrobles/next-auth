import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

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
      async authorize(payload) {
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
    async signIn({ account, profile }) {
      // console.log('XXX AUTH CALLBACK START XXXX');
      // console.log(account);
      // console.log(profile);
      // console.log('XXX AUTH CALLBACK END XXXX');
      if (account?.provider === 'google') {
        return !!profile?.email_verified;
      }

      return true;
    },
  },
});
