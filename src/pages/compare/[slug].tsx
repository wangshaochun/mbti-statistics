import Seo from '../../components/Seo';
import { BreadcrumbStructuredData } from '../../components/StructuredData';
import Link from 'next/link';
import { ArrowLeft, GitCompare, CheckCircle, XCircle, Brain, Briefcase, Heart, HelpCircle } from 'lucide-react';
import { comparisonDatabase, allComparisonSlugs, type TypeComparison } from '../../data/comparisons';
import { typeData } from '../../data/types';
import CognitiveFunctionStack from '../../components/charts/CognitiveFunctionStack';

export default function ComparisonPage({ comparison }: { comparison: TypeComparison }) {
  const type1Data = typeData[comparison.type1];
  const type2Data = typeData[comparison.type2];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12">
      <Seo 
        title={`${comparison.type1} vs ${comparison.type2} の違い | MBTI詳細比較分析`}
        description={`${comparison.type1}と${comparison.type2}の主要な違いを徹底解説。認知機能、性格特性、キャリア選択、恋愛スタイルの違いを詳しく分析します。`}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'ホーム', url: 'https://mbti-aisho.com/' },
          { name: 'タイプ比較', url: 'https://mbti-aisho.com/types' },
          { name: `${comparison.type1} vs ${comparison.type2}`, url: `https://mbti-aisho.com/compare/${comparison.slug}` }
        ]}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/types" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            タイプ一覧に戻る
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-600 rounded-2xl mb-6">
            <GitCompare className="w-8 h-8 text-white" />
          </div>
          <div className="flex justify-center items-center gap-6 mb-6">
            <Link href={`/type/${comparison.type1.toLowerCase()}`} className="group">
              <div className="w-32 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <span className="text-3xl font-bold text-white">{comparison.type1}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center group-hover:text-blue-600">{type1Data?.name}</p>
            </Link>
            
            <div className="text-3xl font-bold text-gray-400">VS</div>
            
            <Link href={`/type/${comparison.type2.toLowerCase()}`} className="group">
              <div className="w-32 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <span className="text-3xl font-bold text-white">{comparison.type2}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center group-hover:text-green-600">{type2Data?.name}</p>
            </Link>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {comparison.type1} と {comparison.type2} の違い
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {comparison.summary}
          </p>
        </div>

        {/* Key Differences */}
        <div className="bg-white rounded-2xl shadow-lg mb-8 border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <GitCompare className="w-6 h-6 mr-3" />
              主要な違い一覧
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {comparison.keyDifferences.map((diff, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="font-bold text-gray-900 mb-3">{diff.aspect}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="text-sm font-bold text-blue-900 mb-2">{comparison.type1}</div>
                      <p className="text-sm text-gray-700">{diff.type1Trait}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="text-sm font-bold text-green-900 mb-2">{comparison.type2}</div>
                      <p className="text-sm text-gray-700">{diff.type2Trait}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cognitive Functions */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg mb-8 border border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Brain className="w-6 h-6 mr-3 text-purple-600" />
            認知機能の違い
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6">
              <CognitiveFunctionStack type={comparison.type1} functions={comparison.cognitiveFunctions.type1Stack} />
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <CognitiveFunctionStack type={comparison.type2} functions={comparison.cognitiveFunctions.type2Stack} />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <h3 className="font-bold text-purple-900 mb-3">機能の違いによる影響</h3>
            <p className="text-gray-700 leading-relaxed">{comparison.cognitiveFunctions.analysis}</p>
          </div>
        </div>

        {/* Career Differences */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
            職業選択の違い
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold text-blue-900 mb-3">{comparison.type1} 向きの職業</h3>
              <ul className="space-y-2">
                {comparison.careerDifferences.type1Careers.map((career, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{career}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-green-900 mb-3">{comparison.type2} 向きの職業</h3>
              <ul className="space-y-2">
                {comparison.careerDifferences.type2Careers.map((career, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{career}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">共通する適職分野</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {comparison.careerDifferences.overlap.map((career, idx) => (
                <span key={idx} className="px-4 py-2 bg-white rounded-lg text-sm text-gray-700 border border-gray-200">
                  {career}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{comparison.careerDifferences.explanation}</p>
          </div>
        </div>

        {/* Relationship Style */}
        <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 shadow-lg mb-8 border border-pink-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Heart className="w-6 h-6 mr-3 text-pink-600" />
            恋愛スタイルの違い
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-3">{comparison.type1} の恋愛スタイル</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{comparison.relationshipStyle.type1Style}</p>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-green-900 mb-3">{comparison.type2} の恋愛スタイル</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{comparison.relationshipStyle.type2Style}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <h3 className="font-bold text-pink-900 mb-3">比較ポイント</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{comparison.relationshipStyle.comparison}</p>
          </div>
        </div>

        {/* Common Misconceptions */}
        <div className="bg-yellow-50 rounded-2xl p-8 shadow-lg mb-8 border border-yellow-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <XCircle className="w-6 h-6 mr-3 text-yellow-600" />
            よくある誤解
          </h2>
          <ul className="space-y-3">
            {comparison.commonMisconceptions.map((misconception, idx) => (
              <li key={idx} className="flex items-start bg-white rounded-lg p-4">
                <div className="w-6 h-6 rounded-full bg-yellow-400 text-white flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                  !
                </div>
                <span className="text-sm text-gray-700">{misconception}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How to Distinguish */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <HelpCircle className="w-6 h-6 mr-3 text-blue-600" />
            自分がどちらのタイプか見分ける方法
          </h2>
          <div className="space-y-6">
            {comparison.howToDistinguish.map((item, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                <h3 className="font-bold text-gray-900 mb-4">{item.question}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <p className="text-sm text-gray-700">{item.type1Answer}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-sm text-gray-700">{item.type2Answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link 
            href={`/type/${comparison.type1.toLowerCase()}`}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-blue-100"
          >
            <h3 className="font-bold text-blue-900 mb-2">{comparison.type1} タイプの詳細</h3>
            <p className="text-sm text-gray-600">{type1Data?.name}の特徴、強み、適職などを詳しく見る</p>
          </Link>
          
          <Link 
            href={`/type/${comparison.type2.toLowerCase()}`}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-green-100"
          >
            <h3 className="font-bold text-green-900 mb-2">{comparison.type2} タイプの詳細</h3>
            <p className="text-sm text-gray-600">{type2Data?.name}の特徴、強み、適職などを詳しく見る</p>
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">あなたのMBTIタイプを診断しましょう</h3>
          <p className="text-blue-100 mb-6">
            無料診断で自分の性格タイプを正確に知り、より深い自己理解を得ましょう
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/diagnostics"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              診断を始める
            </Link>
            <Link
              href="/types"
              className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              他のタイプを見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = allComparisonSlugs.map(slug => ({
    params: { slug }
  }));
  
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const comparison = comparisonDatabase[params.slug];
  
  if (!comparison) {
    return { notFound: true };
  }
  
  return {
    props: {
      comparison
    }
  };
}

