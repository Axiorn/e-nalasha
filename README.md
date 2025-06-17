e-Nalasha

e-Nalasha adalah sebuah platform web inovatif yang didedikasikan untuk busana muslimah. Proyek ini bertujuan untuk menyediakan pengalaman belanja online yang mulus dan menyenangkan bagi para wanita Muslim yang mencari pakaian modis dan sesuai syariat.
Fitur Utama

    Katalog Produk Luas: Jelajahi berbagai macam busana muslimah, mulai dari hijab, gamis, tunik, hingga aksesoris.
    Antarmuka Pengguna Intuitif: Desain yang bersih dan mudah digunakan memastikan navigasi yang nyaman.
    Pencarian dan Filter Canggih: Temukan produk yang kamu inginkan dengan cepat menggunakan fitur pencarian dan filter yang lengkap.
    Detail Produk Lengkap: Informasi detail tentang setiap produk, termasuk deskripsi, ukuran, dan gambar berkualitas tinggi.
    Proses Pembelian Aman: Pengalaman checkout yang aman dan efisien.

Teknologi yang Digunakan

Proyek e-Nalasha dibangun dengan teknologi web modern untuk memastikan performa dan skalabilitas:

    Laravel: Framework PHP yang kuat dan elegan untuk pengembangan backend.
    Tailwind CSS: Framework CSS yang utilitas-first untuk mendesain antarmuka pengguna yang responsif dan menarik.

Instalasi dan Konfigurasi

Untuk menjalankan proyek e-Nalasha di lingkungan lokal kamu, ikuti langkah-langkah berikut:

    Clone repositori:
    Bash

git clone https://github.com/NamaPenggunaGitHub/e-Nalasha.git
cd e-Nalasha

Instal dependensi Composer:
Bash

composer install

Buat file .env dan konfigurasikan:
Bash

cp .env.example .env

Edit file .env dan sesuaikan pengaturan database kamu.

Buat kunci aplikasi:
Bash

php artisan key:generate

Jalankan migrasi database:
Bash

php artisan migrate

Jalankan server pengembangan Laravel:
Bash

php artisan serve

Jalankan pengembangan Tailwind CSS:
Bash

npm install
npm run dev

Atau untuk mode produksi:
Bash

    npm run build

Sekarang kamu bisa mengakses aplikasi di http://127.0.0.1:8000 (atau port lain yang ditampilkan oleh php artisan serve).
Kontribusi

Kami menyambut kontribusi dari komunitas! Jika kamu ingin berkontribusi pada proyek e-Nalasha, silakan ikuti langkah-langkah berikut:

    Fork repositori ini.
    Buat branch baru untuk fitur atau perbaikan kamu (git checkout -b feature/nama-fitur).
    Lakukan perubahan dan commit (git commit -m 'Tambahkan fitur baru').
    Push ke branch kamu (git push origin feature/nama-fitur).
    Buat Pull Request.

Lisensi

Proyek ini dilisensikan di bawah lisensi MIT. Lihat file LICENSE untuk detail lebih lanjut.
