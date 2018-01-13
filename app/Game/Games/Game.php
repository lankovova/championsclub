<?php

namespace App\Game\Games;

use App\Game\GameInterface;

abstract class Game implements GameInterface{

    abstract public function spin();

    abstract public function bonusSpin();

    abstract public function areBonusSpins();

}