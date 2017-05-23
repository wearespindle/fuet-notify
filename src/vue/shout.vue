<transition name="fade">
<div class="shout notification is-primary">
    <button class="delete" @click="closeShout(shout)"></button>
    <div v-if="html" v-html="message"></div>
    <div v-else>
        {{ shout.message }}
    </div>
</div>
</transition>
