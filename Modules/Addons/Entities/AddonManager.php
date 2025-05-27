<?php

namespace Modules\Addons\Entities;

use Illuminate\Http\Request;
use ZipArchive;
use Illuminate\Support\Facades\Artisan;
use Modules\Addons\Entities\Addon;

class AddonManager
{
    private $fileName = null;

    private $moduleJson = null;

    /**
     * upload
     *
     * @param  request $addonZip
     * @return collection
     */
    public static function upload($addonZip)
    {
        if (!class_exists('ZipArchive')) {
            return false;
        }

        $zipped_file_name = pathinfo($addonZip->getClientOriginalName(), PATHINFO_FILENAME);

        $zip = new ZipArchive;
        $res = $zip->open($addonZip);


        if ($res === true) {
            self::checkValidity($zip);

            $res = $zip->extractTo(base_path('Modules'));
            $zip->close();
        }

        Artisan::call('cache:clear');

        return Addon::findOrFail($zipped_file_name);
    }

    /**
     * migrateAndSeed
     *
     * @param  mixed $name
     * @return void
     */
    public static function migrateAndSeed($name)
    {
        Artisan::call('module:migrate ' . $name);
        Artisan::call('module:seed ' . $name);
    }

    /**
     * Check addon validity
     *
     * @param  object $zip
     * @return bool|Redirect
     */
    private static function checkValidity($zip)
    {
        $validFileFound = 0;

        $validFiles = [
            'module.json'
        ];

        for ($i = 0; $i < $zip->numFiles; $i++) {
            $stat = $zip->statIndex($i);

            $validFileFound += in_array(basename($stat['name']), $validFiles);
        }

        if ($validFileFound == count($validFiles)) {
            return true;
        }

        \Session::flash('fail', __('Your addon is invalid.'));
        return \Redirect::to(url()->previous())->send();
    }

    /**
     * addon install
     *
     * @param $request
     * @return void
     */
    public function install($request)
    {
        $this->fileName = pathinfo($request->attachment->getClientOriginalName(), PATHINFO_FILENAME);
        $z = new ZipArchive;

        if ($z->open($request->attachment)) {
            $json = $z->getFromName($this->fileName."/module.json");

            if ($json) {
                $this->moduleJson = json_decode($json, true);
            }
        }

        return ['status' => true];
    }

    /**
     * Clear Cache
     *
     * @return void
     */
    public static function cacheClear()
    {
        Artisan::call('cache:clear');
        Artisan::call('view:clear');
        Artisan::call('config:clear');
        Artisan::call('route:clear');
    }
}
