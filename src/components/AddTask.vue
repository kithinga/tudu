<template>
  <div class="container-fluid">
    <div class="row no-gutters">
      <!-- Modal just laying around -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">
                <span class="material-icons syi">task </span>Add-Task
              </h6>
            </div>
            <div class="modal-body">
              <form
                class="task-form"
                @submit.prevent="addTask"
                autocomplete="off"
              >
                <label for="name">Task title</label><br />
                <input
                  type="text"
                  id="name"
                  placeholder="Task title"
                  v-model="name"
                  required
                /><br />

                <label for="details">Details</label><br />
                <input
                  type="text"
                  id="details"
                  placeholder="Details"
                  v-model="details"
                  required
                />

                <label for="date">Date</label><br />
                <input
                  type="date"
                  placeholder="Due-Date"
                  v-model="date"
                  required
                />
                <button type="submit" class="submit shadow-sm">Addtask</button>
              </form>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import colref from "../firebase";
import { addDoc } from "firebase/firestore";

export default {
  name: "AddTask",

  data() {
    return {
      tasks: [],
      name: null,
      details: null,
      date: null,
    };
  },
  methods: {
    async addTask() {
      const addedDoc = await addDoc(colref, this.$data);
      console.log(addedDoc);
      //  swal delays
      swal({
        text: "Adding task. . .",
        icon: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/16e83113765711.56277d220a938.gif",
        timer: 4000,
      });
    
    },
  },
};
</script>