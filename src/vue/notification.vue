<transition name="fade">
<div class="notification" :class="notificationCss(notification)">
    <div class="icon">
        <i class="fa" :class="iconCss(notification)" v-if="notification.icon"></i>
    </div>
    <div class="message" v-if="html" v-html="message"></div>
    <div class="message" v-else>
        {{ notification.message }}
    </div>
    <div class="actions">
        <button class="delete" @click="close(notification)"></button>
    </div>
</div>
</transition>
