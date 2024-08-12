import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
console.log("PrismaAdapter imported:", PrismaAdapter);
import { PrismaClient } from "@prisma/client"

if (!process.env.NEXTAUTH_URL) {
  console.warn('NEXTAUTH_URL is not set');
}
if (!process.env.NEXTAUTH_SECRET) {
  console.warn('NEXTAUTH_SECRET is not set');
}

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('Sign in attempt:', { user, account, profile, email });
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log('Redirect:', { url, baseUrl });
      return baseUrl;
    },
  },
  debug: true, // Enable debug messages
}
console.log("PrismaAdapter initialized with prisma");
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }