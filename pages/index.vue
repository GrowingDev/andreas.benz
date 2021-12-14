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
        Ich liebe Minimalismus, neue Technologien, Nachhaltigkeit und coole
        Projekte.
      </h1>
    </div>
    <Divider title="Projekte" id="Projekte" />
    <div class="w-full flex flex-row flex-wrap justify-end mb-40 w-min-screen">
      <Project
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </div>
    <Divider title="Kompetenzen" id="Kompetenzen" />
    <div class="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 md:pt-10 lg:pt-20 mb-40">
      <Experience :skill="skill" v-for="skill in skills" :key="skill.title" />
    </div>

    <Divider title="Über mich" id="Über mich" />
    <div
      class="
        w-full
        mb-40
        md:pt-10
        lg:pt-20
        inline-block
        md:flex md:flex-row md:flex-nowrap
        lg:justify-end
      "
    >
      <img
        src="https://picsum.photos/400/400"
        class="h-120 w-full md:w-4/12 lg:w-3/12 max-h-80"
      />
      <p class="md:pt-0 md:pl-4 text-justify lg:w-5/12">
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
    <Divider title="Kontakt" id="Kontakt" />
    <div class="text-center w-full flex flex-col justify-v´center">
      <a class="underline mt-20" href="mailto:andreas.benz.privat@icloud.com"
        >andreas.benz.privat@icloud.com</a
      >
      <a href="tel:+436706045373" class="mt-10">+ 43 670 6045373</a>
      <div class="w-full flex flex-row justify-center mt-10 mb-40">
        <a class="p-2" href="https://www.linkedin.com/in/andreas-benz-91320a213"
          ><svg
            class="w-10 h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            /></svg
        ></a>
        <a class="p-2" href="https://github.com/GrowingDev"
          ><svg
            class="w-10 h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
            /></svg
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      skills: [
        {
          title: 'Elektrotechnik',
          description:
            'Ich verfüge ich über ein vielschichtiges Fachwissen in Elektrotechnik sowie über technisches Verständnis.',
        },
        {
          title: 'Informationstechnik',
          description:
            'Als Nerd, verfüge ich über sehr gute EDV Kenntnisse sowie über ein vielschichtiges Fachwissen in Informationstechnik.',
        },
        {
          title: 'Web-Entwicklung',
          description:
            'Die Entwicklung von digitalen Lösungen für die Probleme unserer Zeit ist meine Leidenschaft.',
        },
        {
          title: 'Design Thinking',
          description:
            'Durch meine hohe Anpassungsfähigkeit kann ich auf neue Herausforderungen schnell reagieren.',
        },
               {
          title: 'Projektmanagement',
          description:
            'Durch meine hohe Anpassungsfähigkeit kann ich auf neue Herausforderungen schnell reagieren.',
        },
                 {
          title: 'Analytisches Denken',
          description:
            'Dank meiner strukturierten und analytischen Arbeitsweise kann ich komplexer Problemstellungen schnell und gründlich erfasssen.',
        },
        {
          title: 'Vertrieb',
          description:
            'Durch meine hohe Anpassungsfähigkeit kann ich auf neue Herausforderungen schnell reagieren.',
        },
        {
          title: 'Marktanalysen',
          description:
            'Durch meine hohe Anpassungsfähigkeit kann ich auf neue Herausforderungen schnell reagieren.',
        },
      ],
      projects: [
        {
          image: 'logo-aiyana',
          title: 'Etablierung einer ressourcenbasierten Ökonomie',
          content:
            'Von 2016 bis 2020 suchte ich nach einem Weg, mit Hilfe der Digitalisierung eine ressourcenbasierte Ökonomie zu etablieren.',
        },
        {
          image: 'logo-red_assistant',
          title: 'Digitales Assistenzsystem für Impfstraßen',
          content:
            'Derzeit arbeite ich an einem Konzept um interne Prozesse in Impfstraßen durch den Einsatz eines digitalen Assistenzsystem zu optimieren.',
        },
      ],
    }
  },
}
</script>

<style></style>
