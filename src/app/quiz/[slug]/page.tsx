import TestPage from '@/components/quiz/TestPage';
import { Metadata } from 'next';
import * as React from 'react';

type PageProps = {
  params: Promise<{ slug: string }>;  // Slug parametresi Promise olarak alınıyor
};

export const metadata: Metadata = {
  title: 'TypeScript Quiz - Test | My Website',  // Sabit başlık
  description: 'TypeScript konularını öğrenirken, bilginizi pekiştirmenize ve geliştirmenize yardımcı olacak zorlu ve etkileşimli quizler. Her quiz, teorik bilgilerinizi pratikte uygulamanız için fırsatlar sunar.',
};

const Page = ({ params }: PageProps) => {
  return (
    <div className="container mx-auto p-6">
      <TestPage params={params} />
    </div>
  );
};

export default Page;
