import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import Modal from '@/components/Modal';
import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';
import InputGroup from '@/components/ui/InputGroup';
import InputSelect from '@/components/ui/InputSelect';

type StatusOption = { value: string; label: string };

type Props = {
    isOpen: boolean;
    data: { table_number: ''; status: '' };
    errors: Record<string, string>;
    processing: boolean;
    onClose: () => void;
    onSubmit: FormEventHandler;
    isEdit: boolean;
    shopName: string;
};

const TableFormModal = ({
    isOpen,
    onClose,
    onSubmit,
    isEdit,
    shopName,
    data,
    errors,
}: Props) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="m-4 max-w-175">
            <form onSubmit={onSubmit} className="mt-6">
                <div className="relative no-scrollbar w-full overflow-y-auto rounded-3xl bg-white p-4 lg:p-11 dark:bg-gray-900">
                    <div className="px-2 pr-14">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            {isEdit ? 'Edit Data Meja' : 'Tambah Data Meja'}
                        </h4>

                        <div className="space-y-6">
                            <InputGroup label="Toko" htmlFor="name">
                                <InputField
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={shopName}
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
                                        setData('table_number', e.target.value);
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
                        <Button size="sm" variant="outline" onClick={onClose}>
                            Tutup
                        </Button>
                        <Button type="submit" size="sm" disabled={processing}>
                            {processing && (
                                <LoaderCircle className="h-4 w-4 animate-spin" />
                            )}
                            Simpan
                        </Button>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default TableFormModal;
