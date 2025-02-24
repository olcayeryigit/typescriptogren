'use client';

import { quizler } from '@/data/quiz';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, XCircle, ArrowLeft, ArrowRight, List } from 'lucide-react';
import Link from 'next/link';

type TestProps = {
  quizName: string;
};

const Test: React.FC<TestProps> = ({ quizName }) => {
  const router = useRouter();
  const quizIndex = quizler.findIndex(q => q.slug === quizName);
  const quiz = quizler[quizIndex];

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [cevaplar, setCevaplar] = React.useState<{ [key: string]: string }>({});
  const [sonuclar, setSonuclar] = React.useState<{ [key: string]: boolean }>({});
  const [quizTamamlandi, setQuizTamamlandi] = React.useState(false);
  const [puan, setPuan] = React.useState(0);

  if (!quiz) {
    return <div className="p-6 bg-white container mx-auto text-center">Test bulunamadı.</div>;
  }

  const handleCevap = (soruId: string, secilenCevap: string) => {
    const dogruCevap = quiz.sorular.find(s => s.id === soruId)?.dogruCevap;
    const dogruMu = dogruCevap === secilenCevap;

    setCevaplar(prev => ({ ...prev, [soruId]: secilenCevap }));
    setSonuclar(prev => ({ ...prev, [soruId]: dogruMu }));
    if (dogruMu) setPuan(prev => prev + 10);
  };

  const ileri = () => {
    if (currentQuestionIndex < quiz.sorular.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizTamamlandi(true);
    }
  };

  const geri = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const sonrakiQuiz = () => {
    if (quizIndex < quizler.length - 1) {
      router.push(`/quiz/${quizler[quizIndex + 1].slug}`);
    }
  };

  if (quizTamamlandi) {
    return (
      <div className="p-6 bg-white container mx-auto text-center shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold">Quiz Tamamlandı!</h1>
        <p className="mt-4">Puanınız: <span className="font-bold text-green-600">{puan}</span></p>
        <div className="mt-4 flex flex-col gap-2">
          {quizIndex < quizler.length - 1 && (
            <button
              className="p-2 bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2"
              onClick={sonrakiQuiz}
            >
              Sonraki Quiz&apos;e Geç <ArrowRight />
            </button>
          )}
          <Link
            className="p-2 bg-gray-500 text-white rounded-lg flex items-center justify-center gap-2"
            href="/quiz"
          >
            Quiz Listesine Dön <List />
          </Link>
        </div>
      </div>
    );
  }

  const soru = quiz.sorular[currentQuestionIndex];

  return (
    <div className="max-w-xl p-4 mx-auto bg-white border-2 border-custom-gray rounded-sm">
      <h1 className="text-2xl font-bold mb-4 text-center">{quiz.title} Testi</h1>
      <p className="text-center mb-6">Puan: <span className="font-bold text-blue-500">{puan}</span></p>
      <div className="mb-4 p-4 border-2 rounded-sm border-custom-blue bg-gray-200">
        <p className="font-semibold">{soru.soru}</p>
        <div className="mt-2 flex flex-col gap-2">
          {soru.secenekler.map(secenek => {
            const isSelected = cevaplar[soru.id] === secenek;
            const isCorrect = soru.dogruCevap === secenek;
            const isWrong = isSelected && !sonuclar[soru.id];

            return (
              <button
                key={secenek}
                className={`p-2 rounded-sm flex items-center gap-2 transition-all 
                  ${
                    isSelected
                      ? sonuclar[soru.id]
                        ? 'bg-green-500 text-white' // Doğru işaretlenirse yeşil
                        : 'bg-red-500 text-white' // Yanlış işaretlenirse kırmızı
                      : isCorrect && cevaplar[soru.id]
                        ? 'bg-green-500 text-white' // Yanlış işaretlense bile doğru cevap yeşil
                        : 'bg-white'
                  }`}
                onClick={() => handleCevap(soru.id, secenek)}
                disabled={!!cevaplar[soru.id]}
              >
                {isSelected && (sonuclar[soru.id] ? <CheckCircle size={18} /> : <XCircle size={18} />)}
                {secenek}
              </button>
            );
          })}
        </div>
        {cevaplar[soru.id] && (
          <p className="mt-2 text-sm text-gray-700 italic">
            {sonuclar[soru.id] ? '✅ Doğru!' : `❌ Yanlış! Açıklama: ${soru.cozumAciklamasi}`}
          </p>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className={`p-2 text-white rounded-sm flex items-center gap-2 transition-all ${
            currentQuestionIndex === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-custom-blue'
          }`}
          onClick={geri}
          disabled={currentQuestionIndex === 0}
        >
          <ArrowLeft /> Geri
        </button>

        <Link
          className="mx-2 w-full p-2 bg-custom-gray text-white rounded-sm flex items-center justify-center gap-2"
          href="/quiz"
        >
          Quiz Listesine Dön <List />
        </Link>

        <button
          className={`p-2 text-white rounded-sm flex items-center gap-2 transition-all ${
            currentQuestionIndex < quiz.sorular.length - 1 ? 'bg-custom-blue' : 'bg-green-500'
          }`}
          onClick={ileri}
        >
          {currentQuestionIndex < quiz.sorular.length - 1 ? 'İleri' : 'Bitir'} <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Test;
