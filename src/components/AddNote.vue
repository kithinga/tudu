


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
                <span class="material-icons noti shadow-sm">notes</span>Add-Note
              </h6>
            </div>
            <div class="modal-body">
              <form
                class="note-form"
                autocomplete="off"
              >
                <label for="title">Note title</label><br />
                <input
                  type="text"
                  id="title"
                  class="title"
                  placeholder="Note title"
                  v-model="noteTitle"
                  required
                /><br />

                <label for="description">Description</label><br />
                <input
                  type="text"
                  id="description"
                  class="description"
                  placeholder="Description"
                  v-model="noteDes"
                  required
                />

                 <label for="noteself">Noteself</label><br />
                <input
                  type="text"
                  id="noteself"
                  class="noteself"
                  placeholder="Note-self"
                  v-model="noteSelf"
                  required
                />

                <button type="submit" class="submit shadow" @click="addNote" >Addnote</button>
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
import axios from "axios";
export default {
  name: "AddNote",


  data() {
    return {
      notes: [],
    };
  },

  async created() {
    try {
      const noteres = await axios.get(`http://localhost:3000/notes`);
      this.notes = noteres.data;
      console.log(notes);
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async addNote() {
      const noteres = await axios.post(`http://localhost:3000/notes`, {
        title: this.noteTitle,
        description: this.noteDes,
        noteself: this.noteSelf,
    
      });
      this.notes = [...this.notes, noteres.data];
      this.noteName = "";
      this.noteDes = "";
      this.noteSelf = "";
    },
  },
};
</script>

