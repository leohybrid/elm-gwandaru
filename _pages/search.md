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
  {% include search-results.html %}
</div>

{% include search-loader.html %}

