
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Crown, Mail, Phone, MapPin, Calendar, Award, Edit2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="min-h-screen bg-loyalty-gradient text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Link to="/">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">My Profile</h1>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <Edit2 className="w-5 h-5" />
        </Button>
      </div>

      {/* Profile Header */}
      <div className="px-6 mb-8">
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-loyalty-accent to-loyalty-gold flex items-center justify-center">
              <Crown className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Pavan Kumar</h2>
              <p className="text-loyalty-gold text-sm">Gold Mason</p>
              <div className="flex items-center space-x-2 mt-2">
                <Award className="w-4 h-4 text-loyalty-gold" />
                <span className="text-loyalty-silver text-sm">Member since Jan 2023</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Contact Information */}
      <div className="px-6 mb-8">
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-loyalty-accent" />
              <div>
                <p className="text-white font-medium">+91 98765 43210</p>
                <p className="text-loyalty-silver text-sm">Mobile Number</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-loyalty-accent" />
              <div>
                <p className="text-white font-medium">pavan.kumar@email.com</p>
                <p className="text-loyalty-silver text-sm">Email Address</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-loyalty-accent" />
              <div>
                <p className="text-white font-medium">Mumbai, Maharashtra</p>
                <p className="text-loyalty-silver text-sm">Location</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-loyalty-accent" />
              <div>
                <p className="text-white font-medium">15th January 2023</p>
                <p className="text-loyalty-silver text-sm">Member Since</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Account Stats */}
      <div className="px-6 mb-8">
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Account Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-loyalty-navy/30 rounded-lg">
              <p className="text-2xl font-bold text-loyalty-gold">2,450</p>
              <p className="text-loyalty-silver text-sm">Total Points</p>
            </div>
            <div className="text-center p-4 bg-loyalty-navy/30 rounded-lg">
              <p className="text-2xl font-bold text-green-500">23</p>
              <p className="text-loyalty-silver text-sm">Surveys Completed</p>
            </div>
            <div className="text-center p-4 bg-loyalty-navy/30 rounded-lg">
              <p className="text-2xl font-bold text-blue-500">8</p>
              <p className="text-loyalty-silver text-sm">QR Codes Scanned</p>
            </div>
            <div className="text-center p-4 bg-loyalty-navy/30 rounded-lg">
              <p className="text-2xl font-bold text-purple-500">5</p>
              <p className="text-loyalty-silver text-sm">Referrals Made</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Preferences */}
      <div className="px-6 mb-8">
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Preferences</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white">Email Notifications</span>
              <div className="w-12 h-6 bg-loyalty-accent rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white">SMS Notifications</span>
              <div className="w-12 h-6 bg-gray-400 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white">Push Notifications</span>
              <div className="w-12 h-6 bg-loyalty-accent rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
