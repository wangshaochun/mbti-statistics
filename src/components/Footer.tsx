// React 17+ 新的 JSX 运行时无需显式导入 React
import { Heart, Users, BarChart3, Brain } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    'MBTI基本情報': [
      { label: 'MBTI一覧', path: '/types' },
      { label: '16タイプの特徴', path: '/types' },
      { label: 'MBTI心理機能', path: '/types' },
      { label: 'MBTI分類', path: '/types' },
    ],
    '相性・恋愛': [
      { label: '相性一覧', path: '/compatibility' },
      { label: 'MBTI恋愛相性', path: '/compatibility' },
      { label: '仕事での相性', path: '/compatibility' },
      { label: '友情の相性', path: '/compatibility' },
    ],
    '統計・データ': [
      { label: 'MBTI割合', path: '/statistics' },
      { label: 'タイプ別人気ランキング', path: '/statistics' },
      { label: '職業別分布', path: '/statistics' },
      { label: '年代別傾向', path: '/statistics' },
    ],
    'エンタメ・キャラ': [
      { label: 'アニメキャラMBTI', path: '/characters' },
      { label: 'ワンピースMBTI', path: '/characters?series=onepiece' },
      { label: 'ハイキューMBTI', path: '/characters?series=haikyuu' },
      { label: '芸能人MBTI', path: '/characters?type=celebrities' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path + link.label}>
                    <Link
                      href={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MBTI診断ガイド</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <Brain className="w-4 h-4" />
                  <span>16タイプ分析</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>相性診断</span>
                </span>
                <span className="flex items-center space-x-1">
                  <BarChart3 className="w-4 h-4" />
                  <span>統計データ</span>
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm mt-6">
            <p>© 2025 MBTI診断ガイド. All rights reserved.</p>
            <p className="mt-1">※ このサイトはMBTI理論に基づく性格分析ツールです。公式のMBTI診断ではありません。</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;