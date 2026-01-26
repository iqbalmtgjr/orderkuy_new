import { ReactNode } from 'react';

type BaseProps = {
    children: ReactNode;
    className?: string;
};

type TableCellProps = BaseProps & {
    isHeader?: boolean;
};

// TableHeader Component
const TableHeader: React.FC<BaseProps> = ({ children, className = '' }) => {
    return (
        <thead
            className={`border-b border-gray-100 dark:border-white/5 ${className}`}
        >
            {children}
        </thead>
    );
};

// TableBody Component
const TableBody: React.FC<BaseProps> = ({ children, className = '' }) => {
    return (
        <tbody
            className={`divide-y divide-gray-100 dark:divide-white/5 ${className}`}
        >
            {children}
        </tbody>
    );
};

// TableRow Component
const TableRow: React.FC<BaseProps> = ({ children, className }) => {
    return <tr className={className}>{children}</tr>;
};

// TableCell Component
const TableCell: React.FC<TableCellProps> = ({
    children,
    isHeader = false,
    className = '',
}) => {
    const CellTag = isHeader ? 'th' : 'td';
    const defaultClassName = isHeader
        ? 'px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400'
        : 'px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400';
    return (
        <CellTag className={`${defaultClassName} ${className}`}>
            {children}
        </CellTag>
    );
};

type TableComponent = React.FC<BaseProps> & {
    Header: typeof TableHeader;
    Body: typeof TableBody;
    Row: typeof TableRow;
    Cell: typeof TableCell;
};

// Table Component
const Table: TableComponent = ({ children, className }) => {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/5 dark:bg-white/3">
            <div className="max-w-full overflow-x-auto">
                <table className={`min-w-full ${className}`}>{children}</table>
            </div>
        </div>
    );
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;
