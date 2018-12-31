import React from 'react';
import { graphql } from 'gatsby';
import { injectGlobal } from 'emotion';

import '@react-website-themes/default/styles/variables';
import '@react-website-themes/default/styles/global';

import Branding from '@react-website-themes/default/components/Branding';
import Footer from '@react-website-themes/default/components/Footer';
import Header from '@react-website-themes/default/components/Header';
import Hero from '@react-website-themes/default/components/Hero';
import Layout from '@react-website-themes/default/components/Layout';
import Menu from '@react-website-themes/default/components/Menu';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const IndexPage = props => {
  const {
    data: {
      footerLinks: { html: footerLinksHTML },
      hero: { html: heroHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteTitle,
    siteDescription,
    siteLanguage,
  } = config;

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
      </Header>
      <Hero html={heroHTML} />
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  );
};

/* Overrides Style Variables */
injectGlobal`
  :root {
    --linkColor: #2E973A;
    --hoverLinkColor: #3DB04C;
    --textColor: #000;
    --lightTextColor: #000;
    --superLightTextColor: #000;
    --backgroundColor: #090909;
  }
  h1 {
    color: #000;
  }
  .css-zfyddb h1 {
    color: #2E973A;
  }
  .css-1s1btau a {
    background: #2E973A;
  }
`;

export default IndexPage;

export const query = graphql`
  query {
    hero: markdownRemark(fileAbsolutePath: { regex: "/content/parts/hero/" }) {
      html
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`;
