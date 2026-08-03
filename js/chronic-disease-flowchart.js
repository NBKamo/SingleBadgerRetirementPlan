/**
 * Draw connector lines for the chronic disease flowchart.
 */
(function () {
  var flowchart = document.querySelector('.cd-flowchart');
  if (!flowchart) return;

  var svg = flowchart.querySelector('.cd-connectors');
  var rootNode = flowchart.querySelector('.cd-node-root');
  var branches = flowchart.querySelectorAll('.cd-branch');

  function clearLines() {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
  }

  function centerRight(el) {
    var fc = flowchart.getBoundingClientRect();
    var r = el.getBoundingClientRect();
    return { x: r.right - fc.left, y: r.top + r.height / 2 - fc.top };
  }

  function centerLeft(el) {
    var fc = flowchart.getBoundingClientRect();
    var r = el.getBoundingClientRect();
    return { x: r.left - fc.left, y: r.top + r.height / 2 - fc.top };
  }

  function addLine(x1, y1, x2, y2, cls) {
    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('class', cls || 'cd-line');
    svg.appendChild(line);
  }

  function draw() {
    clearLines();

    var rootRight = centerRight(rootNode);
    var axisX = rootRight.x;

    branches.forEach(function (branch) {
      var primary = branch.querySelector('.cd-node-primary');
      if (!primary) return;

      var primaryLeft = centerLeft(primary);
      var midX = axisX + (primaryLeft.x - axisX) * 0.35;

      addLine(axisX, rootRight.y, axisX, primaryLeft.y, 'cd-line cd-line-axis');
      addLine(axisX, primaryLeft.y, primaryLeft.x, primaryLeft.y, 'cd-line');

      var detail = branch.querySelector('.cd-branch-detail');
      if (!detail) return;

      var primaryRight = centerRight(primary);
      var firstChild = detail.querySelector('.cd-node, .cd-subgroup');
      if (!firstChild) return;

      var target = firstChild.classList.contains('cd-subgroup')
        ? firstChild.querySelector('.cd-node')
        : firstChild;

      if (!target) return;

      var targetLeft = centerLeft(target);
      addLine(primaryRight.x, primaryRight.y, targetLeft.x, targetLeft.y, 'cd-line');

      var endNode = detail.querySelector('.cd-node-end');
      if (endNode) {
        var subgroup = detail.querySelector('.cd-subgroup');
        if (subgroup) {
          var subs = subgroup.querySelectorAll('.cd-node');
          var endLeft = centerLeft(endNode);
          subs.forEach(function (sub) {
            var subRight = centerRight(sub);
            addLine(subRight.x, subRight.y, endLeft.x, endLeft.y, 'cd-line');
          });
        }
      }
    });
  }

  draw();
  window.addEventListener('resize', draw);
})();
