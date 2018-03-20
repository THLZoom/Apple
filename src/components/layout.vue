<template>
	<div class="layout">
    <el-container>
      <el-header>

      </el-header>
      <el-aside></el-aside>
      <el-main>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
	</div>
</template>

<script>
export default {
  name: 'layout',
  components: {

  },
  computed: {
    
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: all .2s ease;
}
.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>
