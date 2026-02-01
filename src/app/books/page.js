'use client';

import Image from 'next/image';

export default function BooksPage() {

  const books = [
    {
      id: 1,
      title: 'اسرار العروج',
      author: 'حضرت مولانا مفتی سید مختار الدین شاہ صاحب',
      price: '850 روپے (ڈلیوری سمیت)',
      whatsappNumber: '923219511901',
      description: 'یہ کتاب پانچ تفصیلی ابواب پر مشتمل ہے جس میں راہِ فلاح، دعوت و تبلیغ، جہاد و قتال اور اسلامی نظامِ حکومت جیسے اہم موضوعات کا احاطہ کیا گیا ہے۔ یہ کتاب خاص طور پر رہنماؤں اور پیشواؤں کے لیے نہایت ضروری ہے تاکہ وہ عروج و ترقی کے فطری اور شرعی راستوں کو سمجھ سکیں۔'
    },
    {
      id: 2,
      title: 'حقوق و آداب',
      author: 'حضرت مولانا مفتی سید مختار الدین شاہ صاحب',
      price: '550 روپے (ڈلیوری سمیت)',
      whatsappNumber: '923219511901',
      description: 'انسانی اور روحانی زندگی میں دوسروں کے حقوق کی اہمیت پر مبنی یہ کتاب معاشرے کے مختلف طبقات جیسے والدین، اولاد، یتیم اور مسکین کے حقوق کو آسان اور دلچسپ انداز میں بیان کرتی ہے۔ یہ شرعی اور اخلاقی ذمہ داریوں کو سمجھنے کے لیے ایک بہترین راہنما ہے۔'
    },
    {
      id: 3,
      title: 'ذکر اللہ کے فضائل و مسائل',
      author: 'حضرت مولانا مفتی سید مختار الدین شاہ صاحب',
      price: '850 روپے (ڈلیوری سمیت)',
      whatsappNumber: '923219511901',
      description: 'یہ کتاب دو بنیادی حصوں پر تقسیم ہے۔ پہلا باب ذکر کے فضائل پر ہے جو انسان میں ذکر کا شوق پیدا کرتا ہے، جبکہ دوسرا باب ذکر کی اقسام، احکام اور اس سے متعلقہ فقہی مسائل و شکوک کا علمی و تحقیقی جواب فراہم کرتا ہے۔'
    },
    {
      id: 4,
      title: 'دہریت سے اسلام تک',
      author: 'حضرت مولانا مفتی سید مختار الدین شاہ صاحب',
      price: '550 روپے (ڈلیوری سمیت)',
      whatsappNumber: '923219511901',
      description: 'یہ کتاب وجودِ باری تعالیٰ، توحید، آخرت اور نبوت جیسے بنیادی عقائد کو عقل و نقل اور منطقی و فلسفیانہ دلائل سے ثابت کرتی ہے۔ اس میں غیر مسلم اقوام کی شہادتوں کے ذریعے اسلام کی حقانیت اور ضرورت کو اس طرح پیش کیا گیا ہے کہ اسے اپنانے میں کوئی عذر باقی نہیں رہتا۔'
    },
    {
      id: 5,
      title: 'ایمانی صفات (دو جلدیں)',
      author: 'حضرت مولانا مفتی سید مختار الدین شاہ صاحب',
      price: '1800 روپے (ڈلیوری سمیت)',
      whatsappNumber: '923219511901',
      description: 'یہ ضخیم کتاب دو جلدوں پر مشتمل ہے جو حسنِ اخلاق، امانت، عدل اور تواضع جیسی ایمانی صفات کے ثمرات پر روشنی ڈالتی ہے۔ اس میں ہر صفت کی وضاحت قرآنی آیات، احادیث اور واقعات سے کی گئی ہے اور بری خصلتوں سے بچنے کے طریقے بھی تفصیل سے بیان ہوئے ہیں۔'
    },
    {
      id: 6,
      title: 'اسلامی عقائد و نظریات',
      author: 'حضرت مولانا مفتی سید مختار الدین شاہ صاحب',
      price: '250 روپے (ڈلیوری سمیت)',
      whatsappNumber: '923219511901',
      description: 'یہ ایک مختصر اور آسان کتاب ہے جو "کتاب العقائد" کا اختصار ہے۔ اس میں بنیادی ایمانیات، ضروری عقائد اور اختلافی مسائل کی وضاحت نہایت دلنشین انداز میں کی گئی ہے۔ یہ عوام و خواص، بچوں اور بڑوں کی یکساں تعلیم کے لیے نہایت مفید ہے۔'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 mt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-gulzar)', letterSpacing: '0.05em' }}>
            کتب
          </h1>
          <p className="text-lg text-center font-jameel" style={{ color: '#000000', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}>
            مفید علمی و اصلاحی کتابیں
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {books.map((book) => (
            <div key={book.id} className="rounded-lg border border-gray-200 overflow-hidden flex flex-col md:flex-row h-fit" style={{ backgroundColor: 'var(--accent)' }}>
              {/* Book Image - Top on mobile, Left on desktop */}
              <div className="relative w-full md:w-1/3 h-48 md:h-auto bg-gray-100 md:order-first flex-shrink-0">
                <Image
                  src="/books/image.png"
                  alt={book.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Content - Bottom on mobile, Right on desktop */}
              <div className="p-4 md:p-6 flex flex-col justify-center w-full md:w-2/3 md:order-last">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-right font-jameel" style={{ color: 'var(--primary)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.05em', lineHeight: '1.6' }}>
                  {book.title}
                </h3>

                {/* Author */}
                <p className="text-xs md:text-sm mb-4 text-right font-jameel" style={{ color: '#000000', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}>
                  مصنف: {book.author}
                </p>

                {/* Price */}
                <div className="mb-3 md:mb-4 text-right">
                  <p className="font-semibold font-jameel text-lg md:text-xl" style={{ color: 'var(--gold)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}>
                    {book.price}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-justify mb-6 font-jameel leading-relaxed line-clamp-4" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.03em', lineHeight: '1.8' }}>
                  {book.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 flex-col sm:flex-row">
                  {/* Buy Button */}
                  <a
                    href={`https://api.whatsapp.com/send/?phone=${book.whatsappNumber}&text=السلام عليكم، مجھے "${book.title}" کتاب خریدنی ہے&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 md:py-3 rounded-lg font-semibold text-center text-xs md:text-sm transition-transform hover:scale-105 text-white font-jameel"
                    style={{ backgroundColor: 'var(--warm-brown)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}
                  >
                    خریدیں
                  </a>

                  {/* Read PDF Button */}
                  <button
                    className="flex-1 py-2 md:py-3 rounded-lg font-semibold text-center text-xs md:text-sm transition-transform hover:scale-105 font-jameel border-2"
                    style={{ borderColor: 'var(--gold)', color: 'var(--primary)', backgroundColor: 'transparent', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}
                  >
                    پی ڈی ایف پڑھیں
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
