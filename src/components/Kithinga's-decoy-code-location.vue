<template>
  <div class="btn-group">
    <button
      class="btn"
      id="dropdownMenuClickableInside"
      data-bs-toggle="dropdown"
    >
      <div class="material-icons ver">more_vert</div>
    </button>

    <div class="dropdown-menu shadow-sm">
      <ul>
        <router-link :to="{ path: `/edittask/${task.id}` }">
          <li
            type="button"
            class="btn-edittask edit material-icons"
            title="Edit"
            @click="editTask"
          >
            edit
          </li>
        </router-link>

        <li
          class="material-icons close"
          title="Close"
          @click="deleteTask(task.id)"
        >
          close
        </li>
      </ul>
    </div>
  </div>
</template>