<template>
  <div class="" style="direction: rtl;">
    <v-container class="bg">
      <div class="d-flex flex-column ma-16 px-16">
        <h2>سحر الموضة الشتوية: اكتشف أناقتك في البرد القارس</h2>
        <img class="my-5" src="https://img.freepik.com/free-vector/fur-coat-flat-composition-with-character-walking-woman-wearing-warm-coat-with-purple-bag-vector-illustration_1284-76144.jpg?w=1380&t=st=1697285210~exp=1697285810~hmac=435db224001e381dd5a3b80db1b0d6780bfed087c50049f931daa8b748d52c4a" alt="">

  <p>في فصل الشتاء، يأتي الجو البارد مع فرصة رائعة للتعبير عن أناقتك من خلال الطرق المميزة لارتداء الملابس والاكسسوارات. مع تنوع الألوان والأنماط والمواد المتاحة، هناك العديد من الخيارات لتحقيق إطلالة شتوية رائعة تمزج بين الدفء والأناقة. دعونا نستعرض بعض الأفكار والنصائح للتألق في موسم الشتاء.</p>

  <h4>1. الملابس الشتوية الأساسية:</h4>
  <p>قبل البدء في تجديد خزانة ملابسك، تأكد من أن لديك الملابس الأساسية التي تحتاجها. ضمن هذه الملابس الأساسية تتضمن معاطف الصوف، والكنزات الدافئة، والبنطلونات الشتوية. يمكنك الاستثمار في قطع عالية الجودة لتحافظ على دفءك وأناقتك.</p>

  <h4>2. اللون والأنماط:</h4>
  <p>تجسيد فصل الشتاء يعني استخدام ألوان وأنماط مناسبة. الألوان المشهورة في الشتاء تشمل الألوان الداكنة مثل الأسود والرمادي والبني، ولكن يمكنك أيضًا إضافة لمسة من الألوان الزاهية لإضفاء حيوية على إطلالتك.</p>

  <h4>3. الأقمشة:</h4>
  <p>ابحث عن الملابس المصنوعة من الأقمشة الدافئة مثل الصوف والكشمير والصوف الصناعي. هذه الأقمشة تحتفظ بالحرارة وتجعلك تشعر بالراحة أثناء تجوالك في البرد.</p>

  <h4>4. الاكسسوارات:</h4>
  <p>تعتبر الاكسسوارات مهمة جدًا في الشتاء. قد تشمل الخيارات الشتوية الأوشحة والقفازات والقبعات والجوارب الدافئة. هذه الاكسسوارات لا تضيف فقط لمسة نهائية جميلة لإطلالتك ولكنها تساعد أيضًا في الحفاظ على دفء جسمك.</p>

  <h4>5. الطبقات:</h4>
  <p>طريقة جيدة لمواجهة البرد هي ارتداء الملابس بطبقات. يمكنك ارتداء قميص دافئ تحت كنزة أو معطف، مما يتيح لك التحكم في مدى دفء إطلالتك.</p>

  <h4>6. الاهتمام بالأقدام:</h4>
  <p>لا تنسَ الاهتمام بقدميك. احرص على ارتداء أحذية مقاومة للماء ومناسبة للشتاء لحماية أقدامك من البرد والرطوبة.</p>

  <h4>7. التنسيق والطبقات:</h4>
  <p>تنسيق الملابس واختيار الطبقات بشكل صحيح يساهم في إطلالة متكاملة. اختر ملابس تتناسب مع بعضها البعض وقوم بتنسيق الألوان بعناية.</p>

  <p>في النهاية، موسم الشتاء هو وقت مثالي للاستمتاع بالأزياء والتعبير عن أسلوبك الشخصي. استفد من تلك النصائح وتألق في فصل الشتاء.</p>
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
