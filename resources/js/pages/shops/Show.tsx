import { Link } from '@inertiajs/react';

import PageBreadcrumb from '@/components/PageBreadCrumb';
import Card from '@/components/ui/Card';
import AppLayout from '@/layouts/AppLayout';
import shops from '@/routes/shops';

type Shop = {
    id: number;
    encrypted_id: string;
    name: string;
    address: string;
    status: number;
    operational: number;
    image: File | null;
};

type Props = {
    shop: Shop;
};

const Show = ({ shop }: Props) => {
    const title = 'Detail Shop';

    return (
        <AppLayout>
            <PageBreadcrumb pageTitle={title} />
            <div className="space-y-6">
                <Card title={title}>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-7 2xl:gap-x-32">
                        <div className="flex items-center gap-10">
                            <p className="text-md w-40 leading-normal font-semibold text-gray-800 dark:text-white/90">
                                Nama Toko
                            </p>
                            <p className="text-sm text-gray-800 dark:text-white/90">
                                {shop.name}
                            </p>
                        </div>
                        <div className="flex items-center gap-10">
                            <p className="text-md w-40 leading-normal font-semibold text-gray-800 dark:text-white/90">
                                Alamat Toko
                            </p>
                            <p className="text-sm text-gray-800 dark:text-white/90">
                                {shop.address}
                            </p>
                        </div>
                        <div className="flex items-center gap-10">
                            <p className="text-md w-40 leading-normal font-semibold text-gray-800 dark:text-white/90">
                                Status
                            </p>
                            <p className="text-sm text-gray-800 dark:text-white/90">
                                {shop.status == 1 ? 'Aktif' : 'Tidak Aktif'}
                            </p>
                        </div>
                        <div className="flex items-center gap-10">
                            <p className="text-md w-40 leading-normal font-semibold text-gray-800 dark:text-white/90">
                                Operasional
                            </p>
                            <p className="text-sm text-gray-800 dark:text-white/90">
                                {shop.operational == 1 ? 'Buka' : 'Tutup'}
                            </p>
                        </div>
                        <div className="flex gap-10">
                            <p className="text-md w-40 leading-normal font-semibold text-gray-800 dark:text-white/90">
                                Gambar Toko
                            </p>
                            <p className="text-sm text-gray-800 dark:text-white/90">
                                <div className="relative">
                                    <div className="overflow-hidden">
                                        <img
                                            src={
                                                shop.image
                                                    ? `/storage/shops/${shop.image}`
                                                    : ''
                                            }
                                            alt="Gambar Toko Preview"
                                            className="mb-4 h-64 w-64 rounded-xl border border-gray-200 dark:border-gray-800"
                                        />
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Link
                            href={shops.index.url()}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-3 text-sm text-white shadow-theme-xs transition hover:bg-red-600 disabled:bg-red-300"
                        >
                            Kembali
                        </Link>
                    </div>
                </Card>
            </div>
        </AppLayout>
    );
};

export default Show;
