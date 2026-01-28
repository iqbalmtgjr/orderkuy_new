import { Link } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { toast } from 'react-hot-toast';

import PageBreadcrumb from '@/components/PageBreadCrumb';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import InputField from '@/components/ui/InputField';
import InputGroup from '@/components/ui/InputGroup';
import InputSelect from '@/components/ui/InputSelect';
import useEditUserForm from '@/hooks/useEditUserForm';
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

const Edit = ({ user, roles, shops }: Props) => {
    const title = 'Ubah Data User';

    const { data, setData, put, processing, errors } = useEditUserForm(user);

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        put(users.update.url(user.encrypted_id), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Data berhasil diubah');
            },
        });
    };

    const optionRoles = roles.map((role) => ({
        value: String(role.id),
        label: role.name,
    }));

    const optionShops = shops.map((shop) => ({
        value: String(shop.id),
        label: shop.name,
    }));

    return (
        <AppLayout>
            <PageBreadcrumb pageTitle={title} />
            <div className="space-y-6">
                <Card title={title}>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <InputGroup label="Nama Lengkap" htmlFor="name">
                                <InputField
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Nama Lengkap.."
                                    value={data.name}
                                    onChange={(e) => {
                                        setData('name', e.target.value);
                                    }}
                                    error={!!errors.name}
                                    hint={errors.name}
                                />
                            </InputGroup>
                            <InputGroup label="Username" htmlFor="username">
                                <InputField
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username.."
                                    value={data.username}
                                    onChange={(e) => {
                                        setData('username', e.target.value);
                                    }}
                                    error={!!errors.username}
                                    hint={errors.username}
                                />
                            </InputGroup>
                            <InputGroup label="Email" htmlFor="email">
                                <InputField
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email.."
                                    value={data.email}
                                    onChange={(e) => {
                                        setData('email', e.target.value);
                                    }}
                                    error={!!errors.email}
                                    hint={errors.email}
                                />
                            </InputGroup>
                            <InputGroup label="Toko" htmlFor="shop_id">
                                <InputSelect
                                    options={optionShops}
                                    placeholder="Pilih Toko.."
                                    value={data.shop_id}
                                    onChange={(value) =>
                                        setData('shop_id', value)
                                    }
                                    id="shop_id"
                                    name="shop_id"
                                    className="dark:bg-dark-900"
                                    error={!!errors.shop_id}
                                    hint={errors.shop_id}
                                />
                            </InputGroup>
                            <InputGroup label="Role" htmlFor="role_id">
                                <InputSelect
                                    options={optionRoles}
                                    placeholder="Pilih Role.."
                                    value={data.role_id}
                                    onChange={(value) =>
                                        setData('role_id', value)
                                    }
                                    id="role_id"
                                    name="role_id"
                                    className="dark:bg-dark-900"
                                    error={!!errors.role_id}
                                    hint={errors.role_id}
                                />
                            </InputGroup>
                        </div>
                        <div className="mt-4 flex justify-end space-x-3">
                            <Link
                                href={users.index.url()}
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-3 text-sm text-white shadow-theme-xs transition hover:bg-red-600 disabled:bg-red-300"
                            >
                                Kembali
                            </Link>
                            <Button
                                type="submit"
                                size="sm"
                                disabled={processing}
                            >
                                {processing && (
                                    <LoaderCircle className="h-4 w-4 animate-spin" />
                                )}
                                Simpan
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </AppLayout>
    );
};

export default Edit;
