<?php namespace App\utils\Transformers;
use App\Note;

class NoteTransformer extends Transformer {

  public function transform($note)
  {
    $company = $note->company;
    $create_author = $note->create_author;
    $update_author = $note->update_author;
    return [
      'id' => $note['id'],
      'is_personal' => $note['is_personal'],
      'subject' => $note['subject'],
      'body' => $note['body'],
      'company' => [
        'id' => $company['id'],
        'name' => $company['name']
      ],
      'create_author' => [
        'id' => $create_author['id'],
        'first_name' => $create_author['first_name'],
        'last_name' => $create_author['last_name']
      ],
      'update_author' => [
        'id' => $update_author['id'],
        'first_name' => $update_author['first_name'],
        'last_name' => $update_author['last_name'],
      ],
      'category' => $note['category'],
      'context' => $note['context_id'],
      'created_at' => $note['created_at'],
      'updated_at' => $note['updated_at']
    ];
  }

}
