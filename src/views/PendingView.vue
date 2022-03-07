
<template>
  <Navigator />
  <div><h4 class="tihead">Pending</h4></div>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-primary position-relative">
          Inbox
          <span
            class="
              position-absolute
              top-0
              start-100
              translate-middle
              badge
              rounded-pill
              bg-danger
            "
          >
            99+
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
      <q>pendinf ==g view</q>
      <s>old price 100</s>
      <details>too much details here</details>
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