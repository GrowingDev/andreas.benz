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
    <div class="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 mb-60">
      <Experience title="UI/UX Design" />
      <Experience title="Software Entwicklung" />
      <Experience title="Projekt Management" />
      <Experience title="Elektrotechnik" />
      <Experience title="Projekt Management" />
      <Experience title="Elektrotechnik" />
    </div>

    <Divider title="Über mich" />
    <div
      class="
        w-full
        py-5
        mb-60
        inline-block
        md:flex md:flex-row md:flex-nowrap
        lg:justify-end
      "
    >
      <img
        src="https://picsum.photos/400/400"
        class="h-120 w-full md:w-4/12 lg:w-3/12 max-h-80"
      />
      <p class="pt-2 md:pt-0 md:pl-4 text-justify lg:w-5/12">
        Our working method practices a simultaneous exploration of traditional
        handicraft and cutting edge digital technology. Our working method
        practices a simultaneous exploration of traditional handicraft and
        cutting edge digital technology.
        <br />
        <br />
        Our working method practices a simultaneous exploration of traditional
        handicraft and cutting edge digital technology. Our working method
        practices a simultaneous exploration of traditional handicraft and
        cutting edge digital technology.
        <br />
        <br />
        Our working method practices a simultaneous exploration of traditional
        handicraft and cutting edge digital technology. Our working method
        practices a simultaneous exploration of traditional handicraft and
        cutting edge digital technology
      </p>
    </div>
    <Divider title="Kontakt" />
    <div class="text-center  w-full flex flex-col justify-v´center text-center ">

      <a class="underline mt-40" href="mailto:andreas.benz.privat@icloud.com">andreas.benz.privat@icloud.com</a>
 <a href="tel:+436706045373" class="mt-10 mb-40">+ 43 670 6045373</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
