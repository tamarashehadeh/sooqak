<template>
  <div class="bg">
    <v-container class="mt-16">
      <section>
        <div class="d-flex flex-column align-center">
          <h1 class="mt-5 mx-10  ttext-h3 noto">منتجاتنا</h1>
        </div>
        <v-item-group>
          <v-subheader style="direction: rtl;">الأقسام</v-subheader>
          <v-item v-for="(category ,i) in categories" :key="i"
            v-slot="{ active }"
          >
            <v-chip
              active-class="purple--text"
              :input-value="active"
              @click="gotocat(i)"
              class="ma-2"
            >
            {{ category }}
            </v-chip>
          </v-item>
        </v-item-group>
        <v-row>
          <v-col
          v-for="(item) in items"
          :key="item.id"
            class="text-center justify-center"
            cols="12"
            md="4"
          >
              <v-card
                width="300"
                flat
                class="ma-5 pa-2 elevate-on-hover"
                :to="{ path: `products/${item.id}` }"
              >
                <div>
                  <v-img
                    :src= item.images[0]
                    class="pa-5"
                    width="300"
                    height="250"
                  >
                  </v-img>
                </div>
                <div class=" text-start grey--text pt-2 pl-2">
                  {{ item.description }}
                  <v-divider></v-divider>
                  <div class="d-flex justify-start">
                  <span>
                  price: {{ item.price }} SP.
                  </span>
                </div>
                </div>
              </v-card>
          </v-col>
          </v-row>
      </section>
    </v-container>
  </div>
  </template>

<script>

export default {
  name: 'ExampleMasonry',
  data () {
    return {
      options: {
        width: 300
      },
      cart: [],
      items: [
      ],
      categories: []
    }
  },
  methods: {
    addItemToCart (item) {
      console.log(this.$store.state.items)
    },
    gotocat (i) {
      const self = this
      const cat = this.categories[i]
      this.axios.get(`https://dummyjson.com/products/category/${cat}`).then(function (res) {
        self.items = res.data.products
      })
    }
  },
  created () {
    const self = this
    this.axios.get('https://dummyjson.com/products').then(function (res) {
      self.items = res.data.products
      // console.log(res.data.products)
    })
    this.axios.get('https://dummyjson.com/products/categories').then(function (res) {
      self.categories = res.data
      // console.log(res.data)
    })
  },
  computed: {
    DoneItems () {
      return this.$store.state.items
    }
  }
}
</script>

  <style scoped>
  .bg{
    /* background-color: #c6c5ee !important; */
  }
  .elevate-on-hover {
  transition: box-shadow 0.3s ease; /* Add smooth transition */
}
  .elevate-on-hover:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
}
    .Item {
      overflow: hidden;
      border-radius: 4px;
      width: 100%;
    }
    .Content {
      padding: 20px;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      line-height: 0;
      display: block;
    }
    .overlay-1{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 1;
    }
  </style>
