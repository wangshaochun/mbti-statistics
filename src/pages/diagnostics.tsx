import { useState } from 'react';
import { Target, ArrowRight, RotateCcw, Heart, CheckCircle } from 'lucide-react';
import Seo from '../components/Seo';
import { questions, typeDescriptions, Question, TypeDesc } from '../data/diagnostics';
import { GetStaticProps } from 'next';

type Props = {
  questions: Question[];
  typeDescriptions: Record<string, TypeDesc>;
};

const Diagnostics = ({ questions, typeDescriptions }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState<string | false>(false);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (allAnswers: Record<number, string>) => {
    // 初期化
    const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 } as Record<string, number>;

    // 各質問の採点規則（Y=はい / N=いいえ）
    Object.entries(allAnswers).forEach(([qIdStr, ans]) => {
      const q = Number(qIdStr);
      const yes = ans === 'Y';
      switch (q) {
        // 1. E vs I
        case 0: // 問題1
        case 4: // 問題5
          if (yes) counts.E++; else counts.I++; break;
        case 10: // 問題11: はい=I, いいえ=E
          if (yes) counts.I++; else counts.E++; break;

        // 2. S vs N
        case 2: // 問題3
        case 5: // 問題6
        case 8: // 問題9
        case 11: // 問題12
          if (yes) counts.S++; else counts.N++; break;

        // 3. T vs F
        case 3: // 問題4 (はい=F)
        case 9: // 問題10 (はい=F)
        case 14: // 問題15 (はい=F)
          if (yes) counts.F++; else counts.T++; break;
        case 15: // 問題16 (はい=T)
          if (yes) counts.T++; else counts.F++; break;

        // 4. J vs P
        case 1: // 問題2 (はい=J)
          if (yes) counts.J++; else counts.P++; break;
        case 6: // 問題7 (はい=P)
        case 7: // 問題8 (はい=P)
        case 12: // 問題13 (はい=P)
        case 13: // 問題14 (はい=P)
          if (yes) counts.P++; else counts.J++; break;
        default:
          break;
      }
    });

    const type =
      (counts.E > counts.I ? 'E' : 'I') +
      (counts.S > counts.N ? 'S' : 'N') +
      (counts.T > counts.F ? 'T' : 'F') +
      (counts.J > counts.P ? 'J' : 'P');
    setShowResult(type);
  };

  const resetDiagnostic = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      const newAnswers = { ...answers };
      delete newAnswers[currentQuestion];
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (showResult) {
    const result = typeDescriptions[showResult as string];
    return (
      <div className="min-h-screen bg-white py-12">
  <Seo title="MBTI 診断結果 - あなたのタイプ" description="無料の簡易MBTI診断であなたのタイプを判定。診断結果からタイプ別の特徴や相性、適した職業を確認できます。" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-500" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">診断結果</h1>
            <p className="text-xl text-gray-600">あなたのMBTIタイプが判明しました！</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className={`w-32 h-32 bg-gradient-to-br ${result.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <span className="text-3xl font-bold text-white">{showResult}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{result.name}</h2>
              <p className="text-xl text-gray-600">{result.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">次のステップ</h3>
                <div className="space-y-3">
                  <a 
                    href={`/type/${(showResult as string).toLowerCase()}`}
                    className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <span>詳細な性格分析を見る</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a 
                    href="/compatibility"
                    className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <span>相性の良いタイプを確認</span>
                    <Heart className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">シェア・保存</h3>
                <div className="space-y-3">
                  <button className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    結果をTwitterでシェア
                  </button>
                  <button className="w-full p-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    結果をPDFで保存
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetDiagnostic}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              <span>もう一度診断する</span>
            </button>
            <a
              href="/"
              className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span>ホームに戻る</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO (no result yet) */}
        <Seo 
          title="MBTI診断ツール - 簡易テスト"
          description="16の簡易質問に答えてあなたのMBTI性格タイプを推定する無料診断ツール。結果から各タイプの特徴や相性、向いている分野を学べます。"
        />
        {/* Header */}
        <div className="text-center mb-12">
          <Target className="w-16 h-16 mx-auto mb-6 text-blue-500" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">MBTI診断ツール</h1>
          <p className="text-xl text-gray-600 mb-6">
            16のステートメントに「はい / いいえ」で答えてあなたの性格タイプを推定します
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>進行状況</span>
              <span>{currentQuestion + 1} / {questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {questions[currentQuestion].text}
            </h2>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full p-6 text-left bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-300 border-2 border-transparent transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-gray-700 group-hover:text-blue-700">
                      {option.text}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={goBack}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-lg transition-colors ${
              currentQuestion === 0 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            前の質問に戻る
          </button>
          
          <div className="text-sm text-gray-500">
            質問 {currentQuestion + 1} / {questions.length}
          </div>
          
          <button
            onClick={resetDiagnostic}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            リセット
          </button>
        </div>

        {/* Tips */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">診断のコツ</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>• 直感的に、最初に思い浮かんだ選択肢を選んでください</p>
            <p>• 「こうあるべき」ではなく「実際の自分」で答えてください</p>
            <p>• 迷った場合は、より頻繁に取る行動を選んでください</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Return the static data at build time
  return {
    props: {
      questions,
      typeDescriptions,
    },
  };
};

export default Diagnostics;