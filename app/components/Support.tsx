const Support = () => {
  return (
    <section className="py-24 bg-white border-y border-[#f4f3f1] min-h-screen flex items-center" id="support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <span className="text-primary font-bold tracking-widest uppercase text-lg md:text-xl">
          Didukung Oleh Mitra Terpercaya
        </span>

        <p className="mt-8 text-text-muted text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
          Kira Kira Michi didukung oleh mitra-mitra terpercaya
          seperti{" "}
          <span className="text-text-main font-semibold">DekatLokal</span> dan{" "}
          <span className="text-text-main font-semibold">
            Rumah BUMN Makassar
          </span>{" "}
          untuk memberikan layanan terbaik kepada pelanggan.
        </p>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-90">
          {/* Sponsor 1 */}
          <div className="flex items-center justify-center w-48 h-24">
            <img src="/dekat-lokal.png" alt="DekatLokal" className="max-h-full max-w-full object-contain" />
          </div>

          {/* Sponsor 2 */}
          <div className="flex items-center justify-center w-48 h-24">
            <img src="/rumah-bumn.png" alt="Rumah BUMN" className="max-h-full max-w-full object-contain" />
          </div>

          {/* Sponsor 3 */}
          <div className="flex items-center justify-center w-48 h-24">
            <img src="/bank-bri.png" alt="Bank BRI" className="max-h-full max-w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;