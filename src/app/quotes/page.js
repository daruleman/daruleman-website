'use client';

export default function QuotesPage() {
  return (
    <div className="min-h-screen py-20 px-4" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-gulzar)' }}>
          ملفوظات
        </h1>
        <p className="text-lg text-center" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq' }}>
          حضرت مفتی سید مختار الدین شاہ صاحب کے ملفوظات
        </p>
      </div>
    </div>
  );
}
