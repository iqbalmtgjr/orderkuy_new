<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Crypt;

class Shop extends Model
{
    protected $fillable = [
        'name',
        'address',
        'status',
        'operational',
        'image',
    ];

    protected $appends = ['encrypted_id'];

    public function getEncryptedIdAttribute()
    {
        return Crypt::encryptString($this->id);
    }

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
