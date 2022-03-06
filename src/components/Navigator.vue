<template>
  <div class="container-fluid">
    <div class="row no-gutters">

      <div class="col">
        <div class="tsk">
          <router-link to="/tasks">
            <button class="nvbt">Tasks</button>
          </router-link>
        </div>
      </div>

      <div class="col">
        <div class="fute">
          <router-link to="/future">
            <button class="nvbt">Futures</button>
          </router-link>
        </div>
      </div>

      <div class="col">
        <div class="pend">
          <router-link to="/pending">
            <button class="nvbt">Pending</button>
          </router-link>
        </div>
      </div>

      <div class="col">
        <div class="perf">
          <router-link to="/perfomance">
            <button class="nvbt">Perfomance</button>
          </router-link>
        </div>
      </div>

    </div>
  </div>
  <router-view />
</template>

<style>

</style>

