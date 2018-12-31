const base = {
  name: 'Jerod Estapa',
  url: 'https://jerodestapa.com'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - Developer | Writer`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } - a blog & portfolio site`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'Developer | Writer',

  /* url */
  siteUrl: base.url
  // pathPrefix: '',
};

module.exports = config;
