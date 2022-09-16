
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/about', component: () => import('pages/aboutPage.vue'),name: 'about' },
      { path: '/contact', component: () => import('pages/contactPage.vue'), name: 'contact', title: 'CONTACT' },
      { path: '/tih', component: () => import('pages/tihTur.vue'), name: 'tihtur', title: 'TIHTUR' },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
