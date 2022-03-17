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
                  title="done"
                >
                  done
                </div>
                <div class="material-icons edit">edit</div>
                <div class="material-icons close">close</div>
              </div>
            </div>
          </div>
          <h4>{{ task.id }}</h4>
          <h6>{{ task.name }}</h6>
          <p>{{ task.details }}</p>
          <br>
          <text class="date-d   "> <span class="alarm">Due -</span>{{ task.date }}</text>
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
import colref from "../firebase";
import { getDocs } from "firebase/firestore";
// import axios from "axios";
export default {
  components: {
    Navigator,
    AddTask,
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
        tasks.push(task.data());
      });
      this.tasks = tasks;
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>


