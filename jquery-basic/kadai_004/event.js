$(document).ready(function () {
    // loadイベントの処理 
    $(window).on("load", function() {
        console.log("loadイベントが発生しました");
    });
    // scrollイベントの処理 
    $(window).on("scroll", function () {
        console.log("scrollイベント発生しました");
    });
});