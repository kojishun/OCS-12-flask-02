function plotpop() {
  // Operator Selector
  op_sel = document.getElementById("op");
  var idx = op_sel.selectedIndex;
  var op = op_sel.options[idx].value;

  // Buid query parameter
  var param = {};
  param["op"] = op;
  var query = jQuery.param(param);

  // Query with a new parameter
  $.get("/plot/population" + "?" + query, function (data) {
    document.getElementById("plotimg").src = data;
  });
}

document.getElementById("op").addEventListener(
  "change",
  function () {
    plotpop();
  },
  false
);
plotpop();
