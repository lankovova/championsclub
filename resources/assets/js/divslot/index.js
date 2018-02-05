import Game from './Game';

// Merge common and game individual settings
settings = Object.assign(commonSettings, settings);

// Set symbol height and width if set only symbol square side size
if (settings.symbolSize) {
    settings.symbolHeight = settings.symbolWidth = settings.symbolSize;
}

window.divSlot = { Game: Game };
