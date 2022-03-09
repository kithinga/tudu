
<template>
  <Navigator />
  <div><h4 class="tihead">Daily tasks</h4></div>
  <div class="container-fluid">
    <div class="row no-gutters justify-content-center">
      <div class="col-lg-2" v-for="post in posts" v-bind:key="post.id" data-aos="fade-right">
        <div class="tsk01" >
          <div>
            <h4>{{ post.id }}</h4>
            <p>{{ post.body}}</p>
            <p>{{ post.details}}</p>
          </div>
        </div>
      </div>
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
        // let response = await fetch("http://localhost:8080/posts");
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




