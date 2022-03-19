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
            <h4><span class="material-icons">edit </span> Edit task</h4>
            <!-- <label for="name">Task title</label> -->
            <input
              type="text"
              id="name"
              v-model="name"
              placeholder="Task title"
              required
            /><br />

            <!-- <label for="details">Details</label> -->

            <textarea
              type="text"
              id="details"
              v-model="details"
              placeholder="Details"
              required
            />

            <!-- <label for="date">Date</label> -->

            <input
              type="date"
              v-model="date"
              placeholder="Due-Date"
              required
              class="date"
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
import { doc, getDoc, setDoc } from "firebase/firestore";
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
      let task = await getDoc(this.docRef);
      console.log(task.data());
      let taskData = task.data();
      this.name = taskData.name;
      this.details = taskData.details;
      this.date = taskData.date;
    },
    async updateTask() {
      await setDoc(this.docRef);
    },
  },
  created() {
    let taskId = this.$route.params.taskId;
    this.taskId = taskId;
    // this.editTask();
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
  border-radius: 5px;
  /* background-color: rgb(253, 253, 255); */
  box-shadow: 0px 4px 5px rgb(241, 240, 240);
}
.task-form {
  text-align: left;
}
.task-form h4 {
  margin-bottom: 1.3rem;
  font-size: 14px;
  color: rgb(109, 111, 207);
  font-weight: 600;
}

.date {
  /* color: red; */
  font-size: 12px;
}
.task-form input {
  border: none;
  min-height: 3rem;
  width: 100%;
  border-radius: 2px;
  padding-left: 1.7rem;

  border-bottom: solid 2px rgb(240, 239, 245);
}

.task-form textarea {
  min-height: 4.4rem;
  height: auto;
  width: 100%;
  /* border-radius: 4px; */
  padding-left: 1.7rem;
  border: none;
  border-bottom: solid 2px rgb(240, 239, 245);
  padding-top: 2rem;
}
input:focus {
  outline: none;
  border-bottom: solid 2px rgb(178, 182, 236);
}
textarea:focus {
  outline: none;
  border-bottom: solid 2px rgb(178, 182, 236);
}

#date,
#name,
#details {
  font-weight: 400;
  font-size: 12px;
  color: rgb(91, 78, 204);
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