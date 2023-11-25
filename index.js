/* --------------------------- Navigation Section --------------------------- */

$(document).ready(function () {
  // Show/hide <ul> on clicking the <i> tag
  $(".nav-toggle").click(function () {
    $(".nav-items ul").toggle();
  });

  // Show overlay on clicking <li>
  $(".nav-items ul li").click(function () {
    $(".overlay").addClass("show-overlay");
  });

  // Hide overlay when clicking outside the <ul>
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".nav-items").length) {
      $(".nav-items ul").hide();
      $(".overlay").removeClass("show-overlay");
    }
  });
});

/* -------------------------------------------------------------------------- */
