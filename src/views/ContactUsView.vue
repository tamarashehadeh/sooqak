<template>
  <div class="bg">
  <contact-us-hero/>
  <get-in-touch/>
  <send-us-message/>
  </div>
  </template>

<script>
import ContactUsHero from '../components/ContactUsHero.vue'
import GetInTouch from '@/components/GetInTouch.vue'
import SendUsMessage from '@/components/SendUsMessage.vue'

export default {
  name: 'contact_us',

  components: {
    ContactUsHero,
    GetInTouch,
    SendUsMessage
  }
}
</script>

  <style>
  .bg{
    background-image: url(../assets/login.jpg);
  }
  </style>
