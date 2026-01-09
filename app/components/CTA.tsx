const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-text-main rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Lapar? Mari kita atasi.</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Manjakan diri Anda dengan makanan hangat dan lezat yang dibuat dengan cinta. Pickup dan pengiriman tersedia sekarang.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/6281234567890" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-hover hover:scale-105 transition-all">
              Pesan Antar
            </a>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-all">
              Reservasi Meja
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;