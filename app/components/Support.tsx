const Support = () => {
  return (
    <section className="py-12 bg-white border-y border-[#f4f3f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-primary font-bold tracking-widest uppercase text-xs">
          Didukung Oleh Kolaborasi Lokal
        </span>

        <p className="mt-4 text-text-muted text-base max-w-3xl mx-auto leading-relaxed">
          Rasa Nusantara berkolaborasi dengan program pendampingan digital
          bersama{" "}
          <span className="text-text-main font-semibold">DekatLokal</span> dan{" "}
          <span className="text-text-main font-semibold">
            Rumah BUMN Makassar
          </span>{" "}
          untuk memperluas jangkauan pemasaran dan meningkatkan kualitas
          layanan.
        </p>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
          {/* DekatLokal */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="bg-primary/20 p-2 rounded-lg text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-6 h-6"
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
            </div>
            <span className="font-bold text-xl text-text-main">DekatLokal</span>
          </div>

          {/* Rumah BUMN */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M15.84 5.588a.33.33 0 0 0-.023-.166l-1.082-3.784A1.206 1.206 0 0 0 13.578.764H2.422a1.206 1.206 0 0 0-1.157.874L.183 5.422a.333.333 0 0 0-.023.166v1.206c0 .95.447 1.843 1.206 2.412v5.428c0 .333.27.603.603.603h12.062c.333 0 .603-.27.603-.603V9.206c.76-.57 1.206-1.463 1.206-2.412V5.588ZM2.422 1.97h11.157l.86 3.015H1.563l.86-3.015Zm3.77 4.221h3.618v.603c0 1.393-1.508 2.263-2.714 1.567-.56-.323-.904-.92-.904-1.567v-.603Zm-1.207 0v.603c0 1.359-1.443 2.232-2.647 1.603a.5.5 0 0 1-.137-.08c-.52-.332-.834-.906-.834-1.523v-.603h3.618Zm8.443 7.84H2.572V9.75c.2.04.4.06.603.06.95 0 1.843-.447 2.412-1.206 1.206 1.608 3.619 1.608 4.825 0 .57.76 1.463 1.206 2.412 1.206.203 0 .405-.02.603-.06v4.282Zm.372-5.714a.54.54 0 0 1-.136.08c-1.204.63-2.647-.243-2.648-1.602v-.603h3.618v.603c0 .617-.315 1.19-.834 1.523Z" />
              </svg>
            </div>
            <span className="font-bold text-xl text-text-main">Rumah BUMN</span>
          </div>

          {/* Komdigi */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="bg-red-100 p-2 rounded-lg text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M15.737 6.279l-1.563-3.128c-.242-.484-.831-.68-1.315-.438L11.335 3.475l-3.209-.849a.5.5 0 00-.251 0L4.665 3.475 3.142 2.714c-.484-.242-1.073-.046-1.315.438L.264 6.279c-.242.484-.046 1.073.438 1.315l1.654.828 3.399 2.427c.05.036.106.062.166.077l3.92 0.98a.5.5 0 00.466-.129l3.373-3.374 1.619-.81c.483-.242.68-.83.438-1.314zM12.375 8.323l-2.108-1.688c-.196-.157-.478-.14-.654.037-1.091 1.099-2.307.96-3.083.47l2.649-2.573h1.948l1.667 3.333zM2.703 3.59l1.254.626-1.566 3.127-1.252-.625zM9.809 10.887l-3.56-.89-3.013-2.152 1.715-3.43 3.05-.808.6-.159-2.757 2.676c-.443.443-.362 1.183.167 1.52 1.259.804 2.779.674 3.976-.306l1.694 1.36zM13.607 7.342l-1.563-3.124 1.253-.628 1.564 3.127zM8.232 13.019c-.054.218-.25.37-.475.371a.5.5 0 01-.119-.015l-2.553-.638a.2.2 0 01-.166-.077l-1.614-1.153c-.297-.233-.23-.7.12-.84a.5.5 0 01.45.044l1.538 1.1 2.465.615c.262.065.422.331.356.594z" />
              </svg>
            </div>
            <span className="font-bold text-xl text-text-main">Komdigi</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;