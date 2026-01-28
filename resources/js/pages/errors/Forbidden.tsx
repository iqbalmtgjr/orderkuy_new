import { Link } from '@inertiajs/react';

export default function Forbidden() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-500">403</h1>
                <p className="mt-4 text-xl font-semibold">Akses Ditolak</p>
                <p className="mt-2 text-gray-600">
                    Kamu tidak memiliki izin untuk mengakses halaman ini.
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-block rounded bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700"
                >
                    Kembali ke Dashboard
                </Link>
            </div>
        </div>
    );
}
