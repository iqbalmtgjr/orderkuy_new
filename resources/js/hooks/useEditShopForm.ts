import { useForm } from '@inertiajs/react';

type ShopFromProps = {
    name: string;
    address: string;
    status: string;
    operational: string;
    image: File | null;
    _method: 'PUT';
};

type Shop = {
    name: string;
    address: string;
    status: number;
    operational: number;
    image: File | null;
};

const useEditShopForm = (shop: Shop) => {
    return useForm<ShopFromProps>({
        name: shop.name ?? '',
        address: shop.address ?? '',
        status: String(shop.status),
        operational: String(shop.operational),
        image: null,
        _method: 'PUT',
    });
};

export default useEditShopForm;
