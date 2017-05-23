module.exports = function(template) {
    return {
        render: template.r,
        staticRenderFns: template.s,
        props: ['shout'],
        methods: {
            closeShout(shout) {
                this.$store.commit('REMOVE_SHOUT', shout)
            },
        },
    }
}
