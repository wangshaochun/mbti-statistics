import Seo from '../components/Seo';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Users, TrendingUp, AlertCircle } from 'lucide-react';
import { typeData, allTypes } from '../data/types';

// 职业分类数据
const careerCategories = [
  {
    name: 'ビジネス・経営',
    careers: [
      { name: '経営者・起業家', description: '組織を統率し戦略を立案', bestTypes: ['ENTJ', 'INTJ', 'ESTJ', 'ENTP'], goodTypes: ['ENFJ', 'ISTJ', 'ESTP'] },
      { name: '経営コンサルタント', description: '企業の課題を分析し解決策を提案', bestTypes: ['ENTJ', 'INTJ', 'ENTP', 'ESTJ'], goodTypes: ['INTP', 'ENFJ', 'ISTJ'] },
      { name: 'プロジェクトマネージャー', description: 'プロジェクト全体を管理し目標達成を導く', bestTypes: ['ENTJ', 'ESTJ', 'INTJ', 'ISTJ'], goodTypes: ['ENFJ', 'ENTP', 'ESTP'] },
      { name: '営業・セールス', description: '顧客との関係を築き製品やサービスを提案', bestTypes: ['ENFP', 'ESTP', 'ESFP', 'ENFJ'], goodTypes: ['ENTP', 'ESFJ', 'ENTJ'] },
      { name: 'マーケティング', description: '市場を分析し戦略的に製品を訴求', bestTypes: ['ENFP', 'ENTP', 'ENTJ', 'ENFJ'], goodTypes: ['INTJ', 'INFJ', 'ESTP'] },
    ]
  },
  {
    name: '教育・支援',
    careers: [
      { name: '教師・講師', description: '知識を伝え生徒の成長を支援', bestTypes: ['ENFJ', 'INFJ', 'ENFP', 'ESFJ'], goodTypes: ['ISFJ', 'INFP', 'ENTJ'] },
      { name: 'カウンセラー', description: '人々の悩みに寄り添い解決を支援', bestTypes: ['INFJ', 'INFP', 'ENFJ', 'ISFJ'], goodTypes: ['ENFP', 'ESFJ', 'INTP'] },
      { name: 'コーチ・トレーナー', description: '個人やチームの能力開発を支援', bestTypes: ['ENFJ', 'ENFP', 'ENTJ', 'ESFJ'], goodTypes: ['INFJ', 'ESTJ', 'ESTP'] },
      { name: '人事・HR', description: '採用や人材育成で組織を支える', bestTypes: ['ENFJ', 'ESFJ', 'INFJ', 'ENFP'], goodTypes: ['ISFJ', 'ENTJ', 'INFP'] },
      { name: 'ソーシャルワーカー', description: '社会福祉の現場で人々を支援', bestTypes: ['INFJ', 'ISFJ', 'ENFJ', 'INFP'], goodTypes: ['ESFJ', 'ENFP', 'ISFP'] },
    ]
  },
  {
    name: 'クリエイティブ・芸術',
    careers: [
      { name: 'デザイナー', description: 'ビジュアルや空間をデザインし価値を創造', bestTypes: ['ISFP', 'INFP', 'ENFP', 'INFJ'], goodTypes: ['INTJ', 'INTP', 'ESFP'] },
      { name: 'アーティスト', description: '独自の感性で作品を生み出す', bestTypes: ['INFP', 'ISFP', 'INFJ', 'ENFP'], goodTypes: ['INTP', 'INTJ', 'ESFP'] },
      { name: 'ライター・編集者', description: '言葉で情報や物語を伝える', bestTypes: ['INFP', 'INFJ', 'ENFP', 'INTP'], goodTypes: ['INTJ', 'ENTP', 'ISFJ'] },
      { name: 'クリエイティブディレクター', description: 'クリエイティブプロジェクトを統括', bestTypes: ['ENFP', 'ENTP', 'ENTJ', 'INFJ'], goodTypes: ['INTJ', 'ENFJ', 'INFP'] },
      { name: 'YouTuber・コンテンツクリエイター', description: 'オリジナルコンテンツで人々を魅了', bestTypes: ['ENFP', 'ESFP', 'ENTP', 'ESTP'], goodTypes: ['ENFJ', 'INFP', 'ESFJ'] },
    ]
  },
  {
    name: 'IT・技術',
    careers: [
      { name: 'プログラマー・エンジニア', description: 'コードを書きシステムを構築', bestTypes: ['INTP', 'INTJ', 'ISTP', 'ISTJ'], goodTypes: ['ENTP', 'INFJ', 'ENTJ'] },
      { name: 'データサイエンティスト', description: 'データを分析し価値ある洞察を導く', bestTypes: ['INTJ', 'INTP', 'ISTJ', 'ENTJ'], goodTypes: ['ENTP', 'INFJ', 'ESTJ'] },
      { name: 'システムアーキテクト', description: 'システム全体を設計し最適化', bestTypes: ['INTJ', 'INTP', 'ENTJ', 'ISTJ'], goodTypes: ['ENTP', 'ESTJ', 'INFJ'] },
      { name: 'UXデザイナー', description: 'ユーザー体験を研究し設計', bestTypes: ['INFJ', 'ENFP', 'INFP', 'INTP'], goodTypes: ['INTJ', 'ENFJ', 'ENTP'] },
      { name: 'セキュリティ専門家', description: 'システムの安全性を確保', bestTypes: ['INTJ', 'ISTJ', 'INTP', 'ISTP'], goodTypes: ['ENTJ', 'ESTJ', 'ENTP'] },
    ]
  },
  {
    name: '医療・ケア',
    careers: [
      { name: '看護師', description: '患者のケアと健康管理', bestTypes: ['ISFJ', 'ESFJ', 'INFJ', 'ISFP'], goodTypes: ['ENFJ', 'INFP', 'ESFP'] },
      { name: '医師', description: '診断と治療で人々の健康を守る', bestTypes: ['INTJ', 'ENTJ', 'ISTJ', 'INFJ'], goodTypes: ['INTP', 'ESTJ', 'ENFJ'] },
      { name: '心理学者', description: '人の心を研究し理解を深める', bestTypes: ['INFJ', 'INFP', 'INTP', 'INTJ'], goodTypes: ['ENFJ', 'ENFP', 'ENTP'] },
      { name: '理学療法士', description: '身体機能の回復を支援', bestTypes: ['ISFJ', 'ISFP', 'INFP', 'ESFJ'], goodTypes: ['INFJ', 'ISTJ', 'ENFJ'] },
      { name: '介護士', description: '高齢者や障がい者の生活を支援', bestTypes: ['ISFJ', 'ESFJ', 'ISFP', 'INFP'], goodTypes: ['ENFJ', 'INFJ', 'ESFP'] },
    ]
  },
  {
    name: '管理・事務',
    careers: [
      { name: '経理・会計', description: '財務管理と正確な記録', bestTypes: ['ISTJ', 'ISFJ', 'ESTJ', 'INTJ'], goodTypes: ['ESFJ', 'INTP', 'ENTJ'] },
      { name: '事務・アドミニストレーター', description: '組織運営を支える事務業務', bestTypes: ['ISFJ', 'ISTJ', 'ESFJ', 'ESTJ'], goodTypes: ['INFJ', 'ENFJ', 'INFP'] },
      { name: '品質管理', description: '製品やサービスの品質を保証', bestTypes: ['ISTJ', 'ESTJ', 'INTJ', 'ISFJ'], goodTypes: ['INTP', 'ENTJ', 'ISTP'] },
      { name: '監査', description: '財務や業務の適正性を検証', bestTypes: ['ISTJ', 'INTJ', 'ESTJ', 'INTP'], goodTypes: ['ENTJ', 'ISFJ', 'ENTP'] },
      { name: '公務員', description: '公共サービスで社会に貢献', bestTypes: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'], goodTypes: ['INFJ', 'ENFJ', 'INTJ'] },
    ]
  },
  {
    name: '研究・分析',
    careers: [
      { name: '研究者・科学者', description: '新しい知見を探求し発見', bestTypes: ['INTP', 'INTJ', 'INFJ', 'ISTJ'], goodTypes: ['ENTP', 'INFP', 'ISTP'] },
      { name: 'アナリスト', description: 'データや市場を分析し洞察を提供', bestTypes: ['INTJ', 'INTP', 'ISTJ', 'ENTJ'], goodTypes: ['ENTP', 'INFJ', 'ESTJ'] },
      { name: '戦略コンサルタント', description: '高度な戦略立案と問題解決', bestTypes: ['INTJ', 'ENTJ', 'ENTP', 'INTP'], goodTypes: ['INFJ', 'ESTJ', 'ENFJ'] },
      { name: '大学教授', description: '専門分野を研究し次世代を育成', bestTypes: ['INTJ', 'INTP', 'INFJ', 'ENTP'], goodTypes: ['ENTJ', 'INFP', 'ISTJ'] },
      { name: '発明家', description: '革新的なアイデアを形にする', bestTypes: ['INTP', 'ENTP', 'INTJ', 'INFP'], goodTypes: ['ENFP', 'ISTP', 'ENTJ'] },
    ]
  },
  {
    name: 'エンターテイメント・サービス',
    careers: [
      { name: 'イベントプロデューサー', description: 'イベント全体を企画し実行', bestTypes: ['ENFP', 'ENFJ', 'ESFP', 'ENTP'], goodTypes: ['ESTP', 'ENTJ', 'ESFJ'] },
      { name: '接客・ホスピタリティ', description: 'お客様に最高の体験を提供', bestTypes: ['ESFJ', 'ESFP', 'ENFJ', 'ISFJ'], goodTypes: ['ENFP', 'ESTP', 'ISFP'] },
      { name: '美容師・スタイリスト', description: '美しさを引き出すプロフェッショナル', bestTypes: ['ESFP', 'ISFP', 'ENFP', 'ESFJ'], goodTypes: ['ESTP', 'ISFJ', 'INFP'] },
      { name: 'MC・司会者', description: 'イベントを盛り上げ進行を管理', bestTypes: ['ENFP', 'ESFP', 'ENFJ', 'ESTP'], goodTypes: ['ENTP', 'ESFJ', 'ENTJ'] },
      { name: 'スポーツ選手・トレーナー', description: '身体能力を活かしパフォーマンスを発揮', bestTypes: ['ESTP', 'ISTP', 'ESFP', 'ENFP'], goodTypes: ['ESTJ', 'ISTJ', 'ENTP'] },
    ]
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12">
      <Seo 
        title="職業とMBTI相性分析 | あなたに最適なキャリアを見つける" 
        description="各職業とMBTI16タイプとの相性を詳しく分析。自分の性格に合った天職を見つけましょう。"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/types" className="flex items-center text-purple-600 hover:text-purple-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            タイプ一覧に戻る
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-6">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            職業とMBTI相性分析
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            あなたの性格タイプに合った職業を見つけましょう。各職業とMBTI16タイプとの相性を詳しく解説します。
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
            <div className="flex items-center mb-3">
              <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="font-bold text-gray-900">最適な職業</h3>
            </div>
            <p className="text-sm text-gray-600">
              性格の強みを最大限に活かせる職業を見つけることができます
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
            <div className="flex items-center mb-3">
              <Users className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="font-bold text-gray-900">タイプ別分析</h3>
            </div>
            <p className="text-sm text-gray-600">
              16タイプそれぞれの職業適性を詳しく解説しています
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
            <div className="flex items-center mb-3">
              <AlertCircle className="w-6 h-6 text-orange-600 mr-2" />
              <h3 className="font-bold text-gray-900">注意点も明示</h3>
            </div>
            <p className="text-sm text-gray-600">
              相性だけでなく、注意すべきポイントも理解できます
            </p>
          </div>
        </div>

        {/* Career Categories */}
        {careerCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-blue-600 rounded-full mr-4"></div>
              {category.name}
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              {category.careers.map((career, careerIndex) => (
                <div key={careerIndex} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{career.name}</h3>
                      <p className="text-gray-600 mb-4">{career.description}</p>
                      
                      <div className="flex flex-wrap gap-4">
                        <div>
                          <p className="text-sm font-semibold text-green-800 mb-2">★★★ 最適なタイプ</p>
                          <div className="flex flex-wrap gap-2">
                            {career.bestTypes.map((type, idx) => (
                              <Link
                                key={idx}
                                href={`/type/${type.toLowerCase()}`}
                                className="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors"
                              >
                                {type}
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-blue-800 mb-2">★★☆ 適性あり</p>
                          <div className="flex flex-wrap gap-2">
                            {career.goodTypes.map((type, idx) => (
                              <Link
                                key={idx}
                                href={`/type/${type.toLowerCase()}`}
                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                              >
                                {type}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* MBTI Type Overview */}
        <div className="mt-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 border border-purple-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            各MBTIタイプの職業傾向を詳しく見る
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {allTypes.map((typeKey) => {
              const type = typeData[typeKey.toUpperCase()];
              return (
                <Link
                  key={typeKey}
                  href={`/type/${typeKey}`}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all group"
                >
                  <div className="text-lg font-bold text-purple-600 group-hover:text-purple-700 mb-1">
                    {typeKey.toUpperCase()}
                  </div>
                  <div className="text-xs text-gray-600 group-hover:text-gray-700">
                    {type?.name || ''}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">自分のMBTIタイプを知りたい方へ</h3>
            <p className="text-purple-100 mb-6">
              無料診断であなたの性格タイプと最適な職業を見つけましょう
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
    </div>
  );
}

