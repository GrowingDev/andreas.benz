<template>
  <nav
    class="w-full py-4 sticky top-0 inline-block z-10 bg-white overflow-hidden"
  >
    <div class="flex justify-between items-center">
      <a>andreas.benz</a>
      <div class="hidden md:flex justify-between items-center space-x-5">
        <a class="link lowercase" v-for="link in links" :key="link" :href="'#' + link">{{ link }}</a>
      </div>
      <a class="md:hidden underline cursor-pointer" @click="setVisible">Menü</a>
    </div>
    <ul
      v-if="visible"
      class="
        flex flex-col
        pt-8
        justifyspace-y-5
        relative
        top-0
        bottom-0
        h-screen
        w-screen
        bg-white
      "
    >
      <li>
        <a class="link text-2xl my-4" v-for="link in links" :key="link" :href="'#' + link">{{ link }}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'NavigationBar',
  data: () => {
    return {
      visible: false,
      links: ['Projekte', 'Kompetenzen', 'Über mich', 'Kontakt'],
    }
  },
  methods: {
    setVisible() {
      this.visible = !this.visible
    },
  },
}
</script>
<style>
.logo {
  font-family: 'FivoSans Light';
}
</style>
