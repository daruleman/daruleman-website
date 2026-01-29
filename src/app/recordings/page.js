'use client';

import { useState } from 'react';
import { ChevronDown, Search, Play } from 'lucide-react';

export default function RecordingsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('URDU');
  const [sortOrder, setSortOrder] = useState('newest');
  const [searchTerm, setSearchTerm] = useState('');
  const [playingIndex, setPlayingIndex] = useState(null);

  // Add your recordings here in the public folder
  const allRecordings = [
    {
      title: 'اصلاحی مجالس - حصہ اول',
      speaker: 'مفتی سید مختار الدین شاہ صاحب',
      date: 'Sep 28, 2025',
      duration: '30:15',
      language: 'URDU',
      file: '/recordings/audio.mp3'
    },
    {
      title: 'اصلاحی مجالس - حصہ دوم',
      speaker: 'مولانا عبدالسلام',
      date: 'Sep 20, 2025',
      duration: '34:25',
      language: 'URDU',
      file: '/recordings/audio.mp3'
    },
    {
      title: 'اصلاحی مجالس - حصہ سوم',
      speaker: 'مولانا سراج الدین',
      date: 'Sep 12, 2025',
      duration: '35:00',
      language: 'URDU',
      file: '/recordings/audio.mp3'
    },
    {
      title: 'اصلاحی مجالس - حصہ چہارم',
      speaker: 'مولائے عبدالقیمی',
      date: 'Sep 4, 2025',
      duration: '36:40',
      language: 'URDU',
      file: '/recordings/audio.mp3'
    },
    {
      title: 'اصلاحی مجالس - حصہ پنجم',
      speaker: 'مفتی عبدالکریم',
      date: 'Aug 27, 2025',
      duration: '33:25',
      language: 'URDU',
      file: '/recordings/audio.mp3'
    },
    {
      title: 'اصلاحی مجالس - حصہ ششم',
      speaker: 'مفتی سید مختار الدین شاہ صاحب',
      date: 'Aug 15, 2025',
      duration: '31:45',
      language: 'URDU',
      file: '/recordings/audio.mp3'
    }
  ];

  const languages = ['PUNJABI', 'SINDHI', 'TURKISH', 'FARSI', 'ARABIC', 'PASHTO', 'ENGLISH', 'URDU'];

  const filteredRecordings = allRecordings
    .filter(rec => rec.language === selectedLanguage)
    .filter(rec => 
      rec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.speaker.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'newest') {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });

  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      {/* Header Section */}
      <section className="pt-40 pb-8 px-4" style={{ backgroundColor: 'var(--background)', scrollMarginTop: '80px', paddingTop: '120px' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-gulzar)', letterSpacing: '0.008em', lineHeight: '1.6' }}>
            حمد و نعت و کلام
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--primary-bg)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Language Filter */}
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className="px-4 py-2 rounded-full font-semibold transition-all duration-300"
                style={{
                  backgroundColor: selectedLanguage === lang ? '#3e2723' : '#f5f5f5',
                  color: selectedLanguage === lang ? '#ffffff' : '#3e2723',
                  border: `1px solid ${selectedLanguage === lang ? '#3e2723' : '#e0e0e0'}`,
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em'
                }}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Controls Bar */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Sort Dropdown */}
            <div className="relative w-full md:w-auto">
              <button
                onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
                className="px-4 py-2 rounded-lg flex items-center gap-2"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e0e0e0',
                  color: '#333'
                }}
              >
                <span style={{ fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.02em' }}>
                  {sortOrder === 'newest' ? 'نیا پہلے' : 'پرانا پہلے'}
                </span>
                <ChevronDown size={18} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-64 relative">
              <input
                type="text"
                placeholder="تلاش کریں (عنوان یا مقرر)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pr-10 rounded-lg border"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e0e0e0',
                  color: '#333',
                  fontFamily: 'Jameel Noori Nastaleeq',
                  letterSpacing: '0.02em',
                  textAlign: 'right'
                }}
              />
              <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full" style={{ backgroundColor: '#ffffff' }}>
              {/* Table Header */}
              <thead>
                <tr style={{ backgroundColor: '#3e2723' }}>
                  <th className="px-4 py-4 text-right" style={{ color: '#ffffff', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', fontWeight: '600' }}>
                    نمبر
                  </th>
                  <th className="px-4 py-4 text-right" style={{ color: '#ffffff', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', fontWeight: '600' }}>
                    عنوان
                  </th>
                  <th className="px-4 py-4 text-right" style={{ color: '#ffffff', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', fontWeight: '600' }}>
                    مقرر
                  </th>
                  <th className="px-4 py-4 text-right" style={{ color: '#ffffff', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', fontWeight: '600' }}>
                    تاریخ
                  </th>
                  <th className="px-4 py-4 text-center" style={{ color: '#ffffff', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em', fontWeight: '600' }}>
                    سنیں
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {filteredRecordings.map((recording, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9',
                      borderBottom: '1px solid #e0e0e0'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#f9f9f9'}
                  >
                    {/* Number */}
                    <td className="px-4 py-4 text-right" style={{ color: '#333', fontWeight: '500' }}>
                      {index + 1}
                    </td>

                    {/* Title */}
                    <td className="px-4 py-4 text-right" style={{ color: '#333', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.03em' }}>
                      {recording.title}
                    </td>

                    {/* Speaker */}
                    <td className="px-4 py-4 text-right" style={{ color: '#666', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.03em', fontSize: '0.95rem' }}>
                      {recording.speaker}
                    </td>

                    {/* Date */}
                    <td className="px-4 py-4 text-right" style={{ color: '#666', fontSize: '0.9rem' }}>
                      {recording.date}
                    </td>

                    {/* Play Button */}
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => setPlayingIndex(index)}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110"
                        style={{
                          backgroundColor: 'var(--gold)',
                          color: '#ffffff'
                        }}
                        title="Play recording"
                      >
                        <Play size={18} fill="currentColor" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredRecordings.length === 0 && (
            <div className="text-center py-16">
              <p style={{ color: 'var(--primary)', fontFamily: 'Jameel Noori Nastaleeq', fontSize: '1.2rem', letterSpacing: '0.04em' }}>
                اس زبان میں کوئی ریکارڈنگ دستیاب نہیں ہے۔
              </p>
            </div>
          )}

          {/* Audio Player - Fixed Bottom */}
          {playingIndex !== null && (
            <div
              className="fixed bottom-4 left-4 right-4 z-50 rounded-lg py-3 px-4 md:left-1/2 md:right-auto md:max-w-2xl md:transform md:-translate-x-1/2"
              style={{
                backgroundColor: 'var(--accent)',
                border: `2px solid var(--gold)`,
                boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.15)'
              }}
            >
              <div className="flex items-center justify-center gap-3">
                {/* Close Button */}
                <button
                  onClick={() => setPlayingIndex(null)}
                  className="shrink-0 text-2xl font-bold transition-all duration-200 hover:scale-110"
                  style={{ color: 'var(--foreground)' }}
                >
                  ×
                </button>

                {/* Track Info */}
                <div className="flex-1 text-center min-w-0">
                  <h4 className="font-bold truncate text-sm" style={{ color: 'var(--foreground)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.04em' }}>
                    {filteredRecordings[playingIndex].title}
                  </h4>
                  <p className="text-xs truncate" style={{ color: 'var(--primary)', fontFamily: 'Jameel Noori Nastaleeq', letterSpacing: '0.03em' }}>
                    {filteredRecordings[playingIndex].speaker}
                  </p>
                </div>

                {/* Audio Controls */}
                <audio
                  controls
                  autoPlay
                  style={{ height: '34px', minWidth: '280px' }}
                >
                  <source src={filteredRecordings[playingIndex].file} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
