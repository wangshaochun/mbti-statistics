import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import type { BlogPostMeta } from '../lib/blog';

interface BlogPreviewProps {
  limit?: number;
  showTitle?: boolean;
  posts?: BlogPostMeta[];
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ 
  limit = 3, 
  showTitle = true,
  posts = []
}) => {
  const latestPosts = posts
    .slice()
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              最新のブログ記事
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MBTI性格診断に関する最新の知見や実践的なアドバイスをお届けします
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              {/* 記事画像 */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                  <h3 className="text-white text-lg font-semibold text-center px-4 line-clamp-3">
                    {post.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                {/* タイトル */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  <Link 
                    href={`/blog/${post.id}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* 概要 */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* メタ情報 */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}分</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(post.publishDate)}</span>
                  </div>
                </div>

                {/* タグ */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag: string) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* 続きを読むボタン */}
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
                >
                  続きを読む 
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* 全記事を見るボタン */}
        {showTitle && (
          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              すべての記事を見る
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPreview;
