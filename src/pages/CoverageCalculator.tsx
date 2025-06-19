
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Calculator, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoverageCalculator = () => {
  const [area, setArea] = useState('');
  const [tileSize, setTileSize] = useState('');
  const [result, setResult] = useState<any>(null);

  const calculateCoverage = () => {
    const areaNum = parseFloat(area);
    const tileSizeNum = parseFloat(tileSize);
    
    if (areaNum && tileSizeNum) {
      const groutRequired = (areaNum * 0.5).toFixed(2); // Approximate calculation
      const adhesiveRequired = (areaNum * 3).toFixed(2);
      
      setResult({
        grout: groutRequired,
        adhesive: adhesiveRequired,
        area: areaNum
      });
    }
  };

  const recommendedProducts = [
    {
      name: 'MYK LATICRETE PermaColor Grout',
      description: 'High-performance grout for heavy-duty applications',
      coverage: '25 sq ft per kg',
      price: '₹450'
    },
    {
      name: 'MYK LATICRETE SPECTRALOCK',
      description: 'Premium epoxy grout for superior performance',
      coverage: '20 sq ft per kg',
      price: '₹780'
    }
  ];

  return (
    <div className="min-h-screen bg-loyalty-gradient text-white">
      <div className="flex items-center justify-between p-6 pt-12">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Coverage Calculator</h1>
        </div>
        <Calculator className="w-6 h-6 text-purple-500" />
      </div>

      <div className="px-6">
        {/* Calculator */}
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Calculate Product Usage</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-loyalty-silver text-sm mb-2">Area (sq ft)</label>
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full p-3 bg-loyalty-navy/50 border border-white/10 rounded-lg text-white"
                placeholder="Enter area in square feet"
              />
            </div>
            
            <div>
              <label className="block text-loyalty-silver text-sm mb-2">Tile Size (inches)</label>
              <input
                type="number"
                value={tileSize}
                onChange={(e) => setTileSize(e.target.value)}
                className="w-full p-3 bg-loyalty-navy/50 border border-white/10 rounded-lg text-white"
                placeholder="Enter tile size"
              />
            </div>
            
            <Button 
              onClick={calculateCoverage}
              className="w-full bg-purple-500 hover:bg-purple-500/90 text-white"
            >
              Calculate Usage
            </Button>
          </div>

          {result && (
            <div className="mt-6 p-4 bg-loyalty-navy/30 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Calculation Results</h4>
              <div className="space-y-2">
                <p className="text-loyalty-silver">Area: <span className="text-white">{result.area} sq ft</span></p>
                <p className="text-loyalty-silver">Grout Required: <span className="text-loyalty-gold">{result.grout} kg</span></p>
                <p className="text-loyalty-silver">Adhesive Required: <span className="text-loyalty-gold">{result.adhesive} kg</span></p>
              </div>
            </div>
          )}
        </Card>

        {/* Recommended Products */}
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recommended Products</h3>
          <div className="space-y-4">
            {recommendedProducts.map((product, index) => (
              <div key={index} className="p-4 bg-loyalty-navy/30 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">{product.name}</h4>
                    <p className="text-loyalty-silver text-sm mt-1">{product.description}</p>
                    <p className="text-loyalty-gold text-sm mt-2">Coverage: {product.coverage}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-loyalty-gold font-semibold">{product.price}</p>
                    <Package className="w-5 h-5 text-loyalty-accent mt-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CoverageCalculator;
