<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Name;

class NameController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $name = Name::create(['name' => $request->name]);

        return response()->json(['message' => 'Name added successfully', 'name' => $name]);
    }
}
