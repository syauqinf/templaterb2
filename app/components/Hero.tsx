import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="relative pt-12 pb-16 lg:pt-20 lg:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1" data-aos="fade-up" data-aos-duration="800">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kkm-yellow/20 text-kkm-maroon text-xs font-black uppercase tracking-widest w-fit mx-auto lg:mx-0 border border-kkm-yellow/30" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <span className="flex h-2 w-2 rounded-full bg-kkm-yellow animate-pulse"></span>
            Merchandise Custom & Pre-Order
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-text-main" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            Wujudkan <br />
            <span className="text-kkm-red relative inline-block">
              Imajinasimu
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-kkm-yellow/40 -z-10" preserveAspectRatio="none" viewBox="0 0 100 10">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8" />
              </svg>
            </span>{" "}
            Jadi Nyata
          </h1>

          <p className="text-text-muted text-lg leading-relaxed max-w-xl mx-auto lg:mx-0" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Kira Kira Michi menghadirkan merchandise berkualitas tinggi. Mulai dari desain custom request hingga koleksi eksklusif Pre-Order yang sedang hype.
          </p>



          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            <a
              href="#support"
              className="flex items-center justify-center h-12 sm:h-14 px-6 sm:px-10 rounded-xl sm:rounded-2xl bg-kkm-red text-white text-sm sm:text-base font-bold shadow-lg shadow-kkm-red/25 hover:bg-kkm-red/90 hover:-translate-y-1 transition-all duration-300"
            >
              Selengkapnya
            </a>

            <a
              href="#menu"
              className="flex items-center justify-center h-12 sm:h-14 px-6 sm:px-10 rounded-xl sm:rounded-2xl bg-white border-2 border-kkm-dark text-kkm-dark text-sm sm:text-base font-bold hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
            >
              Lihat Produk
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 mt-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                   <div className="absolute inset-0 bg-kkm-yellow/10 flex items-center justify-center text-[10px] font-bold">KKM</div>
                </div>
              ))}
            </div>
            <div className="text-sm font-medium text-text-main">
              <span className="font-extrabold text-kkm-red">500+</span> Pesanan Custom Berhasil
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE (Custom Merch Showcase) */}
        <div className="relative order-1 lg:order-2 group">
          {/* Decorative Elements dari Logo */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-kkm-yellow/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute inset-0 bg-kkm-dark rounded-[3rem] rotate-3 transform transition-transform group-hover:rotate-6" />

          <div className="relative h-[400px] lg:h-[500px] w-full rounded-[3rem] shadow-2xl overflow-hidden bg-white border-4 border-kkm-dark">
            <Image 
              src="/kkmhero.jpg" 
              alt="Kira Kira Michi Hero Image" 
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 50vw"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute top-8 -right-4 bg-kkm-yellow text-kkm-dark px-4 py-2 rounded-xl shadow-xl font-black text-xs rotate-12 animate-bounce">
            BURUAN ORDER!
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;