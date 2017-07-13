module.exports = function(template) {
    return {
        render: template.r,
        staticRenderFns: template.s,
        props: ['shout'],
        methods: {
            closeShout: function(shout) {
                this.$store.shouts = this.$store.shouts.filter((i) => i.id !== shout.id)
            },
        },
    }
}
