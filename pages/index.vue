<template>
  <div
    class="
      px-3
      w-full
      md:w-11/12
      lg:w-10/12
      xl:w-8/12
      md:mx-auto
      flex flex-col
      justify-start
    "
  >
    <NavigationBar />

    <div class="container h-screen w-full flex flex-col justify-center">
      <h1>
        We create architecture, landscapes, interiors, product design and
        graphic design.
      </h1>
    </div>
    <Divider title="Projekte" />
    <div class="w-full flex flex-row flex-wrap justify-end py-3 mb-60">
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
    <Divider title="Kompetenzen" />
    <Experience title="UI/UX Design" />
    <Experience title="Software Entwicklung" />
    <Experience title="Projekt Management" />
    <Experience title="Elektrotechnik" />
    <Divider title="Über mich" />
    <Divider title="Kontakt" />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
