<?php

namespace App\Game;

interface GameInterface {

    /**
     * Return result of normal spin
     *
     * @return array
     */
    public function spin();

    /**
     * Return result of bonus spin
     *
     * @return array
     */
    public function bonusSpin();

    /**
     * Return "true" if player won bonus spins
     * and "false" if not
     *
     * @return void
     */
    public function areBonusSpins();

}