const SITE_NAME = 'Broadway BCN';
const SITE_URL = 'https://www.broadwaybcn.com';

const defaultLanguage = 'en';
const languages = ['en', 'es', 'ca'];

const routes = {
  privacy_policy: {
    es: 'politica_de_privacidad',
    ca: 'politica_de_privacitat'
  }
};

export { SITE_NAME, SITE_URL };
export { defaultLanguage, languages, routes };
