hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad();
$("code").each(function () {
    $(this).before($("<div class='code-title'></div>").text($(this).data("type")));
});