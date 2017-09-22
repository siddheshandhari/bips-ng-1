<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Packinginfo;
use App\utils\Transformers\PackinginfoTransformer;

class PackinginfoController extends ApiController
{ 
    protected $packinginfoTransformer;
    function __construct(PackinginfoTransformer $packinginfoTransformer)
    {
        $this->packinginfoTransformer = $packinginfoTransformer;
    }

    public function browse()
    {
        $packinginfos = packinginfo::all();
        return $this->respond(
            $this->packinginfoTransformer->transformCollection($packinginfos)
        );
    }
}
