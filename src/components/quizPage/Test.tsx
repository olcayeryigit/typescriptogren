"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { quizler } from "@/data/quiz";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowLeft, ArrowRight, Trophy, Home } from "lucide-react";

const Test = ({ quiz }) => {
    const router = useRouter();
    const [cevaplar, setCevaplar] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [bitis, setBitis] = useState(false);

    const toplamSoru = quiz.sorular.length;
    const soru = quiz.sorular[currentIndex];
    const kullaniciCevabi = cevaplar[soru.id];
    const dogruMu = kullaniciCevabi === soru.dogruCevap;

    const handleSecim = (soruId, secilenCevap) => {
        if (!cevaplar[soruId]) {
            setCevaplar((prev) => ({ ...prev, [soruId]: secilenCevap }));
        }
    };

    const sonrakiSoru = () => {
        if (currentIndex < toplamSoru - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setBitis(true);
        }
    };

    const oncekiSoru = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const dogruSayisi = useMemo(() => Object.keys(cevaplar).filter((key) => {
        const soru = quiz.sorular.find((s) => s.id === key);
        return soru && cevaplar[key] === soru.dogruCevap;
    }).length, [cevaplar, quiz.sorular]);

    const puan = dogruSayisi * 10;
    const currentIndexInQuizler = quizler.findIndex(q => q.slug === quiz.slug);
    const nextQuiz = quizler[currentIndexInQuizler + 1];

    if (bitis) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-center p-6">
                <div className="bg-white shadow-xl rounded-xl p-10 max-w-lg">
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                        <Trophy className="text-yellow-500" /> Quiz Tamamlandı!
                    </h1>
                    <p className="text-xl mt-4 text-gray-700">Doğru Cevaplar: <span className="text-green-600 font-bold">{dogruSayisi}</span></p>
                    <p className="text-xl">Puanınız: <span className="text-blue-600 font-bold">{puan}</span>/100</p>

                    <div className="mt-6 flex flex-col gap-4">
                        {nextQuiz && (
                            <button
                                onClick={() => router.push(`/quiz/${nextQuiz.slug}`)}
                                className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition flex items-center gap-2"
                            >
                                Sonraki Quiz: {nextQuiz.title} <ArrowRight />
                            </button>
                        )}
                        <Link href="/quiz">
                            <span className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-600 transition flex items-center gap-2">
                                <Home /> Tüm Quizlere Geri Dön
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 max-w-2xl">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">{quiz.title}</h1>

            <div className="bg-white p-6 shadow-lg rounded-xl border-2 border-custom-gray">
                <p className="font-semibold text-lg text-gray-800">{soru.soru}</p>
                <ul className="mt-4 space-y-3">
                    {soru.secenekler.map((secenek, index) => {
                        const isSecilen = kullaniciCevabi === secenek;
                        return (
                            <li
                                key={index}
                                className={`border p-3 rounded-lg cursor-pointer transition flex items-center justify-between 
                                ${isSecilen ? (dogruMu ? "bg-green-400 text-white" : "bg-red-400 text-white") : "bg-gray-100"}`}
                                onClick={() => handleSecim(soru.id, secenek)}
                            >
                                {secenek} {isSecilen && (dogruMu ? <CheckCircle className="ml-2" /> : <XCircle className="ml-2" />)}
                            </li>
                        );
                    })}
                </ul>

                {kullaniciCevabi && (
                    <div className="mt-4">
                        {!dogruMu && (
                            <p className="text-green-500 font-semibold">Doğru Cevap: {soru.dogruCevap}</p>
                        )}
                        <p className="mt-2 text-gray-700">{soru.cozumAciklamasi}</p>
                    </div>
                )}
            </div>

            <div className="flex justify-between mt-6">
                <button
                    onClick={oncekiSoru}
                    disabled={currentIndex === 0}
                    className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 transition disabled:opacity-50 flex items-center gap-2"
                >
                    <ArrowLeft /> Önceki
                </button>
                <button
                    onClick={sonrakiSoru}
                    disabled={!kullaniciCevabi}
                    className="px-6 py-3 bg-custom-blue text-white rounded-lg shadow-md hover:bg-custom-blue transition disabled:opacity-50 flex items-center gap-2"
                >
                    {currentIndex === toplamSoru - 1 ? "Quiz'i Bitir" : "Sonraki"} <ArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Test;
