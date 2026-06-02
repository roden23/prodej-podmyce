import { QRCodeSVG } from 'qrcode.react';
import { Phone, Mail, Globe, Download, ArrowLeft, Printer } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default function BannerPage() {
  const websiteUrl = window.location.origin;
  const containerRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);

  useLayoutEffect(() => {
    function updateScale() {
      if (containerRef.current) {
        const parent = containerRef.current.parentElement;
        if (parent) {
          const padding = 64; // p-8 * 2
          const availableWidth = parent.clientWidth - padding;
          const availableHeight = parent.clientHeight - padding;
          
          const scaleW = availableWidth / 1500;
          const scaleH = availableHeight / 1000;
          
          setScale(Math.min(scaleW, scaleH, 1));
        }
      }
    }

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const downloadPDF = async () => {
    if (!bannerRef.current) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(bannerRef.current, {
        scale: 2, // Higher resolution
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [1500, 1000]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, 1500, 1000);
      pdf.save('reklamni-banner-podmyce.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8 print:p-0 overflow-hidden">
      {/* Controls */}
      <div className="fixed top-8 right-8 flex flex-col gap-4 z-50 print:hidden" style={{ transform: `scale(${1/scale})`, transformOrigin: 'top right' } as any}>
        <a 
          href="/"
          className="bg-white text-zinc-900 px-6 py-3 rounded-full font-bold shadow-xl hover:bg-zinc-100 transition-colors flex items-center gap-3"
        >
          <ArrowLeft size={20} /> ZPĚT / BACK
        </a>
        <button 
          onClick={downloadPDF}
          disabled={isGenerating}
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-xl hover:bg-blue-700 transition-colors flex items-center gap-3 disabled:opacity-50"
        >
          <Download size={20} /> {isGenerating ? 'GENEROVÁNÍ...' : 'STÁHNOUT PDF'}
        </button>
        <button 
          onClick={() => window.print()}
          className="bg-zinc-900 text-white px-6 py-3 rounded-full font-bold shadow-xl hover:bg-zinc-800 transition-colors flex items-center gap-3"
        >
          <Printer size={20} /> TISK / PRINT
        </button>
      </div>

      <div ref={containerRef} className="relative shadow-2xl transition-transform duration-300" style={{ transform: `scale(${scale})` }}>
        {/* 
          Ratio 150:100 = 3:2
          We'll use a fixed large container to represent the banner
        */}
        <div 
          ref={bannerRef}
          id="banner-content"
          className="relative bg-white text-zinc-900 overflow-hidden border-[15px] border-zinc-900"
          style={{ 
            width: '1500px', 
            height: '1000px',
            display: 'flex',
            flexDirection: 'column',
            padding: '80px'
          }}
        >
          {/* Decorative corner accent */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600 translate-x-32 translate-y-32 rotate-45" />

          {/* Header Section */}
          <div className="relative z-10 flex justify-between items-start mb-16">
            <div className="bg-red-600 text-white p-10 -ml-[80px] -mt-[80px] pr-24 pb-12 shadow-xl">
              <h1 className="text-[120px] font-black leading-none tracking-tighter uppercase italic">
                NA PRODEJ
              </h1>
              <h2 className="text-[60px] font-bold tracking-[0.1em] opacity-90 -mt-1">
                ZU VERKAUFEN
              </h2>
            </div>
            
            <div className="flex flex-col items-center gap-3 -mt-4 mr-2">
               <div className="bg-white p-6 border-4 border-zinc-900 shadow-xl">
                 <QRCodeSVG 
                    value={websiteUrl} 
                    size={280} 
                    level="H"
                 />
               </div>
               <p className="text-zinc-900 text-center font-black text-xl tracking-[0.3em] uppercase">Info & Galerie</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="relative z-10 flex flex-col gap-10 mt-2">
            
            {/* Phone */}
            <div className="flex flex-col gap-3">
              <div className="bg-zinc-900 text-white px-6 py-2 text-2xl font-black uppercase tracking-[0.4em] w-fit">
                Telefon
              </div>
              <p className="text-[115px] font-black tracking-tighter text-zinc-900 leading-none whitespace-nowrap">
                +420 602 740 346
              </p>
            </div>

            <div className="grid grid-cols-2 gap-16 mt-6">
              {/* Email */}
              <div className="flex flex-col gap-3">
                <div className="bg-zinc-900 text-white px-5 py-2 text-xl font-black uppercase tracking-widest w-fit">
                  E-mail
                </div>
                <p className="text-[55px] font-bold tracking-tighter text-zinc-900">
                  martin@rode.cz
                </p>
              </div>

              {/* Web */}
              <div className="flex flex-col gap-3 border-l-4 border-red-600 pl-10">
                <div className="bg-red-600 text-white px-5 py-2 text-xl font-black uppercase tracking-widest w-fit">
                  Web / Website
                </div>
                <p className="text-[38px] font-black tracking-tight text-zinc-900 whitespace-nowrap leading-tight">
                  {websiteUrl.replace('https://', '').replace('http://', '')}
                </p>
              </div>
            </div>
          </div>

          <div className="fixed top-8 left-8 bg-zinc-800 text-white/60 px-4 py-2 rounded text-xs font-mono print:hidden border border-white/10 z-50"
               style={{ transform: `scale(${1/scale})`, transformOrigin: 'top left' } as any}>
            150 x 100 cm
          </div>
        </div>
      </div>
    </div>
  );
}

