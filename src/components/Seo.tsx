import Head from 'next/head';
import React from 'react';

type Props = {
  title?: string;
  description?: string;
  noIndex?: boolean;
  canonical?: string;
};

const SITE_NAME = 'MBTI 相性';

const Seo: React.FC<Props> = ({ title, description, noIndex, canonical }) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  return (
    <Head>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:site_name" content={SITE_NAME} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  );
};

export default React.memo(Seo);
