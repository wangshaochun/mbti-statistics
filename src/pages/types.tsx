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
    <div className="min-h-screen bg-white py-12">
      <Seo title="MBTI 16タイプ一覧 - 各タイプの特徴と詳細分析" description="MBTI 16タイプの詳細な特徴、強み・弱み、職業適性を分かりやすく解説。INFP、ENFP、INTJ、ISFJなど人気タイプの分析から、4つのカテゴリー（アナリスト・外交官・番人・探検家）まで網羅。" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div id="types-overview" className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            MBTI 16タイプ一覧
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Myers-Briggs Type Indicatorに基づく16の性格タイプを詳しく解説。
            <br className="hidden sm:block" />
            あなたの性格タイプを理解し、強みを活かしましょう。
          </p>
        </div>

        {/* Categories Overview */}
        <div id="categories" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">4つのカテゴリー</h2>
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
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                    {Icon ? <Icon className="w-6 h-6 text-white" /> : null}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.types.map((type: string) => (
                      <Link 
                        key={type}
                        href={`/type/${type.toLowerCase()}`}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
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
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">MBTIとは？</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">4つの心理的傾向</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">E/I</div>
                  <div>
                    <div className="font-semibold text-gray-900">外向性 (E) vs 内向性 (I)</div>
                    <div className="text-gray-600 text-sm">エネルギーの向く方向</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">S/N</div>
                  <div>
                    <div className="font-semibold text-gray-900">感覚 (S) vs 直観 (N)</div>
                    <div className="text-gray-600 text-sm">情報収集の方法</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">T/F</div>
                  <div>
                    <div className="font-semibold text-gray-900">思考 (T) vs 感情 (F)</div>
                    <div className="text-gray-600 text-sm">判断の基準</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">J/P</div>
                  <div>
                    <div className="font-semibold text-gray-900">判断 (J) vs 知覚 (P)</div>
                    <div className="text-gray-600 text-sm">外界への態度</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">MBTIの活用法</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>自己理解と自己成長</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>人間関係の改善</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>チームワークの向上</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>キャリア選択の指針</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>コミュニケーション改善</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* All Types Grid */}
        <div id="all-types" className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">全16タイプ詳細</h2>
          <p className="text-lg text-gray-600">各タイプをクリックして詳細な特徴と相性を確認できます</p>
        </div>
        
        <TypeGrid />

        {/* Call to Action */}
        <div className="text-center mt-16 mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">あなたのMBTIタイプを見つけましょう</h3>
            <p className="text-blue-100 mb-6">無料診断であなたの性格タイプを詳しく分析します</p>
            <a
              href="/diagnostics"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              診断を始める
            </a>
          </div>
        </div>

        {/* Related Type Recommendations */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">人気のタイプ詳細</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/type/infp" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group">
              <div className="flex items-center mb-3">
                <div className="w-10 h-6 bg-green-500 rounded-md flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">INFP</span>
                </div>
                <div className="text-green-600 text-sm font-medium">16.44%</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">仲介者</h4>
              <p className="text-gray-600 text-sm">詩的で親切な利他主義者。創造性と理想主義で日本で最も多いタイプ。</p>
            </Link>
            
            <Link href="/type/enfp" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group">
              <div className="flex items-center mb-3">
                <div className="w-10 h-6 bg-blue-500 rounded-md flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">ENFP</span>
                </div>
                <div className="text-blue-600 text-sm font-medium">13.79%</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">広報運動家</h4>
              <p className="text-gray-600 text-sm">情熱的で創造的なアイデア触媒。エネルギッシュで人を惹きつける魅力的なタイプ。</p>
            </Link>
            
            <Link href="/type/intj" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group">
              <div className="flex items-center mb-3">
                <div className="w-10 h-6 bg-purple-600 rounded-md flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">INTJ</span>
                </div>
                <div className="text-purple-600 text-sm font-medium">3.69%</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">建築家</h4>
              <p className="text-gray-600 text-sm">戦略的で洞察力のある独立志向の計画立案者。希少な理想的リーダータイプ。</p>
            </Link>
            
            <Link href="/type/isfj" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group">
              <div className="flex items-center mb-3">
                <div className="w-10 h-6 bg-orange-500 rounded-md flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">ISFJ</span>
                </div>
                <div className="text-orange-600 text-sm font-medium">6.81%</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">擁護者</h4>
              <p className="text-gray-600 text-sm">思いやりと実務力を兼ね備えた支援型の守り手。安定した人間関係を築くプロ。</p>
            </Link>
            
            <Link href="/type/enfj" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group">
              <div className="flex items-center mb-3">
                <div className="w-10 h-6 bg-teal-500 rounded-md flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">ENFJ</span>
                </div>
                <div className="text-teal-600 text-sm font-medium">5.59%</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">主人公</h4>
              <p className="text-gray-600 text-sm">カリスマ性があり魅力的なリーダー。人を励まし導く天性のコーチタイプ。</p>
            </Link>
            
            <Link href="/type/intp" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group">
              <div className="flex items-center mb-3">
                <div className="w-10 h-6 bg-indigo-500 rounded-md flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">INTP</span>
                </div>
                <div className="text-indigo-600 text-sm font-medium">7.19%</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">論理学者</h4>
              <p className="text-gray-600 text-sm">概念的探究と原理理解を好む理論構築者。革新的なアイデアの源泉。</p>
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