'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect } from 'react';

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'loading' && !session) {
      router.push('/signin');
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) {
    // Early return if there's no session (redirect is handled in useEffect)
    return null;
  }

  const { user } = session;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4">Welcome, {user?.name || 'User'}!</h1>

        {/* {user?.image && (
          <div className="flex justify-center mb-4">
            <Image
              src={user.image}
              alt="Profile Picture"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
        )} */}

        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> {user?.email}
        </p>

        <div className="space-y-4 mt-6">
          {/* Profile Edit Button */}
          <Button
            onClick={() => router.push('/profile/edit')} // Navigate to an edit profile page
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            Edit Profile
          </Button>

          {/* Sign Out Button */}
          <Button
            onClick={() => signOut({ callbackUrl: '/' })} // Redirect to landing page after sign-out
            className="w-full bg-red-500 hover:bg-red-600 text-white"
          >
            Sign Out
          </Button>

          {/* Landing Page Redirect Button */}
          <Button
            onClick={() => router.push('/')} // Redirect to landing page
            className="w-full bg-gray-500 hover:bg-gray-600 text-white"
          >
            Go to Landing Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
