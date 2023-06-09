'use client';

import React, { useState } from 'react';
import Button from './ui/Button';
import { signIn, signOut } from 'next-auth/react';
import { toast } from '@/ui/Toast';

interface SignInButtonProps {}

const SignInButton: React.FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn('google');
    } catch (error) {
      toast({
        title: 'Error signing in',
        message: 'Please try again later',
        type: 'error',
      });
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;
