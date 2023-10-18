<template>
  <v-app>
<app-bar></app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer
    height="350"
    class="text mt-16"
    style="background-color: #B4B2F3;     margin-top: 0px !important;"
    dir="rtl"
  >
    <v-container style="background-color: #B4B2F3;">
      <v-row
        class="align-center"
      >
        <v-col
          cols="12"
          md="3"
        >
        <v-subheader class="text-uppercase font-weight-Black  black--text mb-16 ml-10 myfont">
             .سوقك
        </v-subheader>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-list class="text mt-6 ml-16 myfont" style="background-color: #B4B2F3;">
            <v-title class="text-uppercase font-weight-Black  black--text">
              المتجر
            </v-title>
            <v-list-item-conten class="text--secondary">
            <v-list-item-subtitle>حقائب</v-list-item-subtitle>
            <v-list-item-subtitle>معدات رياضية</v-list-item-subtitle>
            <v-list-item-subtitle> قرطاسية </v-list-item-subtitle>
            <v-list-item-subtitle>ألبسة</v-list-item-subtitle>
          </v-list-item-conten>
          </v-list>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-list  class="text mt-6 ml-10 myfont" style="background-color: #B4B2F3;">
            <v-title class="text-uppercase font-weight-Black  black--text">
              تواصل معنا
            </v-title>
            <v-list-item-content class="text--secondary">
              <v-list-item-subtitle>سوريا, دمشق</v-list-item-subtitle>
              <v-list-item-subtitle>هاتف:123-456-7890</v-list-item-subtitle>
              <v-list-item-subtitle>info@mysito.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-list class="text myfont" style="background-color: #B4B2F3;">
            <v-title class="text-uppercase font-weight-Black  black--text mt-16">
              تابعنا على
            </v-title>
            <br/>
             <v-list-item-icon color="grey" style="background-color: #B4B2F3;">
              <v-icon>mdi-facebook</v-icon>
              <v-icon>mdi-youtube</v-icon>
              <v-icon>mdi-instagram</v-icon>
             </v-list-item-icon>
          </v-list>
        </v-col>
          <v-card-text class="py-2 black--text text-center myfont">
           <strong>&copy;2023 سوقك</strong>
          </v-card-text>
      </v-row>
    </v-container>
  </v-footer>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'

export default {
  components: { AppBar },
  name: 'App',

  data: () => ({
    //
  })
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ysabeau:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Marhey&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');
$font-family: 'Marhey', serif;

.myfont{
  font-family: $font-family, sans-serif !important;
  font-size: 1.75rem ;
}
.Cairo{
  font-family:Cairo, sans-serif !important;
  font-size: 1.75rem ;
}

.text{
  background:#B4B2F3;
}
.ttext-h3{
  font-size: 3rem !important;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal !important;
}
.ttext-h2{
  font-size: 5rem !important;
    font-weight: 300;
    line-height: 3.75rem;
    letter-spacing: -0.0083333333em !important;
}
.ttext-h6{
  font-size: 3rem !important;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal !important;
}
</style>
