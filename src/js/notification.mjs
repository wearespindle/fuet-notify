export function Notification(template) {
    return {
        render: template.r,
        staticRenderFns: template.s,
        props: ['notification'],
        methods: {
            closeNotification: function(notification) {
                this.$store.notifications = this.$store.notifications.filter((i) => i.id !== notification.id)
            },
        },
    }
}
