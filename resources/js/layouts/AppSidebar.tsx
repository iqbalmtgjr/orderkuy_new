import { Link, usePage } from '@inertiajs/react';
import {
    ChevronDown,
    Ellipsis,
    LayoutDashboard,
    Store,
    Users,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { useSidebar } from '@/context/SidebarContext';
import { dashboard } from '@/routes';
import shops from '@/routes/shops';
import users from '@/routes/users';

type Role = 'Super Admin' | 'Admin' | 'Dapur' | 'Kasir' | 'Pelanggan';
type NavItem = {
    name: string;
    icon: React.ReactNode;
    path?: string;
    roles: Role[];
    subItems?: {
        name: string;
        path: string;
        roles: Role[];
        pro?: boolean;
        new?: boolean;
    }[];
};

const navItems: NavItem[] = [
    {
        icon: <LayoutDashboard />,
        name: 'Dashboard',
        path: dashboard.url(),
        roles: ['Super Admin', 'Admin', 'Dapur', 'Kasir'],
    },
];

const othersItems: NavItem[] = [
    {
        icon: <Users />,
        name: 'Kelola User',
        path: users.index.url(),
        roles: ['Super Admin', 'Admin'],
    },
    {
        icon: <Store />,
        name: 'Kelola Toko',
        path: shops.index.url(),
        roles: ['Super Admin', 'Admin'],
    },
    {
        icon: <Users />,
        name: 'Kelola Karyawan Toko',
        path: '/',
        roles: ['Super Admin', 'Admin'],
    },
    {
        icon: <Users />,
        name: 'Kelola Meja',
        path: '/',
        roles: ['Super Admin', 'Admin'],
    },
    {
        icon: <Users />,
        name: 'Kelola Menu',
        path: '/',
        roles: ['Super Admin', 'Admin'],
    },
    {
        icon: <Users />,
        name: 'Laporan',
        path: '/',
        roles: ['Super Admin', 'Admin'],
    },
    {
        icon: <Users />,
        name: 'Pengeluaran',
        path: '/',
        roles: ['Super Admin', 'Admin'],
    },
    {
        icon: <Users />,
        name: 'Kategori',
        path: '/',
        roles: ['Super Admin', 'Admin'],
    },
    {
        icon: <Users />,
        name: 'D Pesanan',
        path: '/',
        roles: ['Super Admin', 'Admin'],
    },
    // {
    //     icon: <Eye />,
    //     name: 'Authentication',
    //     subItems: [
    //         { name: 'Sign In', path: '/signin', pro: false },
    //         { name: 'Sign Up', path: '/signup', pro: false },
    //     ],
    // },
];

const AppSidebar: React.FC = () => {
    const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
    const location = usePage().url;

    const { auth } = usePage().props;
    const role = auth.user.role.name;

    const [openSubmenu, setOpenSubmenu] = useState<{
        type: 'main' | 'others';
        index: number;
    } | null>(null);
    const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
        {},
    );
    const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // const isActive = (path: string) => location === path;
    const isActive = useCallback(
        (path: string) => location === path,
        [location],
    );

    const filterByRole = (items: NavItem[]) =>
        items.filter(
            (item) => !item.roles || (role && item.roles.includes(role)),
        );

    useEffect(() => {
        let submenuMatched = false;
        ['main', 'others'].forEach((menuType) => {
            const items = menuType === 'main' ? navItems : othersItems;
            items.forEach((nav, index) => {
                if (nav.subItems) {
                    nav.subItems.forEach((subItem) => {
                        if (isActive(subItem.path)) {
                            setOpenSubmenu({
                                type: menuType as 'main' | 'others',
                                index,
                            });
                            submenuMatched = true;
                        }
                    });
                }
            });
        });

        if (!submenuMatched) {
            setOpenSubmenu(null);
        }
    }, [location, isActive]);

    useEffect(() => {
        if (openSubmenu !== null) {
            const key = `${openSubmenu.type}-${openSubmenu.index}`;
            if (subMenuRefs.current[key]) {
                setSubMenuHeight((prevHeights) => ({
                    ...prevHeights,
                    [key]: subMenuRefs.current[key]?.scrollHeight || 0,
                }));
            }
        }
    }, [openSubmenu]);

    const handleSubmenuToggle = (
        index: number,
        menuType: 'main' | 'others',
    ) => {
        setOpenSubmenu((prevOpenSubmenu) => {
            if (
                prevOpenSubmenu &&
                prevOpenSubmenu.type === menuType &&
                prevOpenSubmenu.index === index
            ) {
                return null;
            }
            return { type: menuType, index };
        });
    };

    const renderMenuItems = (items: NavItem[], menuType: 'main' | 'others') => (
        <ul className="flex flex-col gap-4">
            {items.map((nav, index) => (
                <li key={nav.name}>
                    {nav.subItems ? (
                        <button
                            onClick={() => handleSubmenuToggle(index, menuType)}
                            className={`group menu-item ${
                                openSubmenu?.type === menuType &&
                                openSubmenu?.index === index
                                    ? 'menu-item-active'
                                    : 'menu-item-inactive'
                            } cursor-pointer ${
                                !isExpanded && !isHovered
                                    ? 'lg:justify-center'
                                    : 'lg:justify-start'
                            }`}
                        >
                            <span
                                className={`menu-item-icon-size ${
                                    openSubmenu?.type === menuType &&
                                    openSubmenu?.index === index
                                        ? 'menu-item-icon-active'
                                        : 'menu-item-icon-inactive'
                                }`}
                            >
                                {nav.icon}
                            </span>
                            {(isExpanded || isHovered || isMobileOpen) && (
                                <span className="menu-item-text">
                                    {nav.name}
                                </span>
                            )}
                            {(isExpanded || isHovered || isMobileOpen) && (
                                <ChevronDown
                                    strokeWidth={1}
                                    className={`ml-auto h-5 w-5 transition-transform duration-200 ${
                                        openSubmenu?.type === menuType &&
                                        openSubmenu?.index === index
                                            ? 'rotate-180 text-brand-500'
                                            : ''
                                    }`}
                                />
                            )}
                        </button>
                    ) : (
                        nav.path && (
                            <Link
                                href={nav.path}
                                className={`group menu-item ${
                                    isActive(nav.path)
                                        ? 'menu-item-active'
                                        : 'menu-item-inactive'
                                }`}
                            >
                                <span
                                    className={`menu-item-icon-size ${
                                        isActive(nav.path)
                                            ? 'menu-item-icon-active'
                                            : 'menu-item-icon-inactive'
                                    }`}
                                >
                                    {nav.icon}
                                </span>
                                {(isExpanded || isHovered || isMobileOpen) && (
                                    <span className="menu-item-text">
                                        {nav.name}
                                    </span>
                                )}
                            </Link>
                        )
                    )}
                    {nav.subItems &&
                        (isExpanded || isHovered || isMobileOpen) && (
                            <div
                                ref={(el) => {
                                    subMenuRefs.current[
                                        `${menuType}-${index}`
                                    ] = el;
                                }}
                                className="overflow-hidden transition-all duration-300"
                                style={{
                                    height:
                                        openSubmenu?.type === menuType &&
                                        openSubmenu?.index === index
                                            ? `${subMenuHeight[`${menuType}-${index}`]}px`
                                            : '0px',
                                }}
                            >
                                <ul className="mt-2 ml-9 space-y-1">
                                    {nav.subItems.map((subItem) => (
                                        <li key={subItem.name}>
                                            <Link
                                                href={subItem.path}
                                                className={`menu-dropdown-item ${
                                                    isActive(subItem.path)
                                                        ? 'menu-dropdown-item-active'
                                                        : 'menu-dropdown-item-inactive'
                                                }`}
                                            >
                                                {subItem.name}
                                                <span className="ml-auto flex items-center gap-1">
                                                    {subItem.new && (
                                                        <span
                                                            className={`ml-auto ${
                                                                isActive(
                                                                    subItem.path,
                                                                )
                                                                    ? 'menu-dropdown-badge-active'
                                                                    : 'menu-dropdown-badge-inactive'
                                                            } menu-dropdown-badge`}
                                                        >
                                                            new
                                                        </span>
                                                    )}
                                                    {subItem.pro && (
                                                        <span
                                                            className={`ml-auto ${
                                                                isActive(
                                                                    subItem.path,
                                                                )
                                                                    ? 'menu-dropdown-badge-active'
                                                                    : 'menu-dropdown-badge-inactive'
                                                            } menu-dropdown-badge`}
                                                        >
                                                            pro
                                                        </span>
                                                    )}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                </li>
            ))}
        </ul>
    );

    return (
        <aside
            className={`fixed top-0 left-0 z-50 mt-16 flex h-screen flex-col border-r border-gray-200 bg-white px-5 text-gray-900 transition-all duration-300 ease-in-out lg:mt-0 dark:border-gray-800 dark:bg-gray-900 ${
                isExpanded || isMobileOpen
                    ? 'w-72.5'
                    : isHovered
                      ? 'w-72.5'
                      : 'w-22.5'
            } ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
            onMouseEnter={() => !isExpanded && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`flex py-8 ${
                    !isExpanded && !isHovered
                        ? 'lg:justify-center'
                        : 'justify-start'
                }`}
            >
                <Link href="/">
                    {isExpanded || isHovered || isMobileOpen ? (
                        <>
                            <img
                                className="dark:hidden"
                                src="/storage/images/logo/logo-text-black.png"
                                alt="Logo"
                                width={150}
                                height={40}
                            />
                            <img
                                className="hidden dark:block"
                                src="/storage/images/logo/logo-text-white.png"
                                alt="Logo"
                                width={150}
                                height={40}
                            />
                        </>
                    ) : (
                        <img
                            src="/storage/images/logo/logo.png"
                            alt="Logo"
                            width={32}
                            height={32}
                        />
                    )}
                </Link>
            </div>
            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                <nav className="mb-6">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2
                                className={`mb-4 flex text-xs leading-5 text-gray-400 uppercase ${
                                    !isExpanded && !isHovered
                                        ? 'lg:justify-center'
                                        : 'justify-start'
                                }`}
                            >
                                {isExpanded || isHovered || isMobileOpen ? (
                                    ''
                                ) : (
                                    <Ellipsis
                                        strokeWidth={1}
                                        className="size-6"
                                    />
                                )}
                            </h2>
                            {renderMenuItems(filterByRole(navItems), 'main')}
                        </div>
                        <div className="">
                            <h2
                                className={`mb-4 flex text-xs leading-5 text-gray-400 uppercase ${
                                    !isExpanded && !isHovered
                                        ? 'lg:justify-center'
                                        : 'justify-start'
                                }`}
                            >
                                {isExpanded || isHovered || isMobileOpen ? (
                                    'Menu Admin'
                                ) : (
                                    <Ellipsis strokeWidth={1} />
                                )}
                            </h2>
                            {renderMenuItems(
                                filterByRole(othersItems),
                                'others',
                            )}
                        </div>
                    </div>
                </nav>
                {isExpanded || isHovered || isMobileOpen}
            </div>
        </aside>
    );
};

export default AppSidebar;
