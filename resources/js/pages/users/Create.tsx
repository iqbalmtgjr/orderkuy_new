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
import useCreateUserForm from '@/hooks/useCreateUserForm';
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

type Props = {
    roles: Role[];
    shops: Shop[];
};

const Create = ({ roles, shops }: Props) => {
    const title = 'Tambah User Baru';

    const { data, setData, post, processing, errors, reset } =
        useCreateUserForm();

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(users.store.url(), {
            onFinish: () => reset('password', 'password_confirmation'),
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Data berhasil ditambahkan');
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
                <Card title="Data User Baru">
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
                            <InputGroup label="Password" htmlFor="password">
                                <InputField
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password.."
                                    value={data.password}
                                    onChange={(e) => {
                                        setData('password', e.target.value);
                                    }}
                                    error={!!errors.password}
                                    hint={errors.password}
                                />
                            </InputGroup>
                            <InputGroup
                                label="Konfirmasi Password"
                                htmlFor="password_confirmation"
                            >
                                <InputField
                                    type="password"
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    placeholder="Konfirmasi Password.."
                                    value={data.password_confirmation}
                                    onChange={(e) => {
                                        setData(
                                            'password_confirmation',
                                            e.target.value,
                                        );
                                    }}
                                    error={!!errors.password_confirmation}
                                    hint={errors.password_confirmation}
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

export default Create;
