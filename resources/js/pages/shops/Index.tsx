import { Link, useForm } from '@inertiajs/react';
import { Eye, SquarePen, Trash2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

import DeleteConfirmationModal from '@/components/DeleteConfirmationModal';
import PageBreadcrumb from '@/components/PageBreadCrumb';
import Table from '@/components/Table';
import Card from '@/components/ui/Card';
import useDeleteConfirmation from '@/hooks/useDeleteConfirmation';
import AppLayout from '@/layouts/AppLayout';
import shops from '@/routes/shops';

type Shop = {
    id: number;
    encrypted_id: string;
    name: string;
    address: string;
    status: number;
    operational: number;
    image: string;
};

type Pagination<T> = {
    data: T[];
    from: number;
    current_page: number;
    last_page: number;
};

type Props = {
    shopsProps: Pagination<Shop>;
};

const Index = ({ shopsProps }: Props) => {
    const title = 'Kelola Toko';
    const { delete: destroy, processing } = useForm({});
    const { isOpenDelete, item, openDelete, closeDelete } =
        useDeleteConfirmation();

    const handleDelete = (): void => {
        if (!item.id) return;

        destroy(shops.destroy.url(item.id), {
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
                    <Card
                        title="List Data Toko"
                        href={shops.create.url()}
                        addButton
                    >
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.Cell isHeader>No</Table.Cell>
                                    <Table.Cell isHeader>Nama Toko</Table.Cell>
                                    <Table.Cell isHeader>Alamat</Table.Cell>
                                    <Table.Cell isHeader>Status</Table.Cell>
                                    <Table.Cell isHeader>
                                        Operasional
                                    </Table.Cell>
                                    <Table.Cell isHeader>Aksi</Table.Cell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {shopsProps.data.map((shop, index) => (
                                    <Table.Row key={shop.id}>
                                        <Table.Cell>
                                            {shopsProps.from + index}
                                        </Table.Cell>
                                        <Table.Cell>{shop.name}</Table.Cell>
                                        <Table.Cell>{shop.address}</Table.Cell>
                                        <Table.Cell>
                                            {shop.status == 1
                                                ? 'Aktif'
                                                : 'Tidak Aktif'}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {shop.operational == 1
                                                ? 'Buka'
                                                : 'Tutup'}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="left-justify-center flex items-center">
                                                <Link
                                                    href={shops.show.url(
                                                        shop.encrypted_id,
                                                    )}
                                                    className="text-green-500 hover:text-green-700"
                                                >
                                                    <Eye size={16} />
                                                </Link>
                                                <Link
                                                    href={shops.edit.url(
                                                        shop.encrypted_id,
                                                    )}
                                                    className="ml-2 text-blue-500 hover:text-blue-700"
                                                >
                                                    <SquarePen size={16} />
                                                </Link>
                                                <button
                                                    className="ml-2 text-red-500 hover:text-red-700"
                                                    onClick={() =>
                                                        openDelete(
                                                            shop.encrypted_id,
                                                            'data toko ' +
                                                                shop.name,
                                                        )
                                                    }
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Card>
                </div>
                <DeleteConfirmationModal
                    isOpen={isOpenDelete}
                    onClose={closeDelete}
                    onConfirm={handleDelete}
                    processing={processing}
                    itemName={item.name}
                />
            </div>
        </AppLayout>
    );
};

export default Index;
