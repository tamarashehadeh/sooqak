<template>
  <div class="d-flex flex-row align-center justify-center blog-bg"  id="posts">
    <v-card color="blog" class="glass mt-5 mb-5" width="70%" >
        <v-row class="d-flex justify-start mb-6 mx-5">
        <v-col
          v-for="(post) in posts"
          :key="post.id"
          class="pa-2"
          outlined
          tile
          cols="12"
          md="4"
        >
          <v-card :loading="post.isLoading" class="mx-auto my-12 theme--dark d-flex flex-nowrap flex-column justify-space-between "
           max-width="374" min-height="330px">
            <v-card-title class="Word-wrap myfont" >
              {{ post.name }}
            </v-card-title>
            <v-card-text class="Word-wrap black--text">
              <div>{{ post.dd }}</div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions >
              <v-btn style="color: #6B3EB6" text :href=post.route class="myfont">
              اقرأ المزيد
              </v-btn>
              <!-- <router-link :to="`/post/${post.id}`">Read More</router-link> -->
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      posts: [
        {
          id: '1',
          name: 'سحر الموضة الشتوية: اكتشف أناقتك في البرد القارس',
          route: '/post/one',
          dd: 'في فصل الشتاء، يأتي الجو البارد مع فرصة رائعة للتعبير عن أناقتك من خلال الطرق المميزة لارتداء الملابس والاكسسوارات. مع تنوع الألوان والأنماط والمواد المتاحة، هناك العديد من الخيارات لتحقيق إطلالة شتوية رائعة تمزج بين الدفء والأناقة. دعونا نستعرض بعض الأفكار والنصائح للتألق في موسم الشتاء.'
        },
        {
          id: '2',
          name: '"تألّقي بأناقة مع موضة الصيف: دليل شامل لاختيار ملابسك الصيفية"',
          route: '/post/two',
          dd: 'مع اقتراب فصل الصيف، يأتي وقت الاستعداد للشمس والبحر والأوقات الممتعة في الهواء الطلق',
          image: 'https://www.stxnext.com/hubfs/STX%20Next%202020/blog/images/Blog-post-graphic-Django-Examples-Top-18-Django-Websites.png'
        },
        {
          id: '4',
          name: 'استعد للعام الدراسي بنجاح: دليل شامل لشراء مستلزمات مدرسية عالية الجودة',
          route: '/post/three',
          dd: 'ع اقتراب بداية العام الدراسي، يحين وقت التجهيز وضمان أن أطفالك مجهزون تجهيزًا جيدًا للنجاح في رحلتهم التعليمية.',
          image: 'https://www.stxnext.com/hubfs/STX%20Next%202020/blog/images/Blog-post-graphic-Django-Examples-Top-18-Django-Websites.png'
        }
      ]
    }
  }
}
</script>
<style>
theme--dark.v-card > .v-card__text, .theme--dark.v-card > .v-card__subtitle {
    color: black !important;
}
.theme--dark.v-sheet {
    background-color: #ACA9EF;
    border-color: #ACA9EF;
    color: black;
}
.Word-wrap{
white-space: pre-wrap;
  word-break: break-word;
}
.blog {
background-color: transparent !important;
}
.blog--text {
color: black !important;
}
.blog-bg{
background-color: #E3E0FF !important;

}
</style>
