import { Link, useForm } from '@inertiajs/react';
import { Eye, SquarePen, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

import DeleteConfirmationModal from '@/components/DeleteConfirmationModal';
import PageBreadcrumb from '@/components/PageBreadCrumb';
import Table from '@/components/Table';
import Card from '@/components/ui/Card';
import useDeleteConfirmation from '@/hooks/useDeleteConfirmation';
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
    const { delete: destroy, processing } = useForm({});
    const { isOpenDelete, item, openDelete, closeDelete } =
        useDeleteConfirmation();

    const handleDelete = (): void => {
        if (!item.id) return;

        destroy(users.destroy.url(item.id), {
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
                                            <div className="left-justify-center flex items-center">
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
                                                        openDelete(
                                                            user.encrypted_id,
                                                            'data ' + user.name,
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
