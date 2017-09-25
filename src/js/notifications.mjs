export function Notifications(template) {
    return {
        render: template.r,
        staticRenderFns: template.s,
        props: ['notifications'],
    }
}
