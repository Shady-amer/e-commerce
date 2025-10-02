import React,{useState} from 'react'

const Section2 = () => {
  const images = [
    { id: 1, src: "/g1.jpg", alt: "image 1", caption: "Beautiful Nature" },
    { id: 2, src: "/g2.jpg", alt: "image 2", caption: "Mountain View" },
    { id: 3, src: "/g4.jpg", alt: "image 3", caption: "City Lights" },
    { id: 4, src: "/g5.jpg", alt: "image 4", caption: "Sunny Beach" },
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
    document.body.style.overflow = "hidden"; 
  };

  const close = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="p-4 mt-32">
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <div key={img.id} className="overflow-hidden rounded-lg">
            <button
              onClick={() => openAt(i)}
              className="focus:outline-none"
              aria-label={`Open ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </button>

            <p className="text-center mt-2 text-sm text-red-500">{img.caption}</p>
          </div>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={close}
              className="absolute top-3 right-3 text-white text-2xl p-1 rounded-full hover:bg-white/10"
            >
              ✕
            </button>

            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl p-2 rounded-full hover:bg-white/10"
            >
              ‹
            </button>

            <img
              src={images[index].src}
              alt={images[index].alt}
              className="w-full max-h-[80vh] object-contain rounded-md"
            />

            <p className="text-center mt-3 text-white text-lg">{images[index].caption}</p>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl p-2 rounded-full hover:bg-white/10"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section2;
