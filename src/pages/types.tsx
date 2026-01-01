// React automatic JSX runtime is enabled; import React for types
import React from 'react';
import Link from 'next/link';
import TypeGrid from '../components/TypeGrid';
import { Brain, Users, Lightbulb, Heart, LucideProps } from 'lucide-react';
type Category = {
  name: string;
  description: string;
  types: string[];
  color: string;
  iconName?: string;
}
import Seo from '../components/Seo';

const TypesOverview = ({ categories }:{ categories:Category[] }) => {

  return (
    <div className="min-h-screen bg-[#F0F7F4] py-12 font-sans">
      <Seo title="MBTI 16タイプ一覧 - 各タイプの特徴と詳細分析" description="MBTI 16タイプの詳細な特徴、強み・弱み、職業適性を分かりやすく解説。INFP、ENFP、INTJ、ISFJなど人気タイプの分析から、4つのカテゴリー（アナリスト・外交官・番人・探検家）まで網羅。" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div id="types-overview" className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
            MBTI 16タイプ一覧
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Myers-Briggs Type Indicatorに基づく16の性格タイプを詳しく解説。
            <br className="hidden sm:block" />
            あなたの性格タイプを理解し、強みを活かしましょう。
          </p>
        </div>

        {/* Categories Overview */}
        <div id="categories" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <Users className="w-6 h-6 mr-2 text-[#4FC3F7]" />
            4つのカテゴリー
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const iconMap: Record<string, React.ComponentType<LucideProps>> = {
                Brain,
                Users,
                Lightbulb,
                Heart
              };
              const Icon = category.iconName ? iconMap[category.iconName] ?? null : null;
              return (
                <div key={index} className="bg-white rounded-3xl shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 p-6 hover:-translate-y-1 transition-transform duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4 shadow-md`}>
                    {Icon ? <Icon className="w-6 h-6 text-white" /> : null}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed font-medium">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.types.map((type: string) => (
                      <Link 
                        key={type}
                        href={`/type/${type.toLowerCase()}`}
                        className="px-3 py-1 bg-[#F0F7F4] text-gray-700 text-xs rounded-lg font-bold border-2 border-gray-200 hover:bg-white hover:border-[#4FC3F7] hover:text-[#0277BD] transition-all"
                      >
                        {type}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MBTI Basics */}
        <div className="bg-white rounded-3xl shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 p-8 md:p-10 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <Brain className="w-6 h-6 mr-2 text-[#7E57C2]" />
            MBTIとは？
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-2 h-8 bg-[#7E57C2] rounded-full mr-3"></div>
                4つの心理的傾向
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-[#F0F7F4] rounded-2xl border-2 border-gray-100">
                  <div className="w-10 h-10 bg-[#42A5F5] rounded-xl flex items-center justify-center text-white font-black text-sm shadow-[0_4px_0_#1E88E5]">E/I</div>
                  <div>
                    <div className="font-bold text-gray-800">外向性 (E) vs 内向性 (I)</div>
                    <div className="text-gray-500 text-sm font-medium">エネルギーの向く方向</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-[#F0F7F4] rounded-2xl border-2 border-gray-100">
                  <div className="w-10 h-10 bg-[#66BB6A] rounded-xl flex items-center justify-center text-white font-black text-sm shadow-[0_4px_0_#388E3C]">S/N</div>
                  <div>
                    <div className="font-bold text-gray-800">感覚 (S) vs 直観 (N)</div>
                    <div className="text-gray-500 text-sm font-medium">情報収集の方法</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-[#F0F7F4] rounded-2xl border-2 border-gray-100">
                  <div className="w-10 h-10 bg-[#AB47BC] rounded-xl flex items-center justify-center text-white font-black text-sm shadow-[0_4px_0_#7B1FA2]">T/F</div>
                  <div>
                    <div className="font-bold text-gray-800">思考 (T) vs 感情 (F)</div>
                    <div className="text-gray-500 text-sm font-medium">判断の基準</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-[#F0F7F4] rounded-2xl border-2 border-gray-100">
                  <div className="w-10 h-10 bg-[#FFA726] rounded-xl flex items-center justify-center text-white font-black text-sm shadow-[0_4px_0_#F57C00]">J/P</div>
                  <div>
                    <div className="font-bold text-gray-800">判断 (J) vs 知覚 (P)</div>
                    <div className="text-gray-500 text-sm font-medium">外界への態度</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-2 h-8 bg-[#FF8A80] rounded-full mr-3"></div>
                MBTIの活用法
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 p-3 bg-[#FFF3E0] rounded-xl border-2 border-[#FFE0B2]">
                  <div className="w-3 h-3 bg-[#42A5F5] rounded-full shadow-sm"></div>
                  <span className="font-bold text-gray-700">自己理解と自己成長</span>
                </li>
                <li className="flex items-center space-x-3 p-3 bg-[#E8F5E9] rounded-xl border-2 border-[#C8E6C9]">
                  <div className="w-3 h-3 bg-[#66BB6A] rounded-full shadow-sm"></div>
                  <span className="font-bold text-gray-700">人間関係の改善</span>
                </li>
                <li className="flex items-center space-x-3 p-3 bg-[#F3E5F5] rounded-xl border-2 border-[#E1BEE7]">
                  <div className="w-3 h-3 bg-[#AB47BC] rounded-full shadow-sm"></div>
                  <span className="font-bold text-gray-700">チームワークの向上</span>
                </li>
                <li className="flex items-center space-x-3 p-3 bg-[#FFF8E1] rounded-xl border-2 border-[#FFECB3]">
                  <div className="w-3 h-3 bg-[#FFA726] rounded-full shadow-sm"></div>
                  <span className="font-bold text-gray-700">キャリア選択の指針</span>
                </li>
                <li className="flex items-center space-x-3 p-3 bg-[#FFEBEE] rounded-xl border-2 border-[#FFCDD2]">
                  <div className="w-3 h-3 bg-[#EF5350] rounded-full shadow-sm"></div>
                  <span className="font-bold text-gray-700">コミュニケーション改善</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* All Types Grid */}
        <div id="all-types" className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">全16タイプ詳細</h2>
          <p className="text-lg text-gray-600 font-medium">各タイプをクリックして詳細な特徴と相性を確認できます</p>
        </div>
        
        <TypeGrid />

        {/* Call to Action */}
        <div className="text-center mt-16 mb-16">
          <div className="bg-[#4FC3F7] rounded-3xl p-10 text-white shadow-[0_8px_0_#0288D1] border-2 border-[#0288D1] relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4 tracking-tight">あなたのMBTIタイプを見つけましょう</h3>
              <p className="text-white/90 mb-8 text-lg font-bold">無料診断であなたの性格タイプを詳しく分析します</p>
              <a
                href="/diagnostics"
                className="inline-block px-10 py-4 bg-white text-[#0277BD] font-black rounded-2xl shadow-[0_6px_0_#B3E5FC] border-2 border-[#B3E5FC] hover:bg-gray-50 active:shadow-none active:translate-y-[6px] transition-all text-lg"
              >
                診断を始める
              </a>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12"></div>
          </div>
        </div>

        {/* Related Type Recommendations */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <Heart className="w-6 h-6 mr-2 text-[#FF8A80]" />
            人気のタイプ詳細
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/type/infp" className="bg-white rounded-3xl shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 p-6 hover:border-[#4FC3F7] hover:-translate-y-1 transition-all group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-8 bg-[#66BB6A] rounded-lg flex items-center justify-center mr-3 shadow-sm">
                  <span className="text-white text-sm font-black">INFP</span>
                </div>
                <div className="text-[#43A047] text-sm font-bold">16.44%</div>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#039BE5] transition-colors">仲介者</h4>
              <p className="text-gray-600 text-sm font-medium">詩的で親切な利他主義者。創造性と理想主義で日本で最も多いタイプ。</p>
            </Link>
            
            <Link href="/type/enfp" className="bg-white rounded-3xl shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 p-6 hover:border-[#4FC3F7] hover:-translate-y-1 transition-all group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-8 bg-[#42A5F5] rounded-lg flex items-center justify-center mr-3 shadow-sm">
                  <span className="text-white text-sm font-black">ENFP</span>
                </div>
                <div className="text-[#1E88E5] text-sm font-bold">13.79%</div>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#039BE5] transition-colors">広報運動家</h4>
              <p className="text-gray-600 text-sm font-medium">情熱的で創造的なアイデア触媒。エネルギッシュで人を惹きつける魅力的なタイプ。</p>
            </Link>
            
            <Link href="/type/intj" className="bg-white rounded-3xl shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 p-6 hover:border-[#4FC3F7] hover:-translate-y-1 transition-all group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-8 bg-[#AB47BC] rounded-lg flex items-center justify-center mr-3 shadow-sm">
                  <span className="text-white text-sm font-black">INTJ</span>
                </div>
                <div className="text-[#8E24AA] text-sm font-bold">3.69%</div>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#039BE5] transition-colors">建築家</h4>
              <p className="text-gray-600 text-sm font-medium">戦略的で洞察力のある独立志向の計画立案者。希少な理想的リーダータイプ。</p>
            </Link>
            
            <Link href="/type/isfj" className="bg-white rounded-3xl shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 p-6 hover:border-[#4FC3F7] hover:-translate-y-1 transition-all group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-8 bg-[#FFA726] rounded-lg flex items-center justify-center mr-3 shadow-sm">
                  <span className="text-white text-sm font-black">ISFJ</span>
                </div>
                <div className="text-[#FB8C00] text-sm font-bold">6.81%</div>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#039BE5] transition-colors">擁護者</h4>
              <p className="text-gray-600 text-sm font-medium">思いやりと実務力を兼ね備えた支援型の守り手。安定した人間関係を築くプロ。</p>
            </Link>
            
            <Link href="/type/enfj" className="bg-white rounded-3xl shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 p-6 hover:border-[#4FC3F7] hover:-translate-y-1 transition-all group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-8 bg-[#26A69A] rounded-lg flex items-center justify-center mr-3 shadow-sm">
                  <span className="text-white text-sm font-black">ENFJ</span>
                </div>
                <div className="text-[#00897B] text-sm font-bold">5.59%</div>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#039BE5] transition-colors">主人公</h4>
              <p className="text-gray-600 text-sm font-medium">カリスマ性があり魅力的なリーダー。人を励まし導く天性のコーチタイプ。</p>
            </Link>
            
            <Link href="/type/intp" className="bg-white rounded-3xl shadow-[0_8px_0_rgba(0,0,0,0.05)] border-2 border-gray-100 p-6 hover:border-[#4FC3F7] hover:-translate-y-1 transition-all group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-8 bg-[#5C6BC0] rounded-lg flex items-center justify-center mr-3 shadow-sm">
                  <span className="text-white text-sm font-black">INTP</span>
                </div>
                <div className="text-[#3949AB] text-sm font-bold">7.19%</div>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#039BE5] transition-colors">論理学者</h4>
              <p className="text-gray-600 text-sm font-medium">概念的探究と原理理解を好む理論構築者。革新的なアイデアの源泉。</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesOverview;

export async function getStaticProps() {
  const categories = [
    {
      name: 'アナリスト (NT)',
      description: '理論的で独立心が強く、能力と知識を重視',
      types: ['INTJ', 'INTP', 'ENTJ', 'ENTP'],
      color: 'from-purple-500 to-indigo-600',
      iconName: 'Brain'
    },
    {
      name: '外交官 (NF)',  
      description: '共感的で協力的、可能性と人間らしさを重視',
      types: ['INFJ', 'INFP', 'ENFJ', 'ENFP'],
      color: 'from-green-500 to-emerald-600',
      iconName: 'Heart'
    },
    {
      name: '番人 (SJ)',
      description: '協力的で実用的、秩序と安定を重視',
      types: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'],
      color: 'from-blue-500 to-cyan-600', 
      iconName: 'Users'
    },
    {
      name: '探検家 (SP)',
      description: '実用的で適応性があり、柔軟性と行動を重視',
      types: ['ISTP', 'ISFP', 'ESTP', 'ESFP'],
      color: 'from-orange-500 to-red-600',
      iconName: 'Lightbulb'
    }
  ];

  return {
    props: {
      categories
    }
  };
}