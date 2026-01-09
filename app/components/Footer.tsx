import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#f4f3f1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    d="M5.275 13.5c0.11665 -0.2 0.20415 -0.41665 0.2625 -0.65 0.05835 -0.23335 0.0875 -0.51665 0.0875 -0.85 0 -0.58335 -0.16665 -1.2125 -0.5 -1.8875 -0.33333 -0.675 -0.5 -1.25415 -0.5 -1.7375 0 -0.18335 0.01667 -0.39585 0.05 -0.6375 0.033335 -0.24165 0.133335 -0.4875 0.3 -0.7375h1.25c-0.13335 0.23335 -0.225 0.475 -0.275 0.725 -0.05 0.25 -0.075 0.46665 -0.075 0.65 0 0.56665 0.16665 1.16665 0.5 1.8 0.33335 0.63335 0.5 1.24165 0.5 1.825 0 0.33335 -0.02915 0.61665 -0.0875 0.85 -0.05835 0.23335 -0.14585 0.45 -0.2625 0.65h-1.25Zm6.5 0c0.11665 -0.2 0.20415 -0.41665 0.2625 -0.65 0.05835 -0.23335 0.0875 -0.51665 0.0875 -0.85 0 -0.58335 -0.16665 -1.2125 -0.5 -1.8875 -0.33335 -0.675 -0.5 -1.25415 -0.5 -1.7375 0 -0.18335 0.01665 -0.39585 0.05 -0.6375 0.03335 -0.24165 0.13335 -0.4875 0.3 -0.7375h1.25c-0.13335 0.23335 -0.225 0.475 -0.275 0.725 -0.05 0.25 -0.075 0.46665 -0.075 0.65 0 0.56665 0.16665 1.16665 0.5 1.8 0.33335 0.63335 0.5 1.24165 0.5 1.825 0 0.33335 -0.02915 0.61665 -0.0875 0.85 -0.05835 0.23335 -0.14585 0.45 -0.2625 0.65h-1.25Zm-3.25 0c0.11665 -0.2 0.20415 -0.41665 0.2625 -0.65 0.05835 -0.23335 0.0875 -0.51665 0.0875 -0.85 0 -0.58335 -0.16665 -1.2125 -0.5 -1.8875 -0.33335 -0.675 -0.5 -1.25415 -0.5 -1.7375 0 -0.18335 0.01665 -0.39585 0.05 -0.6375 0.03335 -0.24165 0.13335 -0.4875 0.3 -0.7375h1.25c-0.13335 0.23335 -0.225 0.475 -0.275 0.725 -0.05 0.25 -0.075 0.46665 -0.075 0.65 0 0.56665 0.16665 1.16665 0.5 1.8 0.33335 0.63335 0.5 1.24165 0.5 1.825 0 0.33335 -0.02915 0.61665 -0.0875 0.85 -0.05835 0.23335 -0.14585 0.45 -0.2625 0.65h-1.25Zm1.225 8.5c-1.66665 0 -3.15 -0.57085 -4.45 -1.7125C4 19.14585 3.233335 17.75 3 16.1c-0.03333 -0.23335 0.020835 -0.43335 0.1625 -0.6 0.14167 -0.16665 0.3375 -0.25 0.5875 -0.25H15l1.125 -10.825c0.08335 -0.683335 0.38335 -1.258335 0.9 -1.725C17.54165 2.233335 18.15 2 18.85 2c0.76665 0 1.41665 0.266665 1.95 0.8 0.53335 0.533335 0.8 1.183335 0.8 1.95 0 0.15 -0.00835 0.34585 -0.025 0.5875 -0.01665 0.24165 -0.04165 0.45415 -0.075 0.6375l-1.475 -0.2 0.0375 -0.425c0.025 -0.28335 0.0375 -0.483335 0.0375 -0.6 0 -0.35 -0.12085 -0.645835 -0.3625 -0.8875C19.49585 3.620835 19.2 3.5 18.85 3.5c-0.33335 0 -0.61665 0.108335 -0.85 0.325 -0.23335 0.216665 -0.36665 0.483335 -0.4 0.8L16.45 15.75c-0.18335 1.76665 -0.9125 3.25 -2.1875 4.45 -1.275 1.2 -2.77915 1.8 -4.5125 1.8Zm0 -1.5c1.08335 0 2.075 -0.325 2.975 -0.975 0.9 -0.65 1.56665 -1.575 2 -2.775H4.7c0.43335 1.2 1.1125 2.125 2.0375 2.775 0.925 0.65 1.92915 0.975 3.0125 0.975Z"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-text-main">Rasa Nusantara</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Menghadirkan cita rasa asli Indonesia ke piring Anda, satu per satu hidangan.
            </p>
            <div className="flex gap-4 mt-2">
              <a className="text-text-muted hover:text-primary transition-colors" href="#">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-text-main mb-4">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li><a className="text-text-muted text-sm hover:text-primary transition-colors" href="#">Beranda</a></li>
              <li><a className="text-text-muted text-sm hover:text-primary transition-colors" href="#menu">Menu</a></li>
              <li><a className="text-text-muted text-sm hover:text-primary transition-colors" href="#story">Cerita Kami</a></li>
              <li><a className="text-text-muted text-sm hover:text-primary transition-colors" href="#reviews">Ulasan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-main mb-4">Bantuan</h4>
            <ul className="space-y-3">
              <li><a className="text-text-muted text-sm hover:text-primary transition-colors" href="#">FAQ</a></li>
              <li><a className="text-text-muted text-sm hover:text-primary transition-colors" href="#">Kebijakan Privasi</a></li>
              <li><a className="text-text-muted text-sm hover:text-primary transition-colors" href="#">Hubungi Kami</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-main mb-4">Mitra Kami</h4>
            <p className="text-text-muted text-sm mb-4">Bangga menjadi bagian dari ekosistem digital UMKM Indonesia.</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-6 h-6 text-green-600"
                  aria-hidden="true"
                >
                  <path
                    d="M9.419 8.682a3.625 3.625 0 0 1-3.528 4.459v-2.9m3.528-1.559a9.05 9.05 0 0 0 3.722-7.322 9.05 9.05 0 0 0-7.322 3.722m3.6 3.6a9.018 9.018 0 0 1-3.528 1.559m-.072-5.16a3.625 3.625 0 0 0-4.459 3.528h2.9m1.56-3.528a9.018 9.018 0 0 0-1.559 3.528m1.63 1.631c-.062.013-.125.025-.188.036a9.117 9.117 0 0 1-1.479-1.479 9.002 9.002 0 0 1 .036-.188m-1.353 1.444a2.715 2.715 0 0 0-1.062 2.602 2.715 2.715 0 0 0 2.602-1.062M9.969 5.438a.906.906 0 1 1-1.813 0 .906.906 0 0 1 1.813 0Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-bold text-sm text-text-main">DekatLokal</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="w-6 h-6"
                  fill="#1565C0"
                  stroke="#1565C0"
                  strokeWidth="0.8"
                  aria-hidden="true"
                >
                  <path d="M15.84 5.588a.33.33 0 0 0-.023-.166l-1.082-3.784A1.206 1.206 0 0 0 13.578.764H2.422a1.206 1.206 0 0 0-1.157.874L.183 5.422a.333.333 0 0 0-.023.166v1.206c0 .95.447 1.843 1.206 2.412v5.428c0 .333.27.603.603.603h12.062c.333 0 .603-.27.603-.603V9.206c.76-.57 1.206-1.463 1.206-2.412V5.588ZM2.422 1.97h11.157l.86 3.015H1.563l.86-3.015Zm3.77 4.221h3.618v.603c0 1.393-1.508 2.263-2.714 1.567-.56-.323-.904-.92-.904-1.567v-.603Zm-1.207 0v.603c0 1.359-1.443 2.232-2.647 1.603a.5.5 0 0 1-.137-.08c-.52-.332-.834-.906-.834-1.523v-.603h3.618Zm8.443 7.84H2.572V9.75c.2.04.4.06.603.06.95 0 1.843-.447 2.412-1.206 1.206 1.608 3.619 1.608 4.825 0 .57.76 1.463 1.206 2.412 1.206.203 0 .405-.02.603-.06v4.282Zm.372-5.714a.54.54 0 0 1-.136.08c-1.204.63-2.647-.243-2.648-1.602v-.603h3.618v.603c0 .617-.315 1.19-.834 1.523Z" />
                </svg>
                <span className="font-bold text-sm text-text-main">Rumah BUMN</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#f4f3f1] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-text-muted text-xs">
            ©2026 Rasa Nusantara. All Rights Reserved | Powered by DekatLokal
          </p>
          <p className="text-text-muted text-xs flex items-center gap-1 justify-center">
            Dibuat dengan <span className="material-symbols-outlined text-xs text-red-500 fill-current">favorite</span> di Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;