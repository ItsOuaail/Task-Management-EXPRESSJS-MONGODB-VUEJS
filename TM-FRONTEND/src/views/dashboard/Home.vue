<template>
  <div v-if="showSuccessMessage" class="success-message p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
    <span class="font-medium">Task added successfully!</span>
  </div>
  <div v-if="showSuccessMessage1" class="success-message p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
    <span class="font-medium">Task updated successfully!</span>
  </div>
  
  
  <div
    class="today h-screen w-full dark:bg-gray-700 flex justify-center items-center"
  >
    <div class="today1 max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8">
      <h2
        class="text-3xl  tracking-tight text-black sm:text-4xl dark:text-white"
      >
      Dashboard :
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
                <a href="/tasks">Tasks</a>
              </dt>
              <dd
                class="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400"
              >
              {{ tasksNotCompleted.length }}
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
                {{ tasks.length }}
              </dd>
            </dl>
          </div>
        </div>
        <div
          class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900"
        >
          <div onclick="my_modal_4.showModal()" class="cursor-pointer px-4 py-5 sm:p-6">
            <dl>
              <dt 
                class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400"
              >
                Completed
              </dt>
              <dd
                class="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400"
              >
                {{ tasksCompleted.length }}
              </dd>
            </dl>
            <!-- Open the modal using ID.showModal() method -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <dialog id="my_modal_4" class="modal">
    <completed></completed>
  </dialog>
  <h2
    class="mylist text-3xl  tracking-tight text-black sm:text-4xl dark:text-white"
  >
    My list :
  </h2>

  <div class="tabll overflow-scroll tab1   overflow-x-auto">
    <table class="table table-s">
      <thead >
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Category</th>
          <th>Priority</th>
          <th>Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task._id">
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
          <td>{{ task.dueDate }}</td>
          <td>{{ task.category }}</td>
          <td>{{ task.priority }}</td>
          <td>{{ task.completed }}</td>
          <td>
            <div class="flex items-center gap-2">
              <div class="flex items-center gap-2">
                <svg @click="DeleteTask(task._id)" class="h-6 w-6 text-gray-400 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                <svg @click="openUpdateModal(task)" class="h-6 w-6 text-gray-400 cursor-pointer" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"/>
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"/>
                  <line x1="16" y1="5" x2="19" y2="8"/>
                </svg>
              </div>
            </div>
          </td>
          
        </tr>
      </tbody>
    </table>
  </div>

  <button
    class="add relative inline-block p-px font-semibold leading-6 text-indigo-600 cursor-pointer group rounded-xl"
  >
    <div class="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl">
      <span onclick="my_modal_1.showModal()">Add a Task</span
      ><svg
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
      <!-- Open the modal using ID.showModal() method -->

      <dialog id="my_modal_1" class="modal">
        <AddTaskVue @task-added="handleTaskAdded" />
      </dialog>
    </div>
  </button>
  <dialog ref="updateModal" id="my_modal_3" class="modal">
    <UpdateTaskVue :task="selectedTask" @task-updated="handleTaskUpdated"/>
  </dialog>
  
  
  <ConfirmDelete
      v-if="showConfirmDialog"
      @confirm="confirmDelete"
      @cancel="cancelDelete"
    />
  
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import AddTaskVue from "./AddTask.vue";
import ConfirmDelete from "./ConfirmDelete.vue";
import UpdateTaskVue from "./UpdateTask.vue";
import completed from "./Completed.vue"

export default {
  name: "TaskList",
  components: {
    AddTaskVue,
    ConfirmDelete,
    UpdateTaskVue,
    completed
  },
  data() {
    return {
      showSuccessMessage: false,
      showSuccessMessage1: false,
      showConfirmDialog: false,
      taskToDelete: null,
      selectedTask: null
    };
  },
  computed: {
    ...mapGetters(["tasks"]),
    ...mapGetters(["tasksCompleted"]),
    ...mapGetters(["tasksNotCompleted"])
  },
  created() {
    this.$store.dispatch("fetchTasks");
    this.$store.dispatch("fetchTasksCompleted");
    this.$store.dispatch("fetchTasksNotCompleted");
  },
  methods: {
    openUpdateModal(task) {
      this.selectedTask = task;
      const modal = this.$refs.updateModal;
      if (modal) {
        modal.showModal();
      }
    },
    handleTaskAdded() {
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000); // Hide the message after 3 seconds
    },
    handleTaskUpdated() {
      this.showSuccessMessage1 = true;
      setTimeout(() => {
        this.showSuccessMessage1 = false;
      }, 3000); // Hide the message after 3 seconds
    },
    ...mapActions(['deleteTask']),
    async DeleteTask (id) {
      this.taskToDelete = id;
      this.showConfirmDialog = true;
    },
    async confirmDelete() {
      try {
        await this.deleteTask(this.taskToDelete);
        this.taskToDelete = null;
        this.showConfirmDialog = false;
      } catch (error) {
        console.error("Deleting failed:", error.response);
      }
    },
    cancelDelete() {
      this.taskToDelete = null;
      this.showConfirmDialog = false;
    }
  }
};
</script>





<style scoped>
.success-message {
  margin-top: -5.6rem;
  width: 40rem;
  align-items: center;
  text-align: center;
}
.tabll{
  width: 55rem;
  height: 10rem;
}
.add {
  margin-left: 81%;
  text-decoration: underline;
}
.mylist {
  margin-left: -3rem;
  margin-top: -20%;
  
}
.today {
  margin-top: -26%;
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
</style>import { data } from "autoprefixer";mapActions, import UpdateTaskVue from "./UpdateTask.vue";

