<template>
    <div class="menu" v-click-outside="() => open = false">
        <img class="button" @click="open = !open" src="@/assets/menu-icon.svg"/>
        <div class="items" :class="{show: open}">
            <div class="item" @click="redirect('First')">doorknob</div>
            <div class="item" @click="redirect('Second')">faucet</div>
            <div class="item" @click="redirect('Third')">bed</div>
            <div class="item" @click="redirect('Fourth')">bath</div>
        </div>
    </div>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class Menu extends Vue {
        open = false
        redirect (componentName) {
            this.$router.push({name: componentName})
        }
    }
</script>

<style scoped lang="scss">
    .menu {
        position: fixed;
        top: 10px;
        right: 10px;
        text-align: right;
        z-index: 1;
    }
    .button {
        width: 15px;
    }
    .items {
        overflow: hidden;
        max-height: 0;
        transition: max-height .3s ease-in;
        &.show {
            max-height: 200px;
        }

        .item {
            padding: 5px 0;
        }
    }
</style>