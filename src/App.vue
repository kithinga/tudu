<template>
  <nav>
    <div class="container-fluid">
      <div class="row no-gutters cnav">
        <div class="col-sm-4">
          <div class="back">
            <router-link class="tudu-logo" to="/">Tudu !</router-link>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="ser-di">
            <form action="">
              <input type="text" class="ser-input" placeholder="search . . ." />
              <button type="submit" class="ser-btn material-icons md-32">
                search 
              </button>
            </form>
          </div>
        </div>
        <div class="col-sm-2">
          <div>
            <button class="lgnbtn rounded">Login</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <p>dsfdsfkl</p>
  <div>
      <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
  <router-view />
 

</template>

<style >
/* @import "~@/assets/scss/vendors/bootstrap-vue/index"; */
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #0ebea7;
}
</style>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },

  methods: {
    async getData() {
      try {
        const response = await this.$http.get(
          "http://jsonplaceholder.typicode.com/posts"
        );
        // JSON responses are automatically parsed.
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
