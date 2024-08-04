<template>
    <div class="modal-box">
        <div>
            <h1 class="font-bold text-xl text-green-900">Tasks Completed</h1>
            <ul  class="mt-3 flex flex-col space-y-2" v-for="task in tasksCompleted" :key="task._id">
                <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" aria-hidden="true" class="mr-2 h-auto w-6 text-green-600 sm:w-7">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z">
                        </path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">{{ task.title }}</p>
                </li>
            </ul>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TaskCompeted",
  computed: {
    ...mapGetters(["tasksCompleted"]),
  },
  created() {
    this.$store.dispatch("fetchTasksCompleted");
  }
};
</script>