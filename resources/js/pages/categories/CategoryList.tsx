import { SquarePen, Trash2 } from 'lucide-react';

import Table from '@/components/Table';

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

type Pagination<T> = {
    data: T[];
    from: number;
    current_page: number;
    last_page: number;
};

type Props = {
    categories: Pagination<Category>;
    onEdit: (category: Category) => void;
    onDelete: (id: string, name: string) => void;
};

const CategoryList = ({ categories, onEdit, onDelete }: Props) => {
    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.Cell>No</Table.Cell>
                    <Table.Cell>Kategori</Table.Cell>
                    <Table.Cell>Nama Toko</Table.Cell>
                    <Table.Cell>Aksi</Table.Cell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {categories.data.map((category, index) => (
                    <Table.Row key={category.id}>
                        <Table.Cell>{categories.from + index}</Table.Cell>
                        <Table.Cell>{category.name}</Table.Cell>
                        <Table.Cell>{category.shop.name}</Table.Cell>
                        <Table.Cell>
                            <div className="left-justify-center flex items-center">
                                <button
                                    className="ml-2 text-blue-500 hover:text-blue-700"
                                    onClick={() => onEdit(category)}
                                >
                                    <SquarePen size={16} />
                                </button>
                                <button
                                    className="ml-2 text-red-500 hover:text-red-700"
                                    onClick={() =>
                                        onDelete(
                                            category.encrypted_id,
                                            'kategori ' + category.name,
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
    );
};

export default CategoryList;
