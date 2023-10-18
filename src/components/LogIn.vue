<template>
  <div class="loginbg myfont" style="direction: rtl;">
    <v-container class="mt-16" id="Sendpassword">
      <v-divider class="ma-4"></v-divider>
      <!-- <div class="mb-7 d-flex flex-column" style="text-align:center; width: 700px; margin: auto;"> -->
      <!-- <p class="text-h2"> Get in touch </p> -->
      <!-- <p class="text-subtitle-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati esse voluptatibus nemo labore aperiam excepturi similique quo cumque a? Fugiat ipsum aperiam incidunt quos temporibus odio eius, neque magnam. Excepturi?</p> -->
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
          <v-card ref="form" color="#00000000" flat style="text-align: center" height="400" class="">
            <p
              class="mytext-h2 white--text mt-5"
            >
           قم بتسجيل الدخول
            </p>
            <v-card-text>
              <v-text-field
                v-model="username"
                :rules="emailRules"
                placeholder="tamara"
                :label="الايميل"
                shaped
                required
                filled
                color="#A584F5"
                class="theme--dark"
              ></v-text-field>
              <v-text-field
                ref="password"
                v-model="password"
                :rules="passwordRules"
                placeholder="كلمة السر"
                :label="ddd"
                required
                shaped
                filled
                color="#A584F5"
                class="theme--dark"
              ></v-text-field>
              <!-- country codes (ISO 3166) and Dial codes. -->
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
              تسجيل الدخول
              </v-btn>
              <v-dialog v-model="dialog" max-width="250">
                <v-card
                  class="d-flex justify-center align-center white--text"
                  style="background: #000000c2"
                >
                  <p class="my-2">
                  <v-icon>
                    mdi-check-outline
                  </v-icon>
                  </p>
                </v-card>
              </v-dialog>
              <v-dialog v-model="errorDialog" max-width="250">
                <v-card
                  class="d-flex justify-center align-center white--text"
                  style="background: #000000c2"
                >
                  <p class="my-2">
                    تأكد من ادخال معلوماتك بشكل صحيح
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
      errorDialog: false,
      name: '',
      email: '',
      phone: '',
      country: '',
      username: 'kminchelle',
      password: '0lelplR',
      token: '',
      chat_id: '274577131'
    }
  },
  methods: {
    async submit () {
      const payload = {
        password: this.password,
        username: this.username
      }
      const self = this
      this.axios.post('https://dummyjson.com/auth/login', payload).then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        self.$store.state.token = res.data.token
        console.log(self.$store.state.token)
        window.location = '/'
      })
    }
  }
}
</script>

<style scoped>
.loginbg{
  background-image: url(../assets/login.jpg) !important;
}
.theme--light.v-label {
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
