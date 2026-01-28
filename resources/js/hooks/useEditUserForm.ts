import { useForm } from '@inertiajs/react';

type UserFormProps = {
    name: string;
    username: string;
    email: string;
    shop_id: string;
    role_id: string;
};

type User = {
    name: string;
    username: string;
    email: string;
    shop_id: number;
    role_id: number;
};

const useEditUserForm = (user: User) => {
    return useForm<UserFormProps>({
        name: user.name ?? '',
        username: user.username ?? '',
        email: user.email ?? '',
        shop_id: String(user.shop_id),
        role_id: String(user.role_id),
    });
};

export default useEditUserForm;
