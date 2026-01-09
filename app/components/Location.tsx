import Link from 'next/link';

const Location = () => {
  return (
    <section className="py-20 bg-white" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Kunjungi Kami</span>
              <h2 className="text-3xl font-black text-text-main mt-2">Dapur Kami</h2>
            </div>
            <div className="rounded-2xl overflow-hidden h-[300px] w-full bg-gray-100 relative shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.248386629959!2d106.8078613758252!3d-6.23095366102377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1437351610b%3A0x867702f309783854!2sJl.%20Senopati%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1709228399000!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-between">
              <div>
                <h4 className="font-bold text-text-main mb-1">Jam Buka</h4>
                <p className="text-text-muted text-sm">Sen - Jum: 10:00 - 22:00</p>
                <p className="text-text-muted text-sm">Sab - Min: 09:00 - 23:00</p>
              </div>
              <div>
                <h4 className="font-bold text-text-main mb-1">Kontak</h4>
                <p className="text-text-muted text-sm">+62 812 3456 7890</p>
                <p className="text-text-muted text-sm">hello@rasanusantara.id</p>
              </div>
              <Link href="https://maps.google.com" target="_blank" className="h-fit px-5 py-2 border border-text-main rounded-lg text-sm font-bold hover:bg-text-main hover:text-white transition-colors text-center">
                Petunjuk Arah
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Bantuan</span>
              <h2 className="text-3xl font-black text-text-main mt-2">Pertanyaan Umum</h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-[#fbfaf9] p-4 rounded-xl [&_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-sm open:border open:border-[#f4f3f1] transition-all">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-text-main">
                  <h3 className="text-base">Apakah menyediakan pesan antar?</h3>
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 leading-relaxed text-text-muted text-sm">
                  Ya! Kami melayani pesan antar dalam radius 10km. Anda dapat memesan langsung via WhatsApp.
                </p>
              </details>
              <details className="group bg-[#fbfaf9] p-4 rounded-xl [&_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-sm open:border open:border-[#f4f3f1] transition-all">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-text-main">
                  <h3 className="text-base">Apakah makanannya Halal?</h3>
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 leading-relaxed text-text-muted text-sm">
                  Tentu saja. Semua bahan kami tersertifikasi 100% Halal, dan kami tidak menyajikan produk babi atau alkohol.
                </p>
              </details>
              <details className="group bg-[#fbfaf9] p-4 rounded-xl [&_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-sm open:border open:border-[#f4f3f1] transition-all">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-text-main">
                  <h3 className="text-base">Apakah menerima reservasi?</h3>
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 leading-relaxed text-text-muted text-sm">
                  Kami menerima reservasi untuk grup berisi 4 orang atau lebih. Silakan hubungi kami di WhatsApp.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;