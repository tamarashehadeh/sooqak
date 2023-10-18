<template>
  <div class="loginbg myfont" style="direction: rtl;">
    <v-container class="mt-16" id="Send">
      <v-row justify="center" align-content="center">
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="6"
          class="glass mb-10 theme--dark"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <v-card ref="form" color="#00000000" flat style="text-align: center" height="" class="">
            <p
              class="mytext-h2 white--text mt-5"
            >
            يمكنك الان بيع منتجاتك بسهولة
            </p>
            <v-card-subtitle
              class="mb-5 text-mysubtitle-1 white--text"
            >
             قم بتعبئة بيانات المنتج الخاص بك!
            </v-card-subtitle>
            <v-card-text>
              <v-text-field
                v-model="productname"
                placeholder="اسم المنتج"
                :label="اسم"
                shaped
                required
                filled
                color="#A584F5"
                class="theme--dark white--text"
              ></v-text-field>
                <select name="category"  class="theme--dark select" id=""  v-model="category" required >
                <option value="" disabled selected>اختر القسم</option>
                <optgroup color="black"  v-for="(category ,i) in categories" :key="i">
                <option :value="category.category_name"> {{ category.category_name }} </option>
                  </optgroup>
              </select>
              <v-text-field
                v-model="productprice"
                placeholder="سعر المنتج"
                :label="سعر"
                shaped
                required
                type="number"
                filled
                color="#A584F5"
                class="theme--dark white--text"
              ></v-text-field>
              <v-text-field
                v-model="image"
                placeholder="رابط صورة للمنتج"
                :label="رابط"
                shaped
                required
                filled
                color="#A584F5"
                class="theme--dark white--text"
              ></v-text-field>
              <v-text-field
                v-model="count"
                placeholder="الكمية"
                :label="الكمية"
                shaped
                required
                type="number"
                filled
                color="#A584F5"
                class="theme--dark white--text"
              ></v-text-field>
               <select  class="theme--dark select"  v-model="region">
                <option value="" disabled selected>اختر المنقطة</option>
                <optgroup color="" v-for="(region ,i) in regions" :key="i">
                <option :value="region.region_name"> {{ region.region_name }} </option>
                  </optgroup>
              </select>
            </v-card-text>
            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
              <v-btn
                rounded
                class="gra white--text"
                height="50"
                width="100%"
                color="#A584F5"
                @click="submit"
              >
               إضافة المنتج
              </v-btn>
              <v-dialog v-model="dialog" max-width="250">
                <v-card
                  class="d-flex justify-center align-center white--text"
                  style="background: #B4B2F3"
                >
                  <p class="my-2">
                  <v-icon>
                    mdi-check-outline
                  </v-icon>
                  </p>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- </div> -->
    </v-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      dialog: false,
      productprice: '',
      productname: '',
      count: '',
      image: '',
      categories: [],
      regions: [],
      category: '',
      region: ''
    }
  },
  methods: {
    async submit () {
      const self = this
      const payload = {
        product_name: self.productname,
        product_sub_category: self.category,
        price: 20000,
        description: 'منتج جديد',
        product_img_link: 'https://m.media-amazon.com/images/I/61yAYdXP42L._AC_UY1100_.jpg',
        count: 7,
        regions_available: self.region
      }
      // const self = this
      console.log(payload)
      // console.log(test)
      this.axios.post('https://tamara99.pythonanywhere.com/add-product', payload).then(res => {
        this.dialog = true
        setTimeout(() => {
          this.dialog = false
        }, 2000)
        // localStorage.setItem('token', res.data.token)
        // self.$store.state.token = res.data.token
        // console.log(self.$store.state.token)
        // window.location = '/'
      })
    }
  },
  created () {
    const self = this
    this.axios.get('https://tamara99.pythonanywhere.com/get-all-categories').then(function (res) {
      self.categories = res.data.data
      console.log(self.categories)
    })
    this.axios.get('https://tamara99.pythonanywhere.com/get-all-regions').then(function (res) {
      self.regions = res.data.data
      console.log(self.regions)
    })
  }
}
</script>

<style scoped>
.loginbg{
  background-image: url(../assets/login.jpg) !important;
}
.theme--light.v-:label {
  color: rgb(255 255 255 / 60%) !important;
}
.select{
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    color: white;
    background: #ffffff14;
    border-bottom: 1px solid;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
option{
  color: black;
}
</style>
