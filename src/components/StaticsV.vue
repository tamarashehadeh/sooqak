<template>
  <v-container
    id="stats"
    class="my-12"
  >
    <v-row justify="center">
      <v-col
        v-vue-aos="{animationClass:'animate__fadeInUp animate__animated'}"
        cols="12"
      >
        <div class= "myfont font-weight-regular text-uppercase text-center mb-6">
     أكثر من 10 سنوات لتحقيق الهدف
        </div>
      </v-col>
      <v-card
        v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
        cols="4"
        class="mx-7"
        elevation="7"
      >
        <v-hover
          v-slot="{ hover }"
          style="height:250px;
          width:250px;"
        >
          <div
            class="text-center pt-12 px-16 black--text white"
          >
            <div>
              <v-icon
                x-large
                class="py-5"
                color="indigo accent-1"
              >
                mdi-thumb-up
              </v-icon>
            </div>
              <p>845K</p>
            <v-expand-x-transition>
              <div
                v-if="hover"
                class="indigo accent-1 "
                style="height: 3px;
               width:100%;"
              />
            </v-expand-x-transition>
            <div class=" pt-2 myfont text-center black--text font-weight-regular">
              {{ stats.subtitle2 }}
            </div>
          </div>
        </v-hover>
      </v-card>
      <v-card
        v-vue-aos="{animationClass:'animate__fadeInDown animate__animated'}"
        cols="4"
        class="mx-5"
        elevation="7"
      >
        <v-hover
          v-slot="{ hover }"
          style="height:250px;
          width:250px;"
        >
          <div
            class="text-h6 text-center pt-12 px-16 black--text white"
          >
            <div>
              <v-icon
                x-large
                class="py-5"
                color="indigo accent-1"
              >
                mdi-comment
              </v-icon>
            </div>
            <P>252K</P>
            <v-expand-x-transition>
              <div
                v-if="hover"
                class="indigo accent-1 "
                style="height: 3px;
               width:100%;"
              />
            </v-expand-x-transition>
            <div class=" pt-2 myfont text-center black--text font-weight-regular">
              {{ stats.subtitle3 }}
            </div>
          </div>
        </v-hover>
      </v-card>
      <v-card
        v-vue-aos="{animationClass:'animate__fadeInRight animate__animated'}"
        cols="4"
        class="mx-5"
        elevation="7"
      >
        <v-hover
          v-slot="{ hover }"
          style="height:250px;
          width:250px;"
        >
          <div
            class="text-h6 text-center pt-12 px-16 black--text white"
          >
            <div>
              <v-icon
                x-large
                class="py-5"
                color="indigo accent-1"
              >
                mdi-account
              </v-icon>
            </div>
            <p>2.9M</p>
            <v-expand-x-transition>
              <div
                v-if="hover"
                class="indigo accent-1 "
                style="height: 3px;
               width:100%;"
              />
            </v-expand-x-transition>
            <div class=" pt-2 myfont text-center black--text font-weight-regular">
              {{ stats.subtitle }}
            </div>
          </div>
        </v-hover>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    stats:
      {
        subtitle: 'زبون',
        subtitle1: 'Reservations',
        subtitle2: 'لايك',
        subtitle3: 'كومينت'
      },
    rooms: 5646,
    roomsCount: 78578,
    types: 0,
    type: 0,
    customers: 7570,
    review: 0
  }),
  created () {
    const self = this
    this.axios.get('/rooms').then(function (res) {
      self.roomsCount = res.data.meta.total
    })
    this.axios.get('/room-types').then(function (ress) {
      self.type = ress.data.data.roomTypes.length
    })
    this.axios.get('/reviews/stats').then(function (rese) {
      self.review = rese.data['Rates count']
    })
  }
}

</script>

<style>

</style>
