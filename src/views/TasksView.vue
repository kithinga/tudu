
<template>
  <Navigator />
  <div><h4 class="tihead">Daily tasks</h4></div>
  <div class="container-fluid">
    <div class="row no-gutters justify-content-center">
      <div class="col-lg-2" v-for="post in posts" v-bind:key="post.id">
        <div class="tsk01">
          <div>
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

      
      <div class="col-lg-2">
        <div class="tsk01">
          <h4>Short me one</h4>
          <p>One rule for the alphas, we move quick</p>
          <span class="material-icons"> open_in_full </span>
        </div>
      </div>
</template>

<script>
// @ serves as src alias
import Navigator from "@/components/Navigator.vue";

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
    async getData() {
      try {
        let response = await fetch("http://jsonplaceholder.typicode.com/posts");
        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },
};
</script>




