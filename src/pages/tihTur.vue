<template>
  <q-page padding>
    <h3>Not To Do</h3>
    <q-btn
      color="primary"
      icon="add_reaction"
      :icon-right="hriatpuii ? 'close' : 'edit'"
      :label="hriatpuii ? 'close' : 'Add not to do'"
      @click="hriatpuii = !hriatpuii"
    />

    <div v-if="hriatpuii">
      <q-input
        dense
        outlined
        standout="black"
        v-model="newList"
        type="text"
        label="Label"
        style="background-color: black"
      />
      <q-btn
        style="margin-top: 30px"
        color="primary"
        label="Add"
        @click="enterText"
      />
    </div>
    <div
      class="q-mt-xl"
      style="font-size: 25px"
      v-for="(item, index) in NottoDo"
      :key="index"
    >
      {{ item }}
      <q-btn
        color="primary"
        icon="edit"
        label="edit"
        @click="editList(index, item)"
      />
      <q-btn
        color="primary"
        icon="delete"
        label="delete"
        @click="deleteList(index, item)"
      />
      <q-btn
        color="primary"
        icon="check"
        label="done"
        @click="doneList(index, item)"
      />
    </div>
  </q-page>
</template>
<script setup>
import { ref } from "vue";
const newList = ref("");
const NottoDo = ref(["good"]);
const hriatpuii = ref(false);
function enterText() {
  if (newList.value.length) NottoDo.value.push(newList.value);
  newList.value = "";
}
function editList(index, item) {
  const duhDuh = prompt("edit " + item, item);
  if (duhDuh != null) {
    NottoDo.value[index] = duhDuh;
  }
}

function deleteList(index, item) {
  const chhianna = confirm("do you really want to delete " + item);
  if (chhianna) {
    onCremove(index);
  }
  // NottoDo.value.splice(index, 1);
}
function onCremove(index) {
  NottoDo.value.splice(index, 1);
}
</script>
