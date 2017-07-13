module.exports = function(template) {
    return {
        render: template.r,
        staticRenderFns: template.s,
        props: ['shouts'],
    }
}
