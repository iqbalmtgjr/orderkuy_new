import { Link } from '@inertiajs/react';

import { login, register } from '@/routes';

export default function Welcome() {
    return (
        <>
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white shadow-lg">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-utensils text-2xl text-violet-600"></i>
                            <span className="gradient-text-orderkuy text-2xl font-bold">
                                OrderKuy
                            </span>
                        </div>
                        <div className="hidden space-x-8 md:flex">
                            <Link
                                href={login()}
                                className="text-gray-700 transition hover:text-purple-600"
                            >
                                Login
                            </Link>
                            <Link
                                href={register()}
                                className="text-gray-700 transition hover:text-purple-600"
                            >
                                Register
                            </Link>
                        </div>
                        <button className="rounded-lg bg-violet-600 px-6 py-2 text-white shadow-md transition hover:bg-violet-700 hover:shadow-lg">
                            Coba Gratis
                        </button>
                    </div>
                </div>
            </nav>

            {/*  Hero Section */}
            <section className="fade-in-orderkuy hero-sctn-orderkuy relative flex items-center justify-center overflow-hidden py-32">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700/70 to-transparent"></div>
                <div className="relative z-10 container mx-auto px-6">
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div className="slide-in-left-orderkuy">
                            <h1 className="mb-6 text-6xl leading-tight font-bold md:text-7xl">
                                Kelola Toko Makanan Anda Dengan Mudah
                            </h1>
                            <p className="mb-8 text-xl text-purple-100">
                                Sistem POS modern yang dirancang khusus untuk
                                toko makanan. Tingkatkan efisiensi penjualan dan
                                kelola inventori dengan mudah.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="transform rounded-lg bg-white px-8 py-3 font-semibold text-violet-600 shadow-lg transition hover:scale-105 hover:bg-violet-50 hover:shadow-xl">
                                    Mulai Sekarang
                                </button>
                                <button className="transform rounded-lg border-2 border-white bg-violet-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-violet-600 hover:shadow-xl">
                                    Lihat Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
                    <div className="text-center text-white">
                        <p className="mb-3 text-sm font-medium opacity-90">
                            Scroll untuk melihat lebih
                        </p>
                        <svg
                            className="mx-auto h-5 w-5 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            ></path>
                        </svg>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="bg-gray-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="fade-in-orderkuy mb-16 text-center">
                        <h2 className="gradient-text-orderkuy mb-4 text-4xl font-bold">
                            Fitur Unggulan
                        </h2>
                        <p className="text-lg text-gray-600">
                            Semua yang Anda butuhkan untuk mengelola toko
                            makanan Anda
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Feature 1 */}
                        <div className="stagger-item-orderkuy rounded-lg bg-white p-8 shadow-lg transition hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-violet-100">
                                <i className="fas fa-cash-register text-2xl text-violet-600"></i>
                            </div>
                            <h3 className="mb-4 text-xl font-bold">
                                Kasir Digital
                            </h3>
                            <p className="text-gray-600">
                                Proses pembayaran cepat dan akurat dengan
                                antarmuka yang user-friendly. Dukung berbagai
                                metode pembayaran.
                            </p>
                        </div>

                        {/*  Feature 2 */}
                        <div className="stagger-item-orderkuy rounded-lg bg-white p-8 shadow-lg transition hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-violet-100">
                                <i className="fas fa-boxes text-2xl text-violet-600"></i>
                            </div>
                            <h3 className="mb-4 text-xl font-bold">
                                Manajemen Inventori
                            </h3>
                            <p className="text-gray-600">
                                Pantau stok barang secara real-time, kelola
                                supplier, dan dapatkan notifikasi otomatis saat
                                stok menipis.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="stagger-item-orderkuy rounded-lg bg-white p-8 shadow-lg transition hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-violet-100">
                                <i className="fas fa-chart-line text-2xl text-violet-600"></i>
                            </div>
                            <h3 className="mb-4 text-xl font-bold">
                                Laporan Penjualan
                            </h3>
                            <p className="text-gray-600">
                                Analitik mendalam tentang penjualan, keuntungan,
                                dan tren bisnis Anda dengan grafik yang mudah
                                dipahami.
                            </p>
                        </div>

                        {/*  Feature 4  */}
                        <div className="stagger-item-orderkuy rounded-lg bg-white p-8 shadow-lg transition hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-violet-100">
                                <i className="fas fa-receipt text-2xl text-violet-600"></i>
                            </div>
                            <h3 className="mb-4 text-xl font-bold">
                                Manajemen Struk
                            </h3>
                            <p className="text-gray-600">
                                Cetak struk otomatis, simpan riwayat transaksi,
                                dan kelola pengembalian dengan mudah.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="stagger-item-orderkuy rounded-lg bg-white p-8 shadow-lg transition hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-violet-100">
                                <i className="fas fa-users text-2xl text-violet-600"></i>
                            </div>
                            <h3 className="mb-4 text-xl font-bold">
                                Manajemen Karyawan
                            </h3>
                            <p className="text-gray-600">
                                Kelola data karyawan, izin, gaji, dan performa
                                dengan sistem yang terintegrasi.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="stagger-item-orderkuy rounded-lg bg-white p-8 shadow-lg transition hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-violet-100">
                                <i className="fas fa-mobile-alt text-2xl text-violet-600"></i>
                            </div>
                            <h3 className="mb-4 text-xl font-bold">
                                Akses Mobile
                            </h3>
                            <p className="text-gray-600">
                                Akses sistem dari mana saja melalui aplikasi
                                mobile yang responsif dan cepat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="fade-in-orderkuy py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div className="slide-in-left-orderkuy">
                            <h2 className="gradient-text-orderkuy mb-8 text-4xl font-bold">
                                Mengapa Memilih OrderKuy?
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-lg font-bold">
                                            Mudah Digunakan
                                        </h3>
                                        <p className="text-gray-600">
                                            Interface intuitif yang tidak
                                            memerlukan pelatihan khusus
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-lg font-bold">
                                            Dukungan 24/7
                                        </h3>
                                        <p className="text-gray-600">
                                            Tim support kami siap membantu Anda
                                            kapan saja
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-lg font-bold">
                                            Harga Terjangkau
                                        </h3>
                                        <p className="text-gray-600">
                                            Paket berlangganan yang fleksibel
                                            dan sesuai budget Anda
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-lg font-bold">
                                            Keamanan Data
                                        </h3>
                                        <p className="text-gray-600">
                                            Enkripsi tingkat enterprise untuk
                                            melindungi data bisnis Anda
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-in-right-orderkuy hidden md:block">
                            <img
                                src="https://via.placeholder.com/400x400?text=Sistem+Aman"
                                alt="Keamanan Data"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="bg-gray-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="fade-in-orderkuy mb-16 text-center">
                        <h2 className="gradient-text-orderkuy mb-4 text-4xl font-bold">
                            Paket Berlangganan
                        </h2>
                        <p className="text-lg text-gray-600">
                            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Starter Package */}
                        <div className="scale-in-orderkuy overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-white">
                                <h3 className="mb-2 text-2xl font-bold">
                                    Starter
                                </h3>
                                <p className="mb-6 text-blue-100">
                                    Untuk toko kecil
                                </p>
                                <div className="text-4xl font-bold">
                                    Rp 199.000
                                    <span className="text-lg">/bulan</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <ul className="mb-8 space-y-4">
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>1 Terminal Kasir</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>Manajemen Inventori Dasar</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>Laporan Penjualan</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>5 GB Storage</span>
                                    </li>
                                </ul>
                                <button className="w-full rounded-lg bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600">
                                    Pilih Paket
                                </button>
                            </div>
                        </div>

                        {/* Professional Package */}
                        <div className="scale-in-orderkuy overflow-hidden rounded-lg border-2 border-violet-600 bg-white shadow-lg transition hover:shadow-xl">
                            <div className="bg-gradient-to-r from-violet-600 to-violet-700 p-8 text-white">
                                <div className="mb-4 inline-block rounded-full bg-red-500 px-3 py-1 text-sm font-bold">
                                    Paling Populer
                                </div>
                                <h3 className="mb-2 text-2xl font-bold">
                                    Professional
                                </h3>
                                <p className="mb-6 text-purple-100">
                                    Untuk toko menengah
                                </p>
                                <div className="text-4xl font-bold">
                                    Rp 499.000
                                    <span className="text-lg">/bulan</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <ul className="mb-8 space-y-4">
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>3 Terminal Kasir</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>Manajemen Inventori Lengkap</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>Laporan Analitik Mendalam</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>Manajemen Karyawan</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>50 GB Storage</span>
                                    </li>
                                </ul>
                                <button className="w-full rounded-lg bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700">
                                    Pilih Paket
                                </button>
                            </div>
                        </div>

                        {/* Enterprise Package */}
                        <div className="scale-in-orderkuy overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl">
                            <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-white">
                                <h3 className="mb-2 text-2xl font-bold">
                                    Enterprise
                                </h3>
                                <p className="mb-6 text-green-100">
                                    Untuk toko besar/jaringan
                                </p>
                                <div className="text-4xl font-bold">
                                    Hubungi Kami
                                </div>
                            </div>
                            <div className="p-8">
                                <ul className="mb-8 space-y-4">
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>Terminal Kasir Unlimited</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>Fitur Lengkap & Kustom</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>API Integration</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>Dedicated Support</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>Unlimited Storage</span>
                                    </li>
                                </ul>
                                <button className="w-full rounded-lg bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600">
                                    Hubungi Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="fade-in-orderkuy py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center">
                        <h2 className="gradient-text-orderkuy mb-4 text-4xl font-bold">
                            Apa Kata Pengguna Kami
                        </h2>
                        <p className="text-lg text-gray-600">
                            Ribuan pemilik toko telah mempercayai OrderKuy
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Testimonial 1 */}
                        <div className="slide-in-left-orderkuy rounded-lg bg-white p-8 shadow-lg">
                            <div className="mb-4 flex gap-1">
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                            </div>
                            <p className="mb-6 text-gray-600">
                                "OrderKuy benar-benar mengubah cara saya
                                mengelola toko makanan saya. Sangat mudah
                                digunakan dan customer service-nya luar biasa!"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://via.placeholder.com/50?text=Budi"
                                    alt="Budi Santoso"
                                    className="h-12 w-12 rounded-full"
                                />
                                <div>
                                    <p className="font-bold">Budi Santoso</p>
                                    <p className="text-sm text-gray-500">
                                        Pemilik Warung Makan Jaya
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="fade-in-orderkuy rounded-lg bg-white p-8 shadow-lg">
                            <div className="mb-4 flex gap-1">
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                            </div>
                            <p className="mb-6 text-gray-600">
                                "Dengan OrderKuy, saya bisa melihat laporan
                                penjualan real-time. Ini membantu saya membuat
                                keputusan bisnis yang lebih baik."
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://via.placeholder.com/50?text=Siti"
                                    alt="Siti Nurhaliza"
                                    className="h-12 w-12 rounded-full"
                                />
                                <div>
                                    <p className="font-bold">Siti Nurhaliza</p>
                                    <p className="text-sm text-gray-500">
                                        Pemilik Kedai Nasi Goreng
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="slide-in-right-orderkuy rounded-lg bg-white p-8 shadow-lg">
                            <div className="mb-4 flex gap-1">
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                            </div>
                            <p className="mb-6 text-gray-600">
                                "Harga terjangkau, fitur lengkap, dan support
                                yang responsif. OrderKuy adalah pilihan terbaik
                                untuk toko saya!"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://via.placeholder.com/50?text=Ahmad"
                                    alt="Ahmad Wijaya"
                                    className="h-12 w-12 rounded-full"
                                />
                                <div>
                                    <p className="font-bold">Ahmad Wijaya</p>
                                    <p className="text-sm text-gray-500">
                                        Pemilik Bakery & Cafe
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  CTA Section  */}
            <section className="hero-bg-orderkuy fade-in-orderkuy py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="mb-6 text-4xl font-bold">
                        Siap Meningkatkan Bisnis Anda?
                    </h2>
                    <p className="mb-8 text-lg text-purple-100">
                        Mulai uji coba gratis 30 hari tanpa perlu kartu kredit
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <button className="rounded-lg bg-white px-8 py-3 font-semibold text-violet-600 shadow-lg transition hover:bg-violet-50 hover:shadow-xl">
                            Coba Gratis Sekarang
                        </button>
                        <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-white hover:text-violet-600 hover:shadow-xl">
                            Jadwalkan Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-gray-900 py-16 text-gray-400">
                <div className="container mx-auto px-6">
                    <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div>
                            <div className="mb-4 flex items-center space-x-2">
                                <i className="fas fa-utensils text-2xl text-violet-400"></i>
                                <span className="text-xl font-bold text-white">
                                    OrderKuy
                                </span>
                            </div>
                            <p>
                                Sistem POS terpercaya untuk toko makanan Anda.
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-4 font-bold text-white">
                                Produk
                            </h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-white"
                                    >
                                        Fitur
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-white"
                                    >
                                        Harga
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-white"
                                    >
                                        Keamanan
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4 font-bold text-white">
                                Perusahaan
                            </h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-white"
                                    >
                                        Tentang Kami
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-white"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-white"
                                    >
                                        Karir
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4 font-bold text-white">
                                Hubungi Kami
                            </h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <i className="fas fa-envelope"></i>
                                    <a
                                        href="mailto:info@orderkuy.com"
                                        className="transition hover:text-white"
                                    >
                                        info@orderkuy.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="fas fa-phone"></i>
                                    <a
                                        href="tel:+6281234567890"
                                        className="transition hover:text-white"
                                    >
                                        +62 812 3456 7890
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>Jakarta, Indonesia</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col items-center justify-between md:flex-row">
                            <p>&copy; 2024 OrderKuy. Semua hak dilindungi.</p>
                            <div className="mt-4 flex gap-6 md:mt-0">
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
