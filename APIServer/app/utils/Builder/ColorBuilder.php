<?php namespace App\utils\Builder;
use App\Color;
use Symfony\Component\HttpKernel\Exception\HttpException;

class ColorBuilder {
  public function build($data)
  {
    $color = new Color;
    $color->color = $data['color'];
    
    if($color->save()){
      return $color;
    }
  }

  public function update($data, $id)
  {
    $color = Color::find($id);
    $color->color = $data['color'];
    
    if($color->save()){
      return $color;
    }
  }
}
