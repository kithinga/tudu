<template>
  <Navigator />
  <div class="div">
    <button class="crno-btn">
      <p>
        Create note
        <span class="material-icons"> drive_file_rename_outline </span>
      </p>
    </button>
  </div>
  <div class="container-fluid">
    <div class="row noterow no-gutters justify-content-center">
      <div class="col-lg-4" v-for="note of notes" :key="note.id">
        <div class="notes">
          <p class="avat">{{note.id}} This could be an avatar</p>
          <h5 class="n-title">{{note.title}}</h5>
          <h6 class="n-des">{{note.description}}</h6>
          <p class="n-self">{{note.noteself}}</p>
           <input v-model="noteTitle" type="text" /><br />
           <input v-model="noteDes" type="text" /><br />
            <button @click="addNote()">Add-note</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navigator from "@/components/Navigator.vue";
import axios from 'axios'
export default {
  components: {
    Navigator,
  },

  data() {
    return {
      notes: [],
    };
  },


    async created(){
      try{
        const noteres = await axios.get(`http://localhost:3000/notes`);
        this.notes = noteres.data;
        console.log(notes);
      }catch (e) {
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
   }
};


</script>

<style scoped>

* {
  text-align: center;
  padding: 0;
  margin: 0;
}

.n-title {
  color:black;
  font-size:15px;
   margin-top:0.5rem;
  font-weight: 600;
}
.n-des {
  color:black;
  font-size:13px;
  margin-top:0.5rem;
  font-weight: 500;
}
.n-self {
  color:black;
  font-size:13px;
  margin-top:0.5rem;
  font-weight: 400;
}

</style>