import { useState } from 'react';
import { Target, ArrowRight, RotateCcw, Heart, CheckCircle, Zap, Award, Crown, Brain, Sparkles, Info } from 'lucide-react';
import Seo from '../components/Seo';
import { typeDescriptions, TypeDesc } from '../data/diagnostics';
import { GetStaticProps } from 'next';

// New Question Type from JSON
type MbtiOption = {
  answerName: string;
  answerCode: string;
  characterType: string;
};

type MbtiQuestion = {
  questionName: string;
  questionAttribute: string;
  questionDescription: string;
  options: MbtiOption[];
};

type Props = {
  typeDescriptions: Record<string, TypeDesc>;
};

const Diagnostics = ({ typeDescriptions }: Props) => {
  const [testMode, setTestMode] = useState<'selection' | 'testing' | 'result'>('selection');
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);
  const [questions, setQuestions] = useState<MbtiQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState<string | false>(false);
  const [loading, setLoading] = useState(false);

  const startTest = async (version: string) => {
    setLoading(true);
    setSelectedVersion(version);
    try {
      const response = await fetch(`/question/${version}_jp.json`);
      const data = await response.json();
      setQuestions(data);
      setTestMode('testing');
      setCurrentQuestion(0);
      setAnswers({});
    } catch (error) {
      console.error("Failed to load questions:", error);
      alert("質問の読み込みに失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (charType: string) => {
    const newAnswers = { ...answers, [currentQuestion]: charType };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (allAnswers: Record<number, string>) => {
    const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 } as Record<string, number>;

    Object.values(allAnswers).forEach((charType) => {
      if (counts[charType] !== undefined) {
        counts[charType]++;
      }
    });

    const type =
      (counts.E >= counts.I ? 'E' : 'I') +
      (counts.S >= counts.N ? 'S' : 'N') +
      (counts.T >= counts.F ? 'T' : 'F') +
      (counts.J >= counts.P ? 'J' : 'P');
    
    setShowResult(type);
    setTestMode('result');
  };

  const resetDiagnostic = () => {
    setTestMode('selection');
    setSelectedVersion(null);
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

  // Decorative SVG Components
  const DecorativeBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <svg className="absolute top-0 left-0 w-64 h-64 text-blue-50 opacity-50 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="100" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-96 h-96 text-purple-50 opacity-50 transform translate-x-1/3 translate-y-1/3" fill="currentColor" viewBox="0 0 200 200">
        <rect width="200" height="200" rx="40" transform="rotate(15)" />
      </svg>
      <svg className="absolute top-1/2 right-0 w-32 h-32 text-yellow-50 opacity-40 transform translate-x-1/2" fill="currentColor" viewBox="0 0 200 200">
        <path d="M100 0 L120 80 L200 100 L120 120 L100 200 L80 120 L0 100 L80 80 Z" />
      </svg>
    </div>
  );

  if (testMode === 'selection') {
    const versions = [
      {
        id: '93',
        title: '基礎版 (93題)',
        description: 'MBTIの基本を網羅した標準的なテストです。自己理解の第一歩に最適です。',
        icon: <Zap className="w-8 h-8 text-yellow-500" />,
        questions: 93,
        time: '約10-15分',
        color: 'border-yellow-200 hover:border-yellow-400 bg-yellow-50/30'
      },
      {
        id: '145',
        title: '専門版 (145題)',
        description: 'より詳細な質問により、性格の細かなニュアンスまで分析します。',
        icon: <Award className="w-8 h-8 text-blue-500" />,
        questions: 145,
        time: '約20-25分',
        color: 'border-blue-200 hover:border-blue-400 bg-blue-50/30'
      },
      {
        id: '200',
        title: '完全版 (200題)',
        description: '最も包括的なテストです。あなたの性格を多角的に、深く掘り下げます。',
        icon: <Crown className="w-8 h-8 text-purple-500" />,
        questions: 200,
        time: '約30-40分',
        color: 'border-purple-200 hover:border-purple-400 bg-purple-50/30'
      }
    ];

    return (
      <div className="min-h-screen bg-white py-12 relative overflow-hidden">
        <DecorativeBackground />
        <Seo title="無料MBTI診断 - テスト選択" description="完全無料で基礎版、専門版、完全版の3つのレベルから選べるMBTI性格診断テスト。" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-6">
              <Brain className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">無料MBTI性格診断テスト</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              完全無料で自分自身をより深く知るための旅を始めましょう。あなたのライフスタイルや目的に合わせて、最適なテストを選択してください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {versions.map((v) => (
              <button
                key={v.id}
                onClick={() => startTest(v.id)}
                disabled={loading}
                className={`flex flex-col p-8 rounded-3xl border-2 transition-all duration-500 text-left group relative overflow-hidden ${v.color} ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-2xl hover:-translate-y-2'}`}
              >
                <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm w-fit group-hover:scale-110 transition-transform duration-500">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{v.description}</p>
                <div className="space-y-3 border-t border-gray-100 pt-6">
                  <div className="flex items-center text-sm font-medium text-gray-700">
                    <Sparkles className="w-4 h-4 mr-3 text-blue-500" />
                    {v.questions} 質問
                  </div>
                  <div className="flex items-center text-sm font-medium text-gray-700">
                    <Target className="w-4 h-4 mr-3 text-green-500" />
                    目安時間: {v.time}
                  </div>
                </div>
                {loading && selectedVersion === v.id && (
                  <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="bg-blue-50 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <Info className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">どのテストを選べばいいですか？</h4>
              <p className="text-gray-600">
                初めての方は「基礎版」をお勧めします。より正確な結果を求める場合や、過去に診断を受けたことがある方は「専門版」や「完全版」に挑戦してみてください。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (testMode === 'result' && showResult) {
    const result = typeDescriptions[showResult as string];
    return (
      <div className="min-h-screen bg-white py-12 relative overflow-hidden">
        <DecorativeBackground />
        <Seo title={`MBTI 診断結果 - ${showResult}`} description={`あなたのMBTIタイプは ${showResult} (${result.name}) です。`} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">診断完了！</h1>
            <p className="text-xl text-gray-600">あなたの性格タイプが特定されました</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-gray-100 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${result.color}`}></div>
            <div className="text-center mb-12">
              <div className={`w-40 h-40 bg-gradient-to-br ${result.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500`}>
                <span className="text-5xl font-black text-white tracking-tighter">{showResult}</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{result.name}</h2>
              <div className="w-20 h-1 bg-gray-200 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">{result.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-blue-500" />
                  次のステップ
                </h3>
                <div className="space-y-4">
                  <a 
                    href={`/type/${(showResult as string).toLowerCase()}`}
                    className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <span className="font-medium text-gray-700">詳細な性格分析を見る</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </a>
                  <a 
                    href="/compatibility"
                    className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <span className="font-medium text-gray-700">相性の良いタイプを確認</span>
                    <Heart className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-all" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-purple-50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-purple-500" />
                  シェア・保存
                </h3>
                <div className="space-y-4">
                  <button className="w-full p-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 hover:shadow-lg transition-all transform hover:-translate-y-1">
                    Twitterでシェア
                  </button>
                  <button className="w-full p-4 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all">
                    結果を画像で保存
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetDiagnostic}
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <RotateCcw className="w-5 h-5" />
              <span>別のテストを受ける</span>
            </button>
            <a
              href="/"
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl border-2 border-gray-200 hover:bg-gray-50 transition-all"
            >
              <span>ホームに戻る</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Testing Mode
  return (
    <div className="min-h-screen bg-white py-12 relative overflow-hidden">
      <DecorativeBackground />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Seo 
          title={`無料MBTI診断 - ${selectedVersion}题版`}
          description="無料で質問に答えてあなたの性格タイプを診断中。"
        />
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Target className="w-8 h-8 text-blue-500" />
            </div>
            <span className="ml-4 text-lg font-bold text-gray-400">
              {selectedVersion === '93' ? '基础版' : selectedVersion === '145' ? '专业版' : '完整版'}
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between text-sm font-bold text-gray-500 mb-3">
              <span>進行状況</span>
              <span className="text-blue-600">{currentQuestion + 1} / {questions.length}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-4 p-1 shadow-inner">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-gray-50 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">
            Q{currentQuestion + 1}
          </div>
          
          <div className="mt-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center leading-tight">
              {questions[currentQuestion]?.questionName}
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion]?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.characterType)}
                  className="w-full p-6 text-left bg-gray-50 rounded-2xl hover:bg-blue-600 hover:text-white border-2 border-transparent transition-all duration-300 group shadow-sm hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">
                      {option.answerName}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-all group-hover:translate-x-1" />
                    </div>
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
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all ${
              currentQuestion === 0 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50'
            }`}
          >
            <span>前の質問</span>
          </button>
          
          <button
            onClick={resetDiagnostic}
            className="flex items-center space-x-2 px-6 py-3 text-gray-400 hover:text-red-500 font-medium transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>テストを中断する</span>
          </button>
        </div>

        {/* Tips */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">
          <Sparkles className="absolute top-4 right-4 w-12 h-12 text-white/10" />
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Info className="w-5 h-5 mr-2 text-blue-400" />
            診断のアドバイス
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="mr-2 text-blue-400">•</span>
              直感に従い、あまり深く考えすぎずに回答してください。
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-400">•</span>
              「理想の自分」ではなく「ありのままの自分」で答えることが正確な診断のコツです。
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-400">•</span>
              中立的な回答は避け、どちらかと言えば当てはまる方を選んでください。
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      typeDescriptions,
    },
  };
};

export default Diagnostics;
