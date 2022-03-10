
<template>
  <Navigator />

  <div class="container-fluid">
    <div class="row no-gutters checker">
      <div class="col-lg-6">
        <div class="tid-task"><h4 class="tihead">Tasks</h4></div>
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
              <span class="material-icons">add</span>
          </button>
        </div>
      </div>
    </div>
  </div>

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
          <h6 class="modal-title" id="exampleModalLabel">  <span class="material-icons">task</span>Tasks Add tasks</h6>
        </div>
        <div class="modal-body">
             <form action="">
               <input type="text">
             </form>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row no-gutters justify-content-center">
      <div class="col-lg-2" v-for="post of posts" :key="post.id">
        <div class="tsk01 shadow-sm">
          <h4>{{ post.id }}</h4>
          <p>{{ post.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ serves as src alias
import Navigator from "@/components/Navigator.vue";
import axios from "axios";
const baseURL = "http://localhost:3000/posts";
export default {
  components: {
    Navigator,
  },
  data() {
    return {
      posts: [],
      taskName: "",
    };
  },
  async created() {
    try {
      const res = await axios.get(baseURL);
      this.posts = res.data;
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async addTask() {
      const res = await axios.post(baseURL, { name: this.taskName });
      this.posts = [...this.todo, { name: this.taskName }];
    },
  },
};

</script>




