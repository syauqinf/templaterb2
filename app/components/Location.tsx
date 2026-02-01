const Location = () => {
  return (
    <section className="py-20 bg-white" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Lokasi</span>
            <h2 className="text-3xl font-black text-text-main mt-2">Lokasi Kami</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Alamat Tempat Usaha</h3>
              <p className="text-text-muted mb-4">Jl. Contoh Alamat No. 123, Kota, Provinsi 12345</p>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1234567890!2d107.12345678901234!3d-6.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDcnMjIuNCJTIDEwN8KwMDcnMzIuNCJF!5e0!3m2!1sen!2sid!4v1234567890123" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kira Kira Michi"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;