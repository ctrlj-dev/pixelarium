// src/pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import authConfig from '@/lib/auth/config';

export default NextAuth(authConfig);
