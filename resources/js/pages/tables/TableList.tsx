import { SquarePen, Trash2 } from 'lucide-react';

import Table from '@/components/Table';

type Shop = {
    id: number;
    name: string;
};

type Table = {
    id: number;
    encrypted_id: string;
    table_number: string;
    status: number;
    shop: Shop;
};

type Pagination<T> = {
    data: T[];
    from: number;
    current_page: number;
    last_page: number;
};

type Props = {
    tables: Pagination<Table>;
    onEdit: (table: Table) => void;
    onDelete: (id: string, name: string) => void;
};

const TableList = ({ tables, onEdit, onDelete }: Props) => {
    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.Cell>No</Table.Cell>
                    <Table.Cell>Nomor Meja</Table.Cell>
                    <Table.Cell>Nama Toko</Table.Cell>
                    <Table.Cell>Status</Table.Cell>
                    <Table.Cell>Aksi</Table.Cell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {tables.data.map((table, index) => (
                    <Table.Row key={table.id}>
                        <Table.Cell>{tables.from + index}</Table.Cell>
                        <Table.Cell>{table.table_number}</Table.Cell>
                        <Table.Cell>{table.shop.name}</Table.Cell>
                        <Table.Cell>
                            {table.status === 1 ? 'Aktif' : 'Tidak Aktif'}
                        </Table.Cell>
                        <Table.Cell>
                            <div className="left-justify-center flex items-center">
                                <button
                                    className="ml-2 text-blue-500 hover:text-blue-700"
                                    onClick={() => onEdit(table)}
                                >
                                    <SquarePen size={16} />
                                </button>
                                <button
                                    className="ml-2 text-red-500 hover:text-red-700"
                                    onClick={() =>
                                        onDelete(
                                            table.encrypted_id,
                                            'meja nomor ' + table.table_number,
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

export default TableList;
