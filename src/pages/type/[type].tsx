
import Seo from '../../components/Seo';
import { ArrowLeft, Users } from 'lucide-react';
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
        <div className="mb-8">
          <a href="/types" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            タイプ一覧に戻る
          </a>
        </div>
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold text-white">{upperType}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{currentType.name} ({upperType})</h1>
          <p className="text-xl text-gray-600 mb-4">{currentType.description}</p>
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            <Users className="w-4 h-4" />
            <span className="font-medium">{currentType.category}</span>
            <span>•</span>
            <span>{currentType.percentage}</span>
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
