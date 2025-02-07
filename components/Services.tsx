import React from 'react';
import { Home, HandshakeIcon, Building2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: '不動産売買・賃貸・管理',
      description: 'お客様のニーズに合わせた物件の売買、賃貸、そして確実な管理サービスを提供します。'
    },
    {
      icon: <HandshakeIcon className="w-12 h-12 text-blue-600" />,
      title: '不動産売買仲介',
      description: '豊富な経験と専門知識を活かし、最適な物件取引のお手伝いをいたします。'
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: '不動産コンサルティング',
      description: 'プロフェッショナルな視点から、不動産に関する様々なご相談に対応いたします。'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          事業内容
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}