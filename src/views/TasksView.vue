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
          <h6 class="modal-title" id="exampleModalLabel">
            <span class="material-icons syi">task</span>Tasks Add tasks
          </h6>
        </div>
        <div class="modal-body">
          <form class="task-form" autocomplete="off">
            <label for="name">Task title</label><br />
            <input type="text" id="name" v-model="taskName" placeholder="Task title" /><br />
            <label for="details">Details</label><br />
            <input type="text" id="details" name="details" placeholder="Details" />
            <label for="date">Date</label><br />
            <input type="date" id="date" name="date" placeholder="Date"/>
            <button type="submit" class="submit shadow-sm" @click="addTask">Addtask</button>
          </form>
        </div>
        <div class="modal-footer">

        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row no-gutters justify-content-center">
      <div class="col-lg-2" v-for="post of posts" :key="post.id">
        <div class="tsk01 shadow-sm">
          <h4>{{ post.id }}</h4>
          <h6>{{ post.name }}</h6>
          <p>{{ post.details }}</p>
            <br>
          <div class="card-foot">
            <li><span class="material-icons">edit</span></li>
            <li><span class="material-icons">delete</span></li>
          </div>
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
  // Ading task
  methods: {
    async addTask() {
      const res = await axios.post(baseURL, { name: this.taskName });
      this.posts = [...this.todo, res.data];
      this.taskName = ''
    },
  },
};
</script>

a
