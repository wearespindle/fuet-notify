const templates = require('./templates')
const Shout = require('./shout')(templates.shout)
const Shouts = require('./shouts')(templates.shouts)

const VueShout = {
    install(Vue, options) {
        let idCounter = 0
        Vue.prototype.$shout = function(shout) {
            if (!shout.timeout) shout.timeout = 3000
            shout.id = idCounter
            idCounter += 1
            this.$store.shouts.push(shout)
            if (typeof shout.timeout === 'number' && shout.timeout > 0) {
                setTimeout(() => {
                    this.$store.shouts = this.$store.shouts.filter((i) => i.id !== shout.id)
                }, shout.timeout)
            }
        }
    },
}

module.exports = {Shout, Shouts, VueShout}
