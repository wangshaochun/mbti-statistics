import Seo from '../components/Seo';
import { FAQStructuredData, BreadcrumbStructuredData } from '../components/StructuredData';
import Link from 'next/link';
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useState } from 'react';
import { faqData  } from '../data/faqs';

 
const categories = [
  'すべて',
  'MBTIの基礎知識',
  '診断に関する質問',
  'タイプ別の悩み',
  '相性・人間関係',
  'キャリア・職業選択',
  'よくある誤解'
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'すべて' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <Seo 
        title="MBTI よくある質問（FAQ） | 診断・相性・キャリアの疑問を解決"
        description="MBTIに関するよくある質問と回答。診断の正確性、タイプの変化、相性診断、職業選択など、あなたの疑問を解決します。"
      />
      <FAQStructuredData 
        faqs={faqData.map(faq => ({
          question: faq.question,
          answer: faq.answer
        }))}
      />
      <BreadcrumbStructuredData 
        items={[
          { name: 'ホーム', url: 'https://mbti-aisho.com/' },
          { name: 'FAQ', url: 'https://mbti-aisho.com/faq' }
        ]}
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            ホームに戻る
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            よくある質問（FAQ）
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MBTIに関する疑問や質問にお答えします。
          </p>
        </div>

        {/* Search Box */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="質問を検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-600">該当する質問が見つかりませんでした。</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('すべて');
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                フィルターをリセット
              </button>
            </div>
          ) : (
            filteredFAQs.map(faq => {
              const isOpen = openItems.has(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2">
                      <div className="pl-4 border-l-4 border-blue-500">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Related Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/types"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
          >
            <h3 className="font-bold text-gray-900 mb-2">16タイプ一覧</h3>
            <p className="text-sm text-gray-600">各タイプの詳細な特徴を確認</p>
          </Link>
          
          <Link 
            href="/compatibility"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
          >
            <h3 className="font-bold text-gray-900 mb-2">相性診断</h3>
            <p className="text-sm text-gray-600">タイプ別の相性を詳しく分析</p>
          </Link>
          
          <Link 
            href="/diagnostics"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
          >
            <h3 className="font-bold text-gray-900 mb-2">無料診断</h3>
            <p className="text-sm text-gray-600">自分のMBTIタイプを診断</p>
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">まだ質問が解決しませんでしたか？</h3>
          <p className="text-blue-100 mb-6">
            各タイプの詳細ページやブログ記事でさらに詳しい情報をご覧いただけます
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              ブログを見る
            </Link>
            <Link
              href="/types"
              className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              タイプ一覧を見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

