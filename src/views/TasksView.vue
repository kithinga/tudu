<template>
  <Navigator />

  <div class="container-fluid">
    <div class="row no-gutters">
      <!-- Decoy div not needed anyway -->
      <div class="col-md-2"></div>

      <div class="col-md-8 tacent" data-aos="zoom-in-right">
        <div class="container-fluid">
          <div class="row no-gutters checker">
            <div class="col-lg-6">
              <div class="tid-task"><h4 class="tihead">Tasks</h4></div>
            </div>
            <div class="col-lg-6">
              <div class="tid-btn">
                <!-- Button to trigger modal -->
                <button
                  type="button"
                  class="btn-addtask shadow-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <p class="addsi">
                    <span class="material-icons ">add</span> Add-task
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal for adding here -->
        <AddTask />

        <div class="container-fluid">
          <div class="row no-gutters justify-content-center">
            <div class="col-lg-3" v-for="task of tasks" :key="task.id">
              <div class="tsk01">
                <div class="tsk-head">
                  <!-- Drop-down menu starts here -->
                  <div class="btn-group dropstart">
                    <button
                      type="button"
                      class="btn "
                      data-bs-toggle="dropdown"
                    >
                      <span class="material-icons ver">more_vert</span>
                    </button>

                
                    <ul class="dropdown-menu ">
                      <li
                        type="button"
                        title="Edit-task"
                        @click="editTask"
                      >
                        <router-link :to="{ path: `/edittask/${task.id}` }">
                          EditTask
                           <span class="material-icons edit">edit</span>
                        </router-link>
                      </li>
                      <li title="Delete-task" @click="deleteTask(task.id)">
                        Del.Task
                         <span class="material-icons dele">close</span>
                      </li>
                    </ul>
                  </div>
                  <!-- Split dropstart button -->
                </div>

                <!-- Task body -->
                <div class="tsk-body">
                  <!-- <h4>{{ task.id }}</h4> -->
                  <h6>{{ task.name }}</h6>
                  <p>{{ task.details }}</p>
                  <br />
                  <text class="date-d">
                    <span class="alarm">Due -</span>{{ task.date }}</text
                  >
                </div>
                <div class="tsk-foot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- decoy div, aslo not needed -->
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<script>
// @ serves as src alias
import Navigator from "@/components/Navigator.vue";
import AddTask from "@/components/AddTask.vue";
import colref from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
// import axios from "axios";
export default {
  components: {
    Navigator,
    AddTask,
  },

  data() {
    return {
      tasks: [],
      selectedTask: null,
    };
  },

  methods: {
    // Fetching Data from database
    async fetchTasks() {
      let tasksSnapShot = await getDocs(colref);
      let tasks = [];
      tasksSnapShot.forEach((task) => {
        let taskData = task.data();
        taskData.id = task.id;
        tasks.push(taskData);
      });
      console.log(tasks);
      this.tasks = tasks;
    },

    // delete task
    async deleteTask(taskId) {
      let taskRef = doc(colref, taskId);
      await deleteDoc(taskRef);
      swal({
        title: "Are you sure.. delete?",
        text: "This action is irreversible!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Hey Festus, Your has been deleted!", {
            icon: "success",
            timer: 3000,
          });
          window.location.href = "/tasks";
        } else {
          swal({
            text: "Reverting..",
            icon: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/16e83113765711.56277d220a938.gif",
            buttons: false,
            closeOnClickOutside: false,
            timer: 5000,
            //icon: "success"
          });
        }
      });
    },

    // Mark task done
    async doneTask() {
      swal("Congrats..! task is completed");
    },
  },
  created() {
    this.fetchTasks();
    let taskId = this.$route.params.taskId;
    this.taskId = taskId;
  },
};
</script>

<style scoped>

.tacent {
  background-color: rgb(246, 246, 248);
  /* background-color:rgb(44, 36, 83); */
  border-radius: 2px;
  border: solid 1px rgb(250, 243, 243);
  padding-bottom: 1.6rem;
}

</style>








