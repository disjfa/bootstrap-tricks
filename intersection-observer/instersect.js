function callback(entries) {
  for (var i in entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }
}

function initObserver() {
  var observer = new IntersectionObserver(callback);
  var items = document.querySelectorAll('.js-observe');

  for (var i in items) {
    if (!items.hasOwnProperty(i)) {
      continue;
    }

    observer.observe(items[i]);
  }
}

if (window.IntersectionObserver) {
  initObserver();
} else {
  console.log("IntersectionObserver not supported.");
}
