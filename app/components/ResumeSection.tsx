'use client';

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ResumeSection() {
  const handleDownload = () => {
    window.open('https://drive.google.com/uc?export=download&id=1pLTfBdslDV6-Y1070MEihHxzLyr9mDcy', '_blank');
  };

  return (
    <div className="p-4 space-y-4 overflow-auto max-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Resume</h2>
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download size={16} />
          Download Resume
        </Button>
      </div>
      {/* Embed the Google Drive viewer */}
      <div className="bg-gray-100 shadow rounded-lg overflow-hidden" style={{ pointerEvents: 'none' }}>
        <div className="h-[500px] overflow-auto">
          <iframe
            src="https://drive.google.com/file/d/1pLTfBdslDV6-Y1070MEihHxzLyr9mDcy/preview"
            width="100%"
            height="500px" // Adjust this height to match the length of the resume
            className="rounded-lg"
            title="Resume"
            style={{ border: 'none', pointerEvents: 'inherit' }} // Updated style prop
          />
        </div>
      </div>
    </div>
  );
}

