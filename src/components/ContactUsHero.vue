<template>
  <v-container class="mt-16">
   <v-row
      class="d-flex justify-center align-center transparent flat mt-16 my-16"
    >
     <v-col
              cols="12"
              sm="12"
              md="6"
               >
    <div class="d-flex flex-column mb-6">
      <p data-aos="fade-right" class="myfont white--text ">
     مرحبا بك في سوقك </p>
      <p data-aos="fade-right" class="myfont white--text ">
        هل تواجه مشكلة؟
      </p>
         <v-btn
            rounded
            class="gra white--text myfont"
            width="150"
            height="50"
            color="#B4B2F3"
            @click="$vuetify.goTo('#SendMessage')"
            >
           تواصل معنا مباشرة
         </v-btn>
     </div>
     </v-col>
      <v-col data-aos="fade-left"   data-aos-delay="200"
              cols="12"
              sm="4"
               >
        <v-img
          src="../assets/undraw_envelope_re_f5j4.svg"
          max-height="500"
          max-width="500"
          contain
        ></v-img>
      </v-col>
    </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
