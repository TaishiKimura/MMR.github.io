import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            不動産の未来を創造する
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            お客様の理想の住まいをトータルサポート
          </p>
          <a 
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}