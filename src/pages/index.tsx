// React automatic JSX runtime is enabled; no default React import needed
import Link from 'next/link';
import { ArrowRight, Heart, Brain, BarChart3, Users, Sparkles, Target } from 'lucide-react';
import TypeGrid from '../components/TypeGrid';
import Seo from '../components/Seo';
import CompatibilityPreview from '../components/CompatibilityPreview';

const HomePage = () => {
  const keyFeatures = [
    {
      icon: Brain,
      title: 'MBTI 16タイプ一覧',
      description: '全16タイプの特徴、強み、弱みを詳しく解説。あなたの性格タイプを深く理解できます。',
      link: '/types',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: '相性診断・分析',
      description: 'タイプ別の恋愛・友情・仕事での相性を詳細分析。理想のパートナーを見つけましょう。',
      link: '/compatibility',
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: BarChart3,
      title: '割合統計',
      description: '日本人に多いMBTIタイプのランキングと統計データを最新情報で提供。',
      link: '/statistics',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'キャラクター分析',
      description: 'アニメ・漫画の人気キャラクターのMBTI分析。推しキャラの性格を深掘り。',
      link: '/characters',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const popularTypes = [
    { type: 'INFP', name: '仲介者', percentage: '16.44%', color: 'bg-green-100 text-green-800' },
    { type: 'ENFP', name: '広報運動家', percentage: '13.79%', color: 'bg-green-200 text-green-800' },
    { type: 'INTP', name: '論理学者', percentage: '7.19%', color: 'bg-purple-100 text-purple-800' },
    { type: 'ISFJ', name: '擁護者', percentage: '6.81%', color: 'bg-blue-100 text-blue-800' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo 
        title="MBTI 一覧・相性 - 統計と16タイプの解説"
        description="MBTI 16タイプの特徴・相性・統計データをわかりやすく解説。無料診断や性格タイプ別の仕事・恋愛傾向も確認できます。"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              MBTI 一覧 & 相性
              <span className="block text-3xl lg:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                16タイプ徹底ガイド
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              MBTI 16タイプの性格分析と相性診断を分かりやすく解説。
              <br className="hidden sm:block" />
              統計データとアニメキャラクター分析も充実。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/diagnostics"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <Target className="w-5 h-5" />
                <span>無料診断を始める</span>
              </Link>
              <Link
                href="/compatibility"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>相性をチェック</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">主要機能</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              MBTI理論に基づく包括的な性格分析ツールを提供しています
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  href={feature.link}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    <span>詳しく見る</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Types in Japan */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">日本人に多いMBTIタイプ</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              統計データに基づく性格タイプ分布
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {popularTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${type.color} mb-3`}>
                  {type.type}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.name}</h3>
                <div className="text-2xl font-bold text-blue-600">{type.percentage}</div>
                <p className="text-sm text-gray-500 mt-1">人口比</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/statistics"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <BarChart3 className="w-5 h-5" />
              <span>全統計データを見る</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Type Grid Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">MBTI 16タイプ一覧</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              各タイプの特徴と相性を一目で確認できます
            </p>
          </div>
          
          <TypeGrid preview={true} />
          
          <div className="text-center mt-8">
            <Link
              href="/types"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Brain className="w-5 h-5" />
              <span>全タイプを詳しく見る</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Compatibility Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">相性診断プレビュー</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              16タイプの相性マトリックスで理想のパートナーを見つけましょう
            </p>
          </div>
          
          <CompatibilityPreview />
          
          {/* <div className="text-center mt-8">
            <Link
              to="/compatibility"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700 transition-colors"
            >
              <Heart className="w-5 h-5" />
              <span>相性診断を始める</span>
            </Link>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-yellow-300" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            あなたの性格タイプを発見しよう
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            無料診断で自分の性格を深く理解し、理想の人間関係を築きましょう
          </p>
          {/* <Link
            to="/diagnostics"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <Target className="w-5 h-5" />
            <span>今すぐ診断を始める</span>
          </Link> */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

// 显式导出以确保 Next.js 使用静态生成（即使内容全是静态）
export async function getStaticProps() {
  return { props: {} };
}