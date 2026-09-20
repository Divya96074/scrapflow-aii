import React, { useState } from 'react';

// ScrapFlow AI - Core Application Flow
export default function ScrapFlowApp() {
  const [claimedCount, setClaimedCount] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const handleSimulatedScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        material: "High-Density Polyethylene (HDPE Plastic)",
        purity: "94.2%",
        contamination: "Low (< 5%)",
        value: "$0.45 / kg",
        action: "Direct route to Polymer Recovery Facility"
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navigation Header */}
      <header className="border-b border-slate-800 p-4 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-emerald-400">🌿 ScrapFlow AI</h1>
        <div className="bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full text-sm border border-emerald-800">
          🌱 1,240 Tons CO2 Saved
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto p-6 space-y-12">
        <section className="text-center py-10 space-y-4">
          <h2 className="text-4xl font-extrabold">Turn waste into <span className="text-emerald-400">measurable value</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            ScrapFlow AI triages industrial waste with computer vision — identifying materials, scoring contamination, and connecting lots to recyclers in minutes.
          </p>
        </section>

        {/* AI Scanner Section */}
        <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
          <h3 className="text-xl font-semibold text-emerald-400">🤖 AI Waste Scanner</h3>
          <div 
            onClick={handleSimulatedScan}
            className="border-2 border-dashed border-slate-700 hover:border-emerald-500 rounded-lg p-8 text-center cursor-pointer transition-colors"
          >
            {isScanning ? (
              <p className="text-emerald-400 animate-pulse">Analyzing density, composition, and purity...</p>
            ) : (
              <p className="text-slate-300">Click or Drop a photo here to trigger AI inspection demo</p>
            )}
          </div>

          {scanResult && (
            <div className="bg-slate-950 p-4 rounded-lg border border-emerald-900/50 mt-4 space-y-2">
              <h4 className="font-bold text-emerald-400">Inspection Analysis:</h4>
              <p>• <strong>Material:</strong> {scanResult.material}</p>
              <p>• <strong>Purity Score:</strong> {scanResult.purity}</p>
              <p>• <strong>Contamination Risk:</strong> {scanResult.contamination}</p>
              <p>• <strong>Estimated Value:</strong> {scanResult.value}</p>
            </div>
          )}
        </section>

        {/* Marketplace Section */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-emerald-400">🛒 Scrap Marketplace</h3>
            <span className="text-sm text-slate-400">Claimed: {claimedCount} lots</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {['500kg E-Waste', '2.5 Tons HDPE Plastics', '1.2 Tons Scrap Metal'].map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3">
                <h4 className="font-bold">{item}</h4>
                <p className="text-sm text-slate-400">Verified industrial batch ready for recovery pickup.</p>
                <button 
                  onClick={() => setClaimedCount(prev => prev + 1)}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-2 rounded-lg transition-colors"
                >
                  Claim Lot
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
