<template>
  <div>
    <hello-world />
    <first-items/>
    <BannerOneVue/>
    <sec-items/>
    <statics-v/>
  </div>
</template>

<script>
import FirstItems from '@/components/FirstItems.vue'
import HelloWorld from '../components/HelloWorld'
import BannerOneVue from '@/components/BannerOne.vue'
import SecItems from '@/components/SecItems.vue'
import StaticsV from '@/components/StaticsV.vue'

export default {
  name: 'Home-view',

  components: {
    HelloWorld,
    BannerOneVue,
    FirstItems,
    SecItems,
    StaticsV
  }
}
</script>
