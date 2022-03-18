<template>
  <div class="container-fluid">
    <div class="row no-gutters">
      <!-- Modal just laying around -->
      <div
        class="modal fade"
        id="exampleModal01"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">
                <span class="material-icons syi">edit</span>Edit tasks
              </h6>
            </div>
            <div class="modal-body">
              <form class="task-form" autocomplete="off">
                <!-- <label for="name">Task title</label> -->
                <input
                  type="text"
                  id="name"
                  v-model="taskName"
                  placeholder="Task title"
                  required
                /><br />

                <!-- <label for="details">Details</label> -->

                <input
                  type="text"
                  id="details"
                  v-model="taskDetails"
                  placeholder="Details"
                  required
                />

                <!-- <label for="date">Date</label> -->

                <input
                  type="date"
                  v-model="dueDate"
                  placeholder="Due-Date"
                  required
                  class="date"
                />

                <button type="submit" class="submit" @click="editTask">
                  <span class="material-icons">update</span> Update
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
export default {
  name: "EditTask",
};
</script>


<style scoped>
.modal-title {
  color: rgb(119, 115, 175);
  font-weight: 700;
  font-size: 16.5px;
  border-bottom: 2px solid rgb(250, 250, 250);

}

.syi {
  margin-right: 1.6rem;
}

.modal-content {
  /* border:none; */
  border-radius: 4px;
  border: 1px solid rgb(208, 206, 216);
}
.task-form {
  text-align: left;
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
  border-radius: 4px;
  padding-left: 1.7rem;
  border: solid 1px rgb(217, 215, 224);
  padding-top: 1rem;
}
input:focus {
  outline: none;
  border-bottom: solid 2px rgb(178, 182, 236);
}
textarea:focus {
  outline: none;
  border: solid 2px rgb(190, 178, 221);
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
  color: rgb(197, 101, 64);
  font-weight: 500;
}
.edit {
  color: rgb(76, 122, 173);
}
.ver {
  color: rgb(146, 138, 156);
}
.done {
  color: rgb(94, 64, 128);
}
</style>