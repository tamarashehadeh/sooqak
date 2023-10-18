<template>
  <div class="" style="direction: rtl;">
    <v-container class="bg">
      <div class="d-flex flex-column ma-16 px-16">
        <h2>تألّقي بأناقة مع موضة الصيف: دليل شامل لاختيار ملابسك الصيفية</h2>
        <img class="my-5" src="https://img.freepik.com/free-vector/summer-element-collection_23-2148145506.jpg?w=740&t=st=1697286307~exp=1697286907~hmac=84848d995f241257e31afad121890e45d1062b95328a51d8e2d83c41994477f8" alt="">
        <p>مع اقتراب فصل الصيف، يأتي وقت الاستعداد للشمس والبحر والأوقات الممتعة في الهواء الطلق. إذا كنت تبحثين عن الأناقة والراحة خلال موسم الصيف، فإنك في المكان المناسب. في هذا المقال، سنستعرض لك أحدث صيحات الموضة الصيفية وكيفية اختيار ملابسك بشكل مناسب للاستمتاع بكل لحظة.</p>

<h2>1. ابتكار التصاميم:</h2>
<p>تتيح لك موضة الصيف الإبداع والتجديد. ابحثي عن ملابس بتصاميم مميزة مثل الفساتين بأكمام واسعة والتنانير الملونة والقمصان ذات الأكتاف المكشوفة. يمكنك أيضًا الاستفادة من النقوش والزهور الزاهية لتضيف لمسة من الألوان الصيفية إلى إطلالتك.</p>

<h2>2. الألوان الصيفية:</h2>
<p>تعد الألوان هامة جدًا في موضة الصيف. يمكنك اختيار الألوان الزاهية مثل الزهري والأزرق السماوي والأصفر الفاقع لإضفاء جو من البهجة على إطلالتك. بالطبع، لا تنسي الألوان الأساسية مثل الأبيض والأسود لإضافة لمسة عصرية.</p>

<h2>3. الملابس الخفيفة:</h2>
<p>في الصيف، تكون الحرارة مرتفعة، لذا يجب اختيار ملابس خفيفة ومريحة. الفساتين القطنية والتنانير الواسعة والتوبات الخفيفة هي اختيارات مثالية لتجنب الشعور بالحرارة.</p>

<h2>4. ملابس البحر:</h2>
<p>إذا كنت تخططين للقضاء وقتك على الشاطئ، فلا تنسي ملابس البحر. اختاري مايوهًا وبيكيني يناسبان شكل جسمك وتفضيلاتك. يمكنك أيضًا إضافة قبعة ونظارات شمسية لإطلالة عصرية وحماية من الشمس.</p>

<h2>5. الاكسسوارات:</h2>
<p>الاكسسوارات هي المفتاح لتكملة إطلالتك الصيفية. اختاري قطعاً خفيفة مثل الأقراط الكبيرة والساعات الزاهية وحقائب اليد المميزة. لا تنسي أحذية الصيف الراحة مثل الصنادل والأحذية الخفيفة.</p>

<h2>6. الحفاظ على الحماية:</h2>
<p>لا تنسي أهمية الحماية من أشعة الشمس. استخدمي واقي شمسي وارتدي نظارات شمسية لحماية عينيك. كما يجب أن تكون القبعة جزءًا أساسيًا من إطلالتك لحماية رأسك من أشعة الشمس الحارقة.</p>

<h2>7. الراحة فوق كل شيء:</h2>
<p>في الصيف، الراحة تأتي في المقام الأول. اختاري ملابس تتناسب مع نشاطاتك وتمكنك من الاستمتاع بالجو الصيفي بكل راحة.</p>

<p>باختصار، موضة الصيف تجسد الألوان والأنماط والحيوية. اختاري ملابسك بعناية لتشعري بالراحة والأناقة في كل لحظة خلال هذا الموسم المشمس. انطلقي واستمتعي بأجمل أوقات الصيف!</p>
    </div>
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
      ],
      dialog: false
    }
  },
  methods: {
    copyLink () {
      const link = window.location.href
      navigator.clipboard.writeText(link).then(() => {
        this.dialog = true
        setTimeout(() => {
          this.dialog = false
        }, 2000)
      })
    }
  }
}
</script>
<style scoped  lang="scss">
$font-family: 'Marhey', serif;

p{
  color: black;
}
h2{
  color: black;
  font-family: $font-family, sans-serif !important;
}
h4{
  color: black;
  font-family: $font-family, sans-serif !important;
}
code{
  display: block !important;
  background-color: #E3E0FF !important;
}
.lines-container {
  position: relative;
}
.line {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #86b197;
}

.line-up {
  top: 0;
}

.line-down {
  bottom: 0;
}
.colory {
  color: #6aa883 !important;
}
.bg {
  background-color: #E3E0FF !important;
}
.ttext-h4 {
  font-size: 2.5rem !important;
  font-weight: 400;
  line-height: 3.125rem;
  letter-spacing: normal !important;
}
.raqi {
  border-left: 2px solid #86b197; /* Adjust width and color as needed */
  padding-left: 10px; /* Add padding to separate the line from content */
  margin-left: 20px; /* Add margin to adjust the overall positioning */
}
</style>
