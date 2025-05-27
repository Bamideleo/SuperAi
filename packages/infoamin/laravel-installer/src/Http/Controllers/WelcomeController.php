<?php

namespace Infoamin\Installer\Http\Controllers;

use App\Http\Controllers\Controller;

class WelcomeController extends Controller
{
    /**
     * Display the installer welcome page.
     *
     * @return \Illuminate\View\View
     */
    public function welcome()
    {
        if (! \File::exists('.env')) {
            copy('.env.example', '.env');
        }
        return view('packages.installer.welcome');
    }

}
