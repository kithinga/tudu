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
            <input
              type="text"
              id="name"
              v-model="taskName"
              placeholder="Task title"
              required
            /><br />
            <label for="details">Details</label><br />
            <input
              type="text"
              id="details"
              v-model="taskDetails"
              placeholder="Details"
              required
            />
            <label for="date">Date</label><br />
            <input
              type="date"
              v-model="taskDate"
              placeholder="Due-Date"
              required
            />
            <button type="submit" class="submit shadow-sm" @click="addTask">
              Addtask
            </button>
          </form>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row no-gutters justify-content-center">
      <div class="col-lg-2" v-for="post of posts" :key="post.id">
        <div class="tsk01 shadow-sm">
          <!-- Close task func -->
          <div class="material-icons close" @click="deleteTask(post.id)">
            close
          </div>

          <div class="card-head">
            <div class="btn-group">
              <button
                class="btn"
                id="dropdownMenuClickableInside"
                data-bs-toggle="dropdown"
              >
                <div class="material-icons ver">more_vert</div>
              </button>
              <div class="dropdown-menu shadow-sm">
                <div
                  class="material-icons done"
                  data-bs-toggle="tooltip"
                  title="done"
                >
                  done
                </div>
                <div
                  class="material-icons edit"
                  data-bs-toggle="tooltip"
                  title="Edit"
                >
                  edit
                </div>
              </div>
            </div>
          </div>
          <h4>{{ post.id }}</h4>
          <h6>{{ post.name }}</h6>
          <p>{{ post.details }}</p>
          <p>{{ post.date }}</p>
          <br />
          <div class="card-foot"></div>
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
    };
  },

  methods: {
    getPosts() {
      axios.get(baseURL).then((result) => {
        console.warn(result);
        this.posts = result.data;
      });
    },
    // Delete Post
    deleteProduct(id) {
      this.axios
        .delete(`http://localhost:3000/posts/${id}`)
        .then((response) => {
          let i = this.products.map((data) => data.id).indexOf(id);
          this.products.splice(i, 1);
        });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>


