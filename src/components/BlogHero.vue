<template>
  <v-parallax  src="">
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-container class="justify-center text-center custom-width">
                <div
                  v-vue-aos="{animationClass:'animate__slideInUp animate__animated'}"
                  class="justify-center text-center white--text ttext-h2 Cairo"
                 >
        المدونة
                </div>
                <br>
                <div
                  v-vue-aos="{animationClass:'animate__slideInUp animate__animated'}"
                  class=" justify-center text-center white--text Cairo"
                >
       ابقى على إطلاع دوماً على أهم وأحدث الأخبار لدينا
                </div>
                <v-btn
                rounded
                class="gra ma-5 Cairo"
                outlined
                width="150"
                height="50"
                color="white"
                @click="$vuetify.goTo('#posts')"
                data-aos="fade-up"
                >
المقالات

             </v-btn>
              </v-container>
            </v-row>
  </v-parallax>
  </template>
<script>

export default {

  data () {
    return {
      photos: [
        {
          src: 'https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/02/h1-rev-img2.jpg',
          subtitle: 'Indulge your senses in chocolate paradise.',
          title: 'ALMORA choclates'
        }
      ]

    }
  }
}
</script>
  <style lang="scss">

  </style>
