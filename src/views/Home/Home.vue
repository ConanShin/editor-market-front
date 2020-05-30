<template>
    <div class="home">
        <div class="title">chae's choice</div>
        <menu-list></menu-list>
        <router-view/>
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
</style>

<style lang="scss">
    .subview {
        position: relative;
        display: inline-block;
        width: calc(100% - 20px);
        top: 50px;
        left: 10px;

        .item {
            width: 100%;
        }
    }
</style>
