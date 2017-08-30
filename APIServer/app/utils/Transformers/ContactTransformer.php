<?php namespace App\utils\Transformers;

class ContactTransformer extends Transformer {

  public function transform($contact)
  {
    return [
      'id' => $contact['id'],
      'first_name' => $contact['first_name'],
      'email' => $contact['email'],
      'title' => $contact['title'],
      'phone' => $contact['phone'],
      'department' => $contact['department'],
      'home_phone' => $contact['home_phone'],
      'other_phone' => $contact['other_phone'],
      'fax' => $contact['fax'],
      'mobile' => $contact['mobile'],
      'birthday' => $contact['birthday'],
      'assistant' => $contact['assistant'],
      'asst_phone' => $contact['asst_phone'],
      'reports_to' => $contact['reports_to'],
      'skype' => $contact['skype'],
      'twitter' => $contact['twitter']
    ];
  }
}
