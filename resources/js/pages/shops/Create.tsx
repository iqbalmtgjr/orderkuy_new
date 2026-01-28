import { Link } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import { toast } from 'react-hot-toast';

import PageBreadcrumb from '@/components/PageBreadCrumb';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import InputField from '@/components/ui/InputField';
import InputFile from '@/components/ui/InputFile';
import InputGroup from '@/components/ui/InputGroup';
import InputSelect from '@/components/ui/InputSelect';
import useCreateShopForm from '@/hooks/useCreateShopForm';
import AppLayout from '@/layouts/AppLayout';
import shops from '@/routes/shops';

type Status<T = string> = {
    value: T;
    label: string;
};

type Operational<T = string> = {
    value: T;
    label: string;
};

type Props = {
    statuses: Status[];
    operationals: Operational[];
};
const Create = ({ statuses, operationals }: Props) => {
    const title = 'Tambah Toko Baru';

    const [preview, setPreview] = useState<string | null>(null);
    const { data, setData, post, processing, errors } = useCreateShopForm();

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(shops.store.url(), {
            preserveScroll: true,
            forceFormData: true,
            onSuccess: () => {
                toast.success('Data berhasil ditambahkan');
            },
        });
    };

    const optionStatus = statuses.map((status) => ({
        value: String(status.value),
        label: status.label,
    }));

    const optionOperational = operationals.map((operational) => ({
        value: String(operational.value),
        label: operational.label,
    }));

    return (
        <AppLayout>
            <div>
                <PageBreadcrumb pageTitle={title} />
                <div className="space-y-6">
                    <Card title="Data Toko Baru">
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <InputGroup label="Nama Toko" htmlFor="name">
                                    <InputField
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Nama Toko.."
                                        value={data.name}
                                        onChange={(e) => {
                                            setData('name', e.target.value);
                                        }}
                                        error={!!errors.name}
                                        hint={errors.name}
                                    />
                                </InputGroup>

                                <InputGroup
                                    label="Alamat Toko"
                                    htmlFor="address"
                                >
                                    <InputField
                                        type="text"
                                        id="address"
                                        name="address"
                                        placeholder="Alamat Toko.."
                                        value={data.address}
                                        onChange={(e) => {
                                            setData('address', e.target.value);
                                        }}
                                        error={!!errors.address}
                                        hint={errors.address}
                                    />
                                </InputGroup>

                                <InputGroup label="Status" htmlFor="status">
                                    <InputSelect
                                        options={optionStatus}
                                        placeholder="Pilih Status.."
                                        value={data.status}
                                        onChange={(value) =>
                                            setData('status', value)
                                        }
                                        id="status"
                                        name="status"
                                        className="dark:bg-dark-900"
                                        error={!!errors.status}
                                        hint={errors.status}
                                    />
                                </InputGroup>

                                <InputGroup
                                    label="Operasional"
                                    htmlFor="operational"
                                >
                                    <InputSelect
                                        options={optionOperational}
                                        placeholder="Pilih Operasional.."
                                        value={data.operational}
                                        onChange={(value) =>
                                            setData('operational', value)
                                        }
                                        id="operational"
                                        name="operational"
                                        className="dark:bg-dark-900"
                                        error={!!errors.operational}
                                        hint={errors.operational}
                                    />
                                </InputGroup>

                                <InputGroup label="Gambar Toko" htmlFor="image">
                                    {preview && (
                                        <div className="relative">
                                            <div className="overflow-hidden">
                                                <img
                                                    src={preview}
                                                    alt="Gambar Toko Preview"
                                                    className="mb-4 h-64 w-64 rounded-xl border border-gray-200 dark:border-gray-800"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <InputFile
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            setData('image', file ?? null);

                                            if (file) {
                                                setPreview(
                                                    URL.createObjectURL(file),
                                                );
                                            }
                                        }}
                                    />
                                </InputGroup>
                            </div>
                            <div className="mt-4 flex justify-end space-x-3">
                                <Link
                                    href={shops.index.url()}
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
            </div>
        </AppLayout>
    );
};

export default Create;
