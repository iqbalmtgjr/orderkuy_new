<?php

namespace App\Http\Controllers;

use App\Enums\ShopOperational;
use App\Enums\ShopStatus;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('shops/Index', [
            'shopsProps' => Shop::latest()->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('shops/Create', [
            'statuses' => ShopStatus::options(),
            'operationals' => ShopOperational::options(),

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'address' => 'required|string',
            'status' => 'required|integer',
            'operational' => 'required|integer',
            'image' => 'nullable|image|max:2048',
        ]);

        $data = [
            'name' => $request->name,
            'address' => $request->address,
            'status' => (int) $request->status,
            'operational' => (int) $request->operational,
        ];

        $filename = null;

        if ($request->hasFile('image')) {
            $file = $request->file('image');

            // nama unik + aman
            $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();

            // simpan ke storage/app/public/shops
            $file->storeAs('shops', $filename, 'public');
        }

        Shop::create([
            'name' => $data['name'],
            'address' => $data['address'],
            'status' => $data['status'],
            'operational' => $data['operational'],
            'image' => $filename,
        ]);

        return redirect()->route('shops.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $encryptedId)
    {
        $id = Crypt::decryptString($encryptedId);

        $shop = Shop::findOrFail($id);

        return Inertia::render('shops/Show')->with([
            'shop' => $shop
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $encryptedId)
    {
        $id = Crypt::decryptString($encryptedId);

        $shop = Shop::findOrFail($id);

        return Inertia::render('shops/Edit', [
            'shop' => $shop,
            'statuses' => ShopStatus::options(),
            'operationals' => ShopOperational::options(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $encryptedId)
    {
        $id = Crypt::decryptString($encryptedId);

        $shop = Shop::findOrFail($id);

        $request->validate([
            'name' => 'required|string',
            'address' => 'required|string',
            'status' => 'required|integer',
            'operational' => 'required|integer',
            'image' => 'nullable|image|max:2048',
        ]);

        $data = [
            'name' => $request->name,
            'address' => $request->address,
            'status' => (int) $request->status,
            'operational' => (int) $request->operational,
        ];

        // Jika user upload gambar baru
        if ($request->hasFile('image')) {
            // hapus gambar lama (jika ada)
            if ($shop->image && Storage::disk('public')->exists('shops/' . $shop->image)) {
                Storage::disk('public')->delete('shops/' . $shop->image);
            }

            $file = $request->file('image');
            $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();

            $file->storeAs('shops', $filename, 'public');

            // simpan nama file baru
            $data['image'] = $filename;
        }

        $shop->update($data);

        return redirect()->route('shops.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $encryptedId)
    {
        $id = Crypt::decryptString($encryptedId);

        $shop = Shop::findOrFail($id);

        if ($shop->image && Storage::disk('public')->exists('shops/' . $shop->image)) {
            Storage::disk('public')->delete('shops/' . $shop->image);
        }

        $shop->delete();

        return redirect()->route('shops.index');
    }
}
