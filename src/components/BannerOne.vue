<template>
  <div>
  <v-img
  style=""
    src="../assets/Untitled.png"
  >
    <v-row
      align="center"
      justify="center"
      class="mt-16"
    >
      <v-col
        class="text-center mt-16"
        cols="12"
      >
     <div class="d-flex align-center justify-center mt-16">
      <img src="../assets/Rectangle.png" class="rotate-image" style="position: absolute; width: 300px; margin-top: 150px;" alt="">
     </div>
        <h1 class="myfont ttext-h2 font-weight-thin mb-4 choclate-color-1">
          تسوق الآن بأرخص الأسعار
        </h1>
        <h1 class="myfont ttext-h2 font-weight-thin mb-4 choclate-color-1">
          سوقك كل ماتحتاج إليه في مكان واحد
        </h1>
      </v-col>
    </v-row>
  </v-img>
  <!-- <img src="http://crems.like-themes.com/wp-content/uploads/2020/07/grunge-dark-rev-temp.png" alt=""> -->
</div>
</template>

<style>
.rotate-image {
  animation: rotate 15s infinite linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
