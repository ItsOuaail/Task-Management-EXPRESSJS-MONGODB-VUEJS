<template>
    
      <div class="tee">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Confirm Delete</h3>
            <p class="py-4">Are you sure you want to delete this task?</p>
            <div class="modal-action">
              <button @click="confirm" class="btn btn-error">Delete</button>
              <button @click="cancel" class="btn">Cancel</button>
            </div>
          </div>
        
      </div>
  </template>
  
  <script>
  export default {
    methods: {
      confirm() {
        this.$emit("confirm");
      },
      cancel() {
        this.$emit("cancel");
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-box {
    max-width: 400px;
    margin-top: -20rem;
    margin-left: 10rem;
    background-color: rgb(181, 173, 173);
  }
  .tee{}
  </style>
  