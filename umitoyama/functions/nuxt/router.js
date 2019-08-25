import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ea78dc2a = () => interopDefault(import('../../pages/access/index.vue' /* webpackChunkName: "pages/access/index" */))
const _42a5c1b4 = () => interopDefault(import('../../pages/menu/index.vue' /* webpackChunkName: "pages/menu/index" */))
const _47ff58cc = () => interopDefault(import('../../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _90c0f4d6 = () => interopDefault(import('../../pages/recipe/index.vue' /* webpackChunkName: "pages/recipe/index" */))
const _73973d04 = () => interopDefault(import('../../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/access",
      component: _ea78dc2a,
      name: "access"
    }, {
      path: "/menu",
      component: _42a5c1b4,
      name: "menu"
    }, {
      path: "/news",
      component: _47ff58cc,
      name: "news"
    }, {
      path: "/recipe",
      component: _90c0f4d6,
      name: "recipe"
    }, {
      path: "/",
      component: _73973d04,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
