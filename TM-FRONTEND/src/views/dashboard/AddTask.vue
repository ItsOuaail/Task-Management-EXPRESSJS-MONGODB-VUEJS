<template>
    <div class="modal-box flex flex-col gap-3" >
      <h3 class="font-bold text-slate-700 sm:text-2xl">Add Task</h3>
      
      <input v-model="title" type="text"  class="grow input input-bordered flex items-center gap-2" placeholder="Add the title"  required />
      
      <input v-model="description" type="text"  class="grow input input-bordered flex items-center gap-2" placeholder="Add the description"  required />
      <select v-model="priority" class="text-slate-600 grow input input-bordered flex items-center gap-2" name="priority"  required>
        <option  value="" disabled selected>Priority --</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select> 
      <select v-model="category"  class="text-slate-600 grow input input-bordered flex items-center gap-2" name="category"  required>
        <option value="" disabled selected>Category --</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Home">Home</option>
        <option value="School">School</option>
        <option value="Errands">Errands</option>
        <option value="Fitness">Fitness</option>
        <option value="Hobbies">Hobbies</option>
        <option value="Finance">Finance</option>
      </select>
      <label class="text-black flex items-center gap-2" type="date">
        Due Date :
      </label>
      <input v-model="dueDate" type="datetime-local"  class="text-slate-600 grow input input-bordered flex items-center gap-2" pattern="\d{2}/\d{2}/\d{4}" placeholder="2024-12-31T23:59:59"  required />
      <div class="modal-action">
          <form  method="dialog" class="inline-flex justify-end gap-4">
              <button @click="AddTask"   class="bg-slate-700 border-slate-700 text-gray-100  btn btn-info " >Add</button>
              <button class="btn">Close</button>
          </form>
      </div>
  </div>
  
  </template>
  
<script>
import { mapActions } from "vuex";
export default {
    data() {
    return {
        title: "",
        description: "",
        dueDate: "",
        priority: "",
        category: ""
    };
  },
  methods: {
    ...mapActions(['addTask']),
    async AddTask() {
        const taskData = {
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            priority: this.priority,
            category: this.category
        };
        try {
            console.log(taskData);
            await this.addTask(taskData);
            this.$emit('task-added');
        } catch (error) {
        
        console.error("Signup failed:", error.response );
      }
    }
  }
}
</script>

  <style scoped>

  </style>
