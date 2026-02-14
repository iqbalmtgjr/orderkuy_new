import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import { toast } from 'react-hot-toast';

import DeleteConfirmationModal from '@/components/DeleteConfirmationModal';
import Modal from '@/components/Modal';
import PageBreadcrumb from '@/components/PageBreadCrumb';
import Table from '@/components/Table';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import InputField from '@/components/ui/InputField';
import InputGroup from '@/components/ui/InputGroup';
import InputSelect from '@/components/ui/InputSelect';
import useDeleteConfirmation from '@/hooks/useDeleteConfirmation';
import useModal from '@/hooks/useModal';
import AppLayout from '@/layouts/AppLayout';
import tables from '@/routes/tables';

import TableList from './TableList';

type Shop = {
    id: number;
    name: string;
};

type Status<T = string> = {
    value: T;
    label: string;
};

type Table = {
    id: number;
    encrypted_id: string;
    table_number: string;
    status: number;
    shop: Shop;
};

type TableFormProps = {
    shop_id: string;
    table_number: string;
    status: string;
};

type Pagination<T> = {
    data: T[];
    from: number;
    current_page: number;
    last_page: number;
};

type Props = {
    tablesProps: Pagination<Table>;
    statuses: Status[];
    shop: Shop;
};

const Index = ({ tablesProps, statuses, shop }: Props) => {
    const title = 'Kelola Meja';
    const { isOpen, openModal, closeModal } = useModal();
    const [isEdit, setIsEdit] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const { isOpenDelete, item, openDelete, closeDelete } =
        useDeleteConfirmation();

    const { data, setData, post, put, processing, errors, reset, clearErrors } =
        useForm<TableFormProps>({
            shop_id: '',
            table_number: '',
            status: '',
        });
    const { delete: destroy, processing: deleting } = useForm({});

    const optionStatus = statuses.map((status) => ({
        value: String(status.value),
        label: status.label,
    }));

    const openCreate = () => {
        setIsEdit(false);
        setSelectedId(null);
        clearErrors();
        openModal();
        setData('shop_id', String(shop.id));
    };

    const openEdit = (table: Table) => {
        clearErrors();
        setIsEdit(true);
        setSelectedId(table.encrypted_id);

        setData({
            shop_id: String(shop.id),
            table_number: table.table_number,
            status: String(table.status),
        });

        openModal();
    };

    // useEffect(() => {
    //     setData('shop_id', String(shop.id));
    // }, [shop.id]);

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        if (isEdit && selectedId) {
            put(tables.update.url(selectedId), {
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
            post(tables.store.url(), {
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

        destroy(tables.destroy.url(item.id), {
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
                    <Card title="List Data Meja" addButton modal={openCreate}>
                        <TableList
                            tables={tablesProps}
                            onEdit={openEdit}
                            onDelete={openDelete}
                        />
                    </Card>
                </div>
                {/* Modal Tambah Data */}
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

                                    <InputGroup
                                        label="Nomor Meja"
                                        htmlFor="table_number"
                                    >
                                        <InputField
                                            type="text"
                                            id="table_number"
                                            name="table_number"
                                            placeholder="Nomor Meja.."
                                            value={data.table_number}
                                            onChange={(e) => {
                                                setData(
                                                    'table_number',
                                                    e.target.value,
                                                );
                                            }}
                                            error={!!errors.table_number}
                                            hint={errors.table_number}
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
