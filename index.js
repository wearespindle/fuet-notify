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
