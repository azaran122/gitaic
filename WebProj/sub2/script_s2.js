﻿$(document).ready(function () { (function ($) { var request = new XMLHttpRequest(); request.open("GET", "data.json", false); request.send(null); console.log("request recieved"); var JSON_object = JSON.parse(request.response); $.each(JSON_object.data, function (key, value) { var tb = ("<tr id=" + key + " style=''><td />" + value.name + "<td/> " + value.age + "<td />" + value.email + "<td />" + value.skilcategory + "<td />" + value.comments + "<td />" + value.insurance + "<td />" + value.place); tb = tb + ("<td> <button _id=" + key + " class='btn editbtn' onclick='$(this).edit(this)'>edit</button>&nbsp; <button _id=" + key + " class='btn delbtn' onclick='$(this).delete(this)'>Delete </button> </td></tr>"); $("#tbody").append(tb); console.log("table finished"); }); var table = $("#mtabl").DataTable({ "jQueryUI": true, }); $.fn.extend({ edit: function (a) { var id = $(a).attr("_id"); }, delete: function (a) { var id = $(a).attr("_id"); $("table#mtabl tr#" + id).remove(); } }) })(jQuery); });