<?php

namespace App\Enums;

enum ShopOperational: int
{
    case Open = 1;
    case Close = 0;

    public function label(): string
    {
        return match ($this) {
            self::Open => 'Buka',
            self::Close => 'Tutup',
        };
    }

    public static function options(): array
    {
        return array_map(fn($status) => [
            'value' => $status->value,
            'label' => $status->label(),
        ], self::cases());
    }
}
