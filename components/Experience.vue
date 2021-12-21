<template>
  <div class="w-full pb-10 flex flex-col justify-start text-start items-start">
    <div class="max-w-max mb-2 pb-2">
         <font-awesome-icon
        v-if="skill.title == 'Projektmanagement'"
        :icon="['fal', 'tasks']"
        size="xl"
      />
      <font-awesome-icon
        v-if="skill.title == 'Software-Entwicklung'"
        :icon="['fal', 'code']"
        size="xl"
      />
      <font-awesome-icon
        v-if="skill.title == 'IT&Elektrotechnik'"
        :icon="['fal', 'bolt']"
        size="xl"
      />
      <font-awesome-icon
        v-if="skill.title == 'Marktanalysen'"
        :icon="['fal', 'chart-area']"
        size="xl"
      />
          <font-awesome-icon
        v-if="skill.title == 'Analytisches Denken'"
        :icon="['fal', 'head-side-brain']"
        size="xl"
      />
      <font-awesome-icon
        v-if="skill.title == 'Kundengespräche'"
        :icon="['fal', 'users']"
        size="xl"
      />
    </div>

    <h3>{{ skill.title }}</h3>
    <p>{{ skill.description }}</p>
  </div>
</template>
<script>
export default {
  name: 'Experience',
  props: ['skill'],
}
</script>
<style scoped>
</style>
