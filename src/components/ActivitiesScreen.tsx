import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import * as pdfjs from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry'; // Для Webpack/Vite

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import pdfFile from '../assets/active.pdf';

interface ActivitiesScreenProps {
  onBack: () => void;
}

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ActivitiesScreen: React.FC<ActivitiesScreenProps> = ({ onBack }) => {
  return (
    <div>
      <div className='btn-exit'>
        <button onClick={onBack} className="nav-btn-exit">
          ←
        </button>
        <h2>Получить баллы</h2>
      </div>

      <div className="pdf-container">
        <Viewer fileUrl={pdfFile} />
      </div>
    </div>
  );
};

export default ActivitiesScreen;