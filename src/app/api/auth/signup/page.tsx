'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

const SignUpPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  // Handle form submission
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simple validation for form fields
    if (!username || !email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        router.push('/api/auth/signin'); // Redirect to sign-in page after successful signup
      } else {
        setError('Failed to sign up');
      }
    } catch (err) {
      setError('An error occurred during sign-up');
    }

    setLoading(false);
  };

  // Handle Google Sign-Up
  const handleGoogleSignUp = () => {
    signIn('google', { callbackUrl: '/profile' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">Sign Up for StudioFlow</h2>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <form onSubmit={handleSignUp} className="space-y-4">
            {/* Username Input */}
            <Input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />

            {/* Email Input */}
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />

            {/* Password Input */}
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow hover:scale-105 transition-transform"
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-center">
            <span className="text-gray-400 text-sm">or</span>
          </div>

          <Button
            variant="outline"
            className="w-full mt-4 flex items-center justify-center gap-2 hover:bg-gray-100"
            onClick={handleGoogleSignUp}
          >
            <FcGoogle className="w-5 h-5" />
            Sign up with Google
          </Button>

          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{' '}
            <Link href="/signin" className="text-indigo-600 underline">
              Sign in here
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
