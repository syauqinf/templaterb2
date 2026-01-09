import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {
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
            <h2 className="text-3xl md:text-4xl font-black text-text-main mb-4">Menu Andalan</h2>
            <p className="text-text-muted">Pilihan terkurasi dari favorit pelanggan kami. Peringatan: Sangat membuat ketagihan.</p>
          </div>
          
          {/* Link Desktop dengan efek teks geser ke KIRI */}
          <Link 
            className="hidden md:flex items-center gap-2 text-primary font-bold group transition-all" 
            href="#"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              Lihat Menu Lengkap
            </span>
            <ArrowIcon />
          </Link>
        </div>

        {/* Grid Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Nasi Goreng */}
          <div className="group bg-[#fbfaf9] rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 border border-transparent hover:border-[#f4f3f1]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-text-main shadow-sm">
                Paling Laris
              </div>
              <div className="relative w-full h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1680674814945-7945d913319c?q=80&w=1170&auto=format&fit=crop"
                  alt="Nasi Goreng Kampung"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-text-main">Nasi Goreng Kampung</h3>
                <span className="text-primary font-bold text-lg">Rp 45k</span>
              </div>
              <p className="text-text-muted text-sm mb-6 line-clamp-2">Nasi goreng tradisional dengan rempah aromatik, sate ayam kampung, telur mata sapi, dan kerupuk.</p>
              <a href="https://wa.me/6281234567890?text=Halo%20Rasa%20Nusantara,%20saya%20mau%20order%20Nasi%20Goreng%20Kampung" target="_blank" className="w-full py-3 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Order Sekarang
              </a>
            </div>
          </div>

          {/* Card 2: Rendang */}
          <div className="group bg-[#fbfaf9] rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 border border-transparent hover:border-[#f4f3f1]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="relative w-full h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1766567461692-32c352d198d4?q=80&w=1049&auto=format&fit=crop"
                  alt="Rendang Sapi Royal"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-text-main">Rendang Sapi Royal</h3>
                <span className="text-primary font-bold text-lg">Rp 65k</span>
              </div>
              <p className="text-text-muted text-sm mb-6 line-clamp-2">Daging sapi yang dimasak perlahan dalam santan dan rempah kaya selama 8 jam hingga empuk.</p>
              <a href="https://wa.me/6281234567890?text=Halo%20Rasa%20Nusantara,%20saya%20mau%20order%20Rendang" target="_blank" className="w-full py-3 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Order Sekarang
              </a>
            </div>
          </div>

          {/* Card 3: Es Cendol */}
          <div className="group bg-[#fbfaf9] rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 border border-transparent hover:border-[#f4f3f1]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute top-4 left-4 z-10 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                Baru
              </div>
              <div className="relative w-full h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1565167278026-448b8511cdfb?q=80&w=1176&auto=format&fit=crop"
                  alt="Es Cendol Premium"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-text-main">Es Cendol Premium</h3>
                <span className="text-primary font-bold text-lg">Rp 28k</span>
              </div>
              <p className="text-text-muted text-sm mb-6 line-clamp-2">Dawet tepung beras hijau, santan, dan sirup gula aren. Disajikan dengan irisan nangka.</p>
              <a href="https://wa.me/6281234567890?text=Halo%20Rasa%20Nusantara,%20saya%20mau%20order%20Es%20Cendol" target="_blank" className="w-full py-3 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Order Sekarang
              </a>
            </div>
          </div>
        </div>

        {/* Link Mobile dengan efek teks geser ke KIRI */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            className="inline-flex items-center gap-2 text-primary font-bold group" 
            href="#"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              Lihat Menu Lengkap
            </span>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;