import Seo from '../../components/Seo';
import Link from 'next/link';
import { ArrowLeft, Heart, Users, Briefcase, AlertTriangle, CheckCircle, TrendingUp, MessageCircle } from 'lucide-react';
import { allTypes, typeData } from '../../data/types';
import { compatibilityDatabase, CompatibilityDetail } from '../../data/compatibility_pairs';
import CompatibilityRadar from '../../components/charts/CompatibilityRadar';


// デフォルトの相性データを生成する関数
function getDefaultCompatibility(type1: string, type2: string): CompatibilityDetail {
  const t1Data = typeData[type1.toUpperCase()];
  
  // 相性レベルを判定
  let overallRating = 70;
  let loveRating = 70;
  let friendshipRating = 70;
  let workRating = 70;
  
  if (t1Data?.compatibility?.excellent.includes(type2.toUpperCase())) {
    overallRating = 90;
    loveRating = 92;
    friendshipRating = 90;
    workRating = 88;
  } else if (t1Data?.compatibility?.good.includes(type2.toUpperCase())) {
    overallRating = 75;
    loveRating = 78;
    friendshipRating = 75;
    workRating = 73;
  } else if (t1Data?.compatibility?.challenging.includes(type2.toUpperCase())) {
    overallRating = 55;
    loveRating = 55;
    friendshipRating = 58;
    workRating = 60;
  }
  
  return {
    type1: type1.toUpperCase(),
    type2: type2.toUpperCase(),
    overallRating,
    loveCompatibility: {
      rating: loveRating,
      strengths: [
        '互いの個性を尊重し合える関係性',
        '異なる視点で新しい発見がある',
        '成長の機会が豊富にある'
      ],
      challenges: [
        'コミュニケーションスタイルの違いを理解する必要がある',
        '価値観の優先順位が異なる場合がある',
        '互いの強みを活かすための調整が必要'
      ],
      advice: [
        '定期的に率直な対話の時間を設ける',
        '互いの違いを学びの機会として捉える',
        '共通の目標や価値観を見つけ育てる'
      ]
    },
    friendshipCompatibility: {
      rating: friendshipRating,
      strengths: [
        '互いの視点から学ぶことが多い',
        '多様な活動を楽しめる可能性がある',
        '長期的な成長を共有できる'
      ],
      challenges: [
        '興味や関心の方向性が異なる',
        '社交スタイルやペースの違い',
        '理解し合うための努力が必要'
      ],
      advice: [
        '共通の興味や趣味を探す',
        '互いのペースを尊重する',
        '定期的な交流で関係を深める'
      ]
    },
    workCompatibility: {
      rating: workRating,
      strengths: [
        '異なる強みで補完し合える可能性',
        '多角的な視点で問題を解決できる',
        '役割分担で効率を高められる'
      ],
      challenges: [
        '作業スタイルの違いで摩擦が生じる',
        '優先順位の判断が異なる',
        'コミュニケーション方法の調整が必要'
      ],
      advice: [
        '明確な役割分担と責任範囲を設定',
        '定期的なコミュニケーションで認識を合わせる',
        '互いの働き方を理解し尊重する'
      ]
    },
    cognitiveDynamics: `${type1.toUpperCase()}と${type2.toUpperCase()}は異なる認知機能の優先順位を持ち、互いに学び合える関係性です。`,
    realLifeExample: '多様性のある関係は、互いの成長と視野の拡大につながります。'
  };
}

