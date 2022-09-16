<template>
  <q-layout view="lHh Lpr lFf" style="">
    <q-header class="bg-r">
      <q-toolbar>
        <q-toolbar-title> Hriatpuii </q-toolbar-title>
        <q-tabs v-model="tab" class="" inline-label :breakpoint="0">
          <div class="nav-container">
            <q-route-tab
              class="my-nav"
              :ripple="false"
              to="/"
              name="Home"
              label="Home"
            />
          </div>

          <q-route-tab
            class="my-nav"
            :ripple="false"
            to="/about"
            name="About"
            label="About"
          />
          <q-route-tab
            class="my-nav"
            :ripple="false"
            to="/contact"
            name="Contact"
            label="Contact"
          />
          <q-route-tab
            class="my-nav"
            :ripple="false"
            to="/tih"
            name="tihTur"
            label="Tihtur"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useQuasar } from "quasar";
const q = useQuasar();
q.dark.mode = true;
q.dark.isActive = true;
console.log(q.dark.isActive);
// onMounted(() => {
//   q.dark.isActive = true;
// });
// console.log(q.dark);
// setTimeout(() => {
//   q.dark.isActive = true;
// }, 300);

const tab = ref("Home");
</script>
