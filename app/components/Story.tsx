import Image from 'next/image';

const Story = () => {
  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="story">
      <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-card border border-[#f4f3f1]">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Kolom Teks */}
          <div className="flex-1 flex flex-col gap-6">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Cerita Kami</span>
            <h2 className="text-3xl md:text-4xl font-black text-text-main leading-tight">
              Lebih dari sekadar makanan, ini adalah perjalanan kuliner.
            </h2>
            <p className="text-text-muted text-base leading-relaxed">
              Rasa Nusantara dimulai dengan hasrat sederhana: menghadirkan cita rasa masakan rumahan Indonesia yang otentik ke meja modern. Kami percaya bahwa makanan adalah bahasa universal yang menghubungkan orang-orang.
            </p>
            <p className="text-text-muted text-base leading-relaxed">
              Setiap rempah digiling dengan tangan, setiap saus dimasak perlahan selama berjam-jam, dan setiap bahan dipilih dengan tujuan. Kami berdedikasi untuk melestarikan warisan kaya masakan lokal kami.
            </p>
          </div>

          {/* Kolom Gambar - Fixed Layout */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4 items-start">
              {/* Gambar Kiri - Dengan Offset Atas */}
              <div className="mt-8">
                <Image 
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cooking ingredients"
                  width={400}
                  height={500}
                  className="w-full rounded-2xl shadow-lg object-cover aspect-[4/5]"
                  priority
                />
              </div>
              
              {/* Gambar Kanan */}
              <div>
                <Image 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400"
                  alt="Food preparation"
                  width={400}
                  height={500}
                  className="w-full rounded-2xl shadow-lg object-cover aspect-[4/5]"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;