'use client';

export default function CampusesPage() {
  const centers = {
    "اسلام آباد": [
      {
        name: "G-10 (Halqa-01)",
        nameEn: "Markaz Islamabad",
        emir: "مولانا احمد",
        phone: "0300-1234567",
        timing: "روزانہ: بعد نماز عصر",
        location: "G-10 مرکزی مسجد"
      },
      {
        name: "F-8 (Halqa-02)",
        nameEn: "Markaz Islamabad",
        emir: "مولانا زبیر",
        phone: "0301-2345678",
        timing: "جمعرات: بعد نماز عشاء",
        location: "F-8 جامع مسجد"
      }
    ],
    "لاہور": [
      {
        name: "Model Town (Halqa-03)",
        nameEn: "Markaz Lahore",
        emir: "مولانا قاسم",
        phone: "0302-3456789",
        timing: "اتوار: 10am - 1pm",
        location: "Model Town B مسجد"
      },
      {
        name: "Iqbal Town (Halqa-04)",
        nameEn: "Markaz Lahore",
        emir: "مولانا سلیم",
        phone: "0303-4567890",
        timing: "جمعہ: بعد نماز مغرب",
        location: "Iqbal Town مرکزی مسجد"
      }
    ]
  };

  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      {/* Header Section */}
      <section className="pt-36G-10 (Halqa-01) pb-8 mb-6 px-4" style={{ backgroundColor: 'var(--background)', scrollMarginTop: '80px', paddingTop: '120px' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 mt-4" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-gulzar)', letterSpacing: '0.008em', lineHeight: '1.6' }}>
            مراکز و مجالس
          </h1>
          <p className="text-lg md:text-xl" style={{ color: 'var(--primary)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.06em' }}>
            ہمارے حلقات مختلف شہروں میں قرآن و سنت کے علم کے فروغ کے لیے منعقد کیے جاتے ہیں۔
          </p>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-1" style={{ backgroundColor: 'var(--gold)' }}></div>

      {/* Centers Content */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--primary-bg)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Pakistan Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-gulzar)', letterSpacing: '0.008em' }}>
              پاکستان
            </h2>

            {/* Cities */}
            {Object.entries(centers).map((city, cityIndex) => (
              <div key={cityIndex} className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#3e2723', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}>
                  {city[0]}
                </h3>

                {/* Halqas Grid */}
                <div className="flex flex-wrap gap-8">
                  {city[1].map((halqa, halqaIndex) => (
                    <div
                      key={halqaIndex}
                      className="p-8 rounded-lg flex-1"
                      style={{
                        backgroundColor: 'var(--accent)',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
                        borderRight: '4px solid var(--gold)',
                        minWidth: '280px'
                      }}
                    >
                      {/* Halqa Name */}
                      <h4 className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}>
                        {halqa.name}
                      </h4>
                      <p className="text-sm mb-6" style={{ color: 'var(--warm-brown)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}>
                        {halqa.nameEn}
                      </p>

                      {/* Divider */}
                      <div style={{ height: '1px', backgroundColor: 'var(--gold)', marginBottom: '1.5rem' }}></div>

                      {/* Details */}
                      <div className="space-y-3">
                        {/* Emir */}
                        <div>
                          <p className="font-semibold" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', fontSize: '1rem' }}>
                            <span style={{ color: 'var(--primary)' }}>امیر:</span> {halqa.emir}
                          </p>
                        </div>

                        {/* Phone */}
                        <div>
                          <p className="font-semibold" style={{ color: 'var(--foreground)', letterSpacing: '0.01em', fontSize: '1rem' }}>
                            <span style={{ color: 'var(--primary)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}>فون:</span> {halqa.phone}
                          </p>
                        </div>

                        {/* Timing */}
                        <div>
                          <p className="font-semibold" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', fontSize: '1rem' }}>
                            <span style={{ color: 'var(--primary)' }}>وقت:</span> {halqa.timing}
                          </p>
                        </div>

                        {/* Location */}
                        <div>
                          <p className="font-semibold" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', fontSize: '1rem' }}>
                            <span style={{ color: 'var(--primary)' }}>مقام:</span> {halqa.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
