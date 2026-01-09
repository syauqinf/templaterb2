import Image from 'next/image';

const Reviews = () => {
  // Komponen Ikon Bintang (Star)
  const StarIcon = ({ filled = true }) => (
    <svg 
      viewBox="0 0 24 24" 
      className={`w-4 h-4 ${filled ? 'fill-primary' : 'fill-gray-300'}`} 
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
          <stop offset="50%" stopColor="currentColor" className="text-primary" />
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
    <section className="py-20 bg-[#fbfaf9]" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-text-main mb-4">Perut Bahagia</h2>
          <p className="text-text-muted max-w-2xl mx-auto">Jangan hanya percaya kata-kata kami. Inilah yang dikatakan pelanggan setia kami.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Review 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm relative border border-[#f4f3f1]">
            <div className="absolute -top-5 left-8 bg-primary p-3 rounded-xl shadow-lg shadow-primary/20">
              <QuoteIcon />
            </div>
            <div className="flex items-center gap-1 mb-4 mt-4">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="text-text-main font-medium mb-6 leading-relaxed">
              "Nasi Goreng terbaik yang pernah saya makan. Mengingatkan saya pada masakan nenek. Sangat otentik!"
            </p>
            <div className="flex items-center gap-3">
              <Image 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                alt="Sarah Jenkins" width={40} height={40} className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold text-text-main">Sarah Jenkins</p>
                <p className="text-xs text-text-muted">Pemandu Lokal</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm relative border border-[#f4f3f1]">
            <div className="absolute -top-5 left-8 bg-primary p-3 rounded-xl shadow-lg shadow-primary/20">
              <QuoteIcon />
            </div>
            <div className="flex items-center gap-1 mb-4 mt-4">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="text-text-main font-medium mb-6 leading-relaxed">
              "Pengiriman cepat dan kemasannya ramah lingkungan. Makanan tiba panas dan segar."
            </p>
            <div className="flex items-center gap-3">
              <Image 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100"
                alt="Budi Santoso" width={40} height={40} className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold text-text-main">Budi Santoso</p>
                <p className="text-xs text-text-muted">Pesanan Terverifikasi</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm relative border border-[#f4f3f1]">
            <div className="absolute -top-5 left-8 bg-primary p-3 rounded-xl shadow-lg shadow-primary/20">
              <QuoteIcon />
            </div>
            <div className="flex items-center gap-1 mb-4 mt-4">
              {[...Array(4)].map((_, i) => <StarIcon key={i} />)}
              <StarHalfIcon />
            </div>
            <p className="text-text-main font-medium mb-6 leading-relaxed">
              "Suasana luar biasa dan staf yang ramah. Es Cendolnya wajib dicoba! Manisnya pas."
            </p>
            <div className="flex items-center gap-3">
              <Image 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
                alt="Michelle Tan" width={40} height={40} className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold text-text-main">Michelle Tan</p>
                <p className="text-xs text-text-muted">Blogger Makanan</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;