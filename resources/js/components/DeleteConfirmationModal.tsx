import Modal from '@/components/Modal';
import Button from '@/components/ui/Button';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    processing?: boolean;
    itemName?: string;
};

export default function DeleteConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    processing,
    itemName,
}: Props) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-175">
            <div className="space-y-4 p-6">
                <h2 className="text-lg font-semibold">Konfirmasi Hapus</h2>

                <p className="text-sm text-gray-600">
                    Yakin ingin menghapus{' '}
                    <span className="font-semibold">
                        {itemName ?? 'data ini'}
                    </span>
                    ?
                </p>

                <div className="flex justify-end gap-3">
                    <Button variant="outline" onClick={onClose}>
                        Batal
                    </Button>

                    <Button
                        variant="danger"
                        onClick={onConfirm}
                        disabled={processing}
                    >
                        Hapus
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
