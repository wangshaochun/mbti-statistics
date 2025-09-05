
import Seo from '../../components/Seo';
import { ArrowLeft, Users, Heart, Briefcase, Star } from 'lucide-react';
import { allTypes, typeData, TypeInfo } from '../../data/types';

export default function TypeDetailPage({ type, data }: { type: string; data: TypeInfo | null }) {
  const upperType = type ? type.toUpperCase() : undefined;
  const currentType = data;

  if (!currentType) {
    return (
      <div className="min-h-screen bg-white py-12">
        <Seo title={`タイプが見つかりません | MBTI 一覧`} description={`指定されたMBTIタイプが見つかりません。`} />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">タイプが見つかりません</h1>
          <a href="/types" className="text-blue-600 hover:text-blue-700">タイプ一覧に戻る</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <Seo title={`${currentType.name} (${upperType}) - MBTI タイプ詳細`} description={currentType.description} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <a href="/types" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            タイプ一覧に戻る
          </a>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold text-white">{upperType}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {currentType.name} ({upperType})
          </h1>
          {currentType.description && (
            <p className="text-xl text-gray-600 mb-4">{currentType.description}</p>
          )}
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            <Users className="w-4 h-4" />
            {currentType.category && <span className="font-medium">{currentType.category}</span>}
            {currentType.percentage && <>
              <span>•</span>
              <span>{currentType.percentage}</span>
            </>}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Characteristics */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">主な特徴</h2>
            <div className="space-y-4">
              {currentType.traits?.map((trait: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{trait}</span>
                </div>
              )) || <p className="text-sm text-gray-500">情報がありません。</p>}
            </div>
          </div>

          {/* Strengths & Weaknesses */}
          <div className="space-y-6">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                強み
              </h3>
              <div className="space-y-2">
                {currentType.strengths?.map((strength: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-700 text-sm">{strength}</span>
                  </div>
                )) || <p className="text-sm text-green-700">データ無し</p>}
              </div>
            </div>

            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-800 mb-4">注意すべき点</h3>
              <div className="space-y-2">
                {currentType.weaknesses?.map((weakness: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span className="text-red-700 text-sm">{weakness}</span>
                  </div>
                )) || <p className="text-sm text-red-700">データ無し</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Compatibility Section */}
        {currentType.compatibility && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
              <Heart className="w-6 h-6 mr-2" />
              相性分析
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">★★★ 抜群の相性</h3>
                <div className="flex flex-wrap gap-2">
                  {currentType.compatibility.excellent.map((t: string) => (
                    <span key={t} className="px-3 py-1 bg-green-200 text-green-800 rounded-lg text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-green-700 text-sm mt-3">深い理解と成長を促し合える関係</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">★★☆ 良好な相性</h3>
                <div className="flex flex-wrap gap-2">
                  {currentType.compatibility.good.map((t: string) => (
                    <span key={t} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-lg text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-blue-700 text-sm mt-3">安定した良い関係を築ける</p>
              </div>
              <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4">★☆☆ 要注意の相性</h3>
                <div className="flex flex-wrap gap-2">
                  {currentType.compatibility.challenging.map((t: string) => (
                    <span key={t} className="px-3 py-1 bg-red-200 text-red-800 rounded-lg text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-red-700 text-sm mt-3">理解し合うために努力が必要</p>
              </div>
            </div>
          </div>
        )}

        {/* Pair Anchors (static showcase) */}
        <div className="mb-12">
          <div id="pair-INFJ-ENFP" className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h3 className="text-xl font-bold mb-2">INFJ × ENFP — 魂の伴侶のような深い結びつき</h3>
            <p className="text-gray-700 text-sm whitespace-pre-line">INFJは深い洞察と安定性を提供し、ENFPは創造的エネルギーと情熱をもたらします。恋愛では互いに感情的な共鳴と豊かな対話が生まれやすく、友人・職場でも補完的な強みを発揮します。実行のディテールと締め切り管理だけ注意が必要です。</p>
          </div>
          <div id="pair-ISTJ-ESFJ" className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h3 className="text-xl font-bold mb-2">ISTJ × ESFJ — 揺るぎない現実の盟友</h3>
            <p className="text-gray-700 text-sm whitespace-pre-line">両者は実務的価値観と責任感を共有し、恋愛・友情・職場いずれにおいても実践的で安定した関係を築きます。ESFJが対外的な調整を担い、ISTJが裏方で計画と品質管理を行うことで高い信頼性を発揮します。</p>
          </div>
          <div id="pair-INTJ-ENTP" className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2">INTJ × ENTP — 火花散る知的な挑戦</h3>
            <p className="text-gray-700 text-sm whitespace-pre-line">知的な刺激と戦略的思考で惹かれ合う組み合わせ。友人や職場では圧倒的な相互補完を見せますが、恋愛では結論志向の違いが摩擦を生むことがあるため、議論を楽しむだけで終わらせない合意形成が重要です。</p>
          </div>
        </div>

        {/* Career Suggestions */}
        {currentType.careers && currentType.careers.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
              <Briefcase className="w-6 h-6 mr-2" />
              向いている職業
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {currentType.careers.map((career: string, index: number) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-gray-700 font-medium">{career}</div>
                  </div>
                ))}
              </div>
              {upperType && (
                <div className="text-center mt-6">
                  <p className="text-gray-600">
                    {upperType}タイプの方は、人と関わり成長を支援する職業で力を発揮します
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Additional Analysis */}
        <div className="max-w-6xl mx-auto px-0 sm:px-0 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Cognitive Functions */}
            <div className="bg-yellow-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">認知機能</h3>
              {currentType.cognitiveFunctions ? (
                <div className="space-y-3 text-sm text-gray-700">
                  <div><strong>支配（Dominant）:</strong> {currentType.cognitiveFunctions.dominant}</div>
                  <div><strong>補助（Auxiliary）:</strong> {currentType.cognitiveFunctions.auxiliary}</div>
                  <div><strong>第三（Tertiary）:</strong> {currentType.cognitiveFunctions.tertiary}</div>
                  <div><strong>劣勢（Inferior）:</strong> {currentType.cognitiveFunctions.inferior}</div>
                </div>
              ) : (
                <p className="text-sm text-gray-500">認知機能の情報はありません。</p>
              )}
            </div>

            {/* Work Environment */}
            <div className="bg-indigo-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">適した職場環境</h3>
              {currentType.workEnvironment && currentType.workEnvironment.length ? (
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                  {currentType.workEnvironment.map((env: string, idx: number) => (
                    <li key={idx}>{env}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">職場環境の情報はありません。</p>
              )}
            </div>

            {/* Leadership & Growth */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">リーダーシップ / 成長のヒント</h3>
              {currentType.leadershipStyle && (
                <div className="mb-3 text-sm text-gray-700">
                  <strong className="block">リーダーシップ:</strong>
                  <p>{currentType.leadershipStyle}</p>
                </div>
              )}
              {currentType.growthTips && currentType.growthTips.length ? (
                <div>
                  <strong className="block text-sm text-gray-700 mb-2">成長のヒント:</strong>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                    {currentType.growthTips.map((tip: string, idx: number) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-sm text-gray-500">成長のヒントは登録されていません。</p>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">あなたも自分のタイプを詳しく分析しませんか？</h3>
            <p className="text-blue-100 mb-6">
              無料診断で詳細な性格分析と相性診断を受けることができます
            </p>
            <a
              href="/diagnostics"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              診断を始める
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = allTypes.map(t => ({ params: { type: t } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { type: string } }) {
  const key = params.type.toUpperCase();
  const data: TypeInfo | null = (typeData as Record<string, TypeInfo>)[key] ?? null;
  return { props: { type: params.type, data } };
}
