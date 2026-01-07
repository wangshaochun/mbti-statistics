import Seo from '../../components/Seo';
import Link from 'next/link';
import { ArrowLeft, Heart, Users, Briefcase, AlertTriangle, CheckCircle, TrendingUp, MessageCircle } from 'lucide-react';
import { allTypes, typeData } from '../../data/types';
import { compatibilityDatabase, CompatibilityDetail } from '../../data/compatibility_pairs';
import CompatibilityRadar from '../../components/charts/CompatibilityRadar';


// 相性データベース - 主要な組み合わせ
const _legacy_compatibilityDatabase: Record<string, CompatibilityDetail> = {
  'infj-enfp': {
    type1: 'INFJ',
    type2: 'ENFP',
    overallRating: 95,
    loveCompatibility: {
      rating: 98,
      strengths: [
        '深い感情的な共鳴と豊かな対話が自然に生まれる',
        'INFJの洞察力とENFPの創造性が完璧に補完し合う',
        '互いの理想主義と価値観を深く理解し尊重できる',
        '感情面でのサポートと励ましが自然に行われる',
        '精神的な成長を共に追求できる関係性'
      ],
      challenges: [
        'ENFPの衝動性とINFJの計画性の違いで摩擦が生じることがある',
        '締め切り管理や実務面での責任分担が曖昧になりがち',
        'ENFPが多数のプロジェクトに手を出し、INFJが負担を感じる',
        '双方が感情的になりすぎて現実的な問題解決を後回しにする'
      ],
      advice: [
        '実務的なタスクは明確に分担し、定期的に確認する',
        'ENFPは計画を立ててから行動する習慣を、INFJは柔軟性を持つ',
        '感情的な対話と実務的な話し合いの時間を分ける',
        '互いの処理速度の違いを認め、ペースを尊重する'
      ]
    },
    friendshipCompatibility: {
      rating: 96,
      strengths: [
        '深い心の繋がりと理解が自然に育まれる',
        '互いのアイデアや夢を応援し合える関係',
        '長時間の対話でも疲れない心地よさ',
        '価値観や人生観を語り合える貴重な存在'
      ],
      challenges: [
        'ENFPの社交的な活動にINFJがついていけないことがある',
        'INFJの内向的な時間の必要性をENFPが理解しづらい',
        '計画の立て方や時間管理のスタイルが異なる'
      ],
      advice: [
        '社交活動と静かな時間のバランスを話し合う',
        '互いのエネルギー補給方法を理解し尊重する',
        '約束は具体的に決め、柔軟に調整する余地も残す'
      ]
    },
    workCompatibility: {
      rating: 92,
      strengths: [
        'INFJの戦略的思考とENFPの創造的アイデアが革新を生む',
        '人間関係の構築と維持が得意な組み合わせ',
        'プロジェクトに意味と情熱を注入できる',
        '互いの強みを活かした役割分担が自然にできる'
      ],
      challenges: [
        '締め切り管理と実行のディテールが弱くなりがち',
        'ENFPが複数のアイデアを出し、INFJが絞り込めない',
        '感情的な配慮が優先され、厳しい判断が遅れる'
      ],
      advice: [
        '第三者（Te強いタイプ）を巻き込み実行管理を強化する',
        'アイデア発散と収束のフェーズを明確に分ける',
        '定期的なマイルストーン設定と進捗確認を習慣化する'
      ]
    },
    cognitiveDynamics: 'INFJの主機能Ni（内向的直観）とENFPの主機能Ne（外向的直観）は、共に直観（N）を重視しながらも、INFJが一つの深いビジョンに収束するのに対し、ENFPは多様な可能性を広げる。この補完性が創造的な化学反応を生む。',
    realLifeExample: '多くのクリエイティブな夫婦や起業家ペアがこの組み合わせ。互いの理想を支え合いながら、社会的なインパクトのあるプロジェクトを実現するケースが多い。'
  },
  'intj-entp': {
    type1: 'INTJ',
    type2: 'ENTP',
    overallRating: 88,
    loveCompatibility: {
      rating: 85,
      strengths: [
        '知的な刺激と戦略的思考で惹かれ合う',
        '互いの論理性と独立性を尊重できる',
        '深い議論と概念的な対話を楽しめる',
        '長期的なビジョンを共有できる'
      ],
      challenges: [
        'ENTPの柔軟性とINTJの計画性の違いで衝突する',
        '感情表現が少なく、関係が冷たく感じられることがある',
        'ENTPの議論好きがINTJには非生産的に見える',
        '双方が譲らず、議論がヒートアップしがち'
      ],
      advice: [
        '定期的に感情を言語化し共有する時間を設ける',
        '議論のゴールを事前に設定し、結論に向かう',
        'ENTPは実行を、INTJは柔軟性を意識的に高める',
        '互いの強みを認め合い、役割分担を明確にする'
      ]
    },
    friendshipCompatibility: {
      rating: 93,
      strengths: [
        '知的な対話と議論を存分に楽しめる最高の相手',
        '互いのアイデアを発展させ合える関係',
        '長期的なプロジェクトを共に進められる',
        '独立性を尊重し合える距離感'
      ],
      challenges: [
        '感情的なサポートが不足しがち',
        'ENTPの社交性とINTJの内向性の違い',
        '計画の立て方で意見が対立する'
      ],
      advice: [
        '知的交流だけでなく、時には感情面も共有する',
        '互いのペースと社交スタイルを尊重する',
        '議論を楽しみつつも、決定事項を文書化する'
      ]
    },
    workCompatibility: {
      rating: 95,
      strengths: [
        '戦略立案と革新的アイデアの完璧な組み合わせ',
        'INTJの実行力とENTPの柔軟性が補完し合う',
        '複雑な問題を多角的に分析し解決できる',
        '高い基準を共有し質の高い成果を出せる'
      ],
      challenges: [
        '意思決定のスピード感が異なる',
        'ENTPが複数の方向性を提案し、INTJが混乱する',
        '細部の実行管理が双方とも苦手'
      ],
      advice: [
        '役割分担を明確化：INTJが戦略と実行、ENTPがアイデアと外部調整',
        '定期的なレビューで方向性を確認し軌道修正する',
        '実務担当者を加えて実行面を強化する'
      ]
    },
    cognitiveDynamics: 'INTJのNi-Teは収束的で計画的、ENTPのNe-Tiは発散的で柔軟。この対照的なアプローチが、時に衝突を生むが、適切に統合されれば圧倒的な相互補完となる。',
    realLifeExample: 'シリコンバレーの起業家ペアに多い組み合わせ。戦略家と革新者が組むことで、破壊的なイノベーションを生み出すケースが多い。'
  },
  'istj-esfj': {
    type1: 'ISTJ',
    type2: 'ESFJ',
    overallRating: 90,
    loveCompatibility: {
      rating: 92,
      strengths: [
        '実務的価値観と責任感を深く共有できる',
        '安定した家庭生活を共に築ける',
        '互いの誠実さと献身性を尊重し合える',
        'ISTJの計画性とESFJの対人スキルが補完的'
      ],
      challenges: [
        'ISTJの感情表現の少なさにESFJが不安を感じる',
        'ESFJの社交的な活動にISTJが疲れる',
        '変化への対応で意見が対立することがある'
      ],
      advice: [
        'ISTJは意識的に感謝や愛情を言葉で伝える',
        'ESFJは一人の時間の必要性を理解する',
        '社交活動と静かな時間のバランスを調整する',
        '互いの貢献を認め合う習慣を作る'
      ]
    },
    friendshipCompatibility: {
      rating: 88,
      strengths: [
        '信頼性の高い長期的な友情を築ける',
        '実務的な協力と相互支援が自然にできる',
        '共通の価値観で安心感を持てる',
        '計画的な活動を楽しめる'
      ],
      challenges: [
        'ISTJの内向性とESFJの外向性の違い',
        '感情的な交流の深さに差がある',
        'ESFJの社交的な期待にISTJが応えられない'
      ],
      advice: [
        '互いの社交スタイルを理解し尊重する',
        '計画的な交流と柔軟な対応を組み合わせる',
        '共通の趣味や活動を見つける'
      ]
    },
    workCompatibility: {
      rating: 94,
      strengths: [
        'ISTJの計画・品質管理とESFJの対外調整が完璧に補完',
        '責任感が強く、確実にタスクを完遂できる',
        '組織の安定運営に不可欠な組み合わせ',
        '細部への注意と人間関係の維持を両立できる'
      ],
      challenges: [
        '革新や変化への対応が遅れがち',
        'ISTJの論理とESFJの感情的配慮で優先順位が異なる',
        '新しいアイデアの採用に慎重すぎる'
      ],
      advice: [
        '定期的に外部の視点を取り入れ改善する',
        '役割分担を明確化：ISTJは内部管理、ESFJは外部対応',
        'イノベーション担当者を加えてバランスを取る'
      ]
    },
    cognitiveDynamics: '両者ともSi（内向的感覚）を持ち、過去の経験と確立された方法を重視する。ISTJはTe（外向的思考）で効率を、ESFJはFe（外向的感情）で調和を追求し、実務と人間関係のバランスを実現する。',
    realLifeExample: '伝統的な企業や家族経営ビジネスで成功するペア。安定性と信頼性を重視する環境で長期的な関係を築くケースが多い。'
  }
};

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

