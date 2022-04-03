<template>
  <Navigator />
  <div class="div">
    <button
      class="crno-btn shadow-sm"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <p>
        Create note
        <span class="material-icons"> drive_file_rename_outline </span>
      </p>
    </button>
  </div>

  <AddNote />

  <div class="container-fluid">
    <div class="row noterow no-gutters justify-content-center">
      <div class="col-lg-4" v-for="note of notes" :key="note.id">
        <div class="notes shadow-sm">
          <p class="avat">{{ note.id }} This could be an avatar</p>
          <br />
          <p>
            <a
              class="colla-btn"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              View notes
            </a>
          </p>
          <div class="collapse wrap" id="collapseExample">
            <h5 class="n-title">{{ note.title }}</h5>
            <h6 class="n-des">{{ note.description }}</h6>
            <p class="n-des">{{ note.noteself }}</p>
            <span class="note-bott">
              <button class="note-delete" @click="removeNote(note.id)">
                Delete-note
              </button>

              <button class="update-note">to update page</button>
            </span>
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