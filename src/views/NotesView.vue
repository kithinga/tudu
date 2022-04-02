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
          <h5 class="n-title">{{ note.title }}</h5>
          <h6 class="n-des">{{ note.description }}</h6>
          <br>
          <button class="note-delete" @click="removeNote(note.id)">Delete-note</button>
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
    axios.delete(`http://localhost:3000/notes/${id}`)
    this.notes = this.notes.filter(note => note.id !== id)
    swal(
      {
        text:'Note being deleted',
        delay: 4000,
      }
    )
}
  },
};
</script>

<style scoped>
* {
  text-align: center;
  padding: 0;
  margin: 0;
}

.n-title {
  color: black;
  font-size: 15px;
  margin-top: 0.5rem;
  font-weight: 600;
}
.n-des {
  color: black;
  font-size: 13px;
  margin-top: 0.5rem;
  font-weight: 500;
}
.n-self {
  color: black;
  font-size: 13px;
  margin-top: 0.5rem;
  font-weight: 400;
}

.note-delete{
  padding: 0.5rem;
  border-radius: 1rem;
  color: white;
  background-color:rgb(182, 87, 58);
  border: none;
  font-size:13px;
  font-weight: 600;
  padding-left: 1rem;
  padding-right: 1rem;
}

</style>