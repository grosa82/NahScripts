// ==UserScript==
// @name         Skip Initial Payment
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Skip Initial Payment
// @author       Ricardo Goncalves
// @match        */DealerApp/InitialPayment?loanID=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $("#submit-payment").after("<button type=\"button\" class=\"btn btn-danger btn-lg\" onclick=\"$('#continue').click();\" style=\"margin-left: 40px;\">NAH</button>");
})();