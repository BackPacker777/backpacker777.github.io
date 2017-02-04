//  @todo: Do stuff

"use strict";

class main {
     constructor() {
          main.loadServiceWorker();
          main.prepApp();
          main.handleSlider();
          main.handleDieQty();
          main.handleDieType();
          main.handleIndividualsRoll();
          main.handleTotalRoll();
     }

     static loadServiceWorker() {
          if ('serviceWorker' in navigator) {
               navigator.serviceWorker.register('/ServiceWorker.js')
                    .then(() => { console.log('Service Worker Registered'); });
          }
     }

     static prepApp() {
          document.getElementById('sliderQty').innerHTML = document.getElementById('slider').value;
          document.getElementById('dieQty').value = document.getElementById('slider').value;
          document.getElementById('diceType').value = '0';
          document.getElementById('results').innerHTML = '_';
     }

     static handleSlider() {
          document.getElementById('slider').addEventListener('input', () => {
               document.getElementById('sliderQty').innerHTML = document.getElementById('slider').value;
               document.getElementById('dieQty').value = document.getElementById('slider').value;
          });
     }

     static handleDieQty() {
          const MAX_DICE = 10;
          document.getElementById('dieQty').addEventListener('change', () => {
               if (document.getElementById('dieQty').value > MAX_DICE || !/^(0-9)$/.test(document.getElementById('dieQty').value)) {
                    document.getElementById('dieQty').value = MAX_DICE;
               }
               document.getElementById('slider').value = document.getElementById('dieQty').value;
               document.getElementById('sliderQty').innerHTML = document.getElementById('slider').value;
          });
     }

     /*static handleDieType() {
          const MAX_TYPE = 999;
          const dieTypes = document.forms["rollResults"].elements["dieType"];
          document.getElementById('diceType').addEventListener('change', () => {
               if (document.getElementById('diceType').value > MAX_TYPE || isNaN(document.getElementById('diceType').value)) {
                    document.getElementById('diceType').value = MAX_TYPE;
               }
          });
          for (let i = 0; i < dieTypes.length; i++) {
               dieTypes[i].addEventListener('click', () => {
                    document.getElementById('diceType').value = dieTypes[i].value;
               });
          }
     }*/

     static handleDieType() {
          document.getElementById('dieType').addEventListener('change', () => {
               document.getElementById('diceType').value = dieType.value;
          });
     }

     static handleIndividualsRoll() {
          document.getElementById('individualsRoll').addEventListener('click', () => {
               let dieQty = Number(document.getElementById('dieQty').value);
               let dieType = Number(document.getElementById('diceType').value);
               let finalResult = '';
               let results = [];
               for (let i = 0; i < dieQty; i++) {
                    results[i] = Math.floor((Math.random() * dieType) + 1);
                    if (i < dieQty - 1) {
                         finalResult += results[i] + ', ';
                    } else {
                         finalResult += results[i];
                    }
               }
               document.getElementById('results').innerHTML = finalResult;
          });
     }

     static handleTotalRoll() {
          document.getElementById('totalRoll').addEventListener('click', () => {
               let dieQty = Number(document.getElementById('dieQty').value);
               let dieType = Number(document.getElementById('diceType').value);
               let result = 0;
               for (let i = 0; i < dieQty; i++) {
                    result += Math.floor((Math.random() * dieType) + 1);
               }
               result += '';
               document.getElementById('results').innerHTML = result;
          });
     }
}

window.addEventListener('load', () => {
     new main();
});