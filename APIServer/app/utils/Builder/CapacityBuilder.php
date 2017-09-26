<?php namespace App\utils\Builder;
use App\Capacity;
use Symfony\Component\HttpKernel\Exception\HttpException;

class CapacityBuilder {
  public function build($data)
  {
    $capacity = new Capacity;
    $capacity->capacity = $data['capacity'];
    $capacity->weight = $data['weight'];
    $capacity->height = $data['height'];
    $capacity->diameter = $data['diameter'];
    $capacity->punt = $data['punt'];
    
    if($capacity->save()){
      return $capacity;
    }
  }

  public function update($data, $id)
  {
    $capacity = Capacity::find($id);
    $capacity->capacity = $data['capacity'];
    $capacity->weight = $data['weight'];
    $capacity->height = $data['height'];
    $capacity->diameter = $data['diameter'];
    $capacity->punt = $data['punt'];
    
    if($capacity->save()){
      return $capacity;
    }
  }
}
