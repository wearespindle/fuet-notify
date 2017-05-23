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
