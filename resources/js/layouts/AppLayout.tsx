import { Toaster } from 'react-hot-toast';

import { SidebarProvider, useSidebar } from '@/context/SidebarContext';

import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import Backdrop from './Backdrop';

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();
    return (
        <div className="min-h-screen xl:flex dark:bg-gray-900">
            <div>
                <AppSidebar />
                <Backdrop />
            </div>
            <div
                className={`flex-1 transition-all duration-300 ease-in-out ${
                    isExpanded || isHovered ? 'lg:ml-72.5' : 'lg:ml-22.5'
                } ${isMobileOpen ? 'ml-0' : ''}`}
            >
                <AppHeader />
                <div className="mx-auto max-w-(--breakpoint-2xl) p-4 md:p-6 dark:bg-gray-900">
                    {children}
                </div>
            </div>
        </div>
    );
};

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <SidebarProvider>
            <Toaster
                position="top-right"
                containerStyle={{ zIndex: 999999 }}
                toastOptions={{
                    duration: 3000,
                }}
            />
            <LayoutContent children={children} />
        </SidebarProvider>
    );
};

export default AppLayout;
