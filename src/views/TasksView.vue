<template>
  <Navigator />

  <div class="container-fluid">
    <div class="row no-gutters">
      <!-- Decoy div not needed anyway -->
      <div class="col-lg-2">
        <div class="row no-gutters">
          <div class="col">
            <div class="status-check shadow-sm">
              <ul>
                <h5>Task status</h5>
                <li class="check-text shadow-sm">
                  <router-link to="/tasks">
                    Ongoing <span class="ong check-span"></span>
                  </router-link>
                </li>
                <li class="check-text shadow-sm">
                  <router-link to="/pending">
                    Overdue <span class="ovd check-span"></span>
                  </router-link>
                </li>
                <li class="check-text shadow-sm">
                  <router-link to="/future">
                    Complete <span class="com check-span"></span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-8 tacent">
        <!-- Device pretask -->
        <div class="container-fluid device-pretask">
          <div class="row no-gutters checker">
            <div class="col-lg-6">
              <div class="tid-task">
                <div class="avar shadow-sm">
                  <h4 class="tihead">
                    Tasks <span class="material-icons tic">task</span>
                  </h4>
                  <h5 class="tod">todo</h5>
                </div>
              </div>
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
                    Add-task
                    <span class="material-icons icona">add</span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile section responsive -->
        <div class="mobile-pretask">
                <div class="tid-task">
                  <div class="avar shadow-sm">
                    <h4 class="tihead">
                      Tasks <span class="material-icons tic">task</span>
                    </h4>
                    <h5 class="tod">todo</h5>
                  </div>
                </div>
             
              
                      <div               class="tid-btn">
                      <!--               Button                to trigger modal -->
                      <button
                      type="button"
                      class="btn-addtask shadow-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      >
                      <p                 class="addsi">
                      Add-task
                      <span              class="material-icons icona">add</span>
                      </p>
                      </button>
                </div>
        </div>

        <!-- Modal for adding here -->
        <AddTask />

        <div class="container-fluid ie">
          <div class="row ii no-gutters justify-content-center">
            <div class="col-lg-3" v-for="task of tasks" :key="task.id">
              <div class="tsk01 shadow-sm">
                <div class="tsk-head">
                  <!-- Drop-down menu starts here -->
                  <div class="btn-group dropstart">
                    <button
                      type="button"
                      class="btn-drop"
                      data-bs-toggle="dropdown"
                    >
                      <span class="material-icons ver">more_vert</span>
                    </button>

                    <ul class="dropdown-menu">
                      <li type="button" title="Edit-task" @click="editTask">
                        <router-link :to="{ path: `/edittask/${task.id}` }">
                          Edit-Task
                          <span class="material-icons edit">edit</span>
                        </router-link>
                      </li>
                      <li title="Mark-done" @click="doneTask()">
                        Mark-done
                        <span class="material-icons done">done</span>
                      </li>
                      <li title="Delete-task" @click="deleteTask(task.id)">
                        Dele.Task
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
                  <text class="st-text"
                    >status <span class="status">-</span></text
                  >
                </div>
                <div class="tsk-foot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- decoy div, aslo not needed -->
      <div class="col-md-2 mb-rem"></div>
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


@media (max-width: 575.98px) {
   


  .device-pretask {
    display: none;
  }
  .mb-rem{
    display: none;
    background-color:red;
  }

.mobile-pretask{
  display:grid;
  /* margin: 0.7rem; */
  margin-left: 0.7rem;
  margin-bottom: 0.5rem;
  grid-template-columns: 1fr 1fr;
}

.tacent {
  background-color: rgb(241, 241, 248);

  /* background-color:rgb(44, 36, 83); */
  /* opacity: 0.9; */
  border-radius: 5px;
  border: solid 1px rgb(250, 243, 243);
  padding-bottom: 1.6rem;
  padding:2px;
 
}

.ii{
  padding:0;
  margin: 0;
}
.ie{
  padding:0;
  margin: 0;
}
.status-check{
  margin-bottom:0.7rem;
}
.tid-btn {
  text-align: center;
 margin-top:2rem;
 margin-left: 3.5rem;
}


}


</style>








