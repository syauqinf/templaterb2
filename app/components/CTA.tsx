const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="cta">
      {/* Floating Elements - Perfectly Balanced */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left side */}
        <div className="absolute top-12 left-12 w-4 h-4 rounded-full bg-white/20 animate-pulse"></div>
        <div className="absolute top-1/3 left-8 w-3 h-3 rounded-full bg-kkm-yellow/30 animate-bounce delay-300"></div>
        <div className="absolute top-2/3 left-16 w-5 h-5 rounded-full bg-kkm-red/20 animate-pulse delay-600"></div>
        <div className="absolute bottom-16 left-12 w-3 h-3 rounded-full bg-white/25 animate-bounce delay-900"></div>
        
        {/* Right side */}
        <div className="absolute top-10 right-12 w-5 h-5 rounded-full bg-kkm-yellow/25 animate-pulse delay-200"></div>
        <div className="absolute top-1/4 right-8 w-3 h-3 rounded-full bg-white/20 animate-bounce delay-500"></div>
        <div className="absolute top-3/4 right-16 w-4 h-4 rounded-full bg-kkm-red/25 animate-pulse delay-800"></div>
        <div className="absolute bottom-12 right-10 w-3 h-3 rounded-full bg-white/15 animate-bounce delay-1100"></div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-kkm-dark via-kkm-red to-kkm-yellow rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse group-hover:scale-110 transition-transform duration-1000"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-kkm-red/20 rounded-full blur-3xl animate-pulse delay-500 group-hover:scale-110 transition-transform duration-1000"></div>
        
        {/* Shining Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
              <div className="w-8 h-8 rounded-full bg-kkm-yellow animate-bounce"></div>
              <div className="w-3 h-3 rounded-full bg-white animate-pulse delay-300"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 transform group-hover:scale-105 transition-transform duration-300">
            Temukan Merchandise yang Pas untuk Anda
          </h2>
          
          <div className="mb-10">
            <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
              Dapatkan merchandise favoritmu dengan kualitas premium dan desain eksklusif. Pesanan kustom dan stok tersedia sekarang.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/6289529974959" 
              target="_blank" 
              className="w-full sm:w-auto px-8 py-4 bg-kkm-red text-white font-bold rounded-xl shadow-lg hover:bg-kkm-red/90 hover:scale-110 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group/btn"
            >
              <span>Pesan Sekarang</span>
              <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="#menu" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Lihat Produk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;