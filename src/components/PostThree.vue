<template>
  <div class="" style="direction: rtl;">
    <v-container class="bg">
      <div class="d-flex flex-column ma-16 px-16">
        <h2>استعد للعام الدراسي بنجاح: دليل شامل لشراء مستلزمات مدرسية عالية الجودة</h2>
        <img class="my-5" src="https://img.freepik.com/free-photo/school-stationery-with-accessories_1101-373.jpg?1&w=996&t=st=1697286726~exp=1697287326~hmac=2ad08990b959950fab3f748764a5b10e53ba5d6e8a378b6685f08a54cd2f0775" alt="">
        <p>مع اقتراب بداية العام الدراسي، يحين وقت التجهيز وضمان أن أطفالك مجهزون تجهيزًا جيدًا للنجاح في رحلتهم التعليمية. تعد مستلزمات المدرسة أحد أهم العوامل لتحقيق النجاح الأكاديمي والتنظيم الجيد. في هذه المقالة، سنسلط الضوء على كيفية اختيار مستلزمات مدرسية عالية الجودة للأطفال والتي تلبي احتياجاتهم.</p>

<h2>1. الحقائب المدرسية:</h2>
<p>الحقيبة المدرسية هي أحد أهم العناصر التي يجب النظر فيها. ابحث عن حقيبة مدرسية تكون متينة ومريحة للحمل وتحتوي على مساحات وجيوب كافية لتنظيم الكتب والدفاتر والأدوات.</p>

<h2>2. القرطاسية:</h2>
<p>قد تكون القرطاسية متنوعة ومهمة، ابحث عن أقلام رصاص ذات جودة عالية، وأقلام جافة، ومقصات، ومجلدات، وورق ذو جودة جيدة. تأكد من أنه يوجد لديك ما يكفي من هذه الأدوات للمساهمة في النجاح الأكاديمي.</p>

<h2>3. الأمتعة المدرسية:</h2>
<p>قد تحتاج الأطفال إلى حقائب خفيفة يوميًا أو حقائب للرياضة أو للمواد الفنية. ابحث عن أمتعة مدرسية تتناسب مع احتياجاتهم وتكون متينة لتحمل الاستخدام اليومي.</p>

<h2>4. ملحقات التنظيم:</h2>
<p>استثمار مستلزمات تنظيمية مثل ملفات المستندات والألواح الممغنطة ومنظمات الدرج تساهم في الحفاظ على النظام والتنظيم وتسهيل عملية الدراسة.</p>

<h2>5. الزجاجات وصناديق الغداء:</h2>
<p>زجاجات المياه عالية الجودة وصناديق الغداء تلعب دورًا مهمًا في التغذية الجيدة والمرافقة اليومية.</p>

<h2>6. الأمور الشخصية:</h2>
<p>الأمور الشخصية مثل القلم والمناديل المعطرة والمطهرات الصغيرة هي أمور تساعد في الراحة الشخصية والنظافة.</p>

<h2>7. التعبير عن الأناقة:</h2>
<p>ابحث عن مستلزمات مدرسية تتناسب مع ذوق الأطفال وتعبر عن أسلوبهم الشخصي، سواء كان ذلك بألوان زاهية أو رسومات مميزة.</p>

<h2>8. الإبداع والفنون:</h2>
<p>إذا كان لديك طفل موهوب في مجال الفنون والإبداع، قد ترغب في توفير مستلزمات فنية مثل الألوان وألواح الرسم والفرش.</p>

<p>في الختام، تعد مستلزمات المدرسة جزءًا مهمًا من تجهيز الأطفال للعام الدراسي. اختاري مستلزمات عالية الجودة والتي تتناسب مع احتياجات وأذواق الأطفال لضمان تحقيق النجاح الأكاديمي والاستفادة القصوى من تجربة التعلم.</p>
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
