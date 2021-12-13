<template>
  <div class="w-full md:w-5/12 xl:w-5/12 md:ml-8 mb-5 flex flex-col">
    <div class="w-full ">

      <img :src="require(`~/assets/imgs/${project.image}.png`)" class="m-auto"/>
    </div>
    <h3 class="pt-4">{{project.title}}</h3>
    <p class="text-base ">
      {{project.content}}
    </p>
    <a class="link w-max " href="https://google.com">mehr erfahren &#8594;</a>
  </div>
</template>

<script>
export default {
  props: ["project"]
}
</script>
