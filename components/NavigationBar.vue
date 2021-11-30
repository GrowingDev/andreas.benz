<template>
  <nav class="w-full py-4 sticky top-0 inline-block z-10 bg-white">
    <div class="flex justify-between items-center">
      <a>andreas.benz</a>
      <div class="hidden md:flex justify-between items-center space-x-5">
        <a class="link">projects</a>
        <a class="link">skills</a>
        <a class="link">about</a>
        <a class="link">contact</a>
      </div>
      <a class="md:hidden underline cursor-pointer" @click="setVisible">menu</a>
    </div>
    <ul
    v-if="visible"
      class="flex flex-col pt-8 justifyspace-y-5 relative top-0 bottom-0 h-screen w-screen bg-white"
    >
      <li><a class="link text-2xl">projects</a></li>
      <li><a class="link text-2xl">skills</a></li>
      <li><a class="link text-2xl">about</a></li>
      <li><a class="link text-2xl">contact</a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'NavigationBar',
  data: () => {
    return {
      visible: false,
    }
  },
  methods: {
    setVisible(){
      this.visible = !this.visible
    }
  }
}
</script>
<style>
.logo {
  font-family: 'FivoSans Light';
}
</style>
