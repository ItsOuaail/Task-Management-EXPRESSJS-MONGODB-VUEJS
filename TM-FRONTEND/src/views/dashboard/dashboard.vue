<template>
  <div class="min-h-screen bg-custom-color">
    <div class="flex">
      <div
        :class="[
          'sidebar min-h-screen w-[3.35rem] overflow-hidden border-r',
          isSidebarOpen ? 'w-56' : 'w-[13.35rem]',
        ]"
      >
        <div
          class="test flex h-screen flex-col justify-between pt-2 pb-6 bg-white "
        >
          <div>
            <div class="flex ">
              <button @click="toggleSidebar" class="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" 
                  />
                </svg>
              </button>
              <a
                href="#"
                aria-label="dashboard"
                class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600 "
              >
                <div style="width: 37px; height: 37px; margin-top: 10px">
                  <img src="" alt="" />
                </div>
                <div class="image" style="width: 130px; height: 30px">
                  <router-link to="/test"
                    ><img src="/public/img/prioritize.png" alt=""
                  /></router-link>
                </div>
              </a>
            </div>

            <ul class="mt-6 space-y-2 tracking-wide">
              <li class="min-w-max">
                <a
                  href="#"
                  aria-label="dashboard"
                  class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-white"
                >
                  <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 group-hover:text-amber-300"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </svg>
                  <span class="group-hover:text-amber-300">
                    <router-link to="/offre">Dashboard</router-link>
                  </span>
                </a>
              </li>
              <li class="min-w-max">
                <a
                  href="#"
                  aria-label="dashboard"
                  class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-white"
                >
                  <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 group-hover:text-amber-300"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                      />
                    </svg>
                  </svg>
                  <span class="text-white group-hover:text-amber-300">
                    <router-link to="/offre">Projects</router-link>
                  </span>
                </a>
              </li>
              <li class="min-w-max">
                <a
                  href="#"
                  class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 group-hover:text-amber-300"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                  </svg>
                  <span class="group-hover:text-amber-300">
                    <router-link to="/atelier">Tasks</router-link>
                  </span>
                </a>
              </li>
              <li class="min-w-max">
                <a
                  href="#"
                  class="group flex items-center space-x-4 rounded-md px-4 py-3 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 group-hover:text-amber-300"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                  </svg>
                  <span class="group-hover:text-amber-300">
                    <router-link to="/inscription">Calendar</router-link>
                  </span>
                </a>
              </li>

              <li class="min-w-max">
                <a
                  href="#"
                  class="group flex items-center space-x-4 rounded-md px-4 py-3 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 group-hover:text-amber-300 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="group-hover:text-amber-300">
                    <router-link to="/packs">settings</router-link>
                  </span>
                </a>
              </li>
              <!-- <li class="min-w-max">
                <a href="#" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path class="fill-current text-gray-600 group-hover:text-selected" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path class="fill-current text-gray-300 group-hover:text-selected-h" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  <span class="group-hover:text-gray-700">Paiement</span>
                </a>
              </li> -->
            </ul>
          </div>
          <div class="w-max -mb-3">
            <a
              href="#"
              class="group flex items-center space-x-4 rounded-md px-4 py-3 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 group-hover:text-selected"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 group-hover:text-amber-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                  />
                </svg>
              </svg>
              <span class="group-hover:text-amber-300">
                <a @click.prevent="logout">Déconnexion</a>
              </span>
            </a>
          </div>
        </div>
      </div>
      <section
        class="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6 bg-custom-color"
      >
        <RouterView />
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "sideBar",
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.test {
  background: rgb(27,27,25);
background: -moz-linear-gradient(103deg, rgba(27,27,25,1) 0%, rgba(15,14,3,1) 18%, rgba(1,1,1,1) 100%);
background: -webkit-linear-gradient(103deg, rgba(27,27,25,1) 0%, rgba(15,14,3,1) 18%, rgba(1,1,1,1) 100%);
background: linear-gradient(103deg, rgba(27,27,25,1) 0%, rgba(15,14,3,1) 18%, rgba(1,1,1,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1b1b19",endColorstr="#010101",GradientType=1);
}
.image img {
  margin-left: -3.5rem;
  height: 3rem;
  width: 5rem;
  margin-top: -0.5rem;
}
.bg-gradient-selected {
  background-color: #a3b18a; /* Utilisez la même couleur personnalisée ici */
}
.bg-custom-color {
  background-color: #f6f5f4;
}

.custom-hover-text:hover {
  color: #a3b18a;
}

/* Correction de la pseudo-classe group-hover */
/* Utilisez .group:hover pour cibler le groupe lorsqu'il est survolé */
.group:hover .group-hover\:text-selected {
  color: #a3b18a;
}

.group:hover .group-hover\:text-selected-h {
  color: #5e713c;
}
.avatarr {
  height: 10%;
  width: 90%;
  padding-left: 25%;
  margin-left: -5%;
  margin-top: 19%;
}
.bg-gradient-selected {
  background-color: #a3b18a; /* Use your custom color */
}
.bg-custom-color {
  background-color: #f6f5f4;
}

.custom-hover-text:hover {
  color: #a3b18a;
}

/* For better understanding of the pseudo-class group-hover */
.group:hover .group-hover\:text-selected {
  color: #a3b18a;
}

.group:hover .group-hover\:text-selected-h {
  color: #5e713c;
}
.avatarr {
  height: 10%;
  width: 90%;
  padding-left: 25%;
  margin-left: -5%;
  margin-top: 19%;
}
</style>