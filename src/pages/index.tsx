// React automatic JSX runtime is enabled; no default React import needed
import Link from 'next/link';
import { ArrowRight, Heart, Brain, BarChart3, Users, Sparkles, Target } from 'lucide-react';
import TypeGrid from '../components/TypeGrid';
import Seo from '../components/Seo';
import { OrganizationStructuredData, WebPageStructuredData } from '../components/StructuredData';
import CompatibilityPreview from '../components/CompatibilityPreview';
import BlogPreview from '../components/BlogPreview';

import type { BlogPostMeta } from '../lib/blog';

const HomePage = ({ latestPosts }: { latestPosts: BlogPostMeta[] }) => {
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
    <div className="min-h-screen bg-[#F0F7F4] font-sans">
      <Seo 
        title="MBTI 16タイプ一覧・相性診断 - 詳細分析と統計データ"
        description="MBTI 16タイプの詳細な特徴・相性・統計データを無料で提供。INFP、ENFP、INTJなど人気タイプの分析から、恋愛・仕事・友情の相性診断まで充実のコンテンツ。"
      />
      <OrganizationStructuredData
        name="MBTI相性診断ガイド"
        url="https://mbti-aisho.com"
        description="MBTI 16タイプの詳細な分析、相性診断、統計データを提供する総合ガイド"
      />
      <WebPageStructuredData
        name="MBTI 16タイプ一覧・相性診断"
        description="MBTI 16タイプの詳細な特徴・相性・統計データを無料で提供"
        url="https://mbti-aisho.com"
      />
      {/* Hero Section */}
      <section className="bg-[#F0F7F4] py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-[#4FC3F7] rounded-3xl flex items-center justify-center shadow-[0_8px_0_#0288D1] border-2 border-[#0288D1] transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 tracking-tight drop-shadow-sm">
              MBTI 一覧 & 相性
              <span className="block text-3xl lg:text-5xl text-[#7E57C2] mt-4 font-extrabold">
                16タイプ徹底ガイド
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              MBTI 16タイプの性格分析と相性診断を分かりやすく解説。
              <br className="hidden sm:block" />
              統計データとアニメキャラクター分析も充実。
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/diagnostics"
                className="px-8 py-4 bg-[#FF8A80] text-white font-bold rounded-2xl shadow-[0_6px_0_#D32F2F] border-2 border-[#D32F2F] hover:bg-[#FF5252] active:shadow-none active:translate-y-[6px] transition-all duration-200 flex items-center space-x-2 text-lg"
              >
                <Target className="w-6 h-6" />
                <span>無料診断を始める</span>
              </Link>
              <Link
                href="/compatibility"
                className="px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl shadow-[0_6px_0_#E0E0E0] border-2 border-gray-200 hover:bg-gray-50 active:shadow-none active:translate-y-[6px] transition-all duration-200 flex items-center space-x-2 text-lg"
              >
                <Heart className="w-6 h-6 text-[#FF8A80]" />
                <span>相性をチェック</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">主要機能</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              MBTI理論に基づく包括的な性格分析ツールを提供しています
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  href={feature.link}
                  className="bg-[#F0F7F4] rounded-3xl p-8 shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 hover:shadow-[0_12px_0_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 font-medium leading-relaxed">{feature.description}</p>
                  <div className="flex items-center text-[#4FC3F7] font-bold group-hover:text-[#0288D1] transition-colors">
                    <span>詳しく見る</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Types in Japan */}
      <section className="py-16 bg-[#F0F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">日本人に多いMBTIタイプ</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              統計データに基づく性格タイプ分布
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {popularTypes.map((type, index) => (
              <Link
                key={index}
                href={`/type/${type.type.toLowerCase()}`}
                className="bg-white rounded-3xl p-8 text-center shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-white hover:border-[#AED581] transition-all group"
              >
                <div className={`inline-block px-4 py-2 rounded-xl text-sm font-bold bg-[#E8F5E9] text-[#2E7D32] mb-4`}>
                  {type.type}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#AED581] transition-colors">{type.name}</h3>
                <div className="text-3xl font-extrabold text-[#AED581] drop-shadow-sm">{type.percentage}</div>
                <p className="text-sm text-gray-400 mt-2 font-bold">人口比</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/statistics"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-[#AED581] text-white font-bold rounded-2xl shadow-[0_6px_0_#689F38] border-2 border-[#689F38] hover:bg-[#9CCC65] active:shadow-none active:translate-y-[6px] transition-all"
            >
              <BarChart3 className="w-6 h-6" />
              <span>全統計データを見る</span>
            </Link>
          </div>
        </div>
      </section>

        {/* Type Grid Preview */}
        <section className="py-16 bg-white rounded-[3rem] my-8 mx-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">MBTI 16タイプ一覧</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                各タイプの特徴と相性を一目で確認できます。気になるタイプをクリックして詳細をチェック！
              </p>
            </div>
            
            <TypeGrid preview={true} />
            
            {/* Popular Type Cards with Internal Links */}
            <div className="mt-16 mb-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">注目のタイプ詳細</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="/type/infp" className="bg-[#F0F7F4] rounded-3xl p-8 shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 hover:shadow-[0_12px_0_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-8 bg-[#AED581] rounded-lg flex items-center justify-center mr-4 shadow-sm">
                      <span className="text-white text-sm font-bold">INFP</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-[#AED581] transition-colors">仲介者</h4>
                  </div>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed mb-4">詩的で親切な利他主義者。創造性と理想主義で知られる人気タイプ。</p>
                  <div className="text-[#AED581] text-sm font-bold flex items-center">詳細を見る <ArrowRight className="w-4 h-4 ml-1" /></div>
                </Link>
                
                <Link href="/type/enfp" className="bg-[#F0F7F4] rounded-3xl p-8 shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 hover:shadow-[0_12px_0_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-8 bg-[#4FC3F7] rounded-lg flex items-center justify-center mr-4 shadow-sm">
                      <span className="text-white text-sm font-bold">ENFP</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-[#4FC3F7] transition-colors">広報運動家</h4>
                  </div>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed mb-4">情熱的で創造的なアイデア触媒。人と可能性を結びつけるエネルギッシュなタイプ。</p>
                  <div className="text-[#4FC3F7] text-sm font-bold flex items-center">詳細を見る <ArrowRight className="w-4 h-4 ml-1" /></div>
                </Link>
                
                <Link href="/type/intj" className="bg-[#F0F7F4] rounded-3xl p-8 shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 hover:shadow-[0_12px_0_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-8 bg-[#7E57C2] rounded-lg flex items-center justify-center mr-4 shadow-sm">
                      <span className="text-white text-sm font-bold">INTJ</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-[#7E57C2] transition-colors">建築家</h4>
                  </div>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed mb-4">戦略的で洞察力のある独立志向の計画立案者。長期的ビジョンで知られる。</p>
                  <div className="text-[#7E57C2] text-sm font-bold flex items-center">詳細を見る <ArrowRight className="w-4 h-4 ml-1" /></div>
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link
                href="/types"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-[#7E57C2] text-white font-bold rounded-2xl shadow-[0_6px_0_#5E35B1] border-2 border-[#5E35B1] hover:bg-[#673AB7] active:shadow-none active:translate-y-[6px] transition-all"
              >
                <Brain className="w-6 h-6" />
                <span>全16タイプを詳しく見る</span>
              </Link>
            </div>
          </div>
        </section>      {/* Compatibility Preview */}
      <section className="py-16 bg-[#F0F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">相性診断プレビュー</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
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

      {/* Blog Preview */}
      <BlogPreview limit={3} showTitle={true} posts={latestPosts} />

      {/* CTA Section */}
      <section className="py-20 bg-[#FF8A80] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <Sparkles className="w-16 h-16 text-[#FFD54F] drop-shadow-md" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 drop-shadow-sm">
            あなたの性格タイプを発見しよう
          </h2>
          <p className="text-xl mb-10 text-white font-medium opacity-90">
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
  const { getAllBlogMetas } = await import('../lib/blog');
  const latestPosts = getAllBlogMetas().slice(0, 6);
  return { props: { latestPosts } };
}