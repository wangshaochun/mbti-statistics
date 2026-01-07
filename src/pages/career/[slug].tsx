import Seo from '../../components/Seo';
import { BreadcrumbStructuredData } from '../../components/StructuredData';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Star, TrendingUp, Target, Users, Award, BookOpen, ArrowRight } from 'lucide-react';
import { careerDatabase, allCareerSlugs, type CareerDetail } from '../../data/careers';
import { typeData } from '../../data/types';

export default function CareerDetailPage({ career }: { career: CareerDetail }) {
  const getRatingStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 5) return 'text-green-600 bg-green-50 border-green-200';
    if (rating >= 4) return 'text-blue-600 bg-blue-50 border-blue-200';
    return 'text-gray-600 bg-gray-50 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <Seo 
        title={`${career.name}に向いているMBTIタイプは？ | 適性・キャリアパス分析`}
        description={`${career.name}の適性をMBTIタイプ別に詳しく解説。必要なスキル、各タイプの強み・弱み、キャリアパス、成功者の例を紹介します。`}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'ホーム', url: 'https://mbti-aisho.com/' },
          { name: '職業分析', url: 'https://mbti-aisho.com/careers' },
          { name: career.name, url: `https://mbti-aisho.com/career/${career.slug}` }
        ]}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/careers" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            職業分析一覧に戻る
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full mb-4">
            {career.category}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {career.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {career.description}
          </p>
        </div>

        {/* Required Skills */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-6 h-6 mr-3 text-blue-600" />
            必要なスキル・能力
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {career.requiredSkills.map((skill, idx) => (
              <div key={idx} className="flex items-start bg-blue-50 rounded-lg p-4">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Suitable MBTI Types */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg mb-8 border border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Star className="w-6 h-6 mr-3 text-purple-600" />
            適性の高いMBTIタイプ
          </h2>
          <div className="space-y-4">
            {career.suitableTypes
              .sort((a, b) => b.rating - a.rating)
              .map((item) => {
                const type = typeData[item.type];
                return (
                  <div key={item.type} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                      <Link 
                        href={`/type/${item.type.toLowerCase()}`}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-16 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                          <span className="text-lg font-bold text-white">{item.type}</span>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                            {item.type} - {type?.name}
                          </div>
                          <div className={`text-sm font-bold ${getRatingColor(item.rating)}`}>
                            {getRatingStars(item.rating)}
                          </div>
                        </div>
                      </Link>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.reason}</p>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Type-specific Analysis */}
        {Object.keys(career.typeAnalysis).length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-green-600" />
              タイプ別詳細分析
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {Object.entries(career.typeAnalysis).map(([mbtiType, analysis]) => {
                const type = typeData[mbtiType];
                return (
                  <div key={mbtiType} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                      <Link 
                        href={`/type/${mbtiType.toLowerCase()}`}
                        className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                      >
                        <div className="w-16 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-xl font-bold text-white">{mbtiType}</span>
                        </div>
                        <div className="text-white">
                          <div className="text-2xl font-bold">{type?.name}</div>
                          <div className="text-sm text-white/80">{career.name}としての特性</div>
                        </div>
                      </Link>
                    </div>
                    
                    <div className="p-6 space-y-6">
                      {/* Strengths */}
                      <div>
                        <h3 className="font-bold text-green-800 mb-3 text-lg">強み・適性</h3>
                        <ul className="space-y-2">
                          {analysis.strengths.map((strength, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <span className="mr-2 text-green-600 font-bold">✓</span>
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Weaknesses */}
                      <div>
                        <h3 className="font-bold text-orange-800 mb-3 text-lg">課題・注意点</h3>
                        <ul className="space-y-2">
                          {analysis.weaknesses.map((weakness, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <span className="mr-2 text-orange-600 font-bold">!</span>
                              <span>{weakness}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Advice */}
                      <div className="bg-blue-50 rounded-xl p-4">
                        <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          キャリアアドバイス
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{analysis.advice}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Career Path */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
            一般的なキャリアパス
          </h2>
          <div className="space-y-4">
            {career.careerPath.map((stage, idx) => (
              <div key={idx} className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <span className="text-gray-800 font-medium">{stage}</span>
                  </div>
                </div>
                {idx < career.careerPath.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Famous People */}
        {career.famousPeople && career.famousPeople.length > 0 && (
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg mb-8 border border-yellow-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-6 h-6 mr-3 text-yellow-600" />
              この職業で成功した著名人
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {career.famousPeople.map((person, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
                    {person.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{person.name}</h3>
                  <div className="text-sm text-purple-600 font-bold mb-2">{person.type} タイプ</div>
                  <p className="text-sm text-gray-600">{person.achievement}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Careers */}
        {career.relatedCareers && career.relatedCareers.length > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">関連する職業</h2>
            <div className="flex flex-wrap gap-3">
              {career.relatedCareers.map((slug) => {
                const relatedCareer = careerDatabase[slug];
                if (!relatedCareer) return null;
                return (
                  <Link
                    key={slug}
                    href={`/career/${slug}`}
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
                  >
                    {relatedCareer.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">あなたに最適な職業を見つけましょう</h3>
          <p className="text-blue-100 mb-6">
            無料診断で自分のMBTIタイプを知り、キャリアの可能性を広げましょう
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/diagnostics"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              診断を始める
            </Link>
            <Link
              href="/careers"
              className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              他の職業を見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = allCareerSlugs.map(slug => ({
    params: { slug }
  }));
  
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const career = careerDatabase[params.slug];
  
  if (!career) {
    return { notFound: true };
  }
  
  return {
    props: {
      career
    }
  };
}

