<template>
  <div>
    <transition name="fade">
      <div v-show="show" class="toast">{{message}}</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "PluginToast",
  components: {},
  data() {
    return {
      message: "hello world",
      show: false
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.show = !this.show
      setTimeout(() => {
        this.show = !this.show
      }, 2000)
    },
  },
};
</script>
<style lang='scss'>
	/* css */
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    background: rgba(0,0,0,.5);
    padding: 10px 40px;
    border-radius: 8px;
    color: #fff;
    transform: translateX(-50%);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>