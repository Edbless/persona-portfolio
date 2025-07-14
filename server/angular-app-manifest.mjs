
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/personal-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/personal-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/personal-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/personal-portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/personal-portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 352, hash: '305b8ea5a41dd73b815a57cc067d62cf9608344e0470c73fc68f059ce490b819', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 865, hash: 'fffaf778a0c88ed78706540e0605bb9a4b4efee7357bc0a8ff8c8ddfbb0d0b5d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
