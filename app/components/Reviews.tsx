import Image from 'next/image';

const Reviews = () => {
  // Komponen Ikon Bintang (Star)
  const StarIcon = ({ filled = true }) => (
    <svg 
      viewBox="0 0 24 24" 
      className={`w-4 h-4 ${filled ? 'fill-kkm-red' : 'fill-gray-300'}`} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );

  // Komponen Ikon Bintang Setengah (Star Half) - PERBAIKAN: Menggunakan Gradient agar rapi
  const StarHalfIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="halfGrad">
          <stop offset="50%" stopColor="currentColor" className="text-kkm-red" />
          <stop offset="50%" stopColor="currentColor" className="text-gray-300" />
        </linearGradient>
      </defs>
      <path 
        fill="url(#halfGrad)" 
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" 
      />
    </svg>
  );

  // Komponen Ikon Quote
  const QuoteIcon = () => (
    <svg 
      viewBox="0 0 24 24" 
      className="w-6 h-6 fill-white" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );

  return (
    <section className="py-20 bg-[#fbfaf9] relative overflow-hidden" id="reviews">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-kkm-red/5 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-kkm-yellow/5 blur-2xl"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 rounded-full bg-kkm-dark/5 blur-lg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-kkm-red"></div>
            <div className="w-6 h-6 rounded-full bg-kkm-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-kkm-dark"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-text-main mb-4 relative">
            Testimoni Pelanggan
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-kkm-red to-kkm-yellow rounded-full"></div>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">Jangan hanya percaya kata-kata kami. Inilah yang dikatakan pelanggan setia kami.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Review 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm relative border border-[#f4f3f1] flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="absolute -top-5 left-8 bg-kkm-red p-3 rounded-xl shadow-lg shadow-kkm-red/20 group-hover:scale-110 transition-transform duration-300">
              <QuoteIcon />
            </div>
            <div className="flex items-center gap-1 mb-4 mt-4">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="text-text-main font-medium mb-6 leading-relaxed flex-grow">
              "Rekomendasi buat para pecinta anime karena banyak produk unik dan lucu, ada juga berbagai jenis minuman yang bisa dinikmati sambil nonton anime, ownernya juga baikkkk skaliii, sukses dan lancar terus usahanyaa kakk 💙✨"
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kkm-red to-kkm-yellow flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                L
              </div>
              <div>
                <p className="text-sm font-bold text-text-main">Lefin Oktafia</p>
                <p className="text-xs text-text-muted">Pelanggan Setia</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm relative border border-[#f4f3f1] flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="absolute -top-5 left-8 bg-kkm-red p-3 rounded-xl shadow-lg shadow-kkm-red/20 group-hover:scale-110 transition-transform duration-300">
              <QuoteIcon />
            </div>
            <div className="flex items-center gap-1 mb-4 mt-4">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="text-text-main font-medium mb-6 leading-relaxed flex-grow">
              "Aku sangat suka produk-produk Kira Kira Michi, ada banyak voucher diskon dan juga banyak merchandise gratis yang kudapatkan saat berbelanja di Kira Kira Michi❤️❤️"
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kkm-red to-kkm-yellow flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                S
              </div>
              <div>
                <p className="text-sm font-bold text-text-main">Syahrul</p>
                <p className="text-xs text-text-muted">Pelanggan Setia</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm relative border border-[#f4f3f1] flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="absolute -top-5 left-8 bg-kkm-red p-3 rounded-xl shadow-lg shadow-kkm-red/20 group-hover:scale-110 transition-transform duration-300">
              <QuoteIcon />
            </div>
            <div className="flex items-center gap-1 mb-4 mt-4">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="text-text-main font-medium mb-6 leading-relaxed flex-grow">
              "Really loved KiraKiraMichi's merch!! Very affordable and is very generous with their discount hehe, when i go to event their stand is always the first i'm looking for!!"
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kkm-red to-kkm-yellow flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                W
              </div>
              <div>
                <p className="text-sm font-bold text-text-main">Whoo</p>
                <p className="text-xs text-text-muted">Pelanggan Setia</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;