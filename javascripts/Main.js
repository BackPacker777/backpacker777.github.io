"use strict";

import EventHandler from './EventHandler.js';

class Main {
    /**
     * @desc instantiates anonymous EventHandler
     */
    constructor() {
        new EventHandler();
        Main.prepUX();
    }

    /**
     * @desc Configures user experience (UX) in the DOM
     */
    static prepUX() {
        console.log("prepUX");
    }
}

/**
 * @desc Program bootstrapper
 */
window.addEventListener('load', () => {
    new Main();
});