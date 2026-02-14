<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $idShop = auth()->user()->shop_id;

        return Inertia::render('categories/Index', [
            'categoriesProps' => Category::with(['shop'])->latest()->paginate(10),
            'shop' => Shop::where('id', $idShop)->first()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'shop_id' => 'required|integer',
            'name' => 'required|string',
        ]);

        $data = [
            'shop_id' => $request->shop_id,
            'name' => $request->name,
        ];

        Category::create([
            'shop_id' => $data['shop_id'],
            'name' => $data['name'],
        ]);

        return redirect()->route('categories.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $encryptedId)
    {
        $id = Crypt::decryptString($encryptedId);

        $category = Category::findOrFail($id);

        $request->validate([
            'shop_id' => 'required|integer',
            'name' => 'required|string',
        ]);

        $data = [
            'shop_id' => $request->shop_id,
            'name' => $request->name,
        ];

        $category->update($data);

        return redirect()->route('categories.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $encryptedId)
    {
        $id = Crypt::decryptString($encryptedId);

        $category = Category::findOrFail($id);

        $category->delete();

        return redirect()->route('categories.index');
    }
}
