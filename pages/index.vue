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
    <div class="container h-screen w-full flex flex-col justify-center">
      <h1 class="cssanimation" data-aos="'fadeInBottom'">
        Ich liebe Minimalismus, neue Technologien, Nachhaltigkeit und coole
        Projekte.
      </h1>
    </div>
    <divider title="Projekte" id="Projekte" />
    <div
      class="
        w-full
        flex flex-col
        lg:grid lg:grid-cols-2
        xl:grid-cols-3
        gap-10
        mb-40
        md:pt-10
        lg:pt-20
      "
    >
      <Project
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </div>
    <divider title="Kompetenzen" id="Kompetenzen" />
    <div
      class="
        w-full
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-10
        md:pt-10
        lg:pt-20
        mb-40
      "
    >
      <Experience :skill="skill" v-for="skill in skills" :key="skill.title" />
    </div>

    <divider title="Über mich" id="Über mich" />
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
        id="profile-picture"
        :src="require(`~/assets/imgs/me.jpg`)"
        class="
          flex-1
          w-full
          object-cover
          max-h-72
          lg:max-w-sm lg:object-none lg:max-h-full
        "
      />

      <div class="flex flex-col mt-4 md:mt-0 md:pl-4 lg:w-6/12 flex-1">
        <p class="text-justify">
          Ich wurde am 28.05.89 in Würzburg, Deutschland geboren. Meine Liebe
          zur IT & Elektrotechnik begann bereits in meiner Kindheit mit dem
          Eigenbau einer mobilen Jukebox, bestehend aus einem Schminkkoffer,
          alten PC-Lautsprechern und Einzelteilen eines alten Kofferradios.
          <br />
          <br />
          Einige Jahre später habe ich die Ausbildung zum Elektroniker für
          Energie und Gebäudetechnik erfolgreich abgeschlossen und sammelte in
          meiner Freizeit die ersten Erfahrungen mit HTML, CSS sowie JavaScript.
          <br />
          <br />
          So richtig ernst wurde es mit der IT als ich 2016 vor dem damaligen
          Gremium der
          <a href="https://www.innovation4x.com/">Innovationsplatform I4.X</a>
          meine damalige Idee einer autonomen sowie ressourcenbasierten Ökonomie
          präsentieren durfte. Nach einem überwältigendem Feedback und einer
          gehörigen Portion Naivität, entschloss ich mich dazu ein eigenes
          Startup zu gründen und jede freie Minute für die Weiterentwicklung
          meiner Fähigkeiten sowie Kenntnisse im Bereich der
          Software-Entwicklung zu nutzen.
          <br />
          <br />
          Letzten Endes führte mich dieses Abenteuer nach Österreich, genauer
          gesagt in die Stadt Linz, welche ich voller Stolz meine neue Heimat
          nennen darf.
          <br />
          <br />
          In meiner Freizeit gehe ich gerne rudern, spiele Schach und
          interessiere mich für die Themen Nachhaltigkeit, Wirtschaft, Politik
          und Raumfahrt.
        </p>
        <a
          class="link w-max mt-2"
          href="https://drive.google.com/drive/folders/1qFEDizMr7xanKgzs7KMGBV3S33HzKcqD?usp=sharing"
          >zum lebenslauf &#8594;</a
        >
      </div>
    </div>

    <divider title="Kontakt" id="Kontakt" />
    <div class="text-center w-full flex flex-col justify-center">
      <a class="underline mt-20" href="mailto:contact.andreasbenz@org"
        >contact@andreasbenz.org</a
      >
      <a href="tel:+436706045373" class="mt-10">+ 43 670 6045373</a>
      <div class="w-full flex flex-row justify-center mt-10 mb-40">
        <a
          class="p-2"
          href="https://www.linkedin.com/in/andreas-benz-927b08113/"
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
import Divider from '~/components/Divider.vue'
import aosMixin from '~/mixins/aos'
export default {
  name: 'index',
  mixins: [aosMixin],
  components: { Divider },

  head() {
    return {
      title: 'andreas.benz',
    }
  },
  data: () => {
    return {
      projects: [
        {
          image: 'shop',
          title: 'Remichel CashClip',
          content:
            'Im Auftrag des Unternehmens Remichel entwickelte ich 2020 einen Online-Shop. Hierbei wurden unter anderem Vue.js und Tailwindcss eingesetzt.',
          link: 'https://www.shop.andreasbenz.org',
          techstack: [
            'Vue.js',
            'tailwindcss',
            'Node.js',
            'Apollo GraphQL',
            'MongoDB',
          ],
        },
        {
          image: 'erp',
          title: 'Remichel ERP',
          content:
            'Parallel zur Entwicklung des Online-Shops entwickelte ich für das Unternehmen Remichel ein Warenwirtschaftssystem. Zum Einsatz kam unter anderem Node.js und GraphQl.',
          link: 'https://www.erp.andreasbenz.org',
          techstack: [
            'Vue.js',
            'tailwindcss',
            'Node.js',
            'Apollo GraphQL',
            'MongoDB',
          ],
        },
        {
          image: 'tac',
          title: 'TeleAgriCulture',
          content:
            'Für das vom Linzer Klimafond geförderte Startup TeleAgriCulture bin ich derzeit für die Weiterentwicklung der mobilen App verantwortlich. FÜr die Umsetzung kamen React.js sowie P5.js zum Einsatz.',
          link: 'https://teleagriculture.org/',
          techstack: ['React.js', 'tailwindcss', 'p5.js'],
        },
      ],
      skills: [
        {
          title: 'Full Stack Development',
          description:
            'Ich liebe benutzerfreundliche sowie selbsterklärende Web-Anwendungen und entwickle mit Leidenschaft digitale Lösungen für die Probleme unserer Zeit.',
        },
        {
          title: 'Web Frameworks',
          description:
            'In meinen Projekten verwende ich stets neueste Technologien. Hierzu gehören unter anderem Frameworks wie React.js, Vue.js und Angular.js.',
        },
        {
          title: 'UI/UX Design',
          description:
            'Eine solide Kundenanalyse sowie die Beachtung psychologischer Wirkfaktoren, bilden das Fundament einer erfolgreichen Gestaltung.',
        },
        {
          title: 'Projektmanagement',
          description:
            'Ich bin ein großer Fan von Lean Management und liebe es durch eine strukturierte und vorausschauende Planung, schnell und angemessen auf neue Herausforderungen reagieren zu können.',
        },

        {
          title: 'Kundengespräche',
          description:
            'Mit einer gesunden Portion Selbstvertrauen sowie Einfühlungsvermögen gehe ich auf die Bedürfnisse von Kunden ein und kann Lösungen verständlich kommunizieren.',
        },
        {
          title: 'Analytisches Denken',
          description:
            'Methoden wie Design Thinking und eine große Portion Kreativität, helfen mir schnell komplexe Zusammenhänge zu erkennen und Lösungen zu entwickeln.',
        },
      ],
    }
  },
}
</script>

<style>
p {
  direction: ltr;
  hyphens: auto;
}
#profile-picture {
  width: 100%;
  height: auto;
}
</style>
