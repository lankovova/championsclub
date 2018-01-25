<?php

namespace App\Game\Bonus;

use App\Game\Traits\WinChecker;
use App\Game\Traits\Helper;
use App\Game\Bonus\FreeSpins;

class FreeSpinsMultiplier extends FreeSpins {

    protected $multiplier = 3;

}