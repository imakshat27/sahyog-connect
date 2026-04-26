'use client'

import React, { useState } from 'react'
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

import { Building2, UserCircle2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'volunteer' | 'ngo' | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) {
      alert("Please select a role first.");
      return;
    }
    setIsLoading(true);

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      // Set display name
      await updateProfile(userCred.user, {
        displayName: name,
      });

      const token = await userCred.user.getIdToken();
      localStorage.setItem("token", token);

      router.push(`/onboarding?role=${role}`);
      console.log("Signup success");

    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // google signup handler
  const handleGoogleSignup = async () => {
    if (!role) {
      alert("Please select a role first.");
      return;
    }
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const token = await result.user.getIdToken();
      localStorage.setItem("token", token);

      router.push(`/onboarding?role=${role}`);
      console.log("Google signup success");

    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg border-border">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl text-center">Welcome</CardTitle>
          <CardDescription className="text-center mt-2">
            Sign up for an account to continue
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Role Selection */}
            <div className="space-y-2 mb-6">
              <label className="block text-sm font-medium">I want to join as a:</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole('volunteer')}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                    role === 'volunteer' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border bg-background hover:border-primary/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <UserCircle2 className="w-8 h-8 mb-2" />
                  <span className="font-semibold text-sm">Volunteer</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole('ngo')}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                    role === 'ngo' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border bg-background hover:border-primary/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Building2 className="w-8 h-8 mb-2" />
                  <span className="font-semibold text-sm">NGO</span>
                </button>
              </div>
            </div>

            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>



            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-2 mt-6 font-semibold text-primary-foreground bg-primary hover:opacity-90 rounded-lg transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>
          <br />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                OR
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleGoogleSignup}
            disabled={isLoading}
          >
            {isLoading ? 'Signing up...' : 'Sign Up with Google'}
          </button>
        </CardContent>
        <br />
        <CardFooter className="flex flex-col items-center space-y-4 pt-6">
          <p className="text-sm text-muted-foreground">
            Have an account?{' '}
            <a href="/login" className="text-primary hover:underline font-medium">
              Sign in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
