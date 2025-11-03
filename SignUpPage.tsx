
import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SignUpForm } from '@/features/auth/components/SignUpForm';

export function SignUpPage() {
  const [searchParams] = useSearchParams();
  const ref = searchParams.get('ref');

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-4xl font-bold text-primary">EXOTIC GAIN</CardTitle>
          <CardDescription className="text-lg">
            Join us and start your journey to prosperity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm referralCode={ref || undefined} />
        </CardContent>
      </Card>
    </div>
  );
}
