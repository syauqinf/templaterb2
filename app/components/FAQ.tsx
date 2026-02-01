const FAQ = () => {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Bantuan</span>
            <h2 className="text-3xl font-black text-text-main mt-2">Pusat Bantuan</h2>
          </div>
          <div className="space-y-4">
            <details className="group bg-[#fbfaf9] p-4 rounded-xl [&_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-sm open:border open:border-[#f4f3f1] transition-all">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-text-main">
                <h3 className="text-base">1. Produk apa saja yang bisa di-custom di Kira Kira Michi kak?</h3>
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
              <div className="mt-4 text-text-muted text-sm">
                <p className="leading-relaxed mb-3">Produk yang bisa di-custom di Kira Kira Michi sejauh ini ada :</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Gantungan Kunci (Akrilik, Kayu, Kulit Sintetis, Bantal, Cermin, Magnet, Pembuka Botol, Charm, Bell, Shaker)</li>
                  <li>Coaster (Alas Gelas)</li>
                  <li>Stirrer (Pengaduk Minuman)</li>
                  <li>Pop Socket</li>
                  <li>Phonestrap</li>
                  <li>Pin</li>
                  <li>Standee</li>
                  <li>ID Card</li>
                  <li>Bento Stick</li>
                  <li>Magnet Kulkas</li>
                  <li>Pembatas Buku</li>
                  <li>Sticker</li>
                  <li>Poster</li>
                  <li>Pouch</li>
                  <li>Hiasan Dinding</li>
                  <li>Fūrin (Bel Angin)</li>
                  <li>Gelang</li>
                  <li>Kalung</li>
                  <li>Cetakan pada Alat Makan (Sendok, Garpu, Pisau)</li>
                  <li>Kotak Bento</li>
                  <li>Cetakan pada Gelas, Tumbler & Toples</li>
                  <li>File Folder</li>
                  <li>Plakat</li>
                  <li>Nomor Rumah</li>
                  <li>Diorama</li>
                  <li>Asbak Rokok</li>
                  <li>Tempat Tissue</li>
                  <li>Tempat Pensil</li>
                  <li>Produk Rajutan (Tas, Gantungan Kunci, dll) - bekerja sama dengan mitra UMKM Kira Kira Michi</li>
                  <li>Produk Custom lainnya sesuai keinginan Customer yang dapat didiskusikan lebih lanjut dengan Kira Kira Michi ✨</li>
                </ol>
              </div>
            </details>
            
            <details className="group bg-[#fbfaf9] p-4 rounded-xl [&_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-sm open:border open:border-[#f4f3f1] transition-all">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-text-main">
                <h3 className="text-base">2. Bahan-bahan apa saja yang bisa di-custom oleh Kira Kira Michi kak?</h3>
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
              <div className="mt-4 text-text-muted text-sm">
                <p className="leading-relaxed mb-3">Bahan-bahan yang sejauh ini bisa di-custom di Kira Kira Michi, antara lain :</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Akrilik</li>
                  <li>Kayu</li>
                  <li>Kulit Sintetis</li>
                  <li>Eva Sponge</li>
                  <li>Kain</li>
                  <li>Sticker</li>
                  <li>Rajutan (Berkolaborasi dengan Mitra UMKM Kira Kira Michi)</li>
                </ol>
              </div>
            </details>
            
            <details className="group bg-[#fbfaf9] p-4 rounded-xl [&_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-sm open:border open:border-[#f4f3f1] transition-all">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-text-main">
                <h3 className="text-base">3. Berapa Jumlah Minimum (MOQ) untuk memesan produk custom kak?</h3>
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
              <div className="mt-4 text-text-muted text-sm">
                <p className="leading-relaxed">Untuk memesan Produk Custom, bisa diorder dari 1 (satu) pcs saja yah kak! ✨</p>
                <p className="leading-relaxed mt-2">Jadi jangan khawatir kalau mau custom produk tapi hanya 1 (satu) pcs! Karena di Kira Kira Michi, bisa kak! 😉✨</p>
              </div>
            </details>
            
            <details className="group bg-[#fbfaf9] p-4 rounded-xl [&_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-sm open:border open:border-[#f4f3f1] transition-all">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-text-main">
                <h3 className="text-base">4. Apakah ada Harga Khusus untuk pengambilan produk custom dalam jumlah besar kak?</h3>
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
              <div className="mt-4 text-text-muted text-sm">
                <p className="leading-relaxed">Tentu saja kak! 😉</p>
                <p className="leading-relaxed mt-2">Pengambilan produk custom dalam jumlah besar mendapatkan harga khusus, sesuai dengan jumlah pengambilannya 😉</p>
              </div>
            </details>
            
            <details className="group bg-[#fbfaf9] p-4 rounded-xl [&_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-sm open:border open:border-[#f4f3f1] transition-all">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-text-main">
                <h3 className="text-base">5. Metode Pembayaran apa saja yang bisa digunakan untuk bertransaksi dengan Kira Kira Michi kak?</h3>
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
              <div className="mt-4 text-text-muted text-sm">
                <p className="leading-relaxed mb-3">Metode Pembayaran yang bisa digunakan untuk bertransaksi di Kira Kira Michi, antara lain:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Cash</li>
                  <li>QRIS</li>
                  <li>Transfer Bank (Mandiri, BNI, BRI)</li>
                  <li>PayPal</li>
                  <li>ShopeePay</li>
                  <li>e-commerce (Shopee, Tokopedia)</li>
                </ol>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;