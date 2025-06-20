
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Package, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "MYK Laticrete Tile Adhesive Premium",
      category: "Tile Adhesive",
      weight: "50kg",
      price: "₹2,850",
      rating: 4.8,
      features: ["High Bond Strength", "Water Resistant", "Interior/Exterior Use"]
    },
    {
      id: 2,
      name: "MYK Laticrete Waterproofing Membrane",
      category: "Waterproofing",
      weight: "20kg",
      price: "₹3,200",
      rating: 4.9,
      features: ["Crack Bridging", "UV Resistant", "Flexible"]
    },
    {
      id: 3,
      name: "MYK Laticrete Grout Plus",
      category: "Grout",
      weight: "5kg",
      price: "₹680",
      rating: 4.7,
      features: ["Stain Resistant", "Anti-Microbial", "Easy Application"]
    },
    {
      id: 4,
      name: "MYK Laticrete Stone Adhesive",
      category: "Stone Adhesive",
      weight: "25kg",
      price: "₹1,950",
      rating: 4.6,
      features: ["Natural Stone Safe", "Non-Slip", "Weather Resistant"]
    },
    {
      id: 5,
      name: "MYK Laticrete Floor Leveling Compound",
      category: "Floor Preparation",
      weight: "40kg",
      price: "₹2,100",
      rating: 4.8,
      features: ["Self-Leveling", "Fast Setting", "Smooth Finish"]
    },
    {
      id: 6,
      name: "MYK Laticrete Epoxy Grout",
      category: "Epoxy Grout",
      weight: "10kg",
      price: "₹4,500",
      rating: 4.9,
      features: ["Chemical Resistant", "Stain Proof", "High Durability"]
    },
    {
      id: 7,
      name: "MYK Laticrete Wall Putty",
      category: "Wall Preparation",
      weight: "30kg",
      price: "₹1,200",
      rating: 4.5,
      features: ["Smooth Finish", "Crack Resistant", "Easy Sanding"]
    },
    {
      id: 8,
      name: "MYK Laticrete Swimming Pool Adhesive",
      category: "Pool Adhesive",
      weight: "25kg",
      price: "₹3,800",
      rating: 4.8,
      features: ["Chlorine Resistant", "Underwater Curing", "Flexible"]
    },
    {
      id: 9,
      name: "MYK Laticrete Concrete Repair Mortar",
      category: "Repair Mortar",
      weight: "25kg",
      price: "₹2,650",
      rating: 4.7,
      features: ["High Strength", "Shrinkage Compensated", "Corrosion Inhibitor"]
    },
    {
      id: 10,
      name: "MYK Laticrete Primer Plus",
      category: "Primer",
      weight: "5L",
      price: "₹850",
      rating: 4.6,
      features: ["Penetrating Primer", "Dust Binding", "Quick Drying"]
    }
  ];

  return (
    <div className="min-h-screen bg-off-white text-black">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-black">MYK Laticrete Products</h1>
        </div>
        <Package className="w-6 h-6 text-loyalty-accent" />
      </div>

      <div className="px-6 pb-6">
        <div className="grid gap-4">
          {products.map((product) => (
            <Card key={product.id} className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black mb-1">{product.name}</h3>
                  <p className="text-loyalty-accent text-sm font-medium">{product.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-loyalty-gold text-xl font-bold">{product.price}</p>
                  <p className="text-gray-700 text-sm">{product.weight}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 mb-3">
                <Star className="w-4 h-4 text-loyalty-gold fill-current" />
                <span className="text-black font-medium">{product.rating}</span>
                <span className="text-gray-700 text-sm">rating</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {product.features.map((feature, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
              </div>

              <Button className="w-full bg-loyalty-accent hover:bg-loyalty-accent/90 text-white">
                View Details
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
