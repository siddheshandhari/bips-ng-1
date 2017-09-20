<?php

namespace App\Http\Controllers;

use App\Note;
use App\utils\Transformers\NoteTransformer;
use Illuminate\Http\Request;

class NoteController extends ApiController
{
  protected $noteTransformer;

  function __construct(NoteTransformer $noteTransformer)
  {
    $this->noteTransformer = $noteTransformer;
  }

  public function browse()
  {
    $notes = Note::all();
    return $this->respond(
      $this->noteTransformer->transformCollection($notes)
    );
  }

  public function read()
  {

  }

  public function add()
  {

  }

  public function edit()
  {

  }

  public function destroy($id)
  {
    $note = Note::find($id);
    $note->active = false;
    if($note->save()){
      return $this->respondDeleted('Note successfully deleted!');
    }
  }

}
