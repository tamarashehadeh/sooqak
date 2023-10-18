<template class="mt-16">
  <div class="mt-16 mx-auto px-7">
    <v-row class=" pt-16" justify="center">
      <v-col cols="6">
        <v-carousel
        cycle
    height="400"
    show-arrows-on-hover>
      <v-carousel-item
        v-for="(image, index) in product.images"
        :key="index"
      >
        <v-img :src="image" height="300" contain></v-img>
      </v-carousel-item>
    </v-carousel>
      </v-col>
  <v-col cols="4">
    <div class="d-flex flex-column align-center">
      <v-card-title>
        <h2 class="headline">{{ product.title }}</h2>
      </v-card-title>
      <v-card-text class="text-center">
        <p class="body-1">{{ product.description }}</p>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="6">
            <p class="subtitle-1">Price: ${{ product.price }}</p>
            <p class="subtitle-1">Discount: {{ product.discountPercentage }}%</p>
            <p class="subtitle-1">Rating: {{ product.rating }}</p>
          </v-col>
          <v-col cols="6">
            <p class="subtitle-1">Stock: {{ product.stock }}</p>
            <p class="subtitle-1">Brand: {{ product.brand }}</p>
            <p class="subtitle-1">Category: {{ product.category }}</p>
          </v-col>
        </v-row>
      </v-card-text>
      <v-dialog v-model="dialog" max-width="250">
              <v-card
                class="d-flex justify-center align-center white--text"
                style="background: #34894992"
              >
                <p class="my-2">
                  تم إضافة المنتج الى السلة
                </p>
              </v-card>
            </v-dialog>
      <v-card-actions>
        <v-btn color="#B4B2F3" @click="addItemToCart(product)">Add to Cart</v-btn>
      </v-card-actions>
    </div>
  </v-col>

  </v-row>
    </div>
</template>

<script>
export default {
  name: 'product-view',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    product: {},
    dialog: false
  }),
  created () {
    const productId = this.$route.params.id
    this.axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => {
        this.product = response.data
        console.log(this.product)
      })
      .catch(error => {
        console.error('Error fetching product data:', error)
      })
  },
  methods: {
    addItemToCart (item) {
      this.$store.state.itemsincart.push({ item })
      this.dialog = true
      setTimeout(() => {
        this.dialog = false
      }, 2000)
      // console.log(this.$store.state.itemsincart[0].item)
    }
  }
  // mounted () {
  //   const self = this
  //   console.log(this.id)
  //   this.axios.get(`https://dummyjson.com/products/${self.id}`).then(res => {
  //     self.product = res.data
  //   })
  // }
}
</script>

<style scoped>
.elevation-3 {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.elevation-3:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>
