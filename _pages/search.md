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
  >
  
  <div id="search-hints" class="mt-4">
    {% include_cached trending-tags.html lang=include.lang %}
  </div>
  
  <div id="search-results" class="d-flex flex-wrap justify-content-center text-muted mt-3"></div>
</div>

{% include search-loader.html %}


