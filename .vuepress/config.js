module.exports = {
  title: 'Desarrollo Web',
  description: 'Desarrollo web con bluuweb',
  base: '/desarrollo-web/',
  locales: {
    '/': {
      lang: 'es-ES'
    }
  },
  themeConfig: {
    nav: [{
        text: 'Guía',
        link: '/'
      },
      // { text: 'Guia', link: '/docs/' },
      {
        text: 'Youtube',
        link: 'https://youtube.com/bluuweb'
      },
      {
        text: 'Curso Vue.js',
        link: 'http://curso-vue-js-udemy.bluuweb.cl'
      },
      {
        text: 'Curso React.js',
        link: 'http://curso-react-js-udemy.bluuweb.cl'
      },
      {
        text: 'Curso Bootstrap',
        link: 'http://curso-bootstrap-4-udemy.bluuweb.cl'
      },
    ],
    sidebar: [
      '/',
      '/01-html/',
      '/02-html-intermedio/',
      '/03-css/',
      '/04-css-intermedio/',
      '/05-flexbox/',
    ]
  }

}