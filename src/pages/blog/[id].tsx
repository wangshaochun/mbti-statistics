import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react';
import Seo from '../../components/Seo';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import seoConfig from '../../config/seo.config';

import type { BlogPost, BlogPostMeta } from '../../lib/blog';

interface BlogPostPageProps {
  post: BlogPost | null;
  relatedPosts: BlogPostMeta[];
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, relatedPosts }) => {
  if (!post) {
    return (
      <>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">記事が見つかりませんでした</p>
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              ブログ一覧に戻る
            </Link>
          </div>
        </div>
      </>
    );
  }

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
        title={`${post.title}`}
        description={post.excerpt}
        type="article"
        image={post.image}
        canonical={`${seoConfig.siteUrl}/blog/${post.id}`}
        article={{
          publishedTime: new Date(post.publishDate).toISOString(),
          author: post.author,
          tags: post.tags
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 戻るボタン */}
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            ブログ一覧に戻る
          </Link>
        </div>

        {/* 記事ヘッダー */}
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* 記事画像 */} 
          <div className="p-6 md:p-8">
            {/* タイトル（画像がない場合） */}
            { (
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>
            )}

            {/* メタ情報 */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6 border-b border-gray-200 pb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>読了時間: {post.readTime}分</span>
              </div>
            </div>

            {/* 記事概要 */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
              <p className="text-blue-800 font-medium">{post.excerpt}</p>
            </div>
              {/* imamge */}
              {post.image && (
                <div className="mb-8 flex justify-center">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-4/5 h-auto rounded-lg shadow-md" 
                  />
                </div>
              )}
            {/* 記事本文 - 使用 MarkdownRenderer 解析 */}
            <MarkdownRenderer content={post.content} />

            {/* タグ */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">タグ</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <Link
                    key={tag}
                    href={{ pathname: '/blog', query: { tag } }}
                    className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* シェアボタン */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">この記事をシェア</h3>
              <div className="flex flex-wrap gap-3">
                {/* Twitter シェア */}
                <button 
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const text = encodeURIComponent(`${post.title} - MBTI診断ガイド`);
                    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=550,height=420');
                  }}
                  className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </button>

                {/* Facebook シェア */}
                <button 
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=626,height=436');
                  }}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>

                {/* LINE シェア */}
                <button 
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const text = encodeURIComponent(`${post.title} - MBTI診断ガイド`);
                    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, '_blank', 'width=500,height=500');
                  }}
                  className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  LINE
                </button>

                {/* Hatena Bookmark シェア */}
                <button 
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const title = encodeURIComponent(`${post.title} - MBTI診断ガイド`);
                    window.open(`https://b.hatena.ne.jp/entry/panel/?url=${url}&title=${title}`, '_blank', 'width=500,height=400');
                  }}
                  className="flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 18c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zm6-7c0 1.105-.895 2-2 2s-2-.895-2-2V7c0-1.105.895-2 2-2s2 .895 2 2v4z"/>
                  </svg>
                  はてブ
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* 関連記事 */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">関連記事</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article 
                  key={relatedPost.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <h3 className="text-white text-sm font-semibold text-center px-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm">
                      <Link 
                        href={`/blog/${relatedPost.id}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {relatedPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{relatedPost.readTime}分</span>
                      <span>{formatDate(relatedPost.publishDate)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* CTA セクション */}
        {/* <section className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            あなたのMBTIタイプを知っていますか？
          </h2>
          <p className="text-lg mb-6 opacity-90">
            詳しい診断で自分の性格タイプを発見し、より深い自己理解を得ましょう。
          </p>
          <div className="space-x-4">
            <Link 
              href="/diagnostics"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              診断を受ける
            </Link>
            <Link 
              href="/types"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
            >
              全タイプを見る
            </Link>
          </div>
        </section> */}

      </div>
    </>
  );
};

// 获取所有可能的博客ID路径
export const getStaticPaths: GetStaticPaths = async () => {
  const { getAllBlogIds } = await import('../../lib/blog');
  const paths = getAllBlogIds().map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: false, // 404页面用于不存在的路径
  };
};

// 获取特定博客文章的数据
export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const id = params?.id as string;
  const { getBlogById, getAllBlogMetas } = await import('../../lib/blog');
  let post: BlogPost | null = null;
  try {
    post = getBlogById(id);
  } catch {
    post = null;
  }

  // 获取相关文章
  const relatedPosts = post
    ? getAllBlogMetas()
        .filter((p) => p.id !== post.id && p.tags.some((tag) => post.tags.includes(tag)))
        .slice(0, 3)
    : [];

  return {
    props: {
      post,
      relatedPosts,
    },
  };
};

export default BlogPostPage;
