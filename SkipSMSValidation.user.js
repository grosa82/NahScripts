// ==UserScript==
// @name         Skip SMS Validation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Skips SMS validation
// @author       Ricardo Goncalves
// @include      */DealerApp/Invoice?dealerID=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var description = ["Bed", "Bunk", "Canop", "Four-poste", "Murph", "Platfor", "Sleig", "Waterbed", "Daybed", "Futon", "Hammock", "Headboard", "Infan", "Crib", "Cradle", "Mattress"];
    var number = Math.floor(Math.random() * description.length);
    $("#SendCode").after("<button type=\"button\" class=\"btn btn-danger btn-lg\" onclick=\"document.forms[0].submit();\" style=\"margin-left: 40px;\">NAH</button>");
    $("select[name=ItemCondition]").val(1);
    $("#description").val(description[number]);
    $("table.table-striped td").each(function(){
       if ($(this).html().indexOf('$') > -1)
       {
         var amount = $(this).html().replace('$','').replace(',','');
         $("#amount").val(amount);
       }
    });
    $("#deliveryDate").val((new Date()).toLocaleDateString());
    $("#deliveryDate").change();
    $("#amount").change();
})();
