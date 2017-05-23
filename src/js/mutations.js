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
