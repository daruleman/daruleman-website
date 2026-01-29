'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).href;

export default function PDFViewer({ isOpen, onClose, pdfUrl, bookTitle }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r p-4 flex items-center justify-between border-b" style={{ backgroundColor: 'var(--primary)' }}>
          <h2 className="text-white text-xl font-bold text-right flex-1" style={{ fontFamily: 'Jameel Noori Nastaleeq' }}>
            {bookTitle}
          </h2>
          <button
            onClick={onClose}
            className="ml-4 text-white hover:text-red-200 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Controls */}
        <div className="bg-gray-100 p-3 flex items-center justify-between gap-4 flex-wrap border-b">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
              disabled={pageNumber <= 1}
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
            >
              پچھلا
            </button>

            <span className="text-sm font-semibold">
              صفحہ {pageNumber} / {numPages || '-'}
            </span>

            <button
              onClick={() => setPageNumber(Math.min(numPages || 1, pageNumber + 1))}
              disabled={pageNumber >= (numPages || 1)}
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
            >
              اگلا
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setScale(Math.max(0.5, scale - 0.2))}
              className="px-3 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              -
            </button>

            <span className="text-sm font-semibold w-12 text-center">
              {Math.round(scale * 100)}%
            </span>

            <button
              onClick={() => setScale(Math.min(3, scale + 0.2))}
              className="px-3 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              +
            </button>
          </div>
        </div>

        {/* PDF Display */}
        <div className="flex-1 overflow-auto bg-gray-50 flex justify-center p-4">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div className="text-center py-20 text-gray-600">پی ڈی ایف لوڈ ہو رہی ہے...</div>}
            error={<div className="text-center py-20 text-red-600">پی ڈی ایف لوڈ کرنے میں خرابی</div>}
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
            />
          </Document>
        </div>
      </div>
    </div>
  );
}
