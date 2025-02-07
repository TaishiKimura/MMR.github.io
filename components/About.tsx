import React from 'react';
import { Building, Calendar, Coins } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          会社概要
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">有限会社M・M・R</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <p className="font-semibold">設立日</p>
                  <p>1993年2月2日</p>
                </div>
              </div>
              <div className="flex items-start">
                <Coins className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <p className="font-semibold">資本金</p>
                  <p>3,000万円</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">有限会社ウッズコーポレーション</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <p className="font-semibold">設立日</p>
                  <p>1999年1月29日</p>
                </div>
              </div>
              <div className="flex items-start">
                <Coins className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <p className="font-semibold">資本金</p>
                  <p>300万円</p>
                </div>
              </div>
              <div className="flex items-start">
                <Building className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <p className="font-semibold">宅建免許番号</p>
                  <p>東京都知事（１）第１１１０４９号</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}