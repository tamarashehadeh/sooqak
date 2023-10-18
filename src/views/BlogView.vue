<template>
  <div class="backgroundBlog"   dir="rtl">
<blog-hero/>
<blog-content/>
  </div>
</template>

<script>
import BlogHero from '@/components/BlogHero.vue'
import BlogContent from '@/components/BlogContent.vue'

export default {
  name: 'blog-view',
  components: {
    BlogHero,
    BlogContent
  }
}
</script>

<style>
.backgroundBlog{
  background-image: url(../assets/5174860.jpg);
}
</style>
