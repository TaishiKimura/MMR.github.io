import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          お問い合わせ
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                お問い合わせ先
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <p className="font-semibold">所在地</p>
                    <p>〒190-0023</p>
                    <p>東京都立川市柴崎町2-3-3 HAYASHIビル2F</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <p className="font-semibold">電話番号</p>
                    <p>042-XXX-XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <p className="font-semibold">メールアドレス</p>
                    <p>info@mmr-woods.co.jp</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                代表者
              </h3>
              <p className="text-lg mb-2">代表取締役：林　薫</p>
              <div className="mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853398542!2d139.41340937677415!3d35.69863272963295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e17531de4b07%3A0x8101a61027935ce!2z5p2x5Lqs6YO95rGf5bed5biC5p-z5bSO55S677yS5LiB55uu!5e0!3m2!1sja!2sjp!4v1709725844949!5m2!1sja!2sjp"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}