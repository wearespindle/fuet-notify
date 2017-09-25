import {notification, notifications} from './src/js/templates'

import {Notification as _Notification} from './src/js/notification'
import {Notifications as _Notifications} from './src/js/notifications'

const Notification = _Notification(notification)
const Notifications = _Notifications(notifications)

const FuetNotify = {
    install(Vue, options) {
        let idCounter = 0

        Vue.prototype.$notify = function(_notification) {
            if (!_notification.timeout) notification.timeout = 3000
            _notification.id = idCounter
            idCounter += 1
            this.$store.notifications.push(_notification)
            if (typeof _notification.timeout === 'number' && _notification.timeout > 0) {
                setTimeout(() => {
                    this.$store.notifications = this.$store.notifications.filter((i) => i.id !== _notification.id)
                }, _notification.timeout)
            }
        }
    },
}

export {Notification, Notifications, FuetNotify}
