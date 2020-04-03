
// ==UserScript==
// @name         SelectAllGames
// @namespace    http://wundes.com/
// @version      0.1
// @description  Adds an averages row to bottom of sprint points
// @author       John Wundes
// @match        https://pyx-2.pretendyoure.xyz/zy/game.jsp
// @grant        none
// ==/UserScript==


var clickAll= function() {
  $$( ".extra_card_sets input" ).map(t=> t.click())
};

clickAll();
