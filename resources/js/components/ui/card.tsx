import { Link } from '@inertiajs/react';
import React, { ReactNode } from 'react';

type CardProps = {
    title: string;
    children: ReactNode;
    className?: string;
    desc?: string;
    href?: string;
    addButton?: boolean;
    modal?: () => void;
};

const Card: React.FC<CardProps> = ({
    title,
    children,
    className = '',
    desc = '',
    href,
    addButton = false,
    modal,
}) => {
    return (
        <div
            className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/3 ${className}`}
        >
            {/* Card Header */}
            <div className="flex justify-between px-6 py-5">
                <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                        {title}
                    </h3>
                    {desc && (
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {desc}
                        </p>
                    )}
                </div>
                {addButton && href && (
                    <Link
                        href={href}
                        type="button"
                        className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 lg:inline-flex lg:w-auto dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3 dark:hover:text-gray-200"
                    >
                        Tambah
                    </Link>
                )}

                {addButton && modal && (
                    <button
                        onClick ={modal}
                        type="button"
                        className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 lg:inline-flex lg:w-auto dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3 dark:hover:text-gray-200"
                    >
                        Tambah
                    </button>
                )}
            </div>

            {/* Card Body */}
            <div className="border-t border-gray-100 p-4 sm:p-6 dark:border-gray-800">
                <div className="space-y-6">{children}</div>
            </div>
        </div>
    );
};

export default Card;
