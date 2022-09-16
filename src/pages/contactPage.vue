<template>
  <q-page class="text-center" padding>
    <h6>TODO LIST</h6>
    <q-input outlined dense v-model="newItem" type="text" />
    <q-btn class="q-mt-md" color="primary" label="Add Item" @click="addItem" />
    <br />
    I ASSIGNEMNT ATAN WARNING (ALERT) ah hian console aiah a item alert turin lo
    siam dawn nia aw.. ka duh loh nu
    <span class="text-red" style="font-size: large"> ♥ </span>
    <!-- hemi v-for hian todo list a array element tin kha loop apiangin 'item' variable ah a dah lut a -->
    <p v-for="(item, index) in TodoList" :key="index">
      {{ item }}
      <!-- item variable chu 'p' tag (paragraph tag) chhungah kan display -->

      <q-btn
        size="sm"
        flat
        dense
        round
        color="primary"
        icon="check"
        @click="checkItem(index, item)"
      />
      <q-btn
        size="sm"
        flats
        dense
        round
        color="primary"
        icon="warning"
        @click="alertItem(index, item)"
      />
      <q-btn
        size="sm"
        flat
        dense
        round
        color="primary"
        icon="close"
        @click="removeItem(index, item)"
      />
    </p>

    <div class="text-center q-py-md">
      <div class="text-bold">SAME THING WITH STYLES BELOW</div>
      <div>
        (array pakaht an intrawm vangin a chung ah leh a hnuaiah, add leh delete
        a in reflect ve2 ang) <br />
        edit chu simple deuhin kan zir phawt anga, chumi zawhah confirm delete
        dah dan leh confirm edit dah dan kan zir leh ang <br />
      </div>
    </div>

    <div class="row justify-center">
      <div class="col-shrink">
        <div
          class="q-my-xs bg-grey-2 row q-py-xs q-px-sm flex flex-center"
          style="border-radius: 5px"
          v-for="(item, index) in TodoList"
          :key="index"
        >
          <span class="col-grow text-left todo-item">
            {{ item }}
          </span>
          <span class="q-pl-md col-shrink">
            <q-btn
              size="sm"
              flat
              dense
              round
              color="primary"
              icon="check"
              @click="checkItem(index, item)"
            />

            <q-btn
              size="sm"
              flat
              dense
              round
              color="secondary"
              icon="edit"
              @click="editItem(index, item)"
            />

            <q-btn
              size="sm"
              flat
              dense
              round
              color="red"
              icon="close"
              @click="removeItem(index, item)"
            />
          </span>
        </div>
      </div>
    </div>
    <div class="q-mt-xl">
      HEMI I THIAM HUNAH HIAN, REFRESH PAWHA TODO LIST KHI BO LO TURIN KAN SIAM
      LEH ANG ^_^
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const newItem = ref("");
const TodoList = ref(["Good Morning", "Hriatpui", "Ka duh loh nu"]);

function addItem() {
  TodoList.value.push(newItem.value); //input a i ziah luh kha.. array ah i push lut
  newItem.value = ""; //hemi line hi a tel loh chuan i add zawhah input box kha a in empty lo ang, i lo comment chhin dawn nia
}

function checkItem(index, item) {
  console.log("index is: ", index);
  console.log("item is: ", item);

  const todoItem = document.getElementsByClassName("todo-item");
  if (todoItem[index]) todoItem[index].style.textDecoration = "line-through";
  //
}

function alertItem(index, item) {
  // alert("index is", index);
  console.log(item);
  alert("item is " + item);
}

function editItem(index, item) {
  const tempVar = prompt("Edit " + item, item);
  if (tempVar != null) {
    TodoList.value[index] = tempVar;
  }
}

function removeItem(index, item) {
  const result = confirm("do you really want to delete " + item);
  if (result) {
    onConfirmRemove(index);
  }
  // TodoList.value.splice(index, 1);
}

function onConfirmRemove(index) {
  TodoList.value.splice(index, 1);
}
</script>