export default function CompatibilityPairPage({ compatibility }: { pair: string; compatibility: CompatibilityDetail }) {
  const { type1, type2 } = compatibility;
  const type1Data = typeData[type1];
  const type2Data = typeData[type2];

  const getRatingColor = (rating: number) => {
    if (rating >= 90) return 'text-green-600 bg-green-50 border-green-200';
    if (rating >= 75) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (rating >= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getRatingLabel = (rating: number) => {
    if (rating >= 90) return '★★★ 抜群の相性';
    if (rating >= 75) return '★★☆ 良好な相性';
    if (rating >= 60) return '★☆☆ 要努力の相性';
    return '☆☆☆ 挑戦的な相性';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12">
      <Seo 
        title={`${type1} × ${type2} 相性分析 - 恋愛・友情・職場の詳細診断`}
        description={`${type1}と${type2}の相性を徹底分析。恋愛、友情、職場それぞれの観点から、強み、課題、アドバイスを詳しく解説します。`}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/compatibility" className="flex items-center text-purple-600 hover:text-purple-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            相性診断一覧に戻る
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Link href={`/type/${type1.toLowerCase()}`} className="group">
              <div className="w-24 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <span className="text-2xl font-bold text-white">{type1}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2 group-hover:text-purple-600">{type1Data?.name}</p>
            </Link>
            
            <Heart className="w-10 h-10 text-pink-500" />
            
            <Link href={`/type/${type2.toLowerCase()}`} className="group">
              <div className="w-24 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <span className="text-2xl font-bold text-white">{type2}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2 group-hover:text-pink-600">{type2Data?.name}</p>
            </Link>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {type1} × {type2} 相性分析
          </h1>
          
          <div className={`inline-flex items-center px-6 py-3 rounded-full border-2 ${getRatingColor(compatibility.overallRating)}`}>
            <TrendingUp className="w-5 h-5 mr-2" />
            <span className="font-bold">総合相性: {compatibility.overallRating}%</span>
          </div>
        </div>

        {/* Overall Rating */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {getRatingLabel(compatibility.overallRating)}
          </h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-1000"
              style={{ width: `${compatibility.overallRating}%` }}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
            <div className="flex-1">
              {compatibility.cognitiveDynamics && (
                <p className="text-gray-700 leading-relaxed">{compatibility.cognitiveDynamics}</p>
              )}
            </div>
            <div className="flex-shrink-0">
               <CompatibilityRadar 
                 love={compatibility.loveCompatibility.rating}
                 friendship={compatibility.friendshipCompatibility.rating}
                 work={compatibility.workCompatibility.rating}
                 type1={compatibility.type1}
                 type2={compatibility.type2}
               />
            </div>
          </div>
        </div>

        {/* Love Compatibility */}
        <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 shadow-lg mb-8 border border-pink-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-pink-900 flex items-center">
              <Heart className="w-6 h-6 mr-3" />
              恋愛相性
            </h2>
            <div className={`px-4 py-2 rounded-lg border-2 ${getRatingColor(compatibility.loveCompatibility.rating)}`}>
              <span className="font-bold">{compatibility.loveCompatibility.rating}%</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-green-800 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                強み・魅力
              </h3>
              <ul className="space-y-2">
                {compatibility.loveCompatibility.strengths.map((strength, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-orange-800 mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                注意点・課題
              </h3>
              <ul className="space-y-2">
                {compatibility.loveCompatibility.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="mr-2 text-orange-600">!</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <h3 className="font-bold text-purple-800 mb-3 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              関係を深めるアドバイス
            </h3>
            <ul className="space-y-2">
              {compatibility.loveCompatibility.advice.map((advice, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="mr-2 text-purple-600">→</span>
                  <span>{advice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Friendship Compatibility */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg mb-8 border border-blue-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-blue-900 flex items-center">
              <Users className="w-6 h-6 mr-3" />
              友情相性
            </h2>
            <div className={`px-4 py-2 rounded-lg border-2 ${getRatingColor(compatibility.friendshipCompatibility.rating)}`}>
              <span className="font-bold">{compatibility.friendshipCompatibility.rating}%</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-green-800 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                強み・魅力
              </h3>
              <ul className="space-y-2">
                {compatibility.friendshipCompatibility.strengths.map((strength, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-orange-800 mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                注意点・課題
              </h3>
              <ul className="space-y-2">
                {compatibility.friendshipCompatibility.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="mr-2 text-orange-600">!</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <h3 className="font-bold text-blue-800 mb-3 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              より良い友情を築くアドバイス
            </h3>
            <ul className="space-y-2">
              {compatibility.friendshipCompatibility.advice.map((advice, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="mr-2 text-blue-600">→</span>
                  <span>{advice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Work Compatibility */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg mb-8 border border-purple-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-purple-900 flex items-center">
              <Briefcase className="w-6 h-6 mr-3" />
              職場相性
            </h2>
            <div className={`px-4 py-2 rounded-lg border-2 ${getRatingColor(compatibility.workCompatibility.rating)}`}>
              <span className="font-bold">{compatibility.workCompatibility.rating}%</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-green-800 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                強み・シナジー
              </h3>
              <ul className="space-y-2">
                {compatibility.workCompatibility.strengths.map((strength, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-orange-800 mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                注意点・課題
              </h3>
              <ul className="space-y-2">
                {compatibility.workCompatibility.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="mr-2 text-orange-600">!</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <h3 className="font-bold text-purple-800 mb-3 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              効果的な協働のためのアドバイス
            </h3>
            <ul className="space-y-2">
              {compatibility.workCompatibility.advice.map((advice, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="mr-2 text-purple-600">→</span>
                  <span>{advice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Real Life Example */}
        {compatibility.realLifeExample && (
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg mb-8 border border-yellow-200">
            <h2 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
              <Users className="w-6 h-6 mr-3" />
              実例・エピソード
            </h2>
            <p className="text-gray-700 leading-relaxed">{compatibility.realLifeExample}</p>
          </div>
        )}

        {/* Related Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link 
            href={`/type/${type1.toLowerCase()}`}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-purple-100"
          >
            <h3 className="font-bold text-purple-900 mb-2">{type1} タイプの詳細</h3>
            <p className="text-sm text-gray-600">{type1Data?.name}の特徴、強み、適職などを詳しく見る</p>
          </Link>
          
          <Link 
            href={`/type/${type2.toLowerCase()}`}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-pink-100"
          >
            <h3 className="font-bold text-pink-900 mb-2">{type2} タイプの詳細</h3>
            <p className="text-sm text-gray-600">{type2Data?.name}の特徴、強み、適職などを詳しく見る</p>
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">あなたの相性を診断してみませんか？</h3>
          <p className="text-purple-100 mb-6">
            無料診断で自分のMBTIタイプを知り、理想の相性を見つけましょう
          </p>
          <Link
            href="/diagnostics"
            className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            診断を始める
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const types = allTypes;
  const paths: { params: { pair: string } }[] = [];
  
  // 全ての組み合わせを生成 (双方向)
  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < types.length; j++) {
      if (i === j) continue;
      const type1 = types[i];
      const type2 = types[j];
      // lowercaseで生成
      paths.push({ params: { pair: `${type1.toLowerCase()}-${type2.toLowerCase()}` } });
    }
  }
  
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { pair: string } }) {
  const [type1, type2] = params.pair.split('-');
  
  // データベースから相性データを取得（両方向チェック）
  const key1 = `${type1}-${type2}`;
  const key2 = `${type2}-${type1}`;
  
  let compatibility = compatibilityDatabase[key1] || compatibilityDatabase[key2];
  
  // データがない場合はデフォルトを生成
  if (!compatibility) {
    compatibility = getDefaultCompatibility(type1, type2);
  }
  
  return {
    props: {
      pair: params.pair,
      compatibility
    }
  };
}

