import { useState } from 'react';

type DeleteState = {
    id: string | null;
    name?: string;
};

export default function useDeleteConfirmation() {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [item, setItem] = useState<DeleteState>({ id: null });

    const openDelete = (id: string, name?: string) => {
        setItem({ id, name });
        setIsOpenDelete(true);
    };

    const closeDelete = () => {
        setItem({ id: null });
        setIsOpenDelete(false);
    };

    return {
        isOpenDelete,
        item,
        openDelete,
        closeDelete,
    };
}
