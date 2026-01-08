---
layout: page
title: Search
permalink: /search/
---

<div id="search-wrapper" class="pt-5 ps-2 pe-4">
  <input
    type="search"
    id="search-input"
    class="form-control"
    placeholder="Search..."
    aria-label="search"
    autocomplete="off"
    autofocus
  >
  
  <div id="search-hints" class="mt-4">
    {% include_cached trending-tags.html lang=include.lang %}
  </div>
  
  <div id="search-results" class="d-flex flex-wrap justify-content-center text-muted mt-3"></div>
</div>

<script>
  // Auto-populate search from URL query parameter
  // Wait for SimpleJekyllSearch to initialize before triggering search
  window.addEventListener('load', function() {
    setTimeout(function() {
      const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get('q');
      const searchInput = document.getElementById('search-input');
      
      if (query && searchInput) {
        searchInput.value = query;
        // Trigger the search by dispatching input event
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        searchInput.dispatchEvent(new Event('change', { bubbles: true }));
        // Hide search hints when showing results
        const hints = document.getElementById('search-hints');
        if (hints) {
          hints.style.display = 'none';
        }
      }
    }, 500); // Wait 500ms for SimpleJekyllSearch to initialize
  });
</script>

{% include search-loader.html %}




