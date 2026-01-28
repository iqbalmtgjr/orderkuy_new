import { useForm } from '@inertiajs/react';

type UserFormProps = {
    name: string;
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
    shop_id: string;
    role_id: string;
};

const useCreateUserForm = () => {
    return useForm<UserFormProps>({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        shop_id: '',
        role_id: '',
    });
};

export default useCreateUserForm;
