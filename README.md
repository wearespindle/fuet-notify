# vue-shout
Simple notification for Vue using the Vuex store. Checkout the [demo](https://wearespindle.github.io/vue-shout/).

# Usage
This module depends on npm and commonjs. Just install in your project with:

    npm i vue-shout --save

Then include the two components with:

    const {Shout, Shouts, vuex} = require('vue-shout')
    Vue.component('Shout', Shout)
    Vue.component('Shouts', Shouts)

Then in the template where you want tabs, use something like:

    <template>
        <div class="main-container">
            <Shouts></Shouts>
        </div>
    </template>

Don't forget to include the stylesheet from sass:

    // Assumes that you have node_modules in the sass includePaths.
    @import "vue-tabcordion/src/scss/styles";

That's it! Have fun with your new shout component. Please [file an issue](https://github.com/wearespindle/vue-shout/issues)
if you have feature requests or bug reports.
