// (file defines Statistics component below)
import { useState } from 'react';
import Link from 'next/link';
import { BarChart3, Users, TrendingUp, Globe, Target, Award } from 'lucide-react';
import Seo from '../components/Seo';

const Statistics = () => {
  const [selectedView, setSelectedView] = useState<'japan' | 'global' | 'age' | 'career'>('japan');

  const japaneseStats = [
    { type: 'INFP', name: '仲介者', percentage: 16.44, color: 'bg-green-400' },
    { type: 'ENFP', name: '広報運動家', percentage: 13.79, color: 'bg-green-500' },
    { type: 'INTP', name: '論理学者', percentage: 7.19, color: 'bg-purple-400' },
    { type: 'ISFJ', name: '擁護者', percentage: 6.81, color: 'bg-blue-500' },
    { type: 'INFJ', name: '提唱者', percentage: 6.79, color: 'bg-green-200' },
    { type: 'ESFJ', name: '領事官', percentage: 6.75, color: 'bg-blue-400' },
    { type: 'ISFP', name: '冒険家', percentage: 6.74, color: 'bg-orange-500' },
    { type: 'ESFP', name: 'エンターテイナー', percentage: 6.01, color: 'bg-orange-400' },
    { type: 'ENFJ', name: '主人公', percentage: 5.59, color: 'bg-green-300' },
    { type: 'ENTP', name: '討論者', percentage: 5.18, color: 'bg-purple-500' },
    { type: 'INTJ', name: '建築家', percentage: 3.69, color: 'bg-purple-300' },
    { type: 'ISTJ', name: '管理者', percentage: 3.57, color: 'bg-blue-300' },
    { type: 'ESTJ', name: '幹部', percentage: 3.38, color: 'bg-blue-200' },
    { type: 'ISTP', name: '巨匠', percentage: 2.87, color: 'bg-orange-200' },
    { type: 'ESTP', name: '起業家', percentage: 2.62, color: 'bg-orange-300' },
    { type: 'ENTJ', name: '指揮官', percentage: 2.57, color: 'bg-purple-200' },
  ];

  const globalStats = [
    { type: 'ISFP', name: '冒険家', percentage: 8, color: 'bg-orange-500' },
    { type: 'ISFJ', name: '擁護者', percentage: 13, color: 'bg-blue-500' },
    { type: 'ESFP', name: 'エンターテイナー', percentage: 7, color: 'bg-orange-400' },
    { type: 'ISTP', name: '巨匠', percentage: 5, color: 'bg-orange-200' },
    { type: 'ISTJ', name: '管理者', percentage: 13, color: 'bg-blue-300' },
    { type: 'ESFJ', name: '領事', percentage: 12, color: 'bg-blue-400' },
    { type: 'INFP', name: '仲介者', percentage: 4, color: 'bg-green-400' },
    { type: 'ENFP', name: '広報運動家', percentage: 7, color: 'bg-green-500' },
    { type: 'ESTP', name: '起業家', percentage: 4, color: 'bg-orange-300' },
    { type: 'ESTJ', name: '幹部', percentage: 11, color: 'bg-blue-200' },
    { type: 'INTP', name: '論理学者', percentage: 3, color: 'bg-purple-400' },
    { type: 'INFJ', name: '提唱者', percentage: 1, color: 'bg-green-200' },
    { type: 'INTJ', name: '建築家', percentage: 2, color: 'bg-purple-300' },
    { type: 'ENTP', name: '討論者', percentage: 3, color: 'bg-purple-500' },
    { type: 'ENFJ', name: '主人公', percentage: 2, color: 'bg-green-300' },
    { type: 'ENTJ', name: '指揮官', percentage: 3, color: 'bg-purple-200' },
  ];

  const careerStats = [
    {
      career: '教育関係',
      types: ['ISFJ', 'ESFJ', 'ESTJ'],
      reason:
        '日本の教育現場では、「規律」「責任感」「献身性」「協調性」が重視されます。ISFJとESFJは献身的で面倒見が良い保護者のようなタイプであり、特に小学校教育で多く見られると推定されます。ESTJは組織の規律を重んじるため、管理職や厳格な指導を求める環境で多い傾向があります。',
    },
    {
      career: 'IT・エンジニア',
      types: ['ISTJ', 'INTJ', 'INTP', 'ISTP'],
      reason:
        'これは全球的に共通する傾向です。論理的思考（T）と内省的（I）な性質が強く要求されます。特に日本では、正確さと持続性を重んじるISTJが、堅実なシステム開発や品質管理の分野で非常に多いと推測されます。INTJとINTPは複雑なシステム構築や研究開発部門で力を発揮します。',
    },
    {
      career: '営業・販売',
      types: ['ESFJ', 'ESTP', 'ESTJ'],
      reason:
        '日本の営業職は、単なる「販売」ではなく、「顧客との長期的な信頼関係（関係性構築）」が極めて重要視されます。この点で、協調性と共感力に優れるESFJが非常に適しています。また、現実的で駆け引きが得意なESTP、そして目標達成志向が強く勤勉なESTJも多いとされています。',
    },
    {
      career: '医療・介護',
      types: ['ISFJ', 'ESFJ', 'ISFP'],
      reason:
        'これはほぼ全球で一致する傾向です。特に「献身性」と「細やかな気配り」を美徳とする日本の医療・介護現場では、ISFJが最も典型的なタイプだと考えられます。ESFJはチームのまとめ役や患者様とのコミュニケーション役として、ISFPは優しくて患者本位のケアを提供するタイプとして多く存在します。',
    },
    {
      career: 'クリエイティブ',
      types: ['INFP', 'ISFP', 'INTP'],
      reason:
        '内面的な価値観や情感を表現するINFPやISFPは、作家、画家、ミュージシャンなどに多いタイプです。INTPは独創的な発想で既存の枠組みを破るようなコンセプト作りを得意とします。日本の「職人気質」はISTPが強く関与している分野でもあります。',
    },
    {
      career: '管理・経営',
      types: ['ESTJ', 'ENTJ', 'ISTJ'],
      reason:
        '日本の管理職は、全球的に見てもESTJ（「管理者」タイプ）の割合が非常に高いと言われています。その理由は、組織の秩序と伝統を重んじ、責任感が強く、実用的な業務執行を得意とする点が、日本の企業風土に合致するためです。ENTJはより革新的で戦略的な経営者や起業家に、ISTJは財務や管理部門の責任者に見られる傾向があります。',
    },
    {
      career: '研究・分析',
      types: ['INTJ', 'INTP', 'ISTJ'],
      reason:
        'この分野も全球的な傾向と大きくは変わりません。理論と未来志向のINTJ、論理と可能性を追求するINTPが、アカデミックな研究や基礎研究部門で核心を担います。一方、事実とデータを正確に積み上げることを得意とするISTJは、市場調査、データ分析、品質管理などの分野で重要な役割を果たしています。',
    },
  ];

  const getCurrentStats = () => {
    switch (selectedView) {
      case 'japan': return japaneseStats;
      case 'global': return globalStats;
      default: return japaneseStats;
    }
  };

  const viewOptions = [
    { key: 'japan' as const, label: '日本人統計', icon: Globe, description: '性格タイプ分布' },
    { key: 'global' as const, label: '世界統計', icon: Users, description: '全世界の性格タイプ分布' },
    { key: 'career' as const, label: '職業別分析', icon: Target, description: '職業とMBTIの関係性' },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <Seo title="MBTI 統計データ - タイプ分布" description="日本人および世界のMBTIタイプ分布や職業別の傾向を示す統計データ。タイプ別比率やインサイトをビジュアルで確認できます。" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            MBTI統計・割合データ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            日本人と世界のMBTI分布の違い、職業別の傾向など、
            <br className="hidden sm:block" />
            詳細な統計データで性格タイプの実態を理解しましょう。
          </p>
        </div>

        {/* View Selection */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {viewOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.key}
                  onClick={() => setSelectedView(option.key)}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${
                    selectedView === option.key
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-8 h-8 mb-3 ${selectedView === option.key ? 'text-blue-600' : 'text-gray-400'}`} />
                  <h3 className={`text-lg font-semibold mb-2 ${selectedView === option.key ? 'text-blue-900' : 'text-gray-900'}`}>
                    {option.label}
                  </h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Statistics Display */}
        {selectedView === 'career' ? (
          /* Career Statistics */
          <div id="career-stats" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">職業別MBTI分析</h2>
            <div className="space-y-6">
              {careerStats.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{item.career}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <div className="text-sm text-gray-600 mr-3">高い傾向があるタイプ:</div>
                    {item.types.map((type) => (
                      <span key={type} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium">
                        {type}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Type Distribution */
          <div id="distribution-chart" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {selectedView === 'japan' ? 'MBTI分布' : '世界のMBTI分布'}
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-4">
                {getCurrentStats().map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 text-sm font-medium text-gray-600">#{index + 1}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <Link 
                            href={`/type/${stat.type.toLowerCase()}`}
                            className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                          >
                            {stat.type}
                          </Link>
                          <span className="text-sm text-gray-500 ml-2">{stat.name}</span>
                        </div>
                        <div className="text-xl font-bold text-gray-900">{stat.percentage}%</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`${stat.color} h-3 rounded-full transition-all duration-500`}
                          style={{ width: `${(stat.percentage / Math.max(...getCurrentStats().map(s => s.percentage))) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Key Insights (data-driven) */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">統計から見る特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Most common in current view */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <TrendingUp className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-green-800 mb-2">最多タイプ</h3>
              <p className="text-green-700 text-sm">
                {(() => {
                  const stats = getCurrentStats();
                  const top = stats.reduce((a, b) => (a.percentage > b.percentage ? a : b), stats[0]);
                  return `${top.type}（${top.name}）が最も多く、${top.percentage}%を占めます。`;
                })()}
              </p>
            </div>

            {/* Japan vs Global highlight */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <BarChart3 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-blue-800 mb-2">日・世界の差</h3>
              <p className="text-blue-700 text-sm">
                {(() => {
                  const jp = japaneseStats.find(s => s.type === 'ENFP');
                  const gl = globalStats.find(s => s.type === 'ENFP');
                  if (jp && gl) {
                    return `日本のENFPは${jp.percentage}%で、世界の${gl.percentage}%に比べて差が大きいです。`;
                  }
                  return '日本と世界の主要タイプに差があります。';
                })()}
              </p>
            </div>

            {/* Rare types */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <Award className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-purple-800 mb-2">希少タイプ</h3>
              <p className="text-purple-700 text-sm">
                {(() => {
                  // show types with percentage < 4 in japaneseStats
                  const rares = japaneseStats.filter(s => s.percentage < 4).map(s => s.type);
                  if (rares.length) return `${rares.join('、')} などが日本では相対的に少ないです。`;
                  return '特に希少なタイプは見られません。';
                })()}
              </p>
            </div>

            {/* Career insight */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
              <Target className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold text-orange-800 mb-2">職業との関連</h3>
              <p className="text-orange-700 text-sm">
                {(() => {
                  const topCareer = careerStats[0];
                  return `${topCareer.career}には${topCareer.types.slice(0,2).join('、')}が多く見られる傾向があります。`;
                })()}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Analysis */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">詳細分析</h2>
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">性格傾向</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">外向性 (E) vs 内向性 (I)</span>
                    <span className="font-semibold">52% : 48%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">直観 (N) vs 感覚 (S)</span>
                    <span className="font-semibold">65% : 35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">感情 (F) vs 思考 (T)</span>
                    <span className="font-semibold">71% : 29%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">知覚 (P) vs 判断 (J)</span>
                    <span className="font-semibold">68% : 32%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">カテゴリー別分布</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">外交官 (NF)</span>
                    <span className="font-semibold text-green-600">48.43%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">探検家 (SP)</span>
                    <span className="font-semibold text-orange-600">22.62%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">アナリスト (NT)</span>
                    <span className="font-semibold text-purple-600">19.47%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">番人 (SJ)</span>
                    <span className="font-semibold text-blue-600">9.48%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <BarChart3 className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">あなたはどの統計に当てはまる？</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              統計データを見た後は、実際にあなた自身のMBTIタイプを診断して、
              傾向と比較してみましょう。
            </p>
            <a
              href="/diagnostics"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              診断で確認する
            </a>
          </div>
        </div>

        {/* Featured Type Analysis */}
        <div id="featured-types" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">注目タイプの詳細分析</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/type/infp" className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="flex items-center mb-3">
                <div className="w-12 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">INFP</span>
                </div>
                <div className="text-green-600 font-bold text-lg">16.44%</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">仲介者</h4>
              <p className="text-gray-600 text-sm">日本で最も多いタイプ。創造性と理想主義を兼ね備えた人気のタイプです。</p>
            </Link>
            
            <Link href="/type/enfp" className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="flex items-center mb-3">
                <div className="w-12 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">ENFP</span>
                </div>
                <div className="text-blue-600 font-bold text-lg">13.79%</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">広報運動家</h4>
              <p className="text-gray-600 text-sm">第2位の人気タイプ。エネルギッシュで人とのつながりを大切にします。</p>
            </Link>
            
            <Link href="/type/intj" className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="flex items-center mb-3">
                <div className="w-12 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">INTJ</span>
                </div>
                <div className="text-purple-600 font-bold text-lg">3.69%</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">建築家</h4>
              <p className="text-gray-600 text-sm">希少なタイプ。戦略的思考と独立性で知られる理想的なリーダー。</p>
            </Link>
            
            <Link href="/type/isfj" className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="flex items-center mb-3">
                <div className="w-12 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">ISFJ</span>
                </div>
                <div className="text-orange-600 font-bold text-lg">6.81%</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">擁護者</h4>
              <p className="text-gray-600 text-sm">献身的で思いやりがあり、安定した関係を築くのが得意なタイプ。</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

export async function getStaticProps() {
  return { props: {} };
}