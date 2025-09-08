import Head from 'next/head';
import React from 'react';
import seoConfig from '../config/seo.config';

type Props = {
  title?: string;
  description?: string;
  noIndex?: boolean;
  canonical?: string;
  image?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
  type?: 'website' | 'article';
};

const Seo: React.FC<Props> = ({ 
  title, 
  description, 
  noIndex, 
  canonical, 
  image,
  article,
  type = 'website'
}) => {
  const fullTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
  const metaDescription = description || seoConfig.defaultDescription;
  const ogImage = image ? `${seoConfig.siteUrl}${image}` : `${seoConfig.siteUrl}${seoConfig.defaultImage}`;
  const url = canonical || seoConfig.siteUrl;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={seoConfig.keywords.join(', ')} />
      <meta name="author" content={article?.author || seoConfig.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={seoConfig.locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoConfig.twitter} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Article specific meta tags */}
      {type === 'article' && article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* JSON-LD Structured Data for Articles */}
      {type === 'article' && article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": title,
              "description": metaDescription,
              "image": ogImage,
              "author": {
                "@type": "Person",
                "name": article.author || seoConfig.author
              },
              "publisher": {
                "@type": "Organization",
                "name": seoConfig.siteName,
                "logo": {
                  "@type": "ImageObject",
                  "url": `${seoConfig.siteUrl}/favicon.ico`
                }
              },
              "datePublished": article.publishedTime,
              "dateModified": article.modifiedTime || article.publishedTime,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": url
              }
            })
          }}
        />
      )}
      
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  );
};

export default React.memo(Seo);
