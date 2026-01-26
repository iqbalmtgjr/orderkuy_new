import { useForm } from '@inertiajs/react';

type UserFormProps = {
    name: string;
    username: string;
    email: string;
    shop_id: string | null;
    role_id: string | null;
};

type User = {
    name: string;
    username: string;
    email: string;
    shop_id: number | null;
    role_id: number | null;
};

const useEditUserForm = (user: User) => {
    return useForm<UserFormProps>({
        name: user.name ?? '',
        username: user.username ?? '',
        email: user.email ?? '',
        shop_id: user.shop_id ? String(user.shop_id) : null,
        role_id: user.role_id ? String(user.role_id) : null,
    });
};

export default useEditUserForm;
