'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Komponen SVG Arrow yang tetap diam (stay)
  const ArrowIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="w-5 h-5"
    >
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );

  return (
    <section className="py-20 bg-white" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-text-main mb-4">Produk Kami</h2>
            <p className="text-text-muted">Koleksi merchandise berkualitas tinggi, dari custom hingga best seller.</p>
          </div>
          
          {/* Link Desktop dengan efek teks geser ke KIRI */}
          <button 
            onClick={() => {
              const targetElement = document.getElementById('flash-preorder');
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="hidden md:flex items-center gap-2 text-kkm-red font-bold group transition-all cursor-pointer" 
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              Lihat Semua Produk
            </span>
            <ArrowIcon />
          </button>
        </div>

        {/* Flash Pre-Order Section - Highest Priority */}
        <div id="flash-preorder" className="mb-16" data-aos="fade-up" data-aos-duration="800">
          <div className="flex items-center gap-3 mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kkm-red to-kkm-yellow flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-main">Flash Pre-Order</h3>
              <p className="text-text-muted">Pengerjaan dalam 2–5 Hari • Disesuaikan sepenuhnya dengan preferensimu</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Custom Produk Kayu */}
            <div className="group bg-[#fbfaf9] rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 border border-transparent hover:border-[#f4f3f1] flex flex-col h-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-kkm-red/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                  Custom
                </div>
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-kkm-red shadow-sm">
                  2-5 Weeks
                </div>
                <div 
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setSelectedImage({src: "/preorder/kayu.png", alt: "Custom Produk Kayu"})}
                >
                  <Image 
                    src="/preorder/kayu.png"
                    alt="Custom Produk Kayu"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-text-main">Custom Produk Kayu</h4>
                  <span className="text-kkm-red font-bold">Mulai dari Rp 15k</span>
                </div>
                <p className="text-text-muted text-sm mb-4 line-clamp-2 flex-grow">Desain custom untuk produk kayu seperti gantungan kunci, pajangan, dan aksesori lainnya.</p>
                <a 
  href="https://wa.me/6289529974959?text=Hai%20kak%2C%20saya%20ingin%20memesan%20Custom%20Produk%20Kayu"
  target="_blank"
  className="w-full py-2.5 rounded-xl bg-kkm-red text-white font-bold hover:bg-kkm-dark transition-colors text-sm flex items-center justify-center gap-2 mt-auto"
>
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
  Pre-Order Now
</a>

              </div>
            </div>

            {/* Custom Produk Kain, Kulit Sintetis & Eva Sponge */}
            <div className="group bg-[#fbfaf9] rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 border border-transparent hover:border-[#f4f3f1] flex flex-col h-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-kkm-red/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                  Custom
                </div>
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-kkm-red shadow-sm">
                  2-5 Weeks
                </div>
                <div 
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setSelectedImage({src: "/preorder/kain.png", alt: "Custom Produk Kain, Kulit Sintetis & Eva Sponge"})}
                >
                  <Image 
                    src="/preorder/kain.png"
                    alt="Custom Produk Kain, Kulit Sintetis & Eva Sponge"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-text-main">Custom Produk Kain, Kulit Sintetis & Eva Sponge</h4>
                  <span className="text-kkm-red font-bold">Mulai dari Rp 15k</span>
                </div>
                <p className="text-text-muted text-sm mb-4 line-clamp-2 flex-grow">Produk custom dari bahan kain, kulit sintetis, dan eva sponge seperti pouch, ID card, dan lainnya.</p>
                <a 
                  href="https://wa.me/6289529974959?text=Hai%20kak%2C%20saya%20ingin%20memesan%20Custom%20Produk%20Kain%2C%20Kulit%20Sintetis%20%26%20Eva%20Sponge" 
                  target="_blank" 
                  className="w-full py-2.5 rounded-xl bg-kkm-red text-white font-bold hover:bg-kkm-dark transition-colors text-sm flex items-center justify-center gap-2 mt-auto"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Pre-Order Now
                </a>
              </div>
            </div>

            {/* Custom Produk Akrilik */}
            <div className="group bg-[#fbfaf9] rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 border border-transparent hover:border-[#f4f3f1] flex flex-col h-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-kkm-red/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                  Custom
                </div>
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-kkm-red shadow-sm">
                  2-5 Weeks
                </div>
                <div 
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setSelectedImage({src: "/preorder/akrilik.png", alt: "Custom Produk Akrilik"})}
                >
                  <Image 
                    src="/preorder/akrilik.png"
                    alt="Custom Produk Akrilik"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-text-main">Custom Produk Akrilik</h4>
                  <span className="text-kkm-red font-bold">Mulai dari Rp 15k</span>
                </div>
                <p className="text-text-muted text-sm mb-4 line-clamp-2 flex-grow">Aneka produk custom dari akrilik seperti pin, gantungan kunci, dan lainnya.</p>
                <a 
                  href="https://wa.me/6289529974959?text=Hai%20kak%2C%20saya%20ingin%20memesan%20Custom%20Produk%20Akrilik" 
                  target="_blank" 
                  className="w-full py-2.5 rounded-xl bg-kkm-red text-white font-bold hover:bg-kkm-dark transition-colors text-sm flex items-center justify-center gap-2 mt-auto"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Pre-Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Top Picks Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kkm-dark to-kkm-red flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-main">Top Picks</h3>
              <p className="text-text-muted">Kurasi produk-produk terlaris kami</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Ganci Shaker */}
            <div className="group bg-[#fbfaf9] rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 border border-transparent hover:border-[#f4f3f1]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-kkm-yellow/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                  Best Seller
                </div>
                <div 
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setSelectedImage({src: "/toppick/ganci_shaker.png", alt: "Ganci Shaker"})}
                >
                  <Image 
                    src="/toppick/ganci_shaker.png"
                    alt="Ganci Shaker"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-text-main">Ganci Shaker</h4>
                  <span className="text-kkm-red font-bold">Mulai dari Rp 55k</span>
                </div>
                <p className="text-text-muted text-sm mb-4 line-clamp-2 flex-grow">Produk unggulan dengan kualitas terbaik.</p>
                <a 
                  href="https://wa.me/6289529974959?text=Hai%20kak%2C%20saya%20ingin%20memesan%20Ganci%20Shaker" 
                  target="_blank" 
                  className="w-full py-2.5 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition-colors text-sm flex items-center justify-center gap-2 mt-auto"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Order Now
                </a>
              </div>
            </div>

            {/* Ganci Hanging Charm */}
            <div className="group bg-[#fbfaf9] rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 border border-transparent hover:border-[#f4f3f1] flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-kkm-red/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                  Trending
                </div>
                <div 
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setSelectedImage({src: "/toppick/ganci_hanging_charm.png", alt: "Ganci Hanging Charm"})}
                >
                  <Image 
                    src="/toppick/ganci_hanging_charm.png"
                    alt="Ganci Hanging Charm"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-text-main">Ganci Hanging Charm</h4>
                  <span className="text-kkm-red font-bold">Mulai dari Rp 45k</span>
                </div>
                <p className="text-text-muted text-sm mb-4 line-clamp-2 flex-grow">Pilihan premium dengan kualitas terbaik.</p>
                <a 
                  href="https://wa.me/6289529974959?text=Hai%20kak%2C%20saya%20ingin%20memesan%20Ganci%20Hanging%20Charm" 
                  target="_blank" 
                  className="w-full py-2.5 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition-colors text-sm flex items-center justify-center gap-2 mt-auto"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Order Now
                </a>
              </div>
            </div>

            {/* Ganci Bantal */}
            <div className="group bg-[#fbfaf9] rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 border border-transparent hover:border-[#f4f3f1] flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-kkm-yellow/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                  Fan Favorite
                </div>
                <div 
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setSelectedImage({src: "/toppick/ganci_bantal.png", alt: "Ganci Bantal"})}
                >
                  <Image 
                    src="/toppick/ganci_bantal.png"
                    alt="Ganci Bantal"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-text-main">Ganci Bantal</h4>
                  <span className="text-kkm-red font-bold">Mulai dari Rp 35k</span>
                </div>
                <p className="text-text-muted text-sm mb-4 line-clamp-2 flex-grow">Standar kualitas terbaik dari pilihan unggulan.</p>
                <a 
                  href="https://wa.me/6289529974959?text=Hai%20kak%2C%20saya%20ingin%20memesan%20Ganci%20Bantal" 
                  target="_blank" 
                  className="w-full py-2.5 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition-colors text-sm flex items-center justify-center gap-2 mt-auto"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Order Now
                </a>
              </div>
            </div>

            {/* Ganci Rotary */}
            <div className="group bg-[#fbfaf9] rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 border border-transparent hover:border-[#f4f3f1] flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-kkm-dark/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                  Popular
                </div>
                <div 
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setSelectedImage({src: "/toppick/ganci_rotary.png", alt: "Ganci Rotary"})}
                >
                  <Image 
                    src="/toppick/ganci_rotary.png"
                    alt="Ganci Rotary"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-text-main">Ganci Rotary</h4>
                  <span className="text-kkm-red font-bold">Mulai dari Rp 40k</span>
                </div>
                <p className="text-text-muted text-sm mb-4 line-clamp-2 flex-grow">Inovasi terkini dengan kualitas maksimal.</p>
                <a 
                  href="https://wa.me/6289529974959?text=Hai%20kak%2C%20saya%20ingin%20memesan%20Ganci%20Rotary" 
                  target="_blank" 
                  className="w-full py-2.5 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition-colors text-sm flex items-center justify-center gap-2 mt-auto"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back by Popular Demand Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kkm-red to-kkm-dark flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-main">Back by Popular Demand</h3>
              <p className="text-text-muted">Produk dengan pesanan berulang yang konsisten dari pelanggan setia</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ganci One Piece Logo */}
            <div className="group bg-[#fbfaf9] rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 border border-transparent hover:border-[#f4f3f1] flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-kkm-dark/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                  Repeat Orders
                </div>
                <div 
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setSelectedImage({src: "/populardemand/one_piece.png", alt: "Ganci One Piece Logo"})}
                >
                  <Image 
                    src="/populardemand/one_piece.png"
                    alt="Ganci One Piece Logo"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-text-main">Ganci One Piece Logo</h4>
                  <span className="text-kkm-red font-bold">Rp 35k</span>
                </div>
                <p className="text-text-muted text-sm mb-4 line-clamp-2 flex-grow">Ganci eksklusif bertema One Piece dengan logo karakter favorit.</p>
                <a 
                  href="https://wa.me/6289529974959?text=Hai%20kak%2C%20saya%20ingin%20memesan%20Ganci%20One%20Piece%20Logo" 
                  target="_blank" 
                  className="w-full py-2.5 rounded-xl bg-black text-white font-bold hover:bg-gray-800 transition-colors text-sm flex items-center justify-center gap-2 mt-auto"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Order Now
                </a>
              </div>
            </div>

            {/* Pouch Dragon Ball Radar (Leather Version) */}
            <div className="group bg-[#fbfaf9] rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 border border-transparent hover:border-[#f4f3f1] flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-kkm-red/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                  Customer Favorite
                </div>
                <div 
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setSelectedImage({src: "/populardemand/dragon_ball.png", alt: "Pouch Dragon Ball Radar (Leather Version)"})}
                >
                  <Image 
                    src="/populardemand/dragon_ball.png"
                    alt="Pouch Dragon Ball Radar (Leather Version)"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-text-main">Pouch Dragon Ball Radar (Leather Version)</h4>
                  <span className="text-kkm-red font-bold">Rp 250k</span>
                </div>
                <p className="text-text-muted text-sm mb-4 line-clamp-2 flex-grow">Pouch premium kulit dengan desain radar Dragon Ball yang ikonik.</p>
                <a 
                  href="https://wa.me/6289529974959?text=Hai%20kak%2C%20saya%20ingin%20memesan%20Pouch%20Dragon%20Ball%20Radar%20(Leather%20Version)" 
                  target="_blank" 
                  className="w-full py-2.5 rounded-xl bg-black text-white font-bold hover:bg-gray-800 transition-colors text-sm flex items-center justify-center gap-2 mt-auto"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Order Now
                </a>
              </div>
            </div>

            {/* Ganci Kawaii Anya */}
            <div className="group bg-[#fbfaf9] rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 border border-transparent hover:border-[#f4f3f1] flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-kkm-yellow/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                  Best Seller
                </div>
                <div 
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setSelectedImage({src: "/populardemand/kawaii_anya.png", alt: "Ganci Kawaii Anya"})}
                >
                  <Image 
                    src="/populardemand/kawaii_anya.png"
                    alt="Ganci Kawaii Anya"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-text-main">Ganci Kawaii Anya</h4>
                  <span className="text-kkm-red font-bold">Rp 35k</span>
                </div>
                <p className="text-text-muted text-sm mb-4 line-clamp-2 flex-grow">Ganci lucu bertema karakter Anya dengan desain kawaii yang menggemaskan.</p>
                <a 
                  href="https://wa.me/6289529974959?text=Hai%20kak%2C%20saya%20ingin%20memesan%20Ganci%20Kawaii%20Anya" 
                  target="_blank" 
                  className="w-full py-2.5 rounded-xl bg-black text-white font-bold hover:bg-gray-800 transition-colors text-sm flex items-center justify-center gap-2 mt-auto"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Link Mobile dengan efek teks geser ke KIRI */}
        <div className="mt-12 text-center md:hidden">
          <a 
            className="inline-flex items-center gap-2 text-kkm-red font-bold group" 
            href="#menu"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              Lihat Semua Produk
            </span>
            <ArrowIcon />
          </a>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <button 
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;