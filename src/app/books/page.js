'use client';

export default function BooksPage() {
  return (
    <div className="min-h-screen py-20 px-4" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 mt-20 text-center" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-gulzar)' }}>
          کتب
        </h1>
        <p className="text-lg text-center" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq' }}>
          مفید علمی و اصلاحی کتابیں
        </p>
      </div>
    </div>
  );
}
