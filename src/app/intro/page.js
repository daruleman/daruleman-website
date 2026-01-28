'use client';

export default function IntroPage() {
  return (
    <div style={{ backgroundColor: 'var(--background)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Header */}
      <div className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-3" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-gulzar)', letterSpacing: '0.008em' }}>
          تعارف بانی
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-8" style={{ color: 'var(--primary)', fontFamily: 'var(--font-gulzar)', letterSpacing: '0.006em' }}>
          حضرت مفتی سید مختار الدین شاہ صاحب
        </h2>
      </div>

      {/* Content */}
      <div className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Biography */}
          <div className="mb-16 p-10 rounded-xl" style={{ backgroundColor: 'var(--accent)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <p className="leading-relaxed" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', fontSize: '1.15rem', lineHeight: '2.4', textAlign: 'right', wordSpacing: '0.08em' }}>
              حضرت مفتی سید مختار الدین شاہ صاحب پاکستان کے ممتاز عالم دین اور معروف روحانی پیشوا ہیں۔ آپ شیخ الحدیث مولانا محمد زکریا کاندھلوی صاحب کے خلیفہ مجاز ہیں۔ آپ کا تعلق ضلع ہنگو کے علاقے کربوغہ شریف کے ایک معزز سادات گھرانے سے ہے۔ آپ نفس تزکیہ و باطنی اصلاح کے حوالے سے منفرد مقام رکھتے ہیں۔ آپ نے کربوغہ شریف میں "جامعہ زکریا" جیسی عظیم دینی درسگاہ قائم کی ہے جہاں قرآن و حدیث کی تعلیم دی جاتی ہے۔
            </p>
          </div>

          {/* Mentor */}
          <div className="p-10 rounded-xl" style={{ backgroundColor: 'var(--primary-bg)', borderRight: '5px solid var(--gold)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: 'var(--primary)', fontFamily: 'var(--font-gulzar)', textAlign: 'right' }}>
              شیخ الحدیث مولانا محمد زکریا کاندھلوی رحمۃ اللہ علیہ
            </h3>
            <p style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', fontSize: '1.1rem', lineHeight: '2.4', textAlign: 'right', wordSpacing: '0.08em' }}>
              (1898ء - 1982ء) بیسویں صدی کے جلیل القدر محدث، عظیم مصنف اور روحانی پیشوا تھے جنہوں نے مدرسہ مظاہر علوم میں تقریباً نصف صدی تک حدیث نبویﷺ کا درس دیا۔ آپ کی کتاب "فضائل اعمال" دنیا بھر میں تبلیغی جماعت کے نصاب کا حصہ ہے۔
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

