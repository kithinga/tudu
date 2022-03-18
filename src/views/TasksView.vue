<template>
  <Navigator />
 
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
            <span class="material-icons">add</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal for adding here -->
  <AddTask />
  <!-- Modal to edit -->
  <EditTask />

  <div class="container-fluid">
    <div class="row no-gutters justify-content-center">
      <div class="col-lg-2" v-for="task of tasks" :key="task.id">
        <!-- Drop down for editing -->
        <div class="tsk01 shadow-sm">
          <div class="card-head">
            <div class="btn-group">
              <button
                class="btn"
                id="dropdownMenuClickableInside"
                data-bs-toggle="dropdown"
              >
                <div class="material-icons ver">more_vert</div>
              </button>
              <div class="dropdown-menu shadow-sm">
                <div
                  class="material-icons done"
                  data-bs-toggle="tooltip"
                  title="Done"
                  @click="doneTask"
                >
                  done
                </div>
                <span
                  type="button"
                  class="btn-edittask edit material-icons"
                  data-bs-toggle="modal"
                  title="Edit"
                  @click="editTask"
                  data-bs-target="#exampleModal01"
                >
                  edit
                </span>
                <div
                  class="material-icons close"
                  title="Close"
                  @click="deleteTask"
                >
                  close
                </div>
              </div>
            </div>
          </div>
          <!-- <h4>{{ task.id }}</h4> -->
          <h6>{{ task.name }}</h6>
          <p>{{ task.details }}</p>
          <br />
          <text class="date-d">
            <span class="alarm">Due -</span>{{ task.date }}</text
          >
          <div class="card-foot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ serves as src alias
import Navigator from "@/components/Navigator.vue";
import AddTask from "@/components/AddTask.vue";
import EditTask from "@/components/EditTask.vue";
import colref from "../firebase";
import { getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
// import axios from "axios";
export default {
  components: {
    Navigator,
    AddTask,
    EditTask,
  },
  data() {
    return {
      tasks: [],
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
      console.log(tasks)
      this.tasks = tasks;
    },
    // delete task
    async deleteTask() {
      
      swal("Task deleted success  . .. ");
    },
    // Mark task done
    async doneTask() {
      swal("Congrats..! task is completed");
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>


