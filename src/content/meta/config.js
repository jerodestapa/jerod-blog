const base = {
  name: 'Jerod Estapa',
  url: 'https://jerodestapa.com'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - Developer. Writer. Analyst. Man of Action.`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } - a blog & portfolio site`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'Developer. Writer. Analyst. Man of Action.',

  /* url */
  siteUrl: base.url
  // pathPrefix: '',
};

module.exports = config;
