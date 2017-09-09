# fuet-notify
Simple notification for Vue using the Stash store. Checkout the [demo](https://wearespindle.github.io/fuet-notify/).

# Usage
This module depends on npm and commonjs. Just install in your project with:

    npm i fuet-notify --save

Then include the notifications components with:

    const {Notification, Notifications, FuetNotify} = require('vue-shout')
    Vue.component('Notification', Notification)
    Vue.component('Notifications', Notifications)

    Vue.use(FuetNotify)

Then in the template where you want notifications, use something like:

    <template>
        <div class="main-container">
            <Notifications></Notifications>
        </div>
    </template>

Don't forget to include the stylesheet from sass:

    // Assumes that you have node_modules in the sass includePaths.
    @import "fuet-notify/src/scss/styles";

That's it! Have fun with your new notify component. Please [file an issue](https://github.com/wearespindle/fuet-notify/issues)
if you have feature requests or bug reports.
