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
