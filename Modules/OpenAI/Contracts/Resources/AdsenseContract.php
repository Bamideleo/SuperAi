<?php

namespace Modules\OpenAI\Contracts\Resources;


interface AdsenseContract
{
    /**
     * Provide the provider options for aiChat settings.
     *
     * @return array
     */
    public function adsenseOptions(): array;

}
