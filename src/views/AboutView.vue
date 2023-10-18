<template>
  <div
  dir="rtl">
    <about-us></about-us>
    <who-we-are>
    </who-we-are>
    <our-story> </our-story>
  </div>
</template>

<script>
import AboutUs from '@/components/AboutUs.vue'
import WhoWeAre from '@/components/WhoWeAre.vue'
import OurStory from '@/components/OurStory.vue'

export default {
  name: 'Home-view',

  components: {
    AboutUs,
    WhoWeAre,
    OurStory
  }
}
</script>
