<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @font-face {
        font-family: Pecita;
        src: url("./assets/fonts/Pecita.otf");
    }

    html, body, #app {
        font-family: Pecita;
        height: 100%;
        margin: 0;
    }
</style>
