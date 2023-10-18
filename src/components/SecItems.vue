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
           تصفح قسم الحقائب
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
        v-for="(product) in products2"
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
      products2: [
        {
          id: '1',
          img: 'https://img.ltwebstatic.com/images3_spmp/2023/06/05/1685956341463977e457da72dfef9b579dbdaa94bf_thumbnail_600x.jpg',
          price: '150.000 Sp',
          oldPrice: '200.000 Sp',
          description: ' توت باغ '
        },
        {
          id: '2',
          img: 'https://img.ltwebstatic.com/images3_pi/2022/11/17/1668672692a0d6479838357eec918fa86e7796a43b_thumbnail_600x.jpg',
          price: '200.000 Sp',
          oldPrice: '250.000 Sp',
          description: '   حقيبة باللون الأسود '
        },
        {
          id: '3',
          img: 'https://img.ltwebstatic.com/images3_pi/2023/08/29/44/1693281559e054c92278cf43ded97028ae0e2ae7a4_thumbnail_600x.jpg',
          price: '50.000 Sp',
          oldPrice: '100.000 Sp',
          description: 'جزدان صغير'
        },
        {
          id: '4',
          img: 'https://img.ltwebstatic.com/images3_spmp/2023/06/27/16878452729510a19056b64d099f0663f26ca4370c_thumbnail_600x.jpg',
          price: '35.000 Sp',
          oldPrice: '50.000 Sp',
          description: 'حقيبة صغيرة'
        }
      ]
    }
  }
}
</script>

<style>
.sale{
  height: 25px;
  width: 60px;
  background:black;
}
</style>
