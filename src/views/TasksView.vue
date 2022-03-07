
<template>
  <Navigator />
  <div><h4 class="tihead">Daily tasks</h4></div>
  <div class="container-fluid">
    <div class="row no-gutters justify-content-center">
      <div class="col-lg-2">
        <div class="tsk01">
          <h4>Short me one</h4>
          <p>One rule for the alphas, we move quick</p>
          <span class="material-icons"> open_in_full </span>
        </div>
      </div>
      <div class="col-lg-2">
        <div class="tsk01">
          <h4>Short me one</h4>
          <p>One rule for the alphas, we move quick</p>
          <span class="material-icons"> open_in_full </span>
        </div>
      </div>
      <div class="col-lg-2">
        <div class="tsk01">
          <h4>Short me one</h4>
          <p>One rule for the alphas, we move quick</p>
          <span class="material-icons"> open_in_full </span>
        </div>
      </div>

      <!-- accrodion practice -->
      <div class="col-lg-2">
        <div class="tsk01">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <h4>Accordion</h4>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
                <button
                  type="button"
                  class="btn-close"
                  disabled
                  aria-label="Close"
                ></button>
              </div>
            </div>
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
};
</script>
