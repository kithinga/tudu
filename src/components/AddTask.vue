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
                <span class="material-icons syi">task</span>Tasks Add tasks
              </h6>
            </div>
            <div class="modal-body">
              <form class="task-form" action="#" autocomplete="off">
                <label for="name">Task title</label><br />
                <input
                  type="text"
                  id="name"
                  v-model="taskName"
                  placeholder="Task title"
                  required
                /><br />

                <label for="details">Details</label><br />
                <input
                  type="text"
                  id="details"
                  v-model="taskDetails"
                  placeholder="Details"
                  required
                />

                <label for="date">Date</label><br />
                <input
                  type="date"
                  v-model="dueDate"
                  placeholder="Due-Date"
                  required
                />
                <button type="submit" class="submit shadow-sm" @click="addTask">
                  Addtask
                </button>
                
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
      taskName: null,
      dueDate: null,
      taskDetails: null,
    };

  },
  methods: {
    async addTask(){
      console.log("creating a task");
      const addedDoc = await addDoc(colref, this.$data);
      console.log(addedDoc);
    }
  }
};
</script>