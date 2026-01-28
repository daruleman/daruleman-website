'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaFacebook, FaYoutube, FaUser, FaQuoteLeft, FaGraduationCap, FaBook, FaMicrophone, FaBuilding } from 'react-icons/fa';

export default function Hero() {
  const handleContactScroll = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = element.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };
  return (
    <>
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pb-24" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-4xl mx-auto text-center mt-12">
          {/* Small text on top */}
          <p className="text-md font-jameel" style={{ color: 'var(--gold-light)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.05em', lineHeight: '1.8', wordSpacing: '0.1em' }}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم
          </p>

          {/* Main Heading - Image */}
          <div className="mb-6 mt-2 flex justify-center">
            <Image 
              src="/name-no.png" 
              alt="دارالایمان والتقویٰ" 
              width={400}
              height={100}
              className="w-auto h-auto"
              priority
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-center">
            <Link href="/intro" className="border-2 font-semibold pt-2 pb-1 px-6 rounded-xl transition duration-300 cursor-pointer inline-block" style={{ borderColor: 'var(--gold)', color: '#ffffff', backgroundColor: '#3e2723' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#2a1810'} onMouseLeave={(e) => e.target.style.backgroundColor = '#3e2723'}>
              تعارف پڑھیں
            </Link>
            <button onClick={handleContactScroll} className="border-2 font-semibold pt-2 px-6 rounded-xl transition duration-300 cursor-pointer" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#3e2723'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
              رابطہ کریں
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4" style={{ backgroundColor: 'var(--primary-bg)' }}>
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-jameel" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.06em', lineHeight: '1.6', wordSpacing: '0.12em' }}>
            تحریک إيمان و تقوی کربوغہ شریف
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed text-justify mb-12 font-jameel" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.8', wordSpacing: '0.08em' }}>
            تحریک ایمان و تقویٰ ایمان کی آبیاری، تقویٰ، تواضع، خدمت خلق، خیر خواہی، ایثار و ہمدردی، دعوت و تبلیغ، جہاد فی سبیل اللہ، حسن خُلُق، اتحاد امت اور اعلائے کلمۃ اللہ جیسے عظیم مقاصد اور ایمانی اوصاف و ثمرات حاصل کرنے کی مسلسل اور دائمی جد وجہد کا نام ہے۔ اس عظیم کوشش کی ابتدا مختار الامۃ حضرت سید مفتی مختار الدین شاہ صاحب دامت برکاتہم العالیہ نے کربوغہ شریف کی سر زمین پر ہی فرمائی۔
          </p>

          {/* Objectives Heading */}
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center font-jameel" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.08em', lineHeight: '1.6', wordSpacing: '0.15em' }}>
            مقاصد
          </h3>

          <p className="text-base md:text-lg text-center mb-10 font-jameel" style={{ color: 'var(--warm-brown)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.7', wordSpacing: '0.1em' }}>
            اس ہدف کے حصول کے لیے یہ تحریک تین مقاصد پر کام کرتی ہے:
          </p>

          {/* Three Objectives */}
          <div className="space-y-8">
            {/* Objective 1 */}
            <div className="p-6 rounded-lg border-r-4" style={{ backgroundColor: 'var(--accent)', borderRightColor: 'var(--gold)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)' }}>
              <h4 className="text-xl font-bold mb-4 font-jameel" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.06em', lineHeight: '1.6', wordSpacing: '0.12em' }}>۱۔ تزکیہ نفس</h4>
              <p className="text-base leading-relaxed text-justify font-jameel" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.8', wordSpacing: '0.08em' }}>
                تقویٰ، طہارت، اللہ تعالی کے ساتھ شدید محبت، اس کی عظمت و معرفت اور خشیت کے اعلیٰ درجات اور زندگی کے ہر گوشے میں احسانی کیفیت حاصل کرنے کے لیے مسلسل محنت و کوشش کرنا، اور اپنے گردو پیش کو بھی اپنی اصلاح و تربیت اور ایمانی اوصاف و کمالات سے آراستہ ہونے کی جانب توجہ دلانا۔
              </p>
            </div>

            {/* Objective 2 */}
            <div className="p-6 rounded-lg border-r-4" style={{ backgroundColor: 'var(--accent)', borderRightColor: 'var(--gold)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)' }}>
              <h4 className="text-xl font-bold mb-4 font-jameel" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.06em', lineHeight: '1.6', wordSpacing: '0.12em' }}>۲۔ پورے دین پر پورا عمل</h4>
              <p className="text-base leading-relaxed text-justify font-jameel" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.8', wordSpacing: '0.08em' }}>
                عقائد و ایمانیات سے لے کر عبادات، معاملات، معاشرت، حسن اخلاق اور حقوق و آداب تک پورے کے پورے دین پر خود عمل کرنا۔ دنیا کے سامنے دین اپنی کامل اور صحیح شکل میں پیش کرنا اور دوسرے مسلمانوں کو بھی پورے دین پر عمل پیرا ہونے کی ترغیب دینا۔
              </p>
            </div>

            {/* Objective 3 */}
            <div className="p-6 rounded-lg border-r-4" style={{ backgroundColor: 'var(--accent)', borderRightColor: 'var(--gold)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)' }}>
              <h4 className="text-xl font-bold mb-4 font-jameel" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.06em', lineHeight: '1.6', wordSpacing: '0.12em' }}>۳۔ اتحاد امت</h4>
              <p className="text-base leading-relaxed text-justify font-jameel" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.8', wordSpacing: '0.08em' }}>
                امت کے بکھرے ہوئے شیرازے کو دوبارہ یکجا کرنے میں اپنی پوری قوت صرف کرنا، بنیادی عقائد اور فروعی اجتہادی مسائل میں سے ہر ایک کو اپنے اپنے مرتبہ پر رکھنا، اور مختلف دینی سرگرمیوں میں مشغول افراد کے درمیان پھیلی ہوئی نفسیات کو باہمی تعاون میں بدلنا۔
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Pursuits Section */}
      <section id="sections" className="py-16 px-4" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-jameel" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.06em', lineHeight: '1.6', wordSpacing: '0.12em' }}>
            علمی و عملی جہات
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 - تعارف بانی */}
            <Link href="/intro" className="p-6 rounded-xl h-40 flex flex-col justify-between relative overflow-hidden transition-transform hover:scale-105 cursor-pointer" style={{ backgroundColor: 'var(--accent)' }}>
              <div className="absolute top-4 left-4 text-4xl" style={{ color: '#3e2723' }}><FaUser /></div>
              <div className="mt-auto text-right">
                <h3 className="text-xl font-bold mb-1 font-jameel" style={{ color: 'var(--primary)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.05em', lineHeight: '1.6' }}>تعارف بانی</h3>
                <p className="text-xs font-jameel" style={{ color: 'var(--warm-brown)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.5' }}>حضرت مفتی سید مختار الدین شاہ صاحب کا تعارف</p>
              </div>
            </Link>

            {/* Card 2 - منہج و نظام */}
            <Link href="/curriculum" className="p-6 rounded-xl h-40 flex flex-col justify-between relative overflow-hidden transition-transform hover:scale-105 cursor-pointer" style={{ backgroundColor: 'var(--accent)' }}>
              <div className="absolute top-4 left-4 text-4xl" style={{ color: '#3e2723' }}><FaGraduationCap /></div>
              <div className="mt-auto text-right">
                <h3 className="text-xl font-bold mb-1 font-jameel" style={{ color: 'var(--primary)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.05em', lineHeight: '1.6' }}>منہج و نظام</h3>
                <p className="text-xs font-jameel" style={{ color: 'var(--warm-brown)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.5' }}>اصلاحی و تربیتی منہج</p>
              </div>
            </Link>

            {/* Card 3 - ملفوظات */}
            <Link href="/quotes" className="p-6 rounded-xl h-40 flex flex-col justify-between relative overflow-hidden transition-transform hover:scale-105 cursor-pointer" style={{ backgroundColor: 'var(--accent)' }}>
              <div className="absolute top-4 left-4 text-4xl" style={{ color: '#3e2723' }}><FaQuoteLeft /></div>
              <div className="mt-auto text-right">
                <h3 className="text-xl font-bold mb-1 font-jameel" style={{ color: 'var(--primary)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.05em', lineHeight: '1.6' }}>ملفوظات</h3>
                <p className="text-xs font-jameel" style={{ color: 'var(--warm-brown)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.5' }}>حضرت مفتی سید مختار الدین شاہ صاحب کا تعارف</p>
              </div>
            </Link>

            {/* Card 4 - کتب */}
            <Link href="/books" className="p-6 rounded-xl h-40 flex flex-col justify-between relative overflow-hidden transition-transform hover:scale-105 cursor-pointer" style={{ backgroundColor: 'var(--accent)' }}>
              <div className="absolute top-4 left-4 text-4xl" style={{ color: '#3e2723' }}><FaBook /></div>
              <div className="mt-auto text-right">
                <h3 className="text-xl font-bold mb-1 font-jameel" style={{ color: 'var(--primary)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.05em', lineHeight: '1.6' }}>کتب</h3>
                <p className="text-xs font-jameel" style={{ color: 'var(--warm-brown)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.5' }}>مفید علمی و اصلاحی کتابیں</p>
              </div>
            </Link>

            {/* Card 5 - ریکارڈنگز */}
            <Link href="/recordings" className="p-6 rounded-xl h-40 flex flex-col justify-between relative overflow-hidden transition-transform hover:scale-105 cursor-pointer" style={{ backgroundColor: 'var(--accent)' }}>
              <div className="absolute top-4 left-4 text-4xl" style={{ color: '#3e2723' }}><FaMicrophone /></div>
              <div className="mt-auto text-right">
                <h3 className="text-xl font-bold mb-1 font-jameel" style={{ color: 'var(--primary)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.05em', lineHeight: '1.6' }}>ریکارڈنگز</h3>
                <p className="text-xs font-jameel" style={{ color: 'var(--warm-brown)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.5' }}>بیانات، کلام اور تلاوت</p>
              </div>
            </Link>

            {/* Card 6 - مراکز و مجالس */}
            <Link href="/campuses" className="p-6 rounded-xl h-40 flex flex-col justify-between relative overflow-hidden transition-transform hover:scale-105 cursor-pointer" style={{ backgroundColor: 'var(--accent)' }}>
              <div className="absolute top-4 left-4 text-4xl" style={{ color: '#3e2723' }}><FaBuilding /></div>
              <div className="mt-auto text-right">
                <h3 className="text-xl font-bold mb-1 font-jameel" style={{ color: 'var(--primary)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.05em', lineHeight: '1.6' }}>مراکز و مجالس</h3>
                <p className="text-xs font-jameel" style={{ color: 'var(--warm-brown)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.5' }}>مختلف مقامات پر مجالس</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4" style={{ backgroundColor: 'var(--primary-bg)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-jameel" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.06em', lineHeight: '1.6', wordSpacing: '0.12em' }}>
            رابطہ
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Donations */}
            <div className="flex flex-col justify-center">
              {/* Donations Box */}
              <div className="p-8 rounded-3xl" style={{ backgroundColor: 'var(--accent)', border: '2px solid var(--secondary)', boxShadow: '0 12px 28px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.08)' }}>
                {/* Donations Heading */}
                <h3 className="text-2xl font-bold mb-6 text-right font-jameel" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.06em', lineHeight: '1.6' }}>عطیات</h3>

                {/* Account Title */}
                <div className="mb-6 text-end pb-6 border-b-2" style={{ borderColor: 'var(--secondary)' }}>
                  <p className="text-sm mb-2 text-start font-jameel" style={{ color: 'var(--warm-brown)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}>اکاؤنٹ ٹائٹل</p>
                  <p className="text-lg font-semibold" style={{ color: 'var(--primary)' }}>Muhammad Jafar</p>
                </div>

                {/* Bank Details */}
                <div className="mb-6 text-end pb-6 border-b-2" style={{ borderColor: 'var(--secondary)' }}>
                  <p className="text-sm mb-2 text-start font-jameel" style={{ color: 'var(--warm-brown)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}>بینک</p>
                  <p className="text-base font-semibold" style={{ color: 'var(--primary)' }}>Meezan Bank, Doaba Branch</p>
                </div>

                {/* IBAN */}
                <div className="mb-6 text-end pb-6 border-b-2" style={{ borderColor: 'var(--secondary)' }}>
                  <p className="text-sm mb-2 font-jameel" style={{ color: 'var(--warm-brown)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}>IBAN</p>
                  <p className="text-sm font-mono" style={{ color: 'var(--primary)' }}>PK31MEZN0026510107239161</p>
                </div>

                {/* Blessing Message */}
                <p className="font-jameel text-center" style={{ color: 'var(--primary)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.8', fontSize: '0.95rem' }}>
                  اللہ تعالیٰ آپ کو اس کا بہترین اجر عطا فرمائے
                </p>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="flex flex-col justify-center" dir="ltr">
              {/* Address */}
              <div className="mb-8 flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div className="text-left">
                  <h3 className="text-lg font-bold mb-2 font-jameel" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-gulzar)', letterSpacing: '0.05em', lineHeight: '1.6' }}>مرکز خانقاہ دارالایمان والتقویٰ</h3>
                  <p className="font-jameel" style={{ color: 'var(--warm-brown)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.7' }}>کربوغہ شریف، پاکستان</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="mb-8 flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <p className="mb-2 font-jameel" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.6' }}>+92-328-0899651</p>
                  <p className="font-jameel" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', lineHeight: '1.6' }}>+92-317-7930224</p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a href="https://api.whatsapp.com/send/?phone=923177930224&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-transform hover:scale-110" style={{ backgroundColor: 'var(--warm-brown)' }} title="WhatsApp">
                  <FaWhatsapp />
                </a>
                <a href="https://www.facebook.com/markazdaruleman" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-transform hover:scale-110" style={{ backgroundColor: 'var(--warm-brown)' }} title="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://www.youtube.com/@markazdarulemanofficial" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-transform hover:scale-110" style={{ backgroundColor: 'var(--primary)' }} title="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
