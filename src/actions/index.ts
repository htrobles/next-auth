import { signIn, signOut } from '@/auth';

export async function socialLogin(formData: FormData) {
  'use server';
  const action = formData.get('action') as string;

  await signIn(action, { redirectTo: '/' });
}

export async function emailLogin(formData: FormData) {
  'use server';
  const email = formData.get('email');
  const password = formData.get('password');

  await signIn('credentials', formData);
}

export async function logout() {
  'use server';
  await signOut();
}
