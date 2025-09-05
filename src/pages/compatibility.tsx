import React, { useState } from 'react';
import { Heart, Users, Briefcase, Star, Shield, Zap } from 'lucide-react';
import Seo from '../components/Seo';

const CompatibilityOverview = () => {
  const [selectedContext, setSelectedContext] = useState<'love' | 'friendship' | 'work'>('love');

  const compatibilityMatrix = {
    love: {
      ISTJ: { excellent: ['ESFJ', 'ISFJ'], good: ['ESTJ', 'ISTP'], challenging: ['ENFP', 'ENTP'] },
      ISFJ: { excellent: ['ESFJ', 'ISTJ'], good: ['ESTJ', 'ISFP'], challenging: ['ENTP', 'INTP'] },
      ESTJ: { excellent: ['ISFJ', 'ISTJ'], good: ['ESFJ', 'ESTP'], challenging: ['INFP', 'INTP'] },
      ESFJ: { excellent: ['ISTJ', 'ISFJ'], good: ['ESTJ', 'ESFP'], challenging: ['INTP', 'ISTP'] },
      ISTP: { excellent: ['ESTJ', 'ESFJ'], good: ['ISTJ', 'ISFP'], challenging: ['ENFJ', 'ENFJ'] },
      ISFP: { excellent: ['ESFJ', 'ESTJ'], good: ['ISFJ', 'ISTP'], challenging: ['ENTJ', 'ENTP'] },
      ESTP: { excellent: ['ISFJ', 'ISTJ'], good: ['ESFJ', 'ESTJ'], challenging: ['INFJ', 'INTJ'] },
      ESFP: { excellent: ['ISFJ', 'ISTJ'], good: ['ESFJ', 'ESTJ'], challenging: ['INTJ', 'INTP'] },
      INFJ: { excellent: ['ENFP', 'ENTP'], good: ['INFP', 'INTJ'], challenging: ['ESTP', 'ESFP'] },
      INFP: { excellent: ['ENFJ', 'ENTJ'], good: ['INFJ', 'INTP'], challenging: ['ESTJ', 'ESTP'] },
      INTJ: { excellent: ['ENFP', 'ENTP'], good: ['INFJ', 'INTP'], challenging: ['ESFP', 'ESFJ'] },
      INTP: { excellent: ['ENTJ', 'ENFJ'], good: ['INTJ', 'INFP'], challenging: ['ESFJ', 'ESTJ'] },
      ENFP: { excellent: ['INFJ', 'INTJ'], good: ['ENFJ', 'ENTP'], challenging: ['ISTJ', 'ISFJ'] },
      ENFJ: { excellent: ['INFP', 'INTP'], good: ['ENFP', 'INFJ'], challenging: ['ISTP', 'ISTJ'] },
      ENTJ: { excellent: ['INFP', 'INTP'], good: ['INTJ', 'ENTP'], challenging: ['ISFP', 'ISFJ'] },
      ENTP: { excellent: ['INFJ', 'INTJ'], good: ['ENFP', 'INTP'], challenging: ['ISFJ', 'ISTJ'] }
    },
    friendship: {
      ISTJ: { excellent: ['ESTJ', 'ISFJ'], good: ['ISTP', 'ESFJ'], challenging: ['ENFP', 'ENTP'] },
      ISFJ: { excellent: ['ESFJ', 'ISTJ'], good: ['ISFP', 'ESTJ'], challenging: ['ENTP', 'INTP'] },
      ESTJ: { excellent: ['ISTJ', 'ESFJ'], good: ['ESTP', 'ENTJ'], challenging: ['INFP', 'INTP'] },
      ESFJ: { excellent: ['ISFJ', 'ESTJ'], good: ['ESFP', 'ENFJ'], challenging: ['INTJ', 'INTP'] },
      ISTP: { excellent: ['ESTP', 'ISFP'], good: ['ISTJ', 'INTP'], challenging: ['ENFJ', 'INFJ'] },
      ISFP: { excellent: ['ESFP', 'ISTP'], good: ['ISFJ', 'INFP'], challenging: ['ENTJ', 'ESTJ'] },
      ESTP: { excellent: ['ISTP', 'ESFP'], good: ['ESTJ', 'ENTP'], challenging: ['INFJ', 'INTJ'] },
      ESFP: { excellent: ['ISFP', 'ESTP'], good: ['ESFJ', 'ENFP'], challenging: ['INTJ', 'INFJ'] },
      INFJ: { excellent: ['ENFJ', 'INFP'], good: ['INTJ', 'ENFP'], challenging: ['ESTP', 'ESFP'] },
      INFP: { excellent: ['ENFP', 'INFJ'], good: ['INTP', 'ISFP'], challenging: ['ESTJ', 'ENTJ'] },
      INTJ: { excellent: ['ENTJ', 'INTP'], good: ['INFJ', 'ENTP'], challenging: ['ESFP', 'ESFJ'] },
      INTP: { excellent: ['ENTP', 'INTJ'], good: ['INFP', 'ISTP'], challenging: ['ESFJ', 'ESTJ'] },
      ENFP: { excellent: ['INFP', 'ENTP'], good: ['ENFJ', 'INFJ'], challenging: ['ISTJ', 'ISTP'] },
      ENFJ: { excellent: ['INFJ', 'ENFP'], good: ['ESFJ', 'INFP'], challenging: ['ISTP', 'ISTJ'] },
      ENTJ: { excellent: ['INTJ', 'ENTP'], good: ['ESTJ', 'INTP'], challenging: ['ISFP', 'ISFJ'] },
      ENTP: { excellent: ['INTP', 'ENFP'], good: ['INTJ', 'ENTJ'], challenging: ['ISFJ', 'ISFP'] }
    },
    work: {
      ISTJ: { excellent: ['ENFP', 'ENTJ'], good: ['ESTJ', 'ISFJ'], challenging: ['INFP', 'ENTP'] },
      ISFJ: { excellent: ['ENTP', 'ENFJ'], good: ['ESFJ', 'ISTJ'], challenging: ['INTP', 'ENTJ'] },
      ESTJ: { excellent: ['INFP', 'INTP'], good: ['ISTJ', 'ENTJ'], challenging: ['ENFP', 'INFJ'] },
      ESFJ: { excellent: ['INTJ', 'INTP'], good: ['ISFJ', 'ENFJ'], challenging: ['ENTJ', 'ISTP'] },
      ISTP: { excellent: ['ENFJ', 'ESFJ'], good: ['ESTP', 'ISFP'], challenging: ['INFJ', 'ENFP'] },
      ISFP: { excellent: ['ENTJ', 'ESTJ'], good: ['ESFP', 'INFP'], challenging: ['INTJ', 'ENTJ'] },
      ESTP: { excellent: ['INFJ', 'INTJ'], good: ['ISTP', 'ESFP'], challenging: ['INFP', 'ISFJ'] },
      ESFP: { excellent: ['INTJ', 'INFJ'], good: ['ESTP', 'ENFJ'], challenging: ['ISTJ', 'INTP'] },
      INFJ: { excellent: ['ESTP', 'ESFP'], good: ['ENFJ', 'INFP'], challenging: ['ESTJ', 'ISTP'] },
      INFP: { excellent: ['ESTJ', 'ENTJ'], good: ['ENFP', 'INFJ'], challenging: ['ESTP', 'ISTJ'] },
      INTJ: { excellent: ['ESFP', 'ESFJ'], good: ['ENTJ', 'INTP'], challenging: ['ESFJ', 'ISFP'] },
      INTP: { excellent: ['ESFJ', 'ENTJ'], good: ['INTJ', 'ENTP'], challenging: ['ESFP', 'ISFJ'] },
      ENFP: { excellent: ['ISTJ', 'ISFJ'], good: ['ENTP', 'INFJ'], challenging: ['ISTJ', 'ESTJ'] },
      ENFJ: { excellent: ['ISTP', 'INTP'], good: ['ENFP', 'INFJ'], challenging: ['ISTP', 'ISTJ'] },
      ENTJ: { excellent: ['ISFP', 'INFP'], good: ['INTJ', 'ESTJ'], challenging: ['ISFP', 'ISFJ'] },
      ENTP: { excellent: ['ISFJ', 'ISTJ'], good: ['INTP', 'INTJ'], challenging: ['ISFJ', 'ESFJ'] }
    }
  };

  const compatibilityAnalyses = {
    love: `
      恋愛関係マッチ度解析：
      
      優秀なマッチ（天然吸引力）：通常は核心的な認知機能を共有しているか、補完的で調和する組み合わせです（例：INFJ と ENFP は直感(N)と感情(F)の共通点や補完性）。会話が自然で、お互いを深く理解しやすい傾向があります。
      
      良好なマッチ（要経営）：共通点はあるものの、調和させるために意識的な努力が必要な差異が存在します（例：INFP と INTP は理想や内向的傾向を共有するが、F/T の違いで価値判断の擦り合わせが必要）。双方が歩み寄れば良好に保てます。
      
      注意が必要（挑戦と成長）：認知パターンや価値観が大きく異なる組み合わせです（例：ESFJ と INTP）。短期的な魅力はあっても、長期的な安定には高い成熟度・コミュニケーション技術・相手の世界を理解しようとする意志が求められます。
    `,
    friendship: `
      友人関係マッチ度解析：
      
      友人関係は恋愛よりも寛容で、共通の興味や価値観が鍵になります。
      
      優秀なマッチ（ベストな遊び相手／知己）：同じ感覚/判断の志向を共有していると、共通の話題や活動が生まれやすいです（例：同じSPタイプは冒険や体験を共有しやすい）。
      
      良好なマッチ（一緒に楽しめる）：タイプが異なっても互いに補完し合い、一緒に楽しめる関係になります（例：SJとSPのペアで実務と遊びを両立）。
      
      注意が必要（話が合わない可能性）：S型とN型の組み合わせでは、S型が具体性を求める一方でN型が抽象的な話を好み、噛み合わないことがあります。ただし共通の具体的な興味（趣味・映画・スポーツ等）を見つければ問題は解消されやすいです。
    `,
    work: `
      職場関係マッチ度解析：
      
      職場では直接的な協働の相性を重視します。優秀な組み合わせは夢想家と実行者、計画者と柔軟担当などで、役割が明確に分かれると高効率になります。
      
      良好なマッチ（信頼できるチームメイト）：同じ気質を共有することで協働の安定性が高まり、信頼できる仲間として機能します（例：二人のNT型による戦略的協働）。
      
      注意が必要（潜在的対立）：思考や優先順位が異なる場合、ルールや進め方を巡って衝突が生じやすいです。ただし適切なマネジメントや役割分担があれば、その対立はイノベーションの源泉にもなり得ます。
    `
  };

  const contexts = [
    { key: 'love' as const, label: '恋愛関係', icon: Heart, color: 'bg-rose-500' },
    { key: 'friendship' as const, label: '友人関係', icon: Users, color: 'bg-blue-500' },
    { key: 'work' as const, label: '職場関係', icon: Briefcase, color: 'bg-green-500' }
  ];

  type Level = 'excellent' | 'good' | 'challenging';
  const getCompatibilityColor = (level: Level): string => {
    switch (level) {
      case 'excellent': return 'bg-green-100 border-green-300 text-green-800';
      case 'good': return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'challenging': return 'bg-red-100 border-red-300 text-red-800';
    }
  };

  const compatibilityTips = {
    love: [
      'お互いの価値観を理解し合うことが重要',
      '感情を素直に表現することを心がける',
      '将来の目標について定期的に話し合う',
      'お互いの個人的な時間も尊重する'
    ],
    friendship: [
      '共通の興味や趣味を見つける',
      'お互いの違いを受け入れる',
      '深い話から軽い話まで幅広く楽しむ',
      '困った時には支え合える関係を築く'
    ],
    work: [
      '役割分担を明確にする',
      'コミュニケーション方法を合わせる',
      'お互いの強みを活かし合う',
      '建設的なフィードバックを心がける'
    ]
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <Seo title="MBTI 相性診断・分析 - 恋愛・友人・職場の相性" description="MBTIタイプ別の相性マトリクスを恋愛・友情・職場ごとに分析。相性の良い組み合わせや改善のコツを紹介します。" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            MBTI相性診断・分析
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            16タイプの性格別相性を恋愛・友情・仕事の観点から詳しく分析。
            <br className="hidden sm:block" />
            理想のパートナーや良好な人間関係を築くヒントを見つけましょう。
          </p>
        </div>

        {/* Context Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">関係性を選択</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {contexts.map((context) => {
              const Icon = context.icon;
              return (
                <button
                  key={context.key}
                  onClick={() => setSelectedContext(context.key)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all ${
                    selectedContext === context.key
                      ? `${context.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{context.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Compatibility Matrix Sample */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {contexts.find(c => c.key === selectedContext)?.label}での相性マトリックス
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="overflow-x-auto">
              <div className="min-w-full">
                {Object.entries(compatibilityMatrix[selectedContext]).map(([type, compatibility]) => (
                  <div key={type} className="mb-6 last:mb-0">
                    <div className="flex items-center mb-2">
                      <div className="w-16 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold mr-4">
                        {type}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{type} - {selectedContext === 'love' ? '恋愛パートナー' : selectedContext === 'friendship' ? '友人関係' : '職場での関係'} - タイプとの相性</h3>
                     
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(compatibility).map(([level, types]) => (
            <div key={level} className={`p-2 rounded-lg border-2 ${getCompatibilityColor(level as Level)}`}>
                          <h4 className="font-semibold mb-2">
                            {level === 'excellent' ? '★★★ 抜群の相性' : 
                             level === 'good' ? '★★☆ 良好な相性' : '★☆☆ 要注意の相性'}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {types.map((compatibleType) => (
                              <span key={compatibleType} className="px-2 py-1 bg-white bg-opacity-50 rounded text-sm font-medium">
                                {compatibleType}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compatibility Tips */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {contexts.find(c => c.key === selectedContext)?.label}での関係改善のコツ
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {compatibilityTips[selectedContext].map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compatibility Analyses (日本語) */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">{contexts.find(c => c.key === selectedContext)?.label}の次元解析</h2>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-gray-700 whitespace-pre-line">{compatibilityAnalyses[selectedContext]}</p>
          </div>
        </div>
 

        {/* Popular Compatibility Insights */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">人気の相性パターン</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
              {
                types: 'INFJ × ENFP',
                title: '魂の伴侶のような深い結びつき',
        icon: Star,
        gradient: 'from-pink-400 to-rose-500',
                content: `
恋愛次元：優秀

魅力の源：両者は直感（N）と感情（F）を共有し、可能性や深層的な意味、人間の感情に関心を持つ点で強く共鳴します。INFJは関係に深みと洞察、安定感をもたらし、ENFPは情熱と無限の可能性、活力を与えます。長時間にわたる深い対話が自然に続き、恋人であり親友でもある関係になり得ます。

友人次元：優秀

相互のあり方：ENFPは内向的なINFJを外へと促し、世界の楽しさを体験させます。INFJは散漫になりがちなENFPを内省へ導き、より深い気づきを提供します。互いに刺激し合い、温かく励ます友人関係になります。

職場次元：良好〜優秀

協力のモデル：INFJは戦略的な構想を練り、ENFPは創意と対外的な推進力を担当することで、芸術、教育、心理、非営利など人文領域のプロジェクトで高い相乗効果を発揮します。注意点は実行の細部や締め切り管理で、ENFPは過程のフォロー、INFJは進捗管理で補完が必要です。
                `
              },
              {
                types: 'ISTJ × ESFJ',
                title: '揺るぎない現実の盟友',
                icon: Shield,
                gradient: 'from-green-400 to-teal-500',
                content: `
恋愛次元：優秀

魅力の源：両者は感覚（S）と判断（J）を重視し、事実・責任・伝統・家庭を大切にします。ISTJはESFJの社交性と気配りを尊重し、ESFJはISTJの確かな信頼性と忠誠を評価します。共通の価値観と生活様式の上に堅牢な関係が築かれます。

友人次元：優秀

相互のあり方：『一緒にやる』ことに長けたコンビです。地域活動や家庭の企画、実務プロジェクトも互いに分担して進められます。ESFJが対外的な調整と雰囲気作りを担い、ISTJが計画と細部の管理を担当することで、実用的で長続きする友情が生まれます。

職場次元：優秀

協力のモデル：組織の安定運営に不可欠なペアです。ESFJは人間関係の潤滑油、ISTJはプロセスと品質の担保を行います。行政・医療・教育・法務など、高い責任感と正確さが求められる分野で理想的に機能します。
                `
              },
              {
                types: 'INTJ × ENTP',
                title: '火花散る知的な挑戦',
                icon: Zap,
                gradient: 'from-yellow-400 to-orange-500',
                content: `
恋愛次元：良好〜優秀（注意点あり）

魅力の源：直感（N）と思考（T）を共有し、抽象概念や戦略的思考への強い興味で惹かれ合います。INTJはENTPの機知と発想力に魅了され、ENTPはINTJの深さと決断力に引かれます。会話はしばしば刺激的で、知的な駆け引きが関係を活性化させます。

潜在的摩擦：INTJの『結論志向（J）』とENTPの『議論を楽しむ（P）』という差が摩擦を生みやすい点に注意が必要です。INTJは結論と実行を求め、ENTPは可能性を探り続けるため、双方の尊重と成熟が欠かせません。

友人次元：優秀

相互のあり方：お互いの頭脳を鍛え合う『思考のジム』のような関係性です。複雑な問題の分解や斬新なアイデアの議論は二人にとって楽しみの一つであり、深い相互尊重の下で強い友情が育ちます。

職場次元：優秀（高効率な補完）

協力のモデル：ENTPが大量のアイデアを生み出し、INTJがそれらを体系化して実行可能な計画に落とし込むという強力な組み合わせです。スタートアップ、研究開発、戦略コンサルティングなどで高いパフォーマンスを発揮します。
                `
              }
            ].map((insight, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-12 h-12 rounded-md flex items-center justify-center text-white mr-3 bg-gradient-to-br ${insight.gradient}`}>
                    {insight.icon ? React.createElement(insight.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>, { className: 'w-6 h-6' }) : null}
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{insight.types}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{insight.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{insight.content}</p>
                <div className="mt-4 text-right">
                  {/* Link to TypeDetail page anchor — uses first type in pair */}
                  {(() => {
                    const firstType = insight.types.split('×')[0].trim();
                    const anchor = `pair-${firstType.replace(/\s+/g, '')}-${insight.types.split('×')[1].trim().replace(/\s+/g,'')}`;
                    return (
                      <a href={`/type/${firstType}#${anchor}`} className="inline-block px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-md text-sm hover:brightness-95">もっと読む</a>
                    );
                  })()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-white">
            <Heart className="w-16 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">あなたの理想の相性を見つけましょう</h3>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              詳細な診断で、恋愛・友情・仕事における理想のパートナーを発見し、
              より良い人間関係を築いていきましょう。
            </p>
            <a
              href="/diagnostics"
              className="inline-block px-8 py-3 bg-white text-rose-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              今すぐ相性診断
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompatibilityOverview;

export async function getStaticProps() {
  return { props: {} };
}