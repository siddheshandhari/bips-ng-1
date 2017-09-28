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
    $notes = Note::orderBy('updated_at', 'desc')->get();
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
    if(!$request->input('is_personal')){
      $note->company_id = $request->input('company');
      $note->category = $request->input('category');
      $note->context_id = $request->input('context');
    }
    $note->is_personal = $request->input('is_personal');
    $note->subject = $request->input('subject');
    $note->body = $request->input('body');
    $note->create_author_id = 2;
    $note->update_author_id = 2;
    $note->created_at = \Carbon\Carbon::now();
    $note->updated_at = \Carbon\Carbon::now();
    if($note->save())
    {
      $note = $this->noteTransformer->transform($note);
      return $this->respondCreated($note);
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
