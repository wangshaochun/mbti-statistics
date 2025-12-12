import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import Seo from '../../components/Seo';
import type { BlogPostMeta } from '../../lib/blog';

export async function getStaticProps() {
  const { getAllBlogMetas, getPopularTags } = await import('../../lib/blog');
  const posts = getAllBlogMetas();
  const popularTags = getPopularTags();
  return { props: { posts, popularTags } };
}

const BlogPage = ({ posts, popularTags }: { posts: BlogPostMeta[]; popularTags: string[] }) => {
  const router = useRouter();
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    if (!router.isReady) return;
    const tagFromQuery = typeof router.query.tag === 'string' ? router.query.tag : '';
    setSelectedTag(tagFromQuery);
  }, [router.isReady, router.query.tag]);

  const updateTag = (nextTag: string) => {
    setSelectedTag(nextTag);
    void router.push(
      {
        pathname: '/blog',
        query: nextTag ? { tag: nextTag } : {},
      },
      undefined,
      { shallow: true }
    );
  };

  const filteredPosts = posts
    .filter((post) => {
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      return matchesTag;
    })
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Seo 
        title="ブログ - MBTI診断ガイド"
        description="MBTI性格診断に関する専門的な記事や分析をお届けします。恋愛、職場、学習など様々な分野でのMBTI活用法を詳しく解説。"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* ヘッダーセクション */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              MBTIブログ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MBTI性格診断の深い理解と実践的な活用法について、専門家が詳しく解説します。
              恋愛、職場、学習など、あらゆる場面でのMBTI活用のヒントをお届けします。
            </p>
          </div>

          {/* タグフィルター */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">タグで記事を絞り込み</h3>
              <p className="text-gray-600">興味のあるタグをクリックして関連記事を表示</p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => updateTag('')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !selectedTag
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                すべて
              </button>
              {popularTags.map((tag: string) => (
                <button
                  key={tag}
                  onClick={() => updateTag(selectedTag === tag ? '' : tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* 記事一覧 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* 記事画像 */}
                {post.image && (
                  <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <h3 className="text-white text-lg font-semibold text-center px-4">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* タイトル */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link 
                      href={`/blog/${post.id}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* 概要 */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* メタ情報 */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
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
                    {post.tags.slice(0, 3).map((tag: string) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* 続きを読むボタン */}
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    続きを読む →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* 検索結果なし */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <Tag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  該当する記事が見つかりませんでした
                </h3>
                <p className="text-gray-500 mb-4">
                  他のタグを試すか、すべての記事を表示してください。
                </p>
                <button
                  onClick={() => updateTag('')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  すべての記事を表示
                </button>
              </div>
            </div>
          )}

          {/* 記事数表示 */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-8 text-gray-600">
              {filteredPosts.length}件の記事が見つかりました
            </div>
          )}
        </div>
    </>
  );
};

export default BlogPage;
