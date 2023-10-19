<template>
  <div class="">
    <v-container class="mt-9 mb-5">
      <v-row class="d-flex" style="justify-content: center; text-align: center">
        <v-col
          class="d-flex flex-column align-center"
          cols="6"
          data-aos="slide-down"
        >
          <p class="mytext-h2 white--text myfont">تواصل معنا</p>
          <p class="text-mysubtitle-1  white--text myfont">
            نحن هنا لمساعدتك. اتصل بنا لأي استفسار أو دعم.
          </p>
        </v-col>
      </v-row>
      <v-row class="d-flex" style="justify-content: center; text-align: center">
        <v-col data-aos="fade" class="d-flex flex-row justify-center" cols="6">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            style="color: #B4B2F3"
            icon
            cols="12"
            md="3"
            target="_blank"
          >
            <v-icon size="18px">
            {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" class="d-flex justify-center mb-6">
        <v-col cols="12" sm="4" class="d-flex justify-center" data-aos="flip-left"  data-aos-duration="500">
           <a href="" target="_blank" style="text-decoration: none;">
          <div
            elevation="7"
            width="300px"
            class="glassIco"
            style="height: 170px !important"
          >
            <v-img
              src="../assets/icons8-whatsapp-150.png"
              max-height="75px"
              max-width="75px"
            >
            </v-img>
            <v-card-title class=" white--text"
            >واتساب</v-card-title>
            <v-card-text class="Narrow white--text d-flex justify-end" dir="ltr">click to Connect</v-card-text>
          </div>
        </a>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-center" data-aos="flip-left"   data-aos-duration="500">
          <a href="" target="_blank" style="text-decoration: none;">
          <div
            elevation="7"
            width="200px"
            class="glassIco"
            style="height: 170px !important"
          >
            <v-img
              src="../assets/icons8-telegram-app-150.png"
              max-height="75px"
              max-width="75px"
            >
            </v-img>
            <v-card-title class=" white--text"> تليغرام </v-card-title>
              <v-card-text class="Narrow white--text"> @sooqak </v-card-text>
            </div>
          </a>
          </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-center" data-aos="flip-left"   data-aos-duration="500">
          <a  href="mailto:raqico@gmail.com" target="_blank" style="text-decoration: none;">
          <div
            elevation="7"
            width="300px"
            class="glassIco"
            style="height: 170px !important"
          >
            <v-img
              src="../assets/icons8-mail-100.png"
              max-height="75px"
              max-width="75px"
            >
            </v-img>
            <v-card-title class="white--text"
        > ايميل </v-card-title>
            <v-card-text class="Narrow white--text"> sooqak@gmail.com </v-card-text>
          </div>
          </a>
        </v-col>
        <!-- <v-col cols="12" sm="4" class="d-flex justify-center">
          <v-card
            data-aos="fade-left"
            elevation="7"
            width="300px"
            class="glass"
            style="height: fit-content"
          >
            <v-img
              src="../assets/icons8-place-marker-96.png"
              max-height="75px"
              max-width="75px"
            >
            </v-img>
            <v-card-title class=" title-font white--text"> Location </v-card-title>
            <v-card-text class="Narrow white--text">
              <a
                href="https://www.google.com/maps?q=33.5435411,36.3063702&hl=en-LB&gl=lb&entry=gps&lucs=,47071704&g_ep=CAISBjYuNzMuMhgAINeCAyoJLDQ3MDcxNzA0QgJERQ%3D%3D&g_st=it"
                target="_blank"
              >
                RAQI CO.
              </a>
              <br />
              Opposite Al-Manar International Hospital, <br />
              Main Street, Rukn Al-Deen
            </v-card-text>
          </v-card>
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        { icon: 'mdi-facebook', url: 'https://www.facebook.com/profile.php?id=100095227630900' },
        { icon: 'mdi-linkedin', url: 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFnPaHjTZhJ3AAAAYmrUpeAFI-6U3reiDsSYgq10127tcmVhXO3J1T4rr_FcQSHZRlDnilbVe-NyHFL21Y0Eca5Cp8UbzZcXg9yHMamaiznZfAHce2_0ZtVvPZNqsLAxOcGOz4=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fraqi-co%2F' }
      ]
    }
  }
}
</script>

<style lang="scss">
@mixin flex-center { display: flex; justify-content: center; align-items: center; }

.glassIco {
  --width: 320px;
  &, & * { box-sizing: border-box; transition: 200ms; }
  width: var(--width);
  height: fit-content;
  color: #fff;
  font-size: 30px;
  border-radius: 5px;
  background-color: rgba(126, 174, 130, 0.149) !important;
  backdrop-filter: blur(6px)!important;
  -webkit-backdrop-filter: blur(6px)!important;
  border: 1px solid rgba(255, 255, 255, 0.214)!important;
  border-radius: 16px !important;
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
  text-decoration: none;
  margin: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  @include flex-center;
  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    filter: blur(0px);
    transition: 400ms;
    transform: skewX(45deg) translateX(calc(var(--width) + 50%));
  }
  &:hover {
    transform: translateY(-20px);
    &:before {
      transform: skewX(45deg) translateX(calc(var(--width) * -1 - 50%))
    }
  }
  & > * { opacity: 0.8; }
}
</style>
