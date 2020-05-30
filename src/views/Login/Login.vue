<template>
    <div class="login page">
        <div id="naverIdLogin"></div>
    </div>
</template>

<script>
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class Login extends Vue {
        mounted() {
            this.naver.init()
            this.naver.getLoginStatus(status => {
                if (status) {
                    console.log(this.naver.user)
                    window.location.href = '/home'
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .login {
        &.page {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

        &.button {
            width: 15%;
        }
    }
</style>