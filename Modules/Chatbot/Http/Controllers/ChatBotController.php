<?php

namespace Modules\Chatbot\Http\Controllers;

use App\Models\Preference;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ChatBotController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        $data['access_token'] = auth()->check() ? auth()->user()->createToken('authToken')->accessToken : null;
        $data['favicon'] = str_replace('\\', '/', Preference::getFavicon());
        $data['base_api_url'] = route('frontend.index').'/api';
        $data['base_url'] = route('frontend.index');
        $path = parse_url(route('frontend.index'));
        $data['base_path'] = $path['path'] ?? '/';
        $data['base_path_host'] = $path['host'];
        $data['is_local'] = isset($path['path']) ? 1 : 0;
        $data['lang'] = \App::getLocale();
        $data['website_name'] = preference('company_name');
        return view('chatbot::index', $data);
    }
}
