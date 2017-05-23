(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const {Shout, Shouts, vuex} = require('../src/js/index.js')

Vue.component('Shout', Shout)
Vue.component('Shouts', Shouts)

const vuexStore = new Vuex.Store({
    actions: vuex.actions,
    mutations: vuex.mutations,
    state: vuex.state,
})

new Vue({
    el: '#app',
    store: vuexStore,
    data: {
        version: require('../package.json').version,
    },
    methods: {
        addShout: function() {
            vuexStore.dispatch('notify', {
                message: 'Shout it all out!',
            })
        },
    },
})

},{"../package.json":2,"../src/js/index.js":4}],2:[function(require,module,exports){
module.exports={
  "name": "vue-shout",
  "version": "1.0.2",
  "description": "Simple notification system for Vue using the Vuex store and Bulma styles.",
  "main": "src/js/index.js",
  "peerDependencies": {
    "bulma": ">=0.2",
    "vue": ">=2"
  },
  "watch": {
    "demo": {
      "patterns": [
        "demo/index.js",
        "src/js/*.js"
      ],
      "extensions": "js",
      "quiet": true
    },
    "scss": "src/scss/styles.scss",
    "vue": {
      "patterns": [
        "src",
        "vue"
      ],
      "extensions": "vue",
      "quiet": false
    }
  },
  "scripts": {
    "demo": "browserify demo/index.js > demo/build.js;npm run scss;",
    "demo_publish": "npm run demo;gh-pages -d demo",
    "prepublish": "fuet -c -i 'src/vue/*.vue' -p src vue -o src/js/templates.js",
    "scss": "sass -I ./node_modules src/scss/styles.scss > demo/styles.css",
    "vue": "fuet -c -i 'src/vue/*.vue' -p src vue -o src/js/templates.js",
    "watch": "npm-watch"
  },
  "files": [
    "src/js/*.js",
    "LICENSE",
    "README.md"
  ],
  "repository": "https://github.com/wearespindle/vue-shout",
  "keywords": [
    "vue",
    "bulma",
    "pagination"
  ],
  "author": "Devhouse Spindle",
  "license": "MIT",
  "devDependencies": {
    "bulma": "^0.4.1",
    "gh-pages": "^1.0.0",
    "npm-watch": "^0.1.9"
  }
}

},{}],3:[function(require,module,exports){
module.exports = function() {
    let idCounter = 0

    let actions = {}


    /**
     * Notify action that adds a notification to the store. The notification
     * component picks up the change and renders the notification.
     * @param {Vuex} store - The globally scoped Vuex store.
     * @param {Object} shout - Notification object to send to the store.
     * @param {String<object>} shout.title - Optional title.
     * @param {String<object>} shout.text - Main text.
     * @param {String<object>} shout.type - Bulma notification types.
     * @param {String<object>} shout.timeout - Time before removing it.
     */
    actions.notify = (store, shout = {title: '', text: '', type: 'success', timeout: 3000}) => {
        if (!shout.timeout) shout.timeout = 3000
        shout.id = idCounter
        idCounter += 1
        store.commit('ADD_SHOUT', shout)
        if (typeof shout.timeout === 'number' && shout.timeout > 0) {
            setTimeout(function() {
                store.commit('REMOVE_SHOUT', shout)
            }, shout.timeout)
        }
    }

    return actions
}

},{}],4:[function(require,module,exports){
const templates = require('./templates')
const Shout = require('./shout')(templates.shout)
const Shouts = require('./shouts')(templates.shouts)

const actions = require('./actions')()
const mutations = require('./mutations')()

let vuex = {
    actions,
    mutations,
    state: {
        shouts: [],
    },
}

module.exports = {Shout, Shouts, vuex}

},{"./actions":3,"./mutations":5,"./shout":6,"./shouts":7,"./templates":8}],5:[function(require,module,exports){
module.exports = function(app) {

    let mutations = {}

    /**
     * Editing client is changed.
     * @param {Observer} state - The globally scoped state.
     * @param {Object} shout - Shout to add to store.
     */
    mutations.ADD_SHOUT = (state, shout) => {
        state.shouts.push(shout)
    }

    /**
     * Remove notification from the store.
     * @param {Observer} state - The globally scoped state.
     * @param {Object} shout - Shout to remove from store.
     */
    mutations.REMOVE_SHOUT = (state, shout) => {
        state.shouts = state.shouts.filter((i) => i.id !== shout.id)
    }

    return mutations
}

},{}],6:[function(require,module,exports){
module.exports = function(template) {
    return {
        render: template.r,
        staticRenderFns: template.s,
        props: ['shout'],
        methods: {
            closeShout(shout) {
                this.$store.commit('REMOVE_SHOUT', shout)
            },
        },
    }
}

},{}],7:[function(require,module,exports){
module.exports = function(template) {
    return {
        render: template.r,
        staticRenderFns: template.s,
    }
}

},{}],8:[function(require,module,exports){
module.exports.shout={r:function r(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{staticClass:"shout notification is-primary"},[_c('button',{staticClass:"delete",on:{"click":function($event){_vm.closeShout(_vm.shout)}}}),(_vm.html)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}}):_c('div',[_vm._v("\n        "+_vm._s(_vm.shout.message)+"\n    ")])])])}};module.exports.shouts={r:function r(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"shouts"},_vm._l((_vm.$store.state.shouts),function(shout){return _c('Shout',{attrs:{"shout":shout}})}))}};
},{}]},{},[1]);
