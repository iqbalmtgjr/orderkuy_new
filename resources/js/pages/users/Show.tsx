import { Link } from '@inertiajs/react';

import PageBreadcrumb from '@/components/PageBreadCrumb';
import Card from '@/components/ui/Card';
import AppLayout from '@/layouts/AppLayout';
import users from '@/routes/users';

type Role = {
    id: number;
    name: string;
};

type Shop = {
    id: number;
    name: string;
};

type User = {
    id: number;
    encrypted_id: string;
    name: string;
    username: string;
    email: string;
    role_id: number;
    shop_id: number;
    role: Role;
    shop: Shop;
};

type Props = {
    user: User;
    roles: Role[];
    shops: Shop[];
};
const Show = ({ user }: Props) => {
    const title = 'Detail User';

    return (
        <AppLayout>
            <PageBreadcrumb pageTitle={title} />
            <div className="space-y-6">
                <Card title={title}>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-7 2xl:gap-x-32">
                        <div className="flex items-center gap-10">
                            <p className="text-md w-40 leading-normal font-semibold text-gray-800 dark:text-white/90">
                                Nama Lengkap
                            </p>
                            <p className="text-sm text-gray-800 dark:text-white/90">
                                {user.name}
                            </p>
                        </div>
                        <div className="flex items-center gap-10">
                            <p className="text-md w-40 leading-normal font-semibold text-gray-800 dark:text-white/90">
                                Username
                            </p>
                            <p className="text-sm text-gray-800 dark:text-white/90">
                                {user.username}
                            </p>
                        </div>
                        <div className="flex items-center gap-10">
                            <p className="text-md w-40 leading-normal font-semibold text-gray-800 dark:text-white/90">
                                Email
                            </p>
                            <p className="text-sm text-gray-800 dark:text-white/90">
                                {user.email}
                            </p>
                        </div>
                        <div className="flex items-center gap-10">
                            <p className="text-md w-40 leading-normal font-semibold text-gray-800 dark:text-white/90">
                                Toko
                            </p>
                            <p className="text-sm text-gray-800 dark:text-white/90">
                                {user.shop?.name}
                            </p>
                        </div>
                        <div className="flex items-center gap-10">
                            <p className="text-md w-40 leading-normal font-semibold text-gray-800 dark:text-white/90">
                                Role
                            </p>
                            <p className="text-sm text-gray-800 dark:text-white/90">
                                {user.role?.name}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Link
                            href={users.index.url()}
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
