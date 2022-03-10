
<template>
  <Navigator />
  <div><h4 class="tihead">Tasks</h4></div>
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
export default {
  components: {
    Navigator,
  },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/posts`);
      this.posts = res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>




