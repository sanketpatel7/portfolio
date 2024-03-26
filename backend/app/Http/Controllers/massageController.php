<?php

namespace App\Http\Controllers;

use App\Models\contect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class massageController extends Controller
{
    public function contect(Request $request)
    {
        // Validation rules
        $rules = [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:255',
        ];

        // Custom error messages
        $messages = [
            'name.required' => 'Name is required.',
            'email.required' => 'Email is required.',
            'email.email' => 'Invalid email format.',
            'email.unique' => 'Email already exists.',
            // Add more custom messages as needed
        ];

        // Validate the request data
        $validator = Validator::make($request->all(), $rules, $messages);

        // If validation fails, return validation errors
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
            // You can return to a view with errors if not using API
        }

        // Create a new instance of YourModel and fill it with request data
        $newRecord = new contect();
        $newRecord->name = $request->input('name');
        $newRecord->email = $request->input('email');
        $newRecord->subject = $request->input('subject');
        $newRecord->message = $request->input('message');
        // Fill other attributes as needed

        // Save the record to the database
        $newRecord->save();

        // Optionally, you can return a response indicating success
        return response()->json(['message' => 'Record created successfully'], 201);
    }
}
