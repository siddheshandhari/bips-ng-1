<?php
namespace App\Http\Controllers;

class ApiController extends Controller {
  protected $statusCode = 200;

  public function getStatusCode()
  {
    return $this->statusCode;
  }

  public function setStatusCode($statusCode)
  {
    $this->statusCode = $statusCode;
    return $this;
  }

  public function respondNotFound($message= 'Not Found!')
  {
    return $this->setStatusCode(404)->respondWithError($message);
  }

  public function respond($data, $headers = [])
  {
    return response()->json($data, $this->getStatusCode(), $headers);
  }

  public function respondWithError($message)
  {
    return $this->respond([
      'success' => false,
      'error' => [
        'message' => $message,
        'status_code' => $this->getStatusCode()
      ]
    ]);
  }

  public function respondCreated($created_body)
  {
    return $this->setStatusCode(201)->respond([
      'success' => true,
      'body' => $created_body
    ]);
  }

  public function respondUpdated($message)
  {
    return $this->setStatusCode(200)->respond([
      'success' => true,
      'message' => $message
    ]);
  }

  public function respondDeleted($message)
  {
    return $this->setStatusCode(200)->respond([
      'success' => true,
      'message' => $message
    ]);
  }

  public function respondExisted($message)
  {
    return $this->setStatusCode(409)->respond([
      'success' => false,
      'message' => $message
    ]);
  }

}
