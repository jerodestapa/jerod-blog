const base = {
  name: 'Jerod Estapa',
  url: 'https://jerodestapa.com'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - Programmer. Writer. Analyst. Funny.`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } - a blog & portfolio site`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'Welcome',

  /* url */
  siteUrl: base.url
  // pathPrefix: '',
};

module.exports = config;
