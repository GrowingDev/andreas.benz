<template>
  <nav
    class="
      w-full
      p-4
      sticky
      top-0
      inline-block
      z-10
      bg-white
      overflow-hidden
      border-b-2
    "
  >
    <div class="flex justify-between items-center container mx-auto">
      <a>andreasbenz</a>
      <div class="hidden md:flex justify-between items-center space-x-5">
        <a
          class="link lowercase"
          v-for="link in links"
          :key="link.title"
          :href="link.href"
          >{{ link.title }}</a
        >
      </div>
      <a class="md:hidden underline cursor-pointer" @click="setVisible"
        ><svg
          v-if="!this.visible"
          class="w-5 h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
          />
        </svg>
        <svg
          v-else
          class="w-3 h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z"
          />
        </svg>
      </a>
    </div>
    <ul
      v-if="visible"
      class="
        flex flex-col
        pt-2
        justify-center
        text-center
        space-y-5
        relative
        top-0
        bottom-0
        h-screen
        w-screen
        bg-white
      "
    >
      <li v-for="link in links" :key="link.title">
        <a class="link text-2xl my-4" :href="link.href" @click="setVisible">{{
          link.title
        }}</a>
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
      links: [
        { title: 'Projekte', href: '#Projekte' },
        { title: 'Kompetenzen', href: '#Kompetenzen' },
        { title: 'Über mich', href: '#Über mich' },
        { title: 'kontakt', href: '#Kontakt' },
      ],
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
