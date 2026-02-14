import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import toast from 'react-hot-toast';

import DeleteConfirmationModal from '@/components/DeleteConfirmationModal';
import Modal from '@/components/Modal';
import PageBreadcrumb from '@/components/PageBreadCrumb';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import InputField from '@/components/ui/InputField';
import InputGroup from '@/components/ui/InputGroup';
import useDeleteConfirmation from '@/hooks/useDeleteConfirmation';
import useModal from '@/hooks/useModal';
import AppLayout from '@/layouts/AppLayout';
import categories from '@/routes/categories';

import CategoryList from './CategoryList';

type Shop = {
    id: number;
    name: string;
};

type Category = {
    id: number;
    encrypted_id: string;
    shop: Shop;
    name: string;
};

type CategoryFormProps = {
    shop_id: string;
    name: string;
};

type Pagination<T> = {
    data: T[];
    from: number;
    current_page: number;
    last_page: number;
};

type Props = {
    categoriesProps: Pagination<Category>;
    shop: Shop;
};

const Index = ({ categoriesProps, shop }: Props) => {
    const title = 'Kelola Kategori';
    const { isOpen, openModal, closeModal } = useModal();
    const [isEdit, setIsEdit] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const { isOpenDelete, item, openDelete, closeDelete } =
        useDeleteConfirmation();

    const { data, setData, post, put, processing, errors, reset, clearErrors } =
        useForm<CategoryFormProps>({
            shop_id: '',
            name: '',
        });
    const { delete: destroy, processing: deleting } = useForm({});

    const openCreate = () => {
        setIsEdit(false);
        setSelectedId(null);
        clearErrors();
        openModal();
        setData('shop_id', String(shop.id));
    };

    const openEdit = (category: Category) => {
        clearErrors();
        setIsEdit(true);
        setSelectedId(category.encrypted_id);

        setData({
            shop_id: String(shop.id),
            name: category.name,
        });

        openModal();
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        if (isEdit && selectedId) {
            put(categories.update.url(selectedId), {
                preserveScroll: true,
                onSuccess: () => {
                    toast.success('Data berhasil diupdate');
                    reset();
                    closeModal();
                    setIsEdit(false);
                    setSelectedId(null);
                },
            });
        } else {
            post(categories.store.url(), {
                preserveScroll: true,
                onSuccess: () => {
                    toast.success('Data berhasil ditambahkan');
                    reset();
                    closeModal();
                },
            });
        }
    };

    const handleCloseModal = () => {
        reset();
        setIsEdit(false);
        setSelectedId(null);
        closeModal();
    };

    const handleDelete = () => {
        if (!item.id) return;

        destroy(categories.destroy.url(item.id), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Data berhasil dihapus');
                closeDelete();
            },
        });
    };

    return (
        <AppLayout>
            <div>
                <PageBreadcrumb pageTitle={title} />
                <div className="space-y-6">
                    <Card title="List Kategori" addButton modal={openCreate}>
                        <CategoryList
                            categories={categoriesProps}
                            onEdit={openEdit}
                            onDelete={openDelete}
                        />
                    </Card>
                </div>
                <Modal
                    isOpen={isOpen}
                    onClose={handleCloseModal}
                    className="m-4 max-w-175"
                >
                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="relative no-scrollbar w-full overflow-y-auto rounded-3xl bg-white p-4 lg:p-11 dark:bg-gray-900">
                            <div className="px-2 pr-14">
                                <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                                    {isEdit
                                        ? 'Edit Data Meja'
                                        : 'Tambah Data Meja'}
                                </h4>

                                <div className="space-y-6">
                                    <InputGroup label="Toko" htmlFor="name">
                                        <InputField
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={shop.name}
                                            disabled
                                        />
                                    </InputGroup>

                                    <InputGroup label="Kategori" htmlFor="name">
                                        <InputField
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Kategori.."
                                            value={data.name}
                                            onChange={(e) => {
                                                setData('name', e.target.value);
                                            }}
                                            error={!!errors.name}
                                            hint={errors.name}
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-center gap-3 px-2">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={handleCloseModal}
                                >
                                    Tutup
                                </Button>
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
                        </div>
                    </form>
                </Modal>
                <DeleteConfirmationModal
                    isOpen={isOpenDelete}
                    onClose={closeDelete}
                    onConfirm={handleDelete}
                    processing={deleting}
                    itemName={item.name}
                />
            </div>
        </AppLayout>
    );
};

export default Index;
