(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('toolSearch');
    if (!input) return;
    input.addEventListener('input', filterTools);
  });

  function filterTools() {
    var input = document.getElementById('toolSearch');
    var q = input.value.trim().toLowerCase();
    var tiles = document.querySelectorAll('.tile');
    var sections = document.querySelectorAll('.tool-section');
    var anyVisible = false;

    for (var i = 0; i < tiles.length; i++) {
      var tile = tiles[i];
      var title = (tile.querySelector('.title') || {}).textContent || '';
      var desc = (tile.querySelector('.desc') || {}).textContent || '';
      var keywords = tile.getAttribute('data-keywords') || '';
      var haystack = (title + ' ' + desc + ' ' + keywords).toLowerCase();
      var show = !q || haystack.indexOf(q) !== -1;
      tile.classList.toggle('hidden', !show);
      if (show) anyVisible = true;
    }

    for (var s = 0; s < sections.length; s++) {
      var hasVisible = sections[s].querySelectorAll('.tile:not(.hidden)').length > 0;
      sections[s].classList.toggle('hidden', !hasVisible);
    }

    var empty = document.getElementById('emptyState');
    if (empty) empty.classList.toggle('hidden', anyVisible || !q);
  }
})();
