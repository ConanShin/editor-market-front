<template>
    <div class="main subview">
        <vue-flux :images="images" :transitions="transitions" :options="options"></vue-flux>
    </div>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import {VueFlux, FluxPagination} from 'vue-flux'

    @Component({
        components: {VueFlux, FluxPagination}
    })
    export default class All extends Vue {
        images = [
            require('@/assets/samples/doorknob/doorknob.jpeg'),
            require('@/assets/samples/bed/light.jpeg'),
            require('@/assets/samples/faucet/faucet.jpeg')
        ]
        transitions = ['blinds3d']
        options = {
            autoplay: true,
            delay: 1000,
            aspectRatio: '16:16'
        }
    }
</script>

<style scoped lang="scss">
    .main {
        margin-top: 16px;
    }
</style>