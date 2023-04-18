import * as Model from "../model/model.js";

function initURLListner(){
    $(window).on("hashchange", Model.changeRoute);
    Model.changeRoute();
}


$(document).ready(function(){
    initURLListner();
});