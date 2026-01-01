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
        icon: <Zap className="w-8 h-8 text-[#FBC02D]" />,
        questions: 93,
        time: '約10-15分',
        color: 'bg-[#FFF9C4] border-[#FBC02D] shadow-[#FBC02D]'
      },
      {
        id: '145',
        title: '専門版 (145題)',
        description: 'より詳細な質問により、性格の細かなニュアンスまで分析します。',
        icon: <Award className="w-8 h-8 text-[#039BE5]" />,
        questions: 145,
        time: '約20-25分',
        color: 'bg-[#E1F5FE] border-[#039BE5] shadow-[#039BE5]'
      },
      {
        id: '200',
        title: '完全版 (200題)',
        description: '最も包括的なテストです。あなたの性格を多角的に、深く掘り下げます。',
        icon: <Crown className="w-8 h-8 text-[#8E24AA]" />,
        questions: 200,
        time: '約30-40分',
        color: 'bg-[#F3E5F5] border-[#8E24AA] shadow-[#8E24AA]'
      }
    ];

    return (
      <div className="min-h-screen bg-[#F0F7F4] py-12 relative overflow-hidden font-sans">
        <DecorativeBackground />
        <Seo title="無料MBTI診断 - テスト選択" description="完全無料で基礎版、専門版、完全版の3つのレベルから選べるMBTI性格診断テスト。" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-white rounded-3xl mb-6 shadow-[0_6px_0_rgba(0,0,0,0.05)] border-2 border-gray-100">
              <Brain className="w-14 h-14 text-[#4FC3F7]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight drop-shadow-sm">無料MBTI性格診断テスト</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
              完全無料で自分自身をより深く知るための旅を始めましょう。あなたのライフスタイルや目的に合わせて、最適なテストを選択してください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {versions.map((v) => (
              <button
                key={v.id}
                onClick={() => startTest(v.id)}
                disabled={loading}
                className={`flex flex-col p-8 rounded-3xl border-2 transition-all duration-200 text-left group relative overflow-hidden ${v.color} ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1 active:translate-y-[4px] active:shadow-none shadow-[0_8px_0_rgba(0,0,0,0.2)]'}`}
              >
                <div className="mb-6 p-4 bg-white/80 rounded-2xl shadow-sm w-fit group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{v.title}</h3>
                <p className="text-gray-700 mb-8 flex-grow leading-relaxed font-medium">{v.description}</p>
                <div className="space-y-3 border-t border-black/5 pt-6">
                  <div className="flex items-center text-sm font-bold text-gray-700">
                    <Sparkles className="w-4 h-4 mr-3 text-gray-600" />
                    {v.questions} 質問
                  </div>
                  <div className="flex items-center text-sm font-bold text-gray-700">
                    <Target className="w-4 h-4 mr-3 text-gray-600" />
                    目安時間: {v.time}
                  </div>
                </div>
                {loading && selectedVersion === v.id && (
                  <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-blue-600"></div>
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="bg-[#E0F2F1] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border-2 border-[#B2DFDB] shadow-[0_8px_0_#B2DFDB]">
            <div className="p-5 bg-white rounded-2xl shadow-sm border-2 border-[#B2DFDB]">
              <Info className="w-10 h-10 text-[#009688]" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">どのテストを選べばいいですか？</h4>
              <p className="text-gray-700 font-medium leading-relaxed">
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
      <div className="min-h-screen bg-[#F0F7F4] py-12 relative overflow-hidden font-sans">
        <DecorativeBackground />
        <Seo title={`MBTI 診断結果 - ${showResult}`} description={`あなたのMBTIタイプは ${showResult} (${result.name}) です。`} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-[#E8F5E9] rounded-full mb-6 border-2 border-[#A5D6A7] shadow-[0_4px_0_#A5D6A7]">
              <CheckCircle className="w-12 h-12 text-[#43A047]" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">診断完了！</h1>
            <p className="text-xl text-gray-600 font-medium">あなたの性格タイプが特定されました</p>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-8 md:p-12 mb-10 border-2 border-gray-100 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-3 bg-gradient-to-r ${result.color}`}></div>
            <div className="text-center mb-12">
              <div className={`w-40 h-40 bg-gradient-to-br ${result.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_10px_20px_rgba(0,0,0,0.1)] transform rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white`}>
                <span className="text-5xl font-black text-white tracking-tighter drop-shadow-md">{showResult}</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{result.name}</h2>
              <div className="w-20 h-2 bg-gray-100 rounded-full mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">{result.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F0F7F4] rounded-3xl p-8 border-2 border-gray-100 hover:border-[#4FC3F7] transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 mr-3 text-[#4FC3F7]" />
                  次のステップ
                </h3>
                <div className="space-y-4">
                  <a 
                    href={`/type/${(showResult as string).toLowerCase()}`}
                    className="flex items-center justify-between p-5 bg-white rounded-2xl border-2 border-gray-200 shadow-[0_4px_0_#E0E0E0] hover:-translate-y-1 active:translate-y-[2px] active:shadow-none transition-all group"
                  >
                    <span className="font-bold text-gray-700">詳細な性格分析を見る</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#4FC3F7] group-hover:translate-x-1 transition-all" />
                  </a>
                  <a 
                    href="/compatibility"
                    className="flex items-center justify-between p-5 bg-white rounded-2xl border-2 border-gray-200 shadow-[0_4px_0_#E0E0E0] hover:-translate-y-1 active:translate-y-[2px] active:shadow-none transition-all group"
                  >
                    <span className="font-bold text-gray-700">相性の良いタイプを確認</span>
                    <Heart className="w-5 h-5 text-gray-400 group-hover:text-[#FF8A80] transition-all" />
                  </a>
                </div>
              </div>

              <div className="bg-[#F3E5F5] rounded-3xl p-8 border-2 border-gray-100 hover:border-[#AB47BC] transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-[#AB47BC]" />
                  シェア・保存
                </h3>
                <div className="space-y-4">
                  <button className="w-full p-5 bg-[#42A5F5] text-white font-bold rounded-2xl shadow-[0_4px_0_#1E88E5] border-2 border-[#1E88E5] hover:bg-[#64B5F6] active:shadow-none active:translate-y-[4px] transition-all">
                    Twitterでシェア
                  </button>
                  <button className="w-full p-5 bg-white text-gray-700 font-bold rounded-2xl border-2 border-gray-200 shadow-[0_4px_0_#E0E0E0] hover:bg-gray-50 active:shadow-none active:translate-y-[4px] transition-all">
                    結果を画像で保存
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={resetDiagnostic}
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-[#37474F] text-white font-bold rounded-2xl shadow-[0_6px_0_#263238] border-2 border-[#263238] hover:bg-[#455A64] active:shadow-none active:translate-y-[6px] transition-all"
            >
              <RotateCcw className="w-5 h-5" />
              <span>別のテストを受ける</span>
            </button>
            <a
              href="/"
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl border-2 border-gray-200 shadow-[0_6px_0_#E0E0E0] hover:bg-gray-50 active:shadow-none active:translate-y-[6px] transition-all"
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
    <div className="min-h-screen bg-[#F0F7F4] py-12 font-sans">
      <DecorativeBackground />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Seo 
          title={`無料MBTI診断 - ${selectedVersion}题版`}
          description="無料で質問に答えてあなたの性格タイプを診断中。"
        />
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-[#E1F5FE] rounded-2xl border-2 border-[#B3E5FC] shadow-[0_4px_0_#B3E5FC]">
              <Target className="w-8 h-8 text-[#039BE5]" />
            </div>
            <span className="ml-4 text-lg font-bold text-gray-500 bg-white px-4 py-2 rounded-xl border-2 border-gray-100 shadow-sm">
              {selectedVersion === '93' ? '基础版' : selectedVersion === '145' ? '专业版' : '完整版'}
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto bg-white p-4 rounded-2xl border-2 border-gray-100 shadow-sm">
            <div className="flex justify-between text-sm font-bold text-gray-500 mb-3">
              <span>進行状況</span>
              <span className="text-[#039BE5]">{currentQuestion + 1} / {questions.length}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-6 p-1 border-2 border-gray-200">
              <div 
                className="bg-[#4FC3F7] h-3 rounded-full transition-all duration-500 ease-out shadow-[0_2px_0_#0288D1]"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-[0_8px_0_rgba(0,0,0,0.05)] p-8 md:p-12 mb-8 border-2 border-gray-100 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#4FC3F7] text-white px-6 py-2 rounded-full font-bold shadow-[0_4px_0_#0288D1] border-2 border-[#0288D1]">
            Q{currentQuestion + 1}
          </div>
          
          <div className="mt-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center leading-tight">
              {questions[currentQuestion]?.questionName}
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion]?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.characterType)}
                  className="w-full p-6 text-left bg-[#F0F7F4] rounded-2xl border-2 border-gray-200 shadow-[0_4px_0_#E0E0E0] hover:bg-white hover:-translate-y-1 active:translate-y-[2px] active:shadow-none transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-700 group-hover:text-[#039BE5] transition-colors">
                      {option.answerName}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center group-hover:border-[#4FC3F7] group-hover:bg-[#E1F5FE] transition-all">
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#039BE5] transition-all" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <button
            onClick={goBack}
            disabled={currentQuestion === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-bold transition-all border-2 ${
              currentQuestion === 0 
                ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' 
                : 'bg-white text-gray-700 border-gray-200 shadow-[0_4px_0_#E0E0E0] hover:-translate-y-1 active:translate-y-[2px] active:shadow-none'
            }`}
          >
            <span>前の質問</span>
          </button>
          
          <button
            onClick={resetDiagnostic}
            className="flex items-center space-x-2 px-6 py-3 text-gray-500 hover:text-[#FF8A80] font-bold transition-colors bg-white rounded-2xl border-2 border-transparent hover:border-[#FFCDD2] hover:bg-[#FFEBEE]"
          >
            <RotateCcw className="w-4 h-4" />
            <span>テストを中断する</span>
          </button>
        </div>

        {/* Tips */}
        <div className="bg-[#37474F] rounded-3xl p-8 text-white relative overflow-hidden shadow-[0_8px_0_#263238] border-2 border-[#263238]">
          <Sparkles className="absolute top-4 right-4 w-12 h-12 text-white/10" />
          <h3 className="text-xl font-bold mb-4 flex items-center text-[#4FC3F7]">
            <Info className="w-6 h-6 mr-2" />
            診断のアドバイス
          </h3>
          <ul className="space-y-3 text-gray-300 font-medium">
            <li className="flex items-start">
              <span className="mr-2 text-[#4FC3F7]">•</span>
              直感に従い、あまり深く考えすぎずに回答してください。
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#4FC3F7]">•</span>
              「理想の自分」ではなく「ありのままの自分」で答えることが正確な診断のコツです。
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#4FC3F7]">•</span>
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
