import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/20 text-[#5a7a5d] text-xs font-bold w-fit mx-auto lg:mx-0">
            <svg
              id="Leaf_24"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="24" height="24" fill="none" opacity="0" />
              <g transform="matrix(0.71 0 0 0.71 12 12)">
                <path
                  transform="translate(-16, -18.05)"
                  d="M 25.03125 4 L 24 4.46875 C 20.820313 5.871094 16.226563 6.398438 12.3125 7.78125 C 10.355469 8.472656 8.542969 9.394531 7.1875 10.875 C 5.832031 12.355469 5 14.394531 5 17 C 5 19.695313 6.585938 21.542969 8.0625 22.59375 C 8.691406 23.042969 9.300781 23.367188 9.8125 23.59375 C 9.195313 24.738281 8.738281 25.769531 8.4375 26.65625 C 7.890625 28.253906 7.804688 29.503906 7.84375 30.40625 C 7.882813 31.308594 8 31.925781 8 31.90625 L 10 32.09375 C 10.0625 31.371094 9.875 30.992188 9.84375 30.3125 C 9.8125 29.632813 9.871094 28.699219 10.34375 27.3125 C 11.289063 24.542969 13.910156 19.984375 20.71875 12.6875 L 19.28125 11.3125 C 15.199219 15.6875 12.5625 19.097656 10.84375 21.84375 C 10.40625 21.667969 9.820313 21.398438 9.21875 20.96875 C 8.058594 20.144531 7 18.9375 7 17 C 7 14.796875 7.628906 13.34375 8.65625 12.21875 C 9.683594 11.09375 11.179688 10.289063 12.96875 9.65625 C 16.207031 8.511719 20.214844 7.933594 23.65625 6.65625 C 23.976563 7.871094 25 12.03125 25 18.53125 C 25 22.21875 24.136719 24.332031 23.125 25.5 C 22.113281 26.667969 20.894531 27 19.8125 27 C 18.734375 27 17.570313 26.449219 16.5625 25.75 C 15.554688 25.050781 14.859375 24.320313 14.15625 23.875 L 13.09375 25.5625 C 13.273438 25.675781 14.269531 26.597656 15.4375 27.40625 C 16.605469 28.214844 18.085938 29 19.8125 29 C 21.351563 29 23.234375 28.457031 24.65625 26.8125 C 26.078125 25.167969 27 22.527344 27 18.53125 C 27 10.710938 25.34375 5.09375 25.34375 5.09375 Z"
                  style={{
                    fill: "currentColor",
                    stroke: "none",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                />
              </g>
            </svg>
            100% Bahan Lokal Pilihan
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-text-main">
            Rasakan{" "}
            <span className="text-primary relative inline-block">
              Jiwa
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                />
              </svg>
            </span>{" "}
            dari Cita Rasa Otentik
          </h1>

          <p className="text-text-muted text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Dibuat setiap hari menggunakan resep keluarga yang diwariskan
            turun-temurun. Rasakan kehangatan masakan rumahan sejati di setiap
            suapan.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2">
            <Link
              href="#menu"
              className="flex items-center justify-center h-12 px-8 rounded-full bg-primary text-white text-base font-bold shadow-lg shadow-primary/25 hover:bg-primary-hover hover:-translate-y-1 transition-all duration-300"
            >
              Pesan Sekarang
            </Link>

            <Link
              href="#menu"
              className="flex items-center justify-center h-12 px-8 rounded-full bg-white border border-[#e4e2dc] text-text-main text-base font-bold hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
            >
              Lihat Menu
            </Link>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 mt-6">
            <div className="flex -space-x-3">
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100"
                alt="Customer"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                alt="Customer"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
                alt="Customer"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            </div>

            <div className="text-sm font-medium text-text-main">
              <span className="font-bold">4.9/5</span> dari 200+ Ulasan
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative order-1 lg:order-2 group">
          <div className="absolute inset-0 bg-primary/20 rounded-[2rem] rotate-3 transform transition-transform group-hover:rotate-6" />

          <div className="relative h-[400px] lg:h-[500px] w-full rounded-[2rem] shadow-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800"
              alt="Featured dish"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="absolute bottom-8 -left-4 lg:-left-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce duration-[3000ms]">
            <div className="bg-primary/10 p-2 rounded-full text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-primary"
              >
                <path
                  d="M9.0019531 2.0097656 C7.9234063 2.0645156 6.8980781 2.6869844 6.3925781 3.6777344 L5.4746094 5.4746094 L3.6777344 6.3925781 C2.3237344 7.0835781 1.6823906 8.6350781 2.1503906 10.080078 L2.7714844 12 L2.1503906 13.921875 C1.6813906 15.366875 2.3217812 16.917375 3.6757812 17.609375 L5.4726562 18.525391 L6.3925781 20.322266 C7.0675781 21.644266 8.670125 22.309562 10.078125 21.851562 L12 21.228516 L13.919922 21.849609 C14.226922 21.949609 14.545188 22 14.867188 22 C16.029188 22 17.078422 21.357266 17.607422 20.322266 L18.525391 18.525391 L20.324219 17.607422 C21.677219 16.915422 22.318609 15.363922 21.849609 13.919922 L21.228516 12 L21.849609 10.080078 C22.318609 8.6340781 21.678219 7.0835781 20.324219 6.3925781 L18.527344 5.4746094 L17.607422 3.6777344 C16.934422 2.3567344 15.328875 1.6933906 13.921875 2.1503906 L12 2.7714844 L10.080078 2.1523438 Z
                    M16.292969 8.2929688 L11 13.585938 L8.7070312 11.292969 L7.2929688 12.707031 L11 16.414062 L17.707031 9.7070312 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div>
              <p className="text-xs text-text-muted font-medium">
                Pilihan Chef
              </p>
              <p className="text-sm font-bold text-text-main">
                Nasi Campur Bali
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
