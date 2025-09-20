// App.jsx
import React, { useEffect, useState } from "react";
import "./styles.css";
import fotoKu from "./assets/fotoku.jpg";

export default function App() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="site-header" role="banner">
        <div className="wrap">
          <div className="id-block">
            <img src={fotoKu} alt="Foto profil" className="fotoku" />
            <div>
              <h1 className="name">Suparmin</h1>
              <p className="role">
                Lulusan STTTelkom Bandung — Teknik dan Sistem Informatika (1999)
              </p>
              <ul className="contact-list">
                <li>mazparmien@gmail.com</li>
                <li>+62 85711706947</li>
                <li>Bogor, Indonesia</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main id="main" className="wrap">
        <section>
          <h2>Ringkasan</h2>
          <p className="lead">
            Saya Suparmin, lulusan <strong>STTTelkom Bandung tahun 1999</strong>{" "}
            jurusan <strong>Teknik dan Sistem Informatika</strong>, dengan
            pengalaman di bidang teknologi informasi, pengembangan perangkat
            lunak, dan sistem informasi.
          </p>
        </section>

        <section>
          <h2>Pendidikan</h2>
          <ul className="simple-list">
            <li>
              <strong>D3 Teknik dan Sistem Informatika</strong> — STTTelkom
              Bandung (1995–1999)
            </li>
          </ul>
        </section>

        <section>
          <h2>Minat</h2>
          <ul className="chips">
            <li>Teknologi Informasi</li>
            <li>Pemrograman</li>
            <li>Manajemen Sistem</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="wrap">
          <small>
            &copy; <span>{year}</span> Suparmin. Dibuat dengan React JS.
          </small>
        </div>
      </footer>
    </div>
  );
}
