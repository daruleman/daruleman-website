'use client';

import Link from 'next/link';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#FFFFFF' }}>
        <div className="text-center font-jameel py-4" style={{ color: '#000000', fontFamily: 'Mehr', letterSpacing: '0.03em', fontSize: '0.95rem' }}>
          <p>© {currentYear} تحریک ایمان و تقویٰ کربوغہ شریف</p>
          <p className="mt-2" style={{ fontSize: '0.85rem' }}>تمام حقوق محفوظ ہیں</p>
        </div>
    </footer>
  );
}
