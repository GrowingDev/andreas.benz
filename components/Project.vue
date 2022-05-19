<template>
  <div class="w-full flex flex-col">
    <div class="w-full">
      <img
        :src="require(`~/assets/imgs/${project.image}.png`)"
        class="m-auto"
      />
    </div>
    <h3 class="text-xl mt-4 font-bold">{{ project.title }}</h3>

    <p class="text-base text-justify my-2">
      {{ project.content }}
    </p>
    <a class="link w-max" :href="project.link">zum projekt &#8594;</a>
  </div>
</template>

<script>
export default {
  props: ['project'],
}
</script>
