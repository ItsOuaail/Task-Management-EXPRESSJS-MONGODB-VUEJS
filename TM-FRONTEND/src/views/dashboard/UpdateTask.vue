<template>
    <div v-if="task" class="modal-box flex flex-col gap-3">
      <h3 class="font-bold text-slate-700 sm:text-2xl">Update Task</h3>
  
      <form class="flex flex-col gap-3">
        <input
          v-model="task.title"
          type="text"
          class="grow input input-bordered flex items-center gap-2"
          placeholder="Add the title"
          required
        />
  
        <input
          v-model="task.description"
          type="text"
          class="grow input input-bordered flex items-center gap-2"
          placeholder="Add the description"
          required
        />
  
        <select
          v-model="task.priority"
          class="text-slate-600 grow input input-bordered flex items-center gap-2"
          name="priority"
          required
        >
          <option value="" disabled>Priority --</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
  
        <select
          v-model="task.category"
          class="text-slate-600 grow input input-bordered flex items-center gap-2"
          name="category"
          required
        >
          <option value="" disabled>Category --</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Home">Home</option>
          <option value="School">School</option>
          <option value="Errands">Errands</option>
          <option value="Fitness">Fitness</option>
          <option value="Hobbies">Hobbies</option>
          <option value="Finance">Finance</option>
        </select>
  
        <label class="text-black flex items-center gap-2">
          Due Date :
        </label>
        <input
          v-model="task.dueDate"
          type="datetime-local"
          class="text-slate-600 grow input input-bordered flex items-center gap-2"
          placeholder="2024-12-31T23:59:59"
          
        />
  
        <form  method="dialog" class="inline-flex justify-end gap-4">
          <button @click="editTask"   class="bg-slate-700 border-slate-700 text-gray-100  btn btn-info " >Add</button>
          <button class="btn">Close</button>
      </form>
      </form>
    </div>
    <div v-else>
      <p>Loading task...</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ["task"],
    methods: {
      async editTask() {
        try {
          await this.$store.dispatch("editTask", this.task);
          this.$router.push("/tasks"); // Navigate back to task list
          this.$emit('task-updated');
        } catch (error) {
          console.error("Failed to edit task:", error);
          alert("Failed to edit task");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  