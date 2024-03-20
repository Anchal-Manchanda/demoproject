jQuery(window).on("load", function () {
  pageFixedHeader();

  jQuery(window).resize(function () {
    pageFixedHeader();
  });
});

function pageFixedHeader() {
  var pageHeader = jQuery("body").find(".pageFixedHeader");
  var scrollAbove = pageHeader.data("breakpoint");

  if (scrollAbove) {
    var windowWidth = jQuery(window).width();
    if (windowWidth > scrollAbove) {
      var header = jQuery("body").find("header.header"),
        headerHeight = header.height();

      if (pageHeader) {
        var leftMargin = jQuery(pageHeader).offset().left,
          topMargin = jQuery(pageHeader).offset().top,
          innerWidth = jQuery(pageHeader).innerWidth(),
          width = jQuery(pageHeader).width(),
          accurateWidth = width + (innerWidth - width);
        //accurateLeft = (leftMargin + (innerWidth - width) / 2);

        var headerBar = pageHeader.find(".fixedBar");

        if (headerBar) {
          headerBar
            .addClass("header-fixed")
            .addClass("mb-0")
            .css({ left: leftMargin, top: headerHeight, width: accurateWidth, "padding-top": topMargin - 50, "padding-bottom": "36px" });

          var barHeight = headerBar.height(),
            //barOuterHeight = headerBar.outerHeight(),
            barInnerHeight = headerBar.innerHeight();
          fixedSpaceFromTop = barHeight + (barInnerHeight - barHeight);

          pageHeader.css({ "padding-top": barInnerHeight - 60 });
        }
      }
    } else {
      var headerBar = pageHeader.find(".fixedBar");
      pageHeader.css({ "padding-top": "initial" });
      headerBar.removeClass("header-fixed").css({ left: "initial", top: "initial", width: "100%", "min-height": "auto", float: "left", "padding-top": "0", "padding-bottom": "36px" });
    }
  }
}

jQuery(".clear-filter-icon").click(function () {
  jQuery(this).parents(".a-optionbox").find("input[type=text]").val("");
  jQuery(this).parents(".a-optionbox").find("label").addClass("inactive").removeClass("active");
  jQuery(this).parents(".a-optionbox").find(".valueSelected").removeClass("valueSelected");
});
