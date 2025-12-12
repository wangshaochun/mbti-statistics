import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

const isInternalLink = (href?: string) => {
  if (!href) return false;
  if (href.startsWith('/')) return true;
  if (href.startsWith('#')) return true;
  return false;
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          // 标题样式
          h1: ({children}) => (
            <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4 first:mt-0 border-b border-gray-200 pb-2">
              {children}
            </h1>
          ),
          h2: ({children}) => (
            <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3 border-b border-gray-100 pb-1">
              {children}
            </h2>
          ),
          h3: ({children}) => (
            <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-2">
              {children}
            </h3>
          ),
          h4: ({children}) => (
            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
              {children}
            </h4>
          ),
          
          // 段落和文本样式
          p: ({children}) => (
            <p className="text-gray-800 leading-relaxed mb-4 text-base">
              {children}
            </p>
          ),
          
          // 列表样式
          ul: ({children}) => (
            <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1 ml-4">
              {children}
            </ul>
          ),
          ol: ({children}) => (
            <ol className="list-decimal list-inside text-gray-800 mb-4 space-y-1 ml-4">
              {children}
            </ol>
          ),
          li: ({children}) => (
            <li className="text-gray-800 leading-relaxed">
              {children}
            </li>
          ),
          
          // 强调样式
          strong: ({children}) => (
            <strong className="font-semibold text-gray-900">
              {children}
            </strong>
          ),
          em: ({children}) => (
            <em className="italic text-gray-800">
              {children}
            </em>
          ),
          
          // 引用块样式
          blockquote: ({children}) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 bg-blue-50 py-3 my-6 rounded-r-lg">
              {children}
            </blockquote>
          ),
          
          // 代码样式
          code: ({children, className}) => {
            // 检查是否为代码块
            if (className?.includes('language-')) {
              return (
                <code className={`${className} block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono`}>
                  {children}
                </code>
              );
            }
            // 内联代码
            return (
              <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">
                {children}
              </code>
            );
          },
          pre: ({children}) => (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              {children}
            </pre>
          ),
          
          // 表格样式
          table: ({children}) => (
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-gray-300">
                {children}
              </table>
            </div>
          ),
          thead: ({children}) => (
            <thead className="bg-gray-50">
              {children}
            </thead>
          ),
          tbody: ({children}) => (
            <tbody className="bg-white">
              {children}
            </tbody>
          ),
          tr: ({children}) => (
            <tr className="border-b border-gray-200">
              {children}
            </tr>
          ),
          th: ({children}) => (
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
              {children}
            </th>
          ),
          td: ({children}) => (
            <td className="border border-gray-300 px-4 py-2 text-gray-800">
              {children}
            </td>
          ),
          
          // 链接样式
          a: ({children, href}) => (
            isInternalLink(href) ? (
              <Link
                href={href || '#'}
                className="text-blue-600 hover:text-blue-800 underline transition-colors"
              >
                {children}
              </Link>
            ) : (
              <a
                href={href}
                className="text-blue-600 hover:text-blue-800 underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            )
          ),
          
          // 分隔线样式
          hr: () => (
            <hr className="border-t-2 border-gray-200 my-8" />
          ),
          
          // 图片样式
          img: ({src, alt}) => (
            <img 
              src={src} 
              alt={alt} 
              className="max-w-full h-auto rounded-lg shadow-md my-4"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
