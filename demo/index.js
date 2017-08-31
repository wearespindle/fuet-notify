const {Shout, Shouts} = require('../src/js/index.js')

Vue.component('Shout', Shout)
Vue.component('Shouts', Shouts)

new Vue({
    el: '#app',
    data: {
        version: require('../package.json').version,
    },
    methods: {
        addShout: function() {

        },
    },
})
