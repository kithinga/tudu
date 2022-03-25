<template>
  <div class="container-fluid">
    <div class="row no-gutters">
      <!-- Modal just laying around -->
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="edit-form">
          <form
            class="task-form"
            autocomplete="off"
            @submit.prevent="updateTask"
          >
            <h4><span class="material-icons">edit</span>Edit task</h4>
            <!-- <label for="name">Task title</label> -->
            <input
               class=""
              type="text"
              id="name"
              v-model="taskInfo.name"
              placeholder="Task title"
              required
            /><br />

            <!-- <label for="details">Details</label> -->

            <textarea
            class=""
              type="text"
              id="details"
              v-model="taskInfo.details"
              placeholder="Details"
              required
            />

            <!-- <label for="date">Date</label> -->

            <input
              type="date"
              class=" date"
              v-model="taskInfo.date"
              placeholder="Due-Date"
              required
            />


            <button type="submit" class="submit">
              <span class="material-icons">update</span> Update
            </button>
          </form>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import { colref } from "../firebase";
import { doc, getDocs, setDoc } from "firebase/firestore";
export default {
  name: "EditTask",

  data() {
    return {
      selectedTask: {},
      taskId: null,
      docRef: null,
      taskInfo: {
        name: null,
        details: null,
        date: null,
      },
    };
  },

  methods: {
    async editTask() {
      let taskRef = doc(colref, this.taskId);
      this.docRef = taskRef;
      let task = await getDocs(this.docRef);
      console.log(task.data());
      let taskData = task.data();
      this.taskInfo.name = taskData.name;
      this.taskInfo.details = taskData.details;
      this.taskInfo.date = taskData.date;
    },

    async updateTask() {
      await setDoc(this.docRef);
      alert('qweqqwe')
    },
  },
  created() {
    let taskId = this.$route.params.taskId;
    this.taskId = taskId;
    this.editTask();
  },
};
</script>




<style scoped>
.modal-title {
  color: rgb(119, 115, 175);
  font-weight: 700;
  font-size: 16.5px;
  border-bottom: 2px solid rgb(250, 250, 250);
}

.modal-body {
  padding-top: 0;
  margin-top: 0;
}

.syi {
  margin-right: 1.6rem;
}

.modal-content {
  /* border:none; */
  border-radius: 4px;
  border: 1px solid rgb(208, 206, 216);
}
.edit-form {
  padding: 2.4rem;
  margin-top: 2rem;
  padding-top: 2.4rem;
  border: solid 1px rgb(229, 227, 243);
  border-radius: 9px;
  box-shadow: 0px 4px 5px rgb(241, 240, 240);
}
.task-form {
  text-align: left;
}
.task-form h4 {
  margin-bottom: 1.3rem;
  font-size: 14px;
  color: rgb(101, 102, 182);
  font-weight: 600;
}

.date {
  /* color: red; */
  font-size: 12px;
}

.task-form input {
  height: 3.5rem;
  width: 100%;
  border-radius: 9px;
  padding-left: 1.7rem;
  border: none;
  /* border: solid 1px rgb(241, 241, 241); */
  
  background-color:rgb(246, 246, 252);
}
input:focus{
  background-color:rgb(255, 255, 255);
  outline: none;
 border  : solid 2px rgb(228, 243, 243);
}
.date{
  color: rgb(78, 138, 153);
}



.task-form textarea {
  min-height: 5rem;
  height: auto;
  width: 100%;

  /* border-radius: 4px; */
  border: none;
  padding-left: 1.7rem;
  border-radius: 9px;
   background-color:rgb(246, 246, 252);
  margin-top: 1rem;
  margin-bottom:0.6rem;
  padding-top: 2rem;
   border: solid 1px rgb(241, 241, 241);
}

textarea:focus {
  outline: none;
  background-color: white;
  border  : solid 2px rgb(228, 243, 243);
}

#date,
#name,
#details {
  font-weight: 400;
  font-size: 12px;
  color: rgb(165, 159, 219);
}

.task-form label {
  text-align: left;
  font-size: 13px;
  font-weight: 500;
  color: rgb(109, 114, 177);
  margin-top: 1.3rem;
}
.submit {
  font-size: 13px;
  color: rgb(255, 255, 255);
  /* border: solid 2px rgb(222, 222, 228); */
  background-color: rgb(129, 127, 167);
  margin-top: 2rem;
  border-radius: 1.6rem;
  width: 7rem;
  font-weight: 500;
  height: 2.8rem;
}
.btn-group {
  /* background-color:rgb(109, 109, 179); */
  padding: 0;
  margin: 0;
  border-radius: 4px;
  border-bottom-left-radius: 0.7rem;
  /* border: solid 1px rgb(243, 241, 253); */
}


button {
  outline: none;
}



.card-head {
  color: rgb(197, 190, 190);
  border-radius: 20px;
  text-align: right;
  /* background-color:rgb(250, 249, 253); */
}

.dropdown-menu {
  /* background-color:red;     */
  background-color: rgb(253, 253, 255);
  border: solid 1px rgb(233, 232, 236);
  padding: 1rem;
}
.done,
.edit,
.close {
  margin: 0.55rem;
  cursor: pointer;
}
.done:hover,
.edit:hover,
.close:hover {
  transform: scale(1.4);
}

.close {
  color: rgb(226, 152, 103);
  font-weight: 500;
}
.edit {
  color: rgb(38, 121, 146);
}
.ver {
  color: rgb(146, 138, 156);
}
.done {
  color: rgb(162, 125, 204);
}
</style>