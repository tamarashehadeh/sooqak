<template>
  <v-container class="mt-16">
    <div class="mt-16">
      <h1>
        items in cart
      </h1>
    </div>
    <v-card  class="mx-auto"
  >
    <v-list>
      <v-list-item-group
        v-model="model"
        color="indigo"
      >
      <v-list-item  v-for="product in items" :key="product.item.id">
      <v-img
        :src="product.item.thumbnail"
        width="100"
        contain
      ></v-img>
      <v-card-title>
        <h2 class="headline">{{ product.item.title }}</h2>
      </v-card-title>
      <v-card-text>
        <p class="body-1">{{ product.item.description }}</p>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="5">
            <p class="subtitle-1">Price: ${{ product.item.price }}</p>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="removeFromCart(product.item)">Remove from Cart</v-btn>
      </v-card-actions>
      </v-list-item>
    </v-list-item-group>
    </v-list>
    </v-card>

  </v-container>
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
    },
    removeFromCart (product) {
      this.$store.state.itemsincart.splice(product, 1)
    }
  },
  created () {
    this.items = this.$store.state.itemsincart
    console.log(this.items)
  },
  computed: {
    DoneItems () {
      return this.$store.state.items
    }
  }
}
</script>

  <style scoped>
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
