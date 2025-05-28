import React, { useEffect, useState } from 'react';
import { Instagram, Mail, Phone, Facebook } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
// import { FaBeer } from 'react-icons/fa';


function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f4f1]">
      <header className="relative h-screen flex items-center justify-center bg-[#e8e1d9] overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: 'url(./assets/background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
          }}
        />
        <div className="absolute top-6 right-6 flex gap-4 z-10">
          <a href="https://instagram.com" className="text-white hover:text-[#e8e1d9] transition-colors">
            <Instagram size={24} />
          </a>
          <a href="mailto:contact@architect.com" className="text-white hover:text-[#e8e1d9] transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://wa.me/1234567890" className="text-white hover:text-[#e8e1d9] transition-colors">
            <Phone size={24} />
          </a>
          <a href="https://facebook.com" className="text-white hover:text-[#e8e1d9] transition-colors">
            <Facebook size={24} />
          </a>
          <a
            href="https://wa.me/7199999999"
            className="text-white hover:text-[#e8e1d9] transition-colors"
          > 
            <FaWhatsapp size={24} />
          </a>
        </div>
        <div className="text-center z-10" style={{ transform: `translateY(${scrollY * -0.2}px)` }}>
          <img
            src="./assets/logo.png"
            alt="logo"
            className="mx-auto h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg py-10"
          />
          <h1 className="text-6xl font-light text-white mb-4">Laís Garrido</h1>
          <p className="text-2xl text-[#e8e1d9]">Arquiteta & Designer de Interiores</p>
        </div>
      </header>

      <section className="relative py-20 px-8 md:px-16 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative" style={{ transform: `translateY(${(scrollY - 500) * 0.1}px)` }}>
            <img
              src="./assets/banner.jpeg"
              alt="Foto Profissional"
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
          </div>
          <div style={{ transform: `translateY(${(scrollY - 500) * 0.05}px)` }}>
            <h2 className="text-3xl font-light text-[#4a4139] mb-6">Sobre Mim</h2>
            <p className="text-[#867970] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consectetur earum, odio quae voluptates quis accusantium, nemo saepe necessitatibus asperiores fugit voluptas tempore excepturi nihil. Consequatur dolorem accusantium quibusdam nam.
            </p>
            <p className="text-[#867970] leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ab minus, necessitatibus cumque voluptatem perspiciatis sint error consequatur facere aperiam modi aspernatur nostrum a libero blanditiis molestias iste? Aspernatur, ipsa.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-8 md:px-16 lg:px-24 bg-[#f8f4f1] overflow-hidden">
        <h2 className="text-3xl font-light text-[#4a4139] mb-12 text-center">
          Meus Projetos
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "./assets/foto1.jpg",
            "./assets/foto2.jpg",
            "./assets/foto3.jpg",
            "./assets/foto4.jpg",
            "./assets/foto1.jpg",
            "./assets/foto2.jpg",
          ].map((url, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={url}
                alt={`Project ${index + 1}`}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-20 px-8 md:px-16 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-[#4a4139] mb-8">Vamos Conversar?</h2>
          <p className="text-[#867970] mb-12">
            Entre em contato e vamos transformar seu espaço!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
            <a href="mailto:contact@architect.com" className="flex items-center gap-2 text-[#867970] hover:text-[#5c534c] transition-colors">
              <Mail size={20} />
              <span>contacto@laisgarrido.com</span>
            </a>
            <a href="https://wa.me/7199999999" className="flex items-center gap-2 text-[#867970] hover:text-[#5c534c] transition-colors">
              <FaWhatsapp size={20} />
              <span>(71) 99999-9999</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#e8e1d9]">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#867970] mb-4 md:mb-0">© 2025 Cauã Garrido.</p>
          <div className="flex gap-4">
            <a href="https://instagram.com" className="text-[#867970] hover:text-[#5c534c] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="mailto:contact@architect.com" className="text-[#867970] hover:text-[#5c534c] transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://wa.me/1234567890" className="text-[#867970] hover:text-[#5c534c] transition-colors">
              <Phone size={20} />
            </a>
            <a href="https://facebook.com" className="text-[#867970] hover:text-[#5c534c] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://wa.me/7199999999" className="text-[#867970] hover:text-[#5c534c] transition-colors">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
