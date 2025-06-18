
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QrCode, ArrowLeft, Scan, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const QRScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);

  const handleStartScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setScanResult("MYK Laticrete Tile Adhesive - 50kg");
      setIsScanning(false);
    }, 3000);
  };

  const handleReset = () => {
    setScanResult(null);
    setIsScanning(false);
  };

  return (
    <div className="min-h-screen bg-loyalty-gradient text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">QR Scanner</h1>
        </div>
        <QrCode className="w-6 h-6 text-loyalty-accent" />
      </div>

      <div className="px-6">
        {/* Scanner Area */}
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-8 mb-6">
          <div className="text-center">
            {!scanResult ? (
              <>
                <div className="relative mx-auto mb-6 w-64 h-64 border-4 border-loyalty-accent rounded-2xl flex items-center justify-center">
                  {isScanning ? (
                    <div className="animate-pulse">
                      <Scan className="w-16 h-16 text-loyalty-accent" />
                      <p className="text-loyalty-accent mt-2">Scanning...</p>
                    </div>
                  ) : (
                    <div>
                      <QrCode className="w-16 h-16 text-loyalty-silver mx-auto mb-2" />
                      <p className="text-loyalty-silver">Position QR code here</p>
                    </div>
                  )}
                  
                  {/* Corner markers */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-l-4 border-t-4 border-loyalty-accent"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-r-4 border-t-4 border-loyalty-accent"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-l-4 border-b-4 border-loyalty-accent"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-r-4 border-b-4 border-loyalty-accent"></div>
                </div>

                <Button 
                  onClick={handleStartScan}
                  disabled={isScanning}
                  className="bg-loyalty-accent hover:bg-loyalty-accent/90 text-white px-8 py-3 text-lg"
                >
                  {isScanning ? 'Scanning...' : 'Start Scanning'}
                </Button>
              </>
            ) : (
              <div className="space-y-4">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Scan Successful!</h3>
                <Card className="bg-loyalty-navy/50 border-white/10 p-4">
                  <p className="text-loyalty-silver text-sm">Product Scanned:</p>
                  <p className="text-white font-semibold">{scanResult}</p>
                  <p className="text-green-400 text-sm mt-2">+100 points earned!</p>
                </Card>
                <Button 
                  onClick={handleReset}
                  className="bg-loyalty-royal hover:bg-loyalty-royal/90 text-white"
                >
                  Scan Another
                </Button>
              </div>
            )}
          </div>
        </Card>

        {/* Instructions */}
        <Card className="bg-card-gradient border-white/10 backdrop-blur-lg p-6">
          <h3 className="text-lg font-semibold mb-3 text-white">How to Scan</h3>
          <div className="space-y-3 text-loyalty-silver">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-loyalty-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-loyalty-accent text-sm font-bold">1</span>
              </div>
              <p>Position the QR code within the scanning frame</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-loyalty-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-loyalty-accent text-sm font-bold">2</span>
              </div>
              <p>Tap "Start Scanning" to begin the process</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-loyalty-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-loyalty-accent text-sm font-bold">3</span>
              </div>
              <p>Earn points instantly for each MYK Laticrete product scanned</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QRScanner;
