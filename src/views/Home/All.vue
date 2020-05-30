<template>
    <div class="main subview">
        <vue-flux :images="images" :transitions="transitions" :options="options"/>
    </div>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'
    import {VueFlux} from 'vue-flux'

    @Component({
        components: {VueFlux}
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

</style>