<?php namespace App\utils\Builder;
use App\Neckfinish;
use Symfony\Component\HttpKernel\Exception\HttpException;

class NeckfinishBuilder {
  public function build($data)
  {
    $neckfinish = new Neckfinish;
    $neckfinish->neck_finish_type = $data['neck_finish_type'];
    $neckfinish->inner_diameter = $data['inner_diameter'];
    $neckfinish->outer_diameter = $data['outer_diameter'];
    $neckfinish->ring = $data['ring'];
    
    if($neckfinish->save()){
      return $neckfinish;
    }
  }

  public function update($data, $id)
  {
    $neckfinish = Neckfinish::find($id);
    $neckfinish->neck_finish_type = $data['neck_finish_type'];
    $neckfinish->inner_diameter = $data['inner_diameter'];
    $neckfinish->outer_diameter = $data['outer_diameter'];
    $neckfinish->ring = $data['ring'];
    
    if($neckfinish->save()){
      return $neckfinish;
    }
  }
}
