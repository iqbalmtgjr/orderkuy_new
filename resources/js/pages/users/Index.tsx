import { Link, useForm } from '@inertiajs/react';
import { Eye, SquarePen, Trash2 } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

import Modal from '@/components/Modal';
import PageBreadcrumb from '@/components/PageBreadCrumb';
import Table from '@/components/Table';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import useModal from '@/hooks/useModal';
import AppLayout from '@/layouts/AppLayout';
import users from '@/routes/users';

type Role = {
    name: string;
};

type Shop = {
    name: string;
};

type User = {
    id: number;
    encrypted_id: string;
    name: string;
    username: string;
    email: string;
    role: Role;
    shop: Shop;
};

type Pagination<T> = {
    data: T[];
    from: number;
    current_page: number;
    last_page: number;
};

type Props = {
    usersProps: Pagination<User>;
};

const Index = ({ usersProps }: Props) => {
    const title = 'Kelola User';
    const { delete: destroy } = useForm({});
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const { isOpen, openModal, closeModal } = useModal();

    const confirmDelete = (encrypted_id: string): void => {
        setSelectedId(encrypted_id);
        openModal();
    };

    const handleDelete = (): void => {
        if (selectedId) {
            destroy(users.destroy.url(selectedId), {
                onSuccess: () => {
                    closeModal();
                    setSelectedId(null);
                    toast.success('Data berhasil dihapus');
                },
                preserveScroll: true,
            });
        }
    };

    return (
        <AppLayout>
            <div>
                <PageBreadcrumb pageTitle={title} />
                <div className="space-y-6">
                    <Card
                        title="List Data User"
                        href={users.create.url()}
                        addButton
                    >
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.Cell isHeader>No</Table.Cell>
                                    <Table.Cell isHeader>
                                        Nama Lengkap
                                    </Table.Cell>
                                    <Table.Cell isHeader>Username</Table.Cell>
                                    <Table.Cell isHeader>Email</Table.Cell>
                                    <Table.Cell isHeader>Role</Table.Cell>
                                    <Table.Cell isHeader>Shop</Table.Cell>
                                    <Table.Cell isHeader>Aksi</Table.Cell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {usersProps.data.map((user, index) => (
                                    <Table.Row key={user.id}>
                                        <Table.Cell>
                                            {usersProps.from + index}
                                        </Table.Cell>
                                        <Table.Cell>{user.name}</Table.Cell>
                                        <Table.Cell>{user.username}</Table.Cell>
                                        <Table.Cell>{user.email}</Table.Cell>
                                        <Table.Cell>
                                            {user.role.name}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {user.shop.name}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="flex items-center justify-center">
                                                <Link
                                                    href={users.show.url(
                                                        user.encrypted_id,
                                                    )}
                                                    className="text-green-500 hover:text-green-700"
                                                >
                                                    <Eye size={16} />
                                                </Link>
                                                <Link
                                                    href={users.edit.url(
                                                        user.encrypted_id,
                                                    )}
                                                    className="ml-2 text-blue-500 hover:text-blue-700"
                                                >
                                                    <SquarePen size={16} />
                                                </Link>
                                                <button
                                                    className="ml-2 text-red-500 hover:text-red-700"
                                                    onClick={() =>
                                                        confirmDelete(
                                                            user.encrypted_id,
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
                <Modal
                    isOpen={isOpen}
                    onClose={closeModal}
                    className="m-4 max-w-175"
                >
                    <div className="relative no-scrollbar w-full overflow-y-auto rounded-3xl bg-white p-4 lg:p-11 dark:bg-gray-900">
                        <div className="px-2 pr-14">
                            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                                Konfirmasi Hapus
                            </h4>
                            <p className="mb-6 text-sm text-gray-500 lg:mb-7 dark:text-gray-400">
                                Apakah kamu yakin ingin menghapus data ini?
                                Tindakan ini tidak bisa dibatalkan.
                            </p>
                        </div>
                        <div className="mt-6 flex items-center justify-center gap-3 px-2">
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={closeModal}
                            >
                                Tutup
                            </Button>
                            <Button
                                size="sm"
                                className="bg-red-500"
                                onClick={handleDelete}
                            >
                                Hapus
                            </Button>
                        </div>
                    </div>
                </Modal>
            </div>
        </AppLayout>
    );
};

export default Index;
