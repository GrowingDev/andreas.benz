<template>
  <div class="w-full flex-1 pb-10 flex flex-col justify-start text-start items-start">
    <div class="max-w-max mb-2 pb-2">
      <svg
        v-if="skill.title == 'Web Frameworks'"
        aria-hidden="true"
        class="icon"
        focusable="false"
        data-prefix="fal"
        data-icon="bolt"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.3 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36zM140.3 436.9l33.5-141.6 9.3-39.4h-150L63 32h125.9l-38.7 118-13.8 42h145.7L140.3 436.9z"
        ></path>
      </svg>

      <svg
        v-if="skill.title == 'Analytisches Denken'"
        class="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <!--! Font Awesome Pro 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
        <path
          d="M509.2 275c-21-47.13-48.5-151.8-73.12-186.8C397.6 33.62 334.5 0 266.1 0H200.1c-104.5 0-195.9 80.13-199.9 184.5C-2.111 244.4 23.13 298.1 64 334.9L63.1 496c0 8.844 7.156 16 16 16c8.842 0 15.1-7.156 15.1-16l.0098-175.5L85.38 311c-35.62-32-55.12-77.63-53.24-125.3C35.39 101 110.6 32 199.1 32h66.12c57.12 0 110.9 27.88 143.9 74.63c12.5 17.88 28.1 66.75 42.37 106.1C462.1 241.5 471.3 268.5 479.1 288h-47.1c-8.836 0-16 7.162-16 16V384c0 17.6-14.4 32-32 32h-79.99c-8.836 0-16 7.117-16 15.95L287.1 496c0 8.844 7.156 16 15.1 16c8.844 0 16-7.156 16-16l.0203-48h63.99c35.34 0 63.1-28.66 63.1-63.1V320h31.1C503.1 320 518.6 296.1 509.2 275zM328 224C358.9 224 384 198.9 384 168c0-30.25-24.11-54.97-54.11-55.97c-11.05-23.67-38.53-38.08-64.84-29.69c-20.84-23.12-61.25-23.12-82.09 0c-29.38-9.391-59.63 9.188-68.09 37.89C86.38 122.8 64 146.9 64 176c0 22.22 13.06 41.45 32.94 50.27C101.8 252.3 124.6 272 152 272H160v32C160 312.8 167.2 320 176 320S192 312.8 192 304V256c0-8.844-7.156-16-16-16H152c-12.78 0-23.27-10.05-23.97-22.66C128.2 216.5 128.3 215.6 128.3 214.9c.2187-7.781-5.188-14.59-12.83-16.14C104 196.5 96 187.1 96 176c0-13.22 10.25-24.09 25.58-23.53c.2656 .0781 3.062 .7813 3.344 .8438C129.8 154.4 134.9 153.1 138.7 149.9C142.5 146.7 144.6 141.8 144.3 136.8c-.0313-.5938-.1406-1.391-.2969-2.188C144.7 122 155.2 112 168 112c3.719 0 7.562 1.297 12.08 4.078C183.9 118.4 188.5 119.1 192.9 117.8c4.312-1.234 7.922-4.234 9.922-8.25c8.312-16.75 34.09-16.75 42.41 0c2 4.016 5.609 7.016 9.922 8.25c4.359 1.266 8.969 .5781 12.8-1.75C272.4 113.3 276.3 112 280 112c11.45 0 21.12 8.625 22.98 20.52c.7344 4.672 3.5 8.766 7.547 11.22c4.047 2.438 8.984 2.984 13.44 1.438C326.1 144.2 328.1 144 328 144C341.3 144 352 154.8 352 168S341.2 192 328 192h-41.61c-4.828 0-9.391 2.172-12.42 5.922c-3.047 3.734-4.234 8.656-3.234 13.38C270.8 211.6 271.9 215.7 272 216c0 13.23-10.77 24-24 24c-8.844 0-16 7.156-16 16s7.156 16 16 16c28.16 0 51.53-20.89 55.44-48H328z"
        />
      </svg>

      <svg
        v-if="skill.title == 'Full Stack Development'"
        aria-hidden="true"
        class="icon"
        focusable="false"
        data-prefix="fal"
        data-icon="code"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path
          fill="currentColor"
          d="M228.5 511.8l-25-7.1c-3.2-.9-5-4.2-4.1-7.4L340.1 4.4c.9-3.2 4.2-5 7.4-4.1l25 7.1c3.2.9 5 4.2 4.1 7.4L235.9 507.6c-.9 3.2-4.3 5.1-7.4 4.2zm-75.6-125.3l18.5-20.9c1.9-2.1 1.6-5.3-.5-7.1L49.9 256l121-102.5c2.1-1.8 2.4-5 .5-7.1l-18.5-20.9c-1.8-2.1-5-2.3-7.1-.4L1.7 252.3c-2.3 2-2.3 5.5 0 7.5L145.8 387c2.1 1.8 5.3 1.6 7.1-.5zm277.3.4l144.1-127.2c2.3-2 2.3-5.5 0-7.5L430.2 125.1c-2.1-1.8-5.2-1.6-7.1.4l-18.5 20.9c-1.9 2.1-1.6 5.3.5 7.1l121 102.5-121 102.5c-2.1 1.8-2.4 5-.5 7.1l18.5 20.9c1.8 2.1 5 2.3 7.1.4z"
        ></path>
      </svg>

      <svg
        v-if="skill.title == 'Kundengespräche'"
        aria-hidden="true"
        focusable="false"
        data-prefix="fal"
        data-icon="user-friends"
        class="icon"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path
          fill="currentColor"
          d="M480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm0-160c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm0-192c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80zm80.1 212c-33.4 0-41.7 12-80.1 12-38.4 0-46.7-12-80.1-12-36.3 0-71.6 16.2-92.3 46.9C7.2 341.3 0 363.4 0 387.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM352 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-44.8c0-16.6 4.9-32.7 14.1-46.4 13.8-20.5 38.4-32.8 65.7-32.8 27.4 0 37.2 12 80.2 12s52.8-12 80.1-12c27.3 0 51.9 12.3 65.7 32.8 9.2 13.7 14.1 29.8 14.1 46.4V432zm271.7-114.9C606.4 291.5 577 278 546.8 278c-27.8 0-34.8 10-66.8 10s-39-10-66.8-10c-13.2 0-26.1 3-38.1 8.1 15.2 15.4 18.5 23.6 20.2 26.6 5.7-1.6 11.6-2.6 17.9-2.6 21.8 0 30 10 66.8 10s45-10 66.8-10c21 0 39.8 9.3 50.4 25 7.1 10.5 10.9 22.9 10.9 35.7V408c0 4.4-3.6 8-8 8H416c0 17.7.3 22.5-1.6 32H600c22.1 0 40-17.9 40-40v-37.3c0-19.9-6-38.3-16.3-53.6z"
        ></path>
      </svg>

      <svg
        v-if="skill.title == 'UI/UX Design'"
        class="icon"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M298.3 182.2C285.5 188.5 271.2 192 255.1 192C240.8 192 226.5 188.5 213.7 182.2L142.2 307.4C176.1 325.6 214.8 336 255.1 336C344.8 336 422.4 287.8 463.9 215.1C468.3 208.3 478.1 205.7 485.8 210.2C493.4 214.6 496 224.4 491.6 232C444.6 313.3 356.7 368 255.1 368C209 368 164.9 356.1 126.3 335.2L29.89 503.9C25.51 511.6 15.73 514.3 8.06 509.9C.3882 505.5-2.277 495.7 2.107 488.1L99.15 318.2C67.07 295.6 40.13 266.1 20.4 232C15.97 224.4 18.59 214.6 26.24 210.2C33.88 205.7 43.67 208.3 48.1 215.1C65.01 245.2 87.91 270.6 115.1 290.3L187.6 163.4C170.5 146.1 159.1 122.3 159.1 96C159.1 42.98 202.1 0 255.1 0C309 0 352 42.98 352 96C352 122.3 341.5 146.1 324.4 163.4L372.7 248.1C377.1 255.7 374.5 265.5 366.8 269.9C359.1 274.3 349.3 271.6 344.1 263.9L298.3 182.2zM255.1 32C220.7 32 191.1 60.65 191.1 96C191.1 131.3 220.7 160 255.1 160C291.3 160 320 131.3 320 96C320 60.65 291.3 32 255.1 32zM408.1 375.9C404.6 368.3 407.2 358.5 414.9 354.1C422.6 349.7 432.4 352.4 436.7 360.1L509.9 488.1C514.3 495.7 511.6 505.5 503.9 509.9C496.3 514.3 486.5 511.6 482.1 503.9L408.1 375.9z"
        />
      </svg>

      <svg
        v-if="skill.title == 'Projektmanagement'"
        aria-hidden="true"
        focusable="false"
        data-prefix="fal"
        data-icon="clipboard-list-check"
        class="icon"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path
          fill="currentColor"
          d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16v352zM112 328c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm168 8H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-153.8-65.6l64.2-63.6c2.1-2.1 2.1-5.5 0-7.6l-12.6-12.7c-2.1-2.1-5.5-2.1-7.6 0l-47.6 47.2-20.6-20.9c-2.1-2.1-5.5-2.1-7.6 0l-12.7 12.6c-2.1 2.1-2.1 5.5 0 7.6l37.1 37.4c1.9 2.1 5.3 2.1 7.4 0zM280 240h-77.6l-32.3 32H280c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z"
        ></path>
      </svg>
    </div>

    <h3>{{ skill.title }}</h3>
    <p class="text-justify">{{ skill.description }}</p>
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
