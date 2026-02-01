import React from 'react';

const Process = () => {
  return (
    <section className="py-20 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Alur Pemesanan</h2>
          <p className="text-text-muted max-w-2xl mx-auto">Ikuti langkah-langkah mudah untuk memesan merchandise favorit kamu</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Choose Merchandise */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-kkm-red/10 flex items-center justify-center mb-4">
              <img 
                src="/process/merchandise.svg"
                alt="Choose Merchandise Icon"
                className="w-8 h-8 text-kkm-red"
              />
            </div>
            <h3 className="text-xl font-bold text-text-main mb-2">Pilih Merchandise</h3>
            <p className="text-text-muted">Pilih jenis dan desain merchandise favorit kakak, konsultasikan dengan kami jika ingin detail lebih</p>
          </div>

          {/* Payment */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-kkm-yellow/10 flex items-center justify-center mb-4">
              <img 
                src="/process/payment.svg"
                alt="Payment Icon"
                className="w-8 h-8 text-kkm-yellow"
              />
            </div>
            <h3 className="text-xl font-bold text-text-main mb-2">Pembayaran</h3>
            <p className="text-text-muted">Pilih metode pembayaran yang nyaman dan sesuai dengan pilihan kakak</p>
          </div>

          {/* Delivery */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <img 
                src="/process/delivery.svg"
                alt="Delivery Icon"
                className="w-8 h-8 text-green-500"
              />
            </div>
            <h3 className="text-xl font-bold text-text-main mb-2">Pengiriman</h3>
            <p className="text-text-muted">Pengiriman aman menggunakan ekpedisi terpercaya yang dapat kakak pilih</p>
          </div>

          {/* Review */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-kkm-dark/10 flex items-center justify-center mb-4">
              <img 
                src="/process/review.svg"
                alt="Review Icon"
                className="w-8 h-8 text-kkm-dark"
              />
            </div>
            <h3 className="text-xl font-bold text-text-main mb-2">Ulasan</h3>
            <p className="text-text-muted">Jangan lupa Review pesanan kakak sebagai feedback untuk kami kak! d(^o^)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;