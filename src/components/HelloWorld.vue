<template>
  <v-img
  height="600"
  dark
  src="../assets/3d-illustration-smartphone-with-products-coming-out-screen-online-shopping-e-commerce-concept.jpg"
  class="">
    <v-container style="    margin-top: 167px;">
     <v-row
        class="d-flex justify-center align-center transparent flat mt-16 my-16"
        style="direction: ltr !important;"
      >
       <v-col
                cols="12"
                sm="12"
                md="6"
                 >
                 <div class="d-flex flex-column mb-6 align-center text-left myfont ml-5">
      <p data-aos="fade-right" class="ttext-h2 black--text " style="width: 100%; text-align: start;">
       <span  class="colory " style="font-size: 5rem;">سوقك</span> كل ماتحتاج إليه  </p>
       <typewriter
       data-aos="fade-right" class=" black--text" style="width: 100%; text-align: start; "
    :speed="200"
    :full-erase="true"
    :interval="300"
    :words='["مطالعة الرائج","الشراء","البيع"]'>
    تصفح الآن مع إمكانية
    </typewriter>
     </div>
       </v-col>
        <v-col data-aos="fade-left"   data-aos-delay="200"
                cols="12"
                sm="4"
                 >
        </v-col>
      </v-row>
      </v-container>
  </v-img>
</template>

<script>
export default {

}
</script>

<style>

</style>
