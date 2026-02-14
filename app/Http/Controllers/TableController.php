<?php

namespace App\Http\Controllers;

use App\Enums\TableStatus;
use App\Models\Shop;
use App\Models\Table;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class TableController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $idShop = auth()->user()->shop_id;

        return Inertia::render('tables/Index', [
            'tablesProps' => Table::with(['shop'])->latest()->paginate(10),
            'statuses' => TableStatus::options(),
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
            'table_number' => 'required|string|unique:tables,table_number',
            'status' => 'required|integer',
        ]);

        $data = [
            'shop_id' => $request->shop_id,
            'table_number' => $request->table_number,
            'status' => (int) $request->status,
        ];

        Table::create([
            'shop_id' => $data['shop_id'],
            'table_number' => $data['table_number'],
            'status' => $data['status'],
        ]);

        return redirect()->route('tables.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Table $table)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Table $table)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $encryptedId)
    {
        $id = Crypt::decryptString($encryptedId);

        $table = Table::findOrFail($id);

        $request->validate([
            'shop_id' => 'required|integer',
            'table_number' => ['required', 'string', Rule::unique('tables', 'table_number')->ignore($table->id)],
            'status' => 'required|integer',
        ]);

        $data = [
            'shop_id' => $request->shop_id,
            'table_number' => $request->table_number,
            'status' => $request->status,
        ];

        $table->update($data);

        return redirect()->route('tables.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $encryptedId)
    {
        $id = Crypt::decryptString($encryptedId);

        $table = Table::findOrFail($id);

        $table->delete();

        return redirect()->route('tables.index');
    }
}
