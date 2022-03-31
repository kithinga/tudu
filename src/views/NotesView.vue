<template>
  <Navigator />
  <div class="div">
    <button class="crno-btn">
     <p>Create note <span class="material-icons"> drive_file_rename_outline </span></p>
    </button>
  </div>
  <div class="container-fluid">
    <div class="row noterow no-gutters justify-content-center">
      <div class="col-lg-4">
        <div class="notes">
          <h4>Note Title</h4>
          <h5>Note description</h5>
          <p>note self here...</p>
          <button>edit note</button>
          <button>delete note</button>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="notes">fdg</div>
      </div>
      <div class="col-lg-4">
        <div class="notes">fdg</div>
      </div>
    </div>
  </div>
</template>


<script>
import Navigator from "@/components/Navigator.vue";

export default {
  components: {
    Navigator,
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