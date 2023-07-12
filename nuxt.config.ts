export default {
  nitro: {
    preset: 'vercel-edge',

  },
  modules: [
    'nuxt-windicss',
  ],
  buildModules: [
    -  '@nuxtjs/tailwindcss',
  ],
};
