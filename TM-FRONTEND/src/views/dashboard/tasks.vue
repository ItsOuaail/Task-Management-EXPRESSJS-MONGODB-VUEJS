<template>
  <div
    class="today h-screen w-full dark:bg-gray-700 flex justify-center items-center"
  >
    <div class="today1 max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8">
      <h2
        class="text-3xl font-extrabold tracking-tight text-black sm:text-4xl dark:text-white"
      >
        Tasks :
      </h2>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
        <div
          class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900"
        >
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt
                class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400"
              >
                Today
              </dt>
              <dd
                class="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400"
              >
                3
              </dd>
            </dl>
          </div>
        </div>
        <div
          class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900"
        >
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt
                class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400"
              >
                All
              </dt>
              <dd
                class="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400"
              >
                8
              </dd>
            </dl>
          </div>
        </div>
        <div
          class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900"
        >
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt
                class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400"
              >
                Completed
              </dt>
              <dd
                class="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400"
              >
                10
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h2
    class="mylist text-3xl font-extrabold tracking-tight text-black sm:text-4xl dark:text-white"
  >
    My list :
  </h2>

  <div class="overflow-y-auto h-32 ... tab1 overflow-x-auto">
    <table class="table table-s">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Category</th>
          <th>Priority</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Littel, Schaden and Vandervort</td>
          <td>Canada</td>
          <td>12/16/2020</td>
          <td>Blue</td>
        </tr>
        <tr>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Zemlak, Daniel and Leannon</td>
          <td>United States</td>
          <td>12/5/2020</td>
          <td>Purple</td>
        </tr>
        <tr>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Carroll Group</td>
          <td>China</td>
          <td>8/15/2020</td>
          <td>Red</td>
        </tr>
        <tr>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Carroll Group</td>
          <td>China</td>
          <td>8/15/2020</td>
          <td>Red</td>
        </tr>
        <tr>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Carroll Group</td>
          <td>China</td>
          <td>8/15/2020</td>
          <td>Red</td>
        </tr>
        <tr>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Carroll Group</td>
          <td>China</td>
          <td>8/15/2020</td>
          <td>Red</td>
        </tr>
      </tbody>
    </table>
  </div>

  <button
    class="add relative inline-block p-px font-semibold leading-6 text-indigo-600 cursor-pointer group rounded-xl"
  >
    <div class="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl">
      <span>Add a Task</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
        class="w-6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  </button>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      tasks: []
    }
  },
  mounted (){
    this.getTasks();
  },
  methods: {
    ...mapActions(['fetchTasks']),
    async getTasks() {
      try {
        const response = await this.fetchTasks();
        this.tasks = response;
        console.log(response);
      } catch (error) {
        console.error("fetching tasks  failed:", error.response.data.error );
        console.log(error.response.data)
      }

    }
  }
}


</script>




<style>
.add {
  margin-left: 81%;
  text-decoration: underline;
}
.mylist {
  margin-left: -3rem;
  margin-top: -20%;
}
.today {
  margin-top: -28%;
  margin-left: -5rem;
}
.today1 {
  width: 60rem;
}
.tab1 {
  margin-top: 1.5rem;
  margin-left: -3.5rem;
}
th {
  color: rgb(84, 84, 88);
  font-size: 1.1rem;
}
</style>import { data } from "autoprefixer";
