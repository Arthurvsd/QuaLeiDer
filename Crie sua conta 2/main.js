function marca(element) {
    $("nav input[type=checkbox][id!=" + $(element).attr("id") + "]")
        .attr("checked", false).toggleClass('item');
}