import Game from './Game';

// Merge common and game individual settings
settings = Object.assign(commonSettings, settings);

window.divSlot = { Game: Game };
