<template>
  <div class="liste lg:ml-6 lg:col-start-2 custom-width">
    <h4 class="mt-2 text-3xl font-extrabold leading-8 text-gray-900 sm:text-4xl sm:leading-9">
      Task List :
    </h4>
    <ul class="mt-8 space-y-3 font-medium">
      <li class="flex items-start lg:col-span-12" v-for="task in tasksNotCompleted" :key="task._id" :class="{ completed: task.completed }">
        <div class="flex-shrink-0">
          <svg @click="markTaskAsComplete(task._id)" :disabled="task.completed" class="cursor-pointer w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            {{ task.completed ? "Completed" : "Mark as Completed" }}
          </svg>
        </div>
        <p @click="markTaskAsComplete(task._id)" :disabled="task.completed" class="cursor-pointer ml-3 leading-6 text-gray-500">
          {{ task.title }}
          <span :class="['priority', `priority-${task.priority}`]">{{ task.priority }}</span>
        </p>
        <span v-if="task._id === completedTaskId" class="completion-message">
          Task completed successfully!
        </span>
      </li>
    </ul>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      completedTaskId: null, // State for the temporary message
    };
  },
  computed: {
    ...mapGetters(['tasksNotCompleted'])
  },
  methods: {
    ...mapActions(['fetchTasksNotCompleted', 'completeTask']),
    async markTaskAsComplete(taskId) {
      try {
        await this.completeTask(taskId);
        this.completedTaskId = taskId;

        // Remove the task from the list after a short delay
        setTimeout(() => {
          this.completedTaskId = null;
          this.fetchTasksNotCompleted();
        }, 2000); // 2 seconds delay
      } catch (error) {
        console.error('Failed to complete task:', error);
        alert('Failed to complete task');
      }
    }
  },
  async created() {
    try {
      await this.fetchTasksNotCompleted();
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
      alert('Failed to fetch tasks');
    }
  }
};
</script>

<style scoped>
p {
  font-size: 1.4rem;
}
.liste {
  margin-top: -7rem;
  margin-left: -28rem;
}
.completed {
  text-decoration: line-through;
  color: grey;
}
.completion-message {
  color: green;
  margin-left: 10px;
}
.priority {
  font-weight: bold;
  margin-left: 10px;
}
.priority-Low {
  color: green; /* Low priority color */
}
.priority-Medium {
  color: orange; /* Medium priority color */
}
.priority-High {
  color: red; /* High priority color */
}
.task-list {
  max-width: 600px;
  margin: 0 auto;
}
button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
