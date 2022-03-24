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
                  class="name"
                  placeholder="Task title"
                  v-model="name"
                  required
                /><br />

                <label for="details">Details</label><br />
                <input
                  type="text"
                  id="details"
                  class="details"
                  placeholder="Details"
                  v-model="details"
                  required
                />

                <label for="date">Date</label><br />
                <input
                  id="date"
                  class="date "
                  type="date"
                  placeholder="Due-Date"
                  v-model="date"
                  required
                />
                <button type="submit" class="submit shadow-sm" data-dismiss="modal">Addtask</button>
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
    
      swal({
        text: "uploading tasks ....",
        // icon: "https://i.gifer.com/IuGJ.gif",
        icon: "https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-7.gif",
        buttons: false,
        timer:3000,
        
      })

      // setTimeout(2000)
      // window.location.href = "/tasks"
      //  alert(addedDoc);
    },
  },
};
</script>

