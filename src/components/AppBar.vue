<template>
  <div>
    <v-app-bar
    cols="6"
    md="4"
    absolute
    color="white"
    dense
    prominent
    height="30px"
    scroll-target="#scrolling-techniques-7"
    dir="rtl"
    >
      <template
      #extension>
      <div class="">
       <v-img src="@/assets/sooqak.png" width="150"></v-img>
      </div>
         <v-tabs
        color="black"
        class="ml-16 myfont mx-5"
      >
      <v-btn
         :to="{ name: 'Home-view' }"
         exact
        text
      >
        <span class="mr-2">الصفحة الرئيسية</span>
      </v-btn>
      <v-btn
         :to="{ name: 'about-view' }"
        text
      >
        <span class="mr-2">من نحن</span>
      </v-btn>
      <v-btn
         :to="{ name: 'products-view' }"
        text
      >
        <span class="mr-2">المنتجات</span>
      </v-btn>
      <v-btn
         :to="{ name: 'blog-view' }"
        text
      >
        <span class="mr-2">المدونة</span>
      </v-btn>
      <v-btn
         :to="{ name: 'add-product' }"
        text
      >
        <span class="mr-2">اعرض منتجاتك</span>
      </v-btn>
      <v-btn
         :to="{ name: 'cart-view' }"
        text
      >
        <v-icon class="mr-2">mdi-cart</v-icon>
      </v-btn>

      </v-tabs>
      <div
        cols="6"
        md="4"
        class="d-flex flex-row mr-16 myfont"
      >
        <v-btn
          class="mx-1 mb-2"
          color="white"
          :to="{ name: 'register' }"
        >
         التسجيل
        </v-btn>
        <v-btn
          class="mx-1 mb-2"
          fab
          x-small
          color="white"
        >
          <v-icon
          >
            {{ icons.facebook }}
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-1 mb-2"
          fab
          x-small
          color="white"
        >
          <v-icon
          >
            {{ icons.youtube }}
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-1 mb-2"
          fab
          x-small
          color="white"
        >
          <v-icon
          >
            {{ icons.instagram }}
          </v-icon>
        </v-btn>
        </div>
      </template>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    icons: {
      account: ' mdi-account',
      facebook: 'mdi-facebook',
      youtube: 'mdi-youtube',
      instagram: 'mdi-instagram'
    }
  })
}
</script>
