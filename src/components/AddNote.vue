


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
                <span class="material-icons syi">task </span>Add-Note
              </h6>
            </div>
            <div class="modal-body">
              <form
                class="task-form"
                autocomplete="off"
              >
                <label for="name">Note title</label><br />
                <input
                  type="text"
                  id="name"
                  class="name"
                  placeholder="Task title"
                  v-model="noteTitle"
                  required
                /><br />

                <label for="details">Details</label><br />
                <textarea
                  type="text"
                  id="details"
                  class="details"
                  placeholder="Details"
                  v-model="noteDes"
                  required
                />

                <label for="date">Date</label><br />
                <input
                  id="date"
                  class="date "
                  type="date"
                  placeholder="Due-Date"
                  v-model="notesel"
                  required
                />
                <button type="submit" class="submit shadow-sm" @click="addNote" data-dismiss="modal">Addnote</button>
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
  name: "AddNote",
};
</script>

