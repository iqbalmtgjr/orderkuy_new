import LoginForm from '@/components/LoginForm';
import AuthLayout from '@/layouts/auth/AuthLayout';

const Login = () => {
    return (
        <AuthLayout>
            <LoginForm canResetPassword={true} canRegister={true} />
        </AuthLayout>
    );
};

export default Login;
