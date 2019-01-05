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
    --linkColor: #2669D0;
    --hoverLinkColor: #3DB04C;
    --textColor: #F2FAF9;
    --lightTextColor: #F2FAF9;
    --superLightTextColor: #F2FAF9;
  }
  html {
    background: #242B34;
  }
  h1 {
    color: #17A7D1;
  }
  .css-zfyddb h1 {
    color: #17A7D1;
  }
  .css-1s1btau a {
    background: #1C438C;
  }
  .css-13an6nb {
    background: #242B34;
    text-color: #F2FAF9;
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
