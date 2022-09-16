<template>
  <q-page style="padding: 5rem">
    <div class="row">
      <div class="col-4">
        <q-img
          width="500px"
          height="500px"
          fit="cover"
          class="bg-blue"
          src="../assets/hriatpuii.jpeg"
          alt=""
        />
      </div>
      <div class="col-8">
        <h1>Introduction</h1>
        <p style="font-size: 24px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
          aliquid praesentium eum aperiam neque laboriosam pariatur debitis
          possimus eaque similique sint nesciunt rem ipsam cum, saepe, ad
          incidunt quod? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Animi doloribus quaerat cum nostrum dolore modi vero. Modi
          facilis consequuntur eaque atque fugit fugiat illo similique molestiae
          corrupti quisquam, blanditiis iure.
        </p>
        <q-btn
          no-caps
          outline
          class="q-mt-md"
          style="width: 200px; height: 50px"
          label="Hriatpuii"
        />
      </div>
    </div>

    <!-- section two -->

    <div class="flex flex-center" style="margin-top: 100px">
      <h2>Hello, Hriatpui</h2>
    </div>

    <!-- section three -->

    <div class="row q-gutter-x-xl" style="margin-top: 40px">
      <!-- first -->
      <div class="col course"></div>
      <!-- middela -->
      <div class="col course"></div>
      <!-- last -->
      <div class="col course"></div>
    </div>

    <!-- sectiion four -->

    <div class="flex flex-center" style="margin-top: 100px">
      <h2>Hello, u mala</h2>
    </div>

    <!-- section five -->

    <div class="row" style="height: 500px; margin-top: 50px">
      <div class="col">
        <q-img
          width="800px"
          height="500px"
          fit="cover"
          text-align="center"
          src="../assets/banner.png"
        />
      </div>
      <div class="col">
        <div class="row" style="height: 50%">
          <q-img
            width="1000px"
            height="200px"
            fit="cover"
            text-align="center"
            src="../assets/banner.png"
          />
        </div>
        <div class="row" style="height: 50%">
          <q-btn
            outline
            style="width: 1000px; height: 250"
            color="white"
            icon="check"
            label="OK"
            @click="onClick"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
</script>
