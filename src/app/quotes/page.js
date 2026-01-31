'use client';

import { useState } from 'react';

export default function QuotesPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('اردو');

  const quotations = [
    // Urdu Quotations (10)
    // {
    //   text: "روح کی خوراک تقویٰ ہے اور روح کی شفا ذکر اللہ میں ہے۔",
    //   author: "حضرت مفتی سید مختار الدین شاہ صاحب",
    //   language: "اردو"
    // },
    // {
    //   text: "نفس کی اصلاح کے بغیر دنیا اور آخرت کی کامیابی ممکن نہیں۔",
    //   author: "حضرت مفتی سید مختار الدین شاہ صاحب",
    //   language: "اردو"
    // },
    // {
    //   text: "علم بغیر عمل کے ایسا ہے جیسے ایک درخت جس میں پھل نہ ہوں۔",
    //   author: "حضرت مفتی سید مختار الدین شاہ صاحب",
    //   language: "اردو"
    // },
    // {
    //   text: "اخلاص کے ساتھ کیا گیا کام چھوٹا ہو تو بھی بڑا ہے۔",
    //   author: "حضرت مفتی سید مختار الدین شاہ صاحب",
    //   language: "اردو"
    // },
    // {
    //   text: "دل کی صفائی سب سے بڑی دولت ہے جو انسان حاصل کر سکتا ہے۔",
    //   author: "حضرت مفتی سید مختار الدین شاہ صاحب",
    //   language: "اردو"
    // },
    // {
    //   text: "تقویٰ کا مطلب یہ نہیں کہ دنیا سے بھاگ جاؤ بلکہ دنیا میں رہتے ہوئے اللہ سے جڑے رہو۔",
    //   author: "حضرت مفتی سید مختار الدین شاہ صاحب",
    //   language: "اردو"
    // },
    // {
    //   text: "صبر اور شکر میں وہ طاقت ہے جو پہاڑ کو بھی سر کر سکتی ہے۔",
    //   author: "حضرت مفتی سید مختار الدین شاہ صاحب",
    //   language: "اردو"
    // },
    // {
    //   text: "بندہ جب اپنے رب کو صحیح طریقے سے پناہ دیتا ہے تو کوئی طاقت اسے نقصان نہیں پہنچا سکتی۔",
    //   author: "حضرت مفتی سید مختار الدین شاہ صاحب",
    //   language: "اردو"
    // },
    // {
    //   text: "حقیقی زندگی وہ ہے جو اللہ کی محبت میں بسر ہو۔",
    //   author: "حضرت مفتی سید مختار الدین شاہ صاحب",
    //   language: "اردو"
    // },
    // {
    //   text: "نفس جب صاف ہو جائے تو حق دیکھنے کے لیے آنکھوں کی ضرورت نہیں۔",
    //   author: "حضرت مفتی سید مختار الدین شاہ صاحب",
    //   language: "اردو"
    // },
  ];

  const filteredQuotes = quotations.filter(q => q.language === selectedLanguage);

  const languages = ['اردو', 'English', 'العربية'];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <section className="pt-32 px-4 bg-gray-50" style={{ scrollMarginTop: '80px', paddingTop: '120px' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mt-4" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-gulzar)', letterSpacing: '0.008em', lineHeight: '1.6' }}>
            ملفوظات
          </h1>
          <p className="text-lg md:text-xl" style={{ color: '#000000', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.06em' }}>
            حضرت مفتی سید مختار الدین شاہ صاحب کی حکمت اور روحانی تعلیمات
          </p>
        </div>
      </section>

      {/* Language Selector */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-3 justify-center flex-wrap">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className="px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                style={{
                  backgroundColor: selectedLanguage === lang ? '#2c2416' : '#f5f5f5',
                  color: selectedLanguage === lang ? '#ffffff' : '#2c2416',
                  fontFamily: lang === 'English' ? 'inherit' : 'Jameel Noori Nastaleeq',
                  fontSize: lang === 'English' ? '1rem' : '1.1rem',
                  letterSpacing: lang === 'English' ? '0.01em' : '0.04em',
                  border: 'none',
                  boxShadow: selectedLanguage === lang ? '0 4px 12px rgba(0, 0, 0, 0.15)' : '0 2px 4px rgba(0, 0, 0, 0.08)'
                }}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quotations Grid */}
      <section className="py-20 px-4 flex-grow bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredQuotes.map((quote, index) => (
              <div
                key={index}
                className="p-8 rounded-lg"
                style={{
                  backgroundColor: 'var(--accent)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
                  borderRight: '4px solid var(--gold)',
                  transition: 'transform 0.3s ease'
                }}
              >
                {/* Quote Text */}
                <p
                  className="text-base md:text-lg leading-relaxed mb-6 font-bold"
                  style={{
                    color: 'var(--foreground)',
                    fontFamily: quote.language === 'English' ? 'inherit' : quote.language === 'العربية' ? 'var(--font-gulzar)' : 'Jameel Noori Nastaleeq',
                    letterSpacing: quote.language === 'English' ? '0.01em' : '0.04em',
                    lineHeight: '1.9',
                    wordSpacing: quote.language === 'English' ? '0.05em' : '0.08em',
                    textAlign: quote.language === 'العربية' ? 'right' : quote.language === 'اردو' ? 'right' : 'left'
                  }}
                >
                  "{quote.text}"
                </p>

                {/* Divider */}
                <div style={{ height: '1px', backgroundColor: 'var(--gold)', marginBottom: '1rem' }}></div>

                {/* Author */}
                <p
                  className="text-sm md:text-base font-semibold"
                  style={{
                    color: 'var(--warm-brown)',
                    fontFamily: quote.language === 'English' ? 'inherit' : quote.language === 'العربية' ? 'var(--font-gulzar)' : 'Jameel Noori Nastaleeq',
                    letterSpacing: quote.language === 'English' ? '0.01em' : '0.04em',
                    textAlign: quote.language === 'العربية' ? 'right' : quote.language === 'اردو' ? 'right' : 'left'
                  }}
                >
                  {quote.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
