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

  public function add(Request $request)
  {
    $note = new Note;
    $note->subject = $request->input('subject');
    $note->body = $request->input('body');
    $note->create_author_id = 1;
    $note->update_author_id = 1;
    $note->company_id = $request->input('company');
    $note->category = $request->input('category');
    $note->context_id = $request->input('context');
    $note->created_at = \Carbon\Carbon::now();
    $note->updated_at = \Carbon\Carbon::now();
    if($note->save())
    {
      return $this->respondCreated('Note successfully created!');
    }
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
