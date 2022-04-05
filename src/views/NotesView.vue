<template>
  <Navigator />
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <div class="tid-task">
          <div class="note-avar">
            <h4 class="note-tihead">
              Notes<span class="material-icons note-tic">notes</span>
            </h4>
            <h5 class="note-stat">overdue-tasks</h5>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="div">
          <button
            class="crno-btn shadow"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <p>
              Create note
              <span class="material-icons add"> add</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
  <AddNote />

  <div class="container-fluid">
    <div class="row noterow no-gutters justify-content-center">
      <div class="col-lg-3" v-for="note of notes" :key="note.id">
        <div class="notes shadow-sm">
          <h5 class="n-self">{{ note.noteself }}</h5>
          <br />
  
            <div class="note-body">
              <h5 class="n-title">{{ note.title }}</h5>
              <h6 class="n-des">{{ note.description }}</h6>
              <div class="bott">
                <span class="note-delete" @click="removeNote(note.id)">
                  Delete
                </span>
                <span class="update-note">Update</span>
              </div>
            </div>
      
          <br />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navigator from "@/components/Navigator.vue";
import AddNote from "@/components/AddNote.vue";
import axios from "axios";
export default {
  components: {
    Navigator,
    AddNote,
  },

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
      });
      this.notes = [...this.notes, noteres.data];
      this.noteName = "";
      this.noteDes = "";
    },

    removeNote(id) {
      axios.delete(`http://localhost:3000/notes/${id}`);
      this.notes = this.notes.filter((note) => note.id !== id);
      swal({
        text: "Note being deleted",
        delay: 4000,
      });
    },
    // Patch/ update note
    async updateNote(id) {
      try {
        await axios.patch(`${`http://localhost:3000/notes`}/${id}`, {
          updateNote: true,
        });
        this.notes = this.notes.map((note) => {
          if (note.id === id) {
            note.updateNote = true;
          }
          return note;
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
* {
  text-align: center;
  padding: 0;
  margin: 0;
}
</style>