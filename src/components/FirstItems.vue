<template>
  <v-container>
    <v-row
      class="mt-4"
        justify="center"
      >
        <v-col
          cols="14"
        >
        <div
          class="myfont text-center my-5 font-weight-bold text--primary"
          >
            خصومات مميزة على هذه المنتجات
          </div>
          <div
             class="myfont text-center font-weight-light grey--text"
          >
           تصفح قسم الملابس
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
        v-for="(product) in products1"
        :key="product.id"
          class="text-center justify-center"
          cols="14"
          md="3"
        >
            <v-card
              width="300"
              height="340"
              flat
              class="elevate-on-hover"
            >
              <div>
                <v-img
                  :src= product.img
                  class="pa-5"
                  width="300"
                  height="250"
                >
                 <div class="sale">
                  <div class="white--text">
                    sale
                  </div>
                </div>
                </v-img>
              </div>
              <div class="font-weight-light text-start grey--text pt-2 pl-2">
                {{ product.description }}
                <div class="d-flex justify-start">
                <span class="text-decoration-line-through">
                {{ product.price }}
                </span>
                &nbsp;&nbsp;&nbsp;<span>{{ product.oldPrice }}</span>
              </div>
              </div>
            </v-card>
        </v-col>
        </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      products1: [
        {
          id: '1',
          img: 'https://img.ltwebstatic.com/images3_pi/2022/01/21/16427284592be22107ccfaf24a3613a8d6773ccaa7_thumbnail_600x.webp',
          price: '150.000 Sp',
          oldPrice: '200.000 Sp',
          description: 'جمبسوت اسود '
        },
        {
          id: '2',
          img: 'https://img.ltwebstatic.com/images3_pi/2023/07/26/1690364595143378f7338497e85ac9b0cae23b6a7e_thumbnail_600x.webp',
          price: '200.000 Sp',
          oldPrice: '250.000 Sp',
          description: ' كنزة جميلة للأم '
        },
        {
          id: '3',
          img: 'https://img.ltwebstatic.com/images3_pi/2023/02/11/16760777756c143d7af4b350fca38a17703ac9afba_thumbnail_600x.jpg',
          price: '150.000 Sp',
          oldPrice: '200.000 Sp',
          description: 'تيشرت  أبيض'
        },
        {
          id: '4',
          img: 'https://img.ltwebstatic.com/images3_pi/2021/12/02/16384494017176bfa1373d8fead30845fa3be36f2a_thumbnail_600x.jpg',
          price: '150.000 Sp',
          oldPrice: '200.000 Sp',
          description: 'كنزة هودي سميكة'
        }
      ]
    }
  }
}
</script>

<style >
.sale{
  height: 25px;
  width: 60px;
  background:black;
}
.elevate-on-hover {
  transition: box-shadow 0.3s ease; /* Add smooth transition */
}
  .elevate-on-hover:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
}
</style>
