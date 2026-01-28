<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\Shop;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('users/Index', [
            'usersProps' => User::with(['role', 'shop'])->latest()->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('users/Create')->with([
            'roles' => Role::all(),
            'shops' => Shop::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'username' => 'required|string|unique:users,username',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|confirmed',
            'shop_id' => 'required|integer',
            'role_id' => 'required|integer',
        ]);

        $data = [
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => $request->password,
            'shop_id' => (int) $request->shop_id,
            'role_id' => (int) $request->role_id,
        ];

        User::create([
            'name'      => $data['name'],
            'username'  => $data['username'],
            'email'     => $data['email'],
            'password'  => bcrypt($data['password']),
            'role_id'   => $data['role_id'],
            'shop_id' => $data['shop_id'],
        ]);

        return redirect()->route('users.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $encryptedId)
    {
        $id = Crypt::decryptString($encryptedId);

        $user = User::with(['role', 'shop'])->findOrFail($id);

        return Inertia::render('users/Show')->with([
            'user' => $user
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $encryptedId)
    {
        $id = Crypt::decryptString($encryptedId);

        $user = User::with(['role', 'shop'])->findOrFail($id);

        return Inertia::render('users/Edit')->with([
            'user' => $user,
            'roles' => Role::all(),
            'shops' => Shop::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $encryptedId)
    {
        $id = Crypt::decryptString($encryptedId);

        $user = User::findOrFail($id);

        $request->validate([
            'name' => 'required|string',
            'username' => ['required', 'string', Rule::unique('users', 'username')->ignore($user->id)],
            'email' => ['required', 'string', Rule::unique('users', 'email')->ignore($user->id)],
            'shop_id' => 'required|integer',
            'role_id' => 'required|integer',
        ]);

        $data = [
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'shop_id' => (int) $request->shop_id,
            'role_id' => (int) $request->role_id,
        ];

        $user->update($data);

        return redirect()->route('users.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $encryptedId)
    {
        $id = Crypt::decryptString($encryptedId);

        $user = User::findOrFail($id);

        $user->delete();

        return redirect()->route('users.index');
    }
}
