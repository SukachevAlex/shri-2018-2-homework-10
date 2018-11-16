module.exports = {
  levels: [
    {
      layer: 'common',
      path: 'src/components/common'
    },
    {
      layer: 'desktop',
      path: 'src/components/desktop'
    },
    {
      layer: 'touch',
      path: 'src/components/touch'
    }
  ].map(level => Object.assign({
    schemeOptions: 'react',
    naming: 'react',
    scheme: 'nested' }, level)
  ),
  // remove sets to build one universal bundle for index.html
  sets: {
    desktop: 'common desktop',
    touch: 'common touch'
  },
  modules: {
    'bem-tools': {
      plugins: {
        create: {
          levels: {
            'src/components/common': { default: true }
          },
          techs: ['tsx', 'css'],
          templates: {
            tsx: '.bem/templates/tsx.js'
          }
        }
      }
    }
  }
}
