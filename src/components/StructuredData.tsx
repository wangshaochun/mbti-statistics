import Head from 'next/head';

type FAQStructuredDataProps = {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export function FAQStructuredData({ faqs }: FAQStructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

type ArticleStructuredDataProps = {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  image?: string;
  url: string;
};

export function ArticleStructuredData({
  title,
  description,
  author,
  publishDate,
  image,
  url
}: ArticleStructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author
    },
    datePublished: publishDate,
    ...(image && { image: image }),
    publisher: {
      '@type': 'Organization',
      name: 'MBTI相性診断ガイド',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mbti-aisho.com/logo.png' // Update with actual logo URL
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

type BreadcrumbStructuredDataProps = {
  items: Array<{
    name: string;
    url: string;
  }>;
};

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

type OrganizationStructuredDataProps = {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
};

export function OrganizationStructuredData({
  name,
  url,
  logo,
  description,
  sameAs
}: OrganizationStructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: name,
    url: url,
    ...(logo && { logo: logo }),
    ...(description && { description: description }),
    ...(sameAs && { sameAs: sameAs })
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

type WebPageStructuredDataProps = {
  name: string;
  description: string;
  url: string;
};

export function WebPageStructuredData({ name, description, url }: WebPageStructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: name,
    description: description,
    url: url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'MBTI相性診断ガイド',
      url: 'https://mbti-aisho.com' // Update with actual site URL
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

