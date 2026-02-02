'use client';

import Link from 'next/link';

export default function CurriculumPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-8 px-4" style={{ scrollMarginTop: '80px', paddingTop: '120px' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mt-4" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-gulzar)', letterSpacing: '0.008em', lineHeight: '1.6' }}>
            منہج و نظام
          </h1>
          <p className="text-lg md:text-xl" style={{ color: '#000000', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.06em' }}>
            اصلاحی و تربیتی منہج
          </p>
        </div>
      </section>

        {/* Four Principles Section */}
        <section className="w-full py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-right font-jameel mb-12" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.06em' }}>
              اتحاد و اتفاق کے اصول
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: '۱', text: 'توحید کی آڑ میں توہین سے بچنا' },
                { num: '۲', text: 'عقیدت و محبت کے پردے میں شرکیہ سے بچنا' },
                { num: '۳', text: 'تحقیق کے پردے میں خود رائی سے بچنا' },
                { num: '۴', text: 'دین کے شعبے میں تقابلی انداز سے بچنا' }
              ].map((item, index) => (
                <div key={index} className="rounded-xl p-6 flex items-center gap-4 bg-white border-2 border-gray-200">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-gray-50">
                    <span className="font-bold text-gray-700">{item.num}</span>
                  </div>
                  <p className="font-jameel font-bold text-right" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eight Things to Do */}
        <section className="w-full py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-right font-jameel mb-12" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.06em' }}>
              آٹھ بنیادی باتیں
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: '۱', text: 'توحید و تعظیم شعائر اللہ' },
                { num: '۲', text: 'ذکر و عبادت' },
                { num: '۳', text: 'تعلیم و تعلم' },
                { num: '۴', text: 'حسن خلق' },
                { num: '۵', text: 'خدمت خلق' },
                { num: '۶', text: 'دعوت و تبلیغ' },
                { num: '۷', text: 'جہاد' },
                { num: '۸', text: 'اخلاص نیت' }
              ].map((item, index) => (
                <div key={index} className="rounded-xl p-6 flex items-center gap-4 bg-white border-2 border-gray-200">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-gray-50">
                    <span className="font-bold text-gray-700">{item.num}</span>
                  </div>
                  <p className="font-jameel font-bold text-right" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Five Things to Avoid */}
        <section className="w-full py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-right font-jameel mb-12" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.06em' }}>
              پانچ چیزوں سے پرہیز
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: '۱', text: 'سوال' },
                { num: '۲', text: 'طمع' },
                { num: '۳', text: 'اسراف و تبذیر' },
                { num: '۴', text: 'بے جا استعمال' },
                { num: '۵', text: 'فضول باتوں سے بچنا' }
              ].map((item, index) => (
                <div key={index} className="rounded-xl p-6 flex items-center gap-4 bg-white border-2 border-gray-200">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-gray-50">
                    <span className="font-bold text-gray-700">{item.num}</span>
                  </div>
                  <p className="font-jameel font-bold text-right" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Three Things for Moderation */}
        <section className="w-full py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-right font-jameel mb-12" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.06em' }}>
              تین چیزوں میں اعتدال
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: '۱', text: 'کم سونا' },
                { num: '۲', text: 'کم کھانا' },
                { num: '۳', text: 'کم بولنا' }
              ].map((item, index) => (
                <div key={index} className="rounded-2xl p-8 text-center bg-white border-2 border-gray-200">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-50">
                    <span className="text-2xl font-bold text-gray-700">{item.num}</span>
                  </div>
                  <p className="font-jameel font-bold" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', fontSize: '1.1rem' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="w-full py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-right font-jameel mb-12" style={{ color: '#000000', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.06em' }}>
              اصلاحی و تربیتی منہج
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl p-8 bg-white border-2 border-gray-200">
                <h3 className="text-xl font-bold text-right font-jameel mb-4" style={{ color: '#000000', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.05em' }}>
                  عقائد اور فکر و نظر کی تطہیر
                </h3>
                <p className="font-jameel text-right" style={{ color: '#000000', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.8' }}>
                  جذبات و خیالات کو اعتدال پر لانا، پوشیدہ صلاحیتوں کو اجاگر کرنا، اور ہر صاحب حق کے حقوق کی تعلیم دینا۔
                </p>
              </div>

              <div className="rounded-2xl p-8 bg-white border-2 border-gray-200">
                <h3 className="text-xl font-bold text-right font-jameel mb-4" style={{ color: '#000000', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.05em' }}>
                  عملی تربیت
                </h3>
                <p className="font-jameel text-right" style={{ color: '#000000', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.8' }}>
                  نماز، روزہ، زکوۃ، حج اور جہاد جیسے عبادات اور خرید و فروخت، نکاح جیسے معاملات کے بنیادی مسائل کی تعلیم دینا۔
                </p>
              </div>

              <div className="rounded-2xl p-8 bg-white border-2 border-gray-200">
                <h3 className="text-xl font-bold text-right font-jameel mb-4" style={{ color: '#000000', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.05em' }}>
                  روحانی ترقی
                </h3>
                <p className="font-jameel text-right" style={{ color: '#000000', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.8' }}>
                  درس قرآن، ذکر، مجاہدہ، خدمت اور مراقبات کے ذریعے نفس کو پاک کرنا اور عملی صلاحیتوں کو بیدار کرنا۔
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
