module.exports = function(template) {
    return {
        props: ['notification'],
        render: template.r,
        methods: {
            iconCss: function(notification) {
                let cssClasses = {}
                cssClasses[`fa-${notification.icon}`] = true
                return cssClasses
            },
            notificationCss: function(notification) {
                let cssClasses = {}
                if (notification.type) cssClasses[`is-${notification.type}`] = true
                return cssClasses
            },
            close: function(notification) {
                this.$store.notifications = this.$store.notifications.filter((i) => i.id !== notification.id)
            },
        },
        staticRenderFns: template.s,
    }
}
