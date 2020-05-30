<template>
    <div class="home">
        <div class="title">chae's choice</div>
        <menu-list></menu-list>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'

    @Component({
        components: {
            menuList: require('./Menu.vue').default
        }
    })
    export default class Home extends Vue {
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    .title {
        font-size: 20px;
        position: fixed;
        top: 10px;
        left: 10px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>

<style lang="scss">
    .subview {
        position: relative;
        display: inline-block;
        width: calc(100% - 20px);
        top: 13vh;
        left: 10px;

        .item {
            width: 100%;
        }
        .price {
            text-align: right;
        }
    }
</style>
