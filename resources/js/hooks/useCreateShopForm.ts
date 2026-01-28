import { useForm } from '@inertiajs/react';

type ShopFromProps = {
    name: string;
    address: string;
    status: string;
    operational: string;
    image: File | null;
};

const useCreateShopForm = () => {
    return useForm<ShopFromProps>({
        name: '',
        address: '',
        status: '',
        operational: '',
        image: null,
    });
};

export default useCreateShopForm;
