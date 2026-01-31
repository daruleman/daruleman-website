'use client';

import Image from 'next/image';

export default function BooksPage() {

  const books = [
    {
      id: 1,
      title: 'ایمانی صفات',
      author: 'حضرت مفتی سید مختار الدین شاہ صاحب',
      price: '1800 روپے',
      whatsappNumber: '03219511901',
      description: 'یہ کتاب "ایمانی صفات" دو جلدوں پر مشتمل ایک تفصیلی علمی ذخیرہ ہے جو انسانی کردار، حسنِ اخلاق اور ایمانی ثمرات پر روشنی ڈالتی ہے۔ کتاب میں صداقت، امانت، عدل، تواضع اور رحم دلی جیسی صفات کی اہمیت کو قرآن و حدیث، واقعات اور دلائل کے ساتھ واضح کیا گیا ہے۔ اس میں نہ صرف ان صفات کے حصول کے طریقے بتائے گئے ہیں بلکہ ان کے متضاد (بری خصلتوں) سے نجات پانے کی تدابیر بھی تفصیل سے بیان کی گئی ہیں۔'
    },
    {
      id: 2,
      title: 'ایمانی صفات',
      author: 'حضرت مفتی سید مختار الدین شاہ صاحب',
      price: '1800 روپے',
      whatsappNumber: '03219511901',
      description: 'یہ کتاب "ایمانی صفات" دو جلدوں پر مشتمل ایک تفصیلی علمی ذخیرہ ہے جو انسانی کردار، حسنِ اخلاق اور ایمانی ثمرات پر روشنی ڈالتی ہے۔ کتاب میں صداقت، امانت، عدل، تواضع اور رحم دلی جیسی صفات کی اہمیت کو قرآن و حدیث، واقعات اور دلائل کے ساتھ واضح کیا گیا ہے۔ اس میں نہ صرف ان صفات کے حصول کے طریقے بتائے گئے ہیں بلکہ ان کے متضاد (بری خصلتوں) سے نجات پانے کی تدابیر بھی تفصیل سے بیان کی گئی ہیں۔'
    },
    {
      id: 3,
      title: 'ایمانی صفات',
      author: 'حضرت مفتی سید مختار الدین شاہ صاحب',
      price: '1800 روپے',
      whatsappNumber: '03219511901',
      description: 'یہ کتاب "ایمانی صفات" دو جلدوں پر مشتمل ایک تفصیلی علمی ذخیرہ ہے جو انسانی کردار، حسنِ اخلاق اور ایمانی ثمرات پر روشنی ڈالتی ہے۔ کتاب میں صداقت، امانت، عدل، تواضع اور رحم دلی جیسی صفات کی اہمیت کو قرآن و حدیث، واقعات اور دلائل کے ساتھ واضح کیا گیا ہے۔ اس میں نہ صرف ان صفات کے حصول کے طریقے بتائے گئے ہیں بلکہ ان کے متضاد (بری خصلتوں) سے نجات پانے کی تدابیر بھی تفصیل سے بیان کی گئی ہیں۔'
    },
    {
      id: 4,
      title: 'ایمانی صفات',
      author: 'حضرت مفتی سید مختار الدین شاہ صاحب',
      price: '1800 روپے',
      whatsappNumber: '03219511901',
      description: 'یہ کتاب "ایمانی صفات" دو جلدوں پر مشتمل ایک تفصیلی علمی ذخیرہ ہے جو انسانی کردار، حسنِ اخلاق اور ایمانی ثمرات پر روشنی ڈالتی ہے۔ کتاب میں صداقت، امانت، عدل، تواضع اور رحم دلی جیسی صفات کی اہمیت کو قرآن و حدیث، واقعات اور دلائل کے ساتھ واضح کیا گیا ہے۔ اس میں نہ صرف ان صفات کے حصول کے طریقے بتائے گئے ہیں بلکہ ان کے متضاد (بری خصلتوں) سے نجات پانے کی تدابیر بھی تفصیل سے بیان کی گئی ہیں۔'
    },
    {
      id: 5,
      title: 'ایمانی صفات',
      author: 'حضرت مفتی سید مختار الدین شاہ صاحب',
      price: '1800 روپے',
      whatsappNumber: '03219511901',
      description: 'یہ کتاب "ایمانی صفات" دو جلدوں پر مشتمل ایک تفصیلی علمی ذخیرہ ہے جو انسانی کردار، حسنِ اخلاق اور ایمانی ثمرات پر روشنی ڈالتی ہے۔ کتاب میں صداقت، امانت، عدل، تواضع اور رحم دلی جیسی صفات کی اہمیت کو قرآن و حدیث، واقعات اور دلائل کے ساتھ واضح کیا گیا ہے۔ اس میں نہ صرف ان صفات کے حصول کے طریقے بتائے گئے ہیں بلکہ ان کے متضاد (بری خصلتوں) سے نجات پانے کی تدابیر بھی تفصیل سے بیان کی گئی ہیں۔'
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
              <div className="relative w-full md:w-1/3 h-20 md:h-auto bg-gray-100 md:order-first flex-shrink-0">
                <Image
                  src="/books/image.png"
                  alt={book.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Content - Bottom on mobile, Right on desktop */}
              <div className="p-4 md:p-6 flex flex-col justify-center md:w-2/3 md:order-last">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-right font-jameel" style={{ color: 'var(--primary)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.05em', lineHeight: '1.6' }}>
                  {book.title}
                </h3>

                {/* Author */}
                <p className="text-xs md:text-sm mb-4 text-right font-jameel" style={{ color: 'var(--warm-brown)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}>
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
