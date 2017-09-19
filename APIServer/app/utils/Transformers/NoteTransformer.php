<?php namespace App\utils\Transformers;
use App\Company;

class NoteTransformer extends Transformer {

  public function transform($note)
  {
    $author = $note->author;
    $company = $note->company;

    return [
      'id' => $note['id'],
      'title' => $note['title'],
      'body' => $note['body'],
      'order_id' => $note['order_id'],
      'author' => $author,
      'company' => $company,
    ];
  }

}
