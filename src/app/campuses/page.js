'use client';

export default function CampusesPage() {
  const centers = {
    "اسلام آباد": [
      {
        name: "جامع مسجد سردار بیگم بہارہ کہو",
        timing: "بروز جمعرات بعد نماز مغرب",
        frequency: "ہفتہ وار",
        phone: "03125379891",
        location: "بہارہ کہو، اسلام آباد"
      },
      {
        name: "جامعۃ العلوم الاسلامیہ سوہان",
        timing: "بروز اتوار بعد نماز عصر",
        frequency: "ہفتہ وار",
        phone: "+92 300 9352218",
        location: "سوہان، اسلام آباد"
      },
      {
        name: "H-14 St-208 Jinnah Garden",
        timing: "بروز بدھ (دوسرا، چوتھا) بعد نماز مغرب",
        frequency: "پندرہ روزہ",
        phone: "+92 302 4320525",
        location: "جناح گارڈن، اسلام آباد"
      },
      {
        name: "خانقاہ دارالایمان والتقوی (جامع مسجد المحمود)",
        timing: "عصر تا اشراق",
        frequency: "ہفتہ وار مجلس",
        day: "ہفتہ",
        location: "ممتاز سٹی، اسلام آباد"
      }
    ],
    "راولپنڈی": [
      {
        name: "جامع مسجد بسم اللہ ویسٹریج",
        timing: "بروز جمعہ بعد نمازِ جمعہ",
        frequency: "ہفتہ وار",
        phone: "+92 332 5284770",
        location: "ویسٹریج، راولپنڈی"
      }
    ],
    "ہنگو": [
      {
        name: "دارالایمان والتقوی کربوغہ شریف",
        timing: "عصر تا اشراق",
        frequency: "ماہانہ مجلس",
        day: "ہر ماہ کا پہلا ہفتہ",
        location: "کربوغہ شریف، ہنگو"
      }
    ]
  };

  return (
    <div className="bg-gray-50" style={{ direction: 'rtl' }}>
      {/* Header Section */}
      <section className="pt-32 px-4 text-center bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" 
              style={{ color: 'var(--foreground)', fontFamily: 'var(--font-gulzar)', lineHeight: '1.6' }}>
            مراکز و مجالس
          </h1>
          <p className="text-lg md:text-xl" 
             style={{ color: '#000000', fontFamily: 'Jameel Noori Nastaleeq' }}>
            تعلیمِ قرآن و سنت کے لیے شہر بہ شہر ہمارے علمی حلقات کا اہتمام کیا جاتا ہے۔
          </p>
        </div>
      </section>

      {/* Centers Content */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {Object.entries(centers).map(([cityName, cityCenters], cityIndex) => (
            <div key={cityIndex} className="mb-20">
              <h3 className="text-3xl font-bold mb-10 inline-block pb-2" 
                  style={{ color: '#3e2723', fontFamily: 'Jameel Noori Nastaleeq' }}>
                {cityName}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cityCenters.map((center, centerIndex) => (
                  <div
                    key={centerIndex}
                    className="p-8 rounded-lg transition-all hover:shadow-2xl"
                    style={{
                      backgroundColor: 'var(--accent)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                      borderRight: '5px solid var(--gold)',
                    }}
                  >
                    <h4 className="text-xl md:text-2xl font-bold mb-4" 
                        style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', lineHeight: '1.6' }}>
                      {center.name}
                    </h4>

                    <div style={{ height: '1px', backgroundColor: 'var(--gold)', marginBottom: '1.5rem', opacity: 0.3 }}></div>

                    <div className="space-y-4">
                      <DetailRow label="وقت" value={center.timing} />
                      <DetailRow label="تعداد" value={center.frequency} />
                      {center.day && <DetailRow label="دن" value={center.day} />}
                      {center.phone && (
                        <div>
                          <p style={{ color: 'var(--foreground)', fontSize: '1rem' }}>
                            <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontFamily: 'Jameel Noori Nastaleeq' }}>فون: </span>
                            <span style={{ fontFamily: 'monospace', direction: 'ltr', display: 'inline-block' }}>{center.phone}</span>
                          </p>
                        </div>
                      )}
                      {center.location && <DetailRow label="مقام" value={center.location} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <p style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', fontSize: '1.1rem', lineHeight: '1.6' }}>
      <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{label}: </span>
      {value}
    </p>
  );
}