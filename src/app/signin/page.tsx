'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FcGoogle } from 'react-icons/fc';

const SignInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email === 'test@example.com' && password === 'password123') {
      localStorage.setItem('access_token', 'dummy_token');
      router.push('/profile');
    } else {
      setError('Invalid credentials. Try test@example.com / password123');
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn('google');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
            Sign In to StudioFlow
          </h2>

          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow hover:scale-105 transition-transform"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-center">
            <span className="text-gray-400 text-sm">or</span>
          </div>

          <Button
            variant="outline"
            className="w-full mt-4 flex items-center justify-center gap-2 hover:bg-gray-100"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="w-5 h-5" />
            Sign in with Google
          </Button>

          <p className="text-sm text-center mt-4 text-gray-600">
            Don’t have an account?{' '}
            <a href="#" className="text-indigo-600 underline">
              Sign up here
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
