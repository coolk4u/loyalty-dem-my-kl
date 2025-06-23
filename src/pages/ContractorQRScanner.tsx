
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QrCode, ArrowLeft, Scan, CheckCircle, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ContractorQRScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleStartScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setScanResult("Rajesh Kumar - Mason ID: MK001");
      setIsScanning(false);
    }, 3000);
  };

  const handleAddMason = () => {
    toast({
      title: "Mason Added Successfully",
      description: "Rajesh Kumar has been added to your network",
    });
    setScanResult(null);
    setIsScanning(false);
  };

  const handleReset = () => {
    setScanResult(null);
    setIsScanning(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <div className="flex items-center space-x-3">
          <Link to="/contractor-dashboard">
            <Button variant="ghost" size="icon" className="text-gray-900 hover:bg-gray-200">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Add Mason via QR</h1>
        </div>
        <QrCode className="w-6 h-6 text-loyalty-accent" />
      </div>

      <div className="px-6">
        {/* Scanner Area */}
        <Card className="bg-white border-gray-200 backdrop-blur-lg p-8 mb-6 shadow-lg">
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
                      <QrCode className="w-16 h-16 text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-500">Scan mason's QR code</p>
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
                <h3 className="text-xl font-bold text-gray-900">Mason Found!</h3>
                <Card className="bg-blue-50 border-gray-200 p-4">
                  <p className="text-gray-600 text-sm">Mason Details:</p>
                  <p className="text-gray-900 font-semibold">{scanResult}</p>
                </Card>
                <div className="flex space-x-3 justify-center">
                  <Button 
                    onClick={handleAddMason}
                    className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Add to Network</span>
                  </Button>
                  <Button 
                    onClick={handleReset}
                    variant="outline"
                    className="border-gray-300 text-gray-900"
                  >
                    Scan Another
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Instructions */}
        <Card className="bg-white border-gray-200 backdrop-blur-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-900">How to Add Masons</h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-loyalty-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-loyalty-accent text-sm font-bold">1</span>
              </div>
              <p>Ask the mason to show their QR code</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-loyalty-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-loyalty-accent text-sm font-bold">2</span>
              </div>
              <p>Position their QR code within the scanning frame</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-loyalty-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-loyalty-accent text-sm font-bold">3</span>
              </div>
              <p>Add them to your network to track their points and activity</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContractorQRScanner;
