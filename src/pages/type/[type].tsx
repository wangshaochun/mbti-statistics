
import Seo from '../../components/Seo';
import Link from 'next/link';
import { ArrowLeft, Users, Heart, Briefcase, Star, HeartHandshake, AlertTriangle, MessageCircle, Sparkles, Newspaper } from 'lucide-react';
import { allTypes, typeData, TypeInfo } from '../../data/types';
import { blogPosts, BlogPost } from '../../data/blogs';

export default function TypeDetailPage({ type, data }: { type: string; data: TypeInfo | null }) {
  const upperType = type ? type.toUpperCase() : undefined;
  const currentType = data;
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  const relatedBlogs: BlogPost[] = upperType
    ? blogPosts
        .filter(post =>
          post.tags.some(tag => tag.toUpperCase() === upperType)
        )
        .slice(0, 6)
    : [];

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
          <Link href="/types" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            タイプ一覧に戻る
          </Link>
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
                    <Link
                      key={t}
                      href={`/type/${t.toLowerCase()}`}
                      className="px-3 py-1 bg-green-200 text-green-800 rounded-lg text-sm font-medium hover:bg-green-300 transition-colors"
                    >
                      {t}
                    </Link>
                  ))}
                </div>
                <p className="text-green-700 text-sm mt-3">深い理解と成長を促し合える関係</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">★★☆ 良好な相性</h3>
                <div className="flex flex-wrap gap-2">
                  {currentType.compatibility.good.map((t: string) => (
                    <Link
                      key={t}
                      href={`/type/${t.toLowerCase()}`}
                      className="px-3 py-1 bg-blue-200 text-blue-800 rounded-lg text-sm font-medium hover:bg-blue-300 transition-colors"
                    >
                      {t}
                    </Link>
                  ))}
                </div>
                <p className="text-blue-700 text-sm mt-3">安定した良い関係を築ける</p>
              </div>
              <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4">★☆☆ 要注意の相性</h3>
                <div className="flex flex-wrap gap-2">
                  {currentType.compatibility.challenging.map((t: string) => (
                    <Link
                      key={t}
                      href={`/type/${t.toLowerCase()}`}
                      className="px-3 py-1 bg-red-200 text-red-800 rounded-lg text-sm font-medium hover:bg-red-300 transition-colors"
                    >
                      {t}
                    </Link>
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

        {/* Love Tendencies */}
        {currentType.loveTendencies && (
          <div className="mb-12">
            <div className="bg-pink-50 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-pink-800 mb-4 flex items-center">
                <HeartHandshake className="w-6 h-6 mr-3" />
                恋愛傾向とアドバイス
              </h2>
              {currentType.loveTendencies.approach && (
                <p className="text-pink-900 text-sm md:text-base mb-6 leading-relaxed">
                  {currentType.loveTendencies.approach}
                </p>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-pink-900 mb-3">得意なスタイル</h3>
                  <ul className="space-y-2 text-sm text-pink-900">
                    {currentType.loveTendencies.strengths.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mt-1 mr-2 text-pink-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-900 mb-3">課題になりやすい点</h3>
                  <ul className="space-y-2 text-sm text-pink-900">
                    {currentType.loveTendencies.challenges.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mt-1 mr-2 text-pink-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-900 mb-3">長続きのヒント</h3>
                  <ul className="space-y-2 text-sm text-pink-900">
                    {currentType.loveTendencies.advice.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mt-1 mr-2 text-pink-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {currentType.loveTendencies.idealPartnerTraits && currentType.loveTendencies.idealPartnerTraits.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-pink-800 mb-2">相性が良いと感じやすい特徴</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentType.loveTendencies.idealPartnerTraits.map((trait, idx) => (
                      <span key={idx} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs md:text-sm">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Stress Response */}
        {currentType.stressResponse && (
          <div className="mb-12">
            <div className="bg-red-50 rounded-2xl p-8 shadow-sm border border-red-100">
              <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3" />
                ストレスサインとセルフケア
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-sm text-red-900">
                <div>
                  <h3 className="font-semibold mb-2">現れやすいサイン</h3>
                  <ul className="space-y-2">
                    {currentType.stressResponse.signs.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">主なトリガー</h3>
                  <ul className="space-y-2">
                    {currentType.stressResponse.triggers.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">おすすめ対処法</h3>
                  <ul className="space-y-2">
                    {currentType.stressResponse.copingStrategies.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                {currentType.stressResponse.avoid && currentType.stressResponse.avoid.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2">避けたい行動</h3>
                    <ul className="space-y-2">
                      {currentType.stressResponse.avoid.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Communication Style */}
        {currentType.communicationStyle && (
          <div className="mb-12">
            <div className="bg-blue-50 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3" />
                コミュニケーションの特徴
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-900">
                <div>
                  <h3 className="font-semibold mb-2">強み</h3>
                  <ul className="space-y-2">
                    {currentType.communicationStyle.strengths.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">課題</h3>
                  <ul className="space-y-2">
                    {currentType.communicationStyle.challenges.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">周囲が意識すると良いこと</h3>
                  <ul className="space-y-2">
                    {currentType.communicationStyle.tipsForOthers.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">本人へのヒント</h3>
                  <ul className="space-y-2">
                    {currentType.communicationStyle.tipsForSelf.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Role */}
        {currentType.teamRole && (
          <div className="mb-12">
            <div className="bg-indigo-50 rounded-2xl p-8 shadow-sm border border-indigo-100">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-3" />
                チームでの役割
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm text-indigo-900">
                <div>
                  <h3 className="font-semibold mb-2">得意なポジション</h3>
                  <ul className="space-y-2">
                    {currentType.teamRole.preferredRoles.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">協働のコツ</h3>
                  <ul className="space-y-2">
                    {currentType.teamRole.collaborationTips.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                {currentType.teamRole.leadershipNotes && currentType.teamRole.leadershipNotes.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2">リーダーシップメモ</h3>
                    <ul className="space-y-2">
                      {currentType.teamRole.leadershipNotes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Famous People */}
        {currentType.famousPeople && (
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-yellow-500" />
                代表的な人物例
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentType.famousPeople.real && currentType.famousPeople.real.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">実在の人物</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentType.famousPeople.real.map((person, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {person}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {currentType.famousPeople.fictional && currentType.famousPeople.fictional.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">架空のキャラクター</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentType.famousPeople.fictional.map((person, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {person}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mb-16">
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

        {/* Related Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">他の人気タイプも見てみる</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Show popular types excluding current one */}
            {[
              { type: 'INFP', name: '仲介者', desc: '詩的で親切な利他主義者', color: 'bg-green-500' },
              { type: 'ENFP', name: '広報運動家', desc: '情熱的で創造的な触媒', color: 'bg-blue-500' },
              { type: 'INTJ', name: '建築家', desc: '戦略的な独立志向者', color: 'bg-purple-500' },
              { type: 'ISFJ', name: '擁護者', desc: '思いやり深い守り手', color: 'bg-orange-500' }
            ]
              .filter(relatedType => relatedType.type !== upperType)
              .slice(0, 3)
              .map((relatedType, index) => (
                <Link 
                  key={index}
                  href={`/type/${relatedType.type.toLowerCase()}`}
                  className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-all group"
                >
                  <div className={`w-12 h-8 ${relatedType.color} rounded-lg flex items-center justify-center mb-3`}>
                    <span className="text-white text-sm font-bold">{relatedType.type}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {relatedType.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{relatedType.desc}</p>
                  <div className="mt-3 text-blue-600 text-sm font-medium">詳細を見る →</div>
                </Link>
              ))}
            
            {/* Link to all types */}
            <Link 
              href="/types"
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-all group flex flex-col items-center justify-center text-center"
            >
              <Users className="w-12 h-12 text-gray-400 mb-3 group-hover:text-blue-500 transition-colors" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                全16タイプ
              </h4>
              <p className="text-gray-600 text-sm">すべてのMBTIタイプを見る</p>
              <div className="mt-3 text-blue-600 text-sm font-medium">一覧を見る →</div>
            </Link>
          </div>
        </div>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
              <Newspaper className="w-6 h-6 mr-2 text-blue-600" />
              関連ブログ記事
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBlogs.map(post => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-all flex flex-col h-full"
                >
                  <div className="flex items-center justify-between text-xs text-blue-600 font-semibold mb-3">
                    <span className="uppercase tracking-wider">{upperType}</span>
                    <span>{formatDate(post.publishDate)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {post.excerpt.length > 80 ? `${post.excerpt.slice(0, 80)}…` : post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 text-xs text-gray-500 flex items-center justify-between">
                    <span>読了時間 {post.readTime}分</span>
                    <span className="flex flex-wrap gap-1 justify-end">
                      {post.tags.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
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
