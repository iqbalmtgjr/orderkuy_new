import { useForm } from '@inertiajs/react';

type UserFormProps = {
    name: string;
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
    shop_id: string | null;
    role_id: string | null;
};

const useCreateUserForm = () => {
    return useForm<UserFormProps>({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        shop_id: null,
        role_id: null,
    });
};

export default useCreateUserForm;
