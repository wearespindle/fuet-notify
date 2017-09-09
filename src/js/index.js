const templates = require('./templates')

const Notification = require('./notification')(templates.notification)
const Notifications = require('./notifications')(templates.notifications)

const Plugin = {
    install(Vue, options) {
        let idCounter = 0

        Vue.prototype.$notify = function(notification) {
            if (!notification.timeout) notification.timeout = 3000
            notification.id = idCounter
            idCounter += 1
            this.$store.notifications.push(notification)
            if (typeof notification.timeout === 'number' && notification.timeout > 0) {
                setTimeout(() => {
                    this.$store.notifications = this.$store.notifications.filter((i) => i.id !== notification.id)
                }, notification.timeout)
            }
        }
    },
}

module.exports = {Notification, Notifications, FuetNotify: Plugin}
