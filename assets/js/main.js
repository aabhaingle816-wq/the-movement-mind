/* ==========================================================================
   THE MOVEMENT MIND — Site behaviour
   --------------------------------------------------------------------------
   You normally do NOT need to edit this file.
   Article and topic information lives in assets/js/articles.js.

   What this file does:
   1. Mobile menu
   2. Builds article cards/lists from articles.js wherever a page asks for them
   3. Search + category filters on the Articles page
   4. Table of contents, reading progress and reading time on article pages
   5. Related articles
   6. Gentle fade-in on scroll + current year in footer
   ========================================================================== */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  var ARTICLES = (window.TMM_ARTICLES || []).slice();
  var TOPICS = window.TMM_TOPICS || [];
  // "root" is the relative path back to the site's home folder ("" or "../").
  var ROOT = document.body.getAttribute("data-root") || "";

  // Newest first
  ARTICLES.sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; });

  function topicByKey(key) {
    for (var i = 0; i < TOPICS.length; i++) if (TOPICS[i].key === key) return TOPICS[i];
    return { key: key, name: key, slug: key, image: "" };
  }
  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function formatDate(iso) {
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d)) return iso;
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }
  function articleURL(a) { return ROOT + "articles/" + a.slug + ".html"; }
  function topicURL(t) { return ROOT + "topics/" + t.slug + ".html"; }
  function imageFor(a) { return ROOT + "assets/img/" + (a.image || topicByKey(a.category).image); }

  /* 1. MOBILE MENU ------------------------------------------------------ */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* 2. CARD TEMPLATES --------------------------------------------------- */
  function metaLine(a) {
    return '<span>' + escapeHTML(a.readingTime) + ' min read</span>' +
      '<span class="meta-sep" aria-hidden="true">·</span>' +
      '<time datetime="' + a.date + '">' + formatDate(a.date) + '</time>';
  }
  function draftPill(a) { return a.draft ? ' <span class="draft-pill">Draft</span>' : ""; }

  function cardHTML(a, headingLevel) {
    var t = topicByKey(a.category);
    var h = headingLevel || "h3";
    return '<article class="card reveal">' +
      '<div class="card-media"><img src="' + imageFor(a) + '" alt="" loading="lazy" width="600" height="400"></div>' +
      '<div class="card-top"><a class="category-label" href="' + topicURL(t) + '">' + escapeHTML(t.name) + '</a>' + draftPill(a) + '</div>' +
      '<' + h + '><a href="' + articleURL(a) + '">' + escapeHTML(a.title) + '</a></' + h + '>' +
      '<p>' + escapeHTML(a.excerpt) + '</p>' +
      '<p class="meta">' + metaLine(a) + '</p>' +
      '</article>';
  }

  function listItemHTML(a) {
    var t = topicByKey(a.category);
    return '<article class="list-item reveal">' +
      '<div><a class="category-label" href="' + topicURL(t) + '">' + escapeHTML(t.name) + '</a></div>' +
      '<div><h3><a href="' + articleURL(a) + '">' + escapeHTML(a.title) + '</a></h3><p>' + escapeHTML(a.excerpt) + '</p></div>' +
      '<div class="meta">' + escapeHTML(a.readingTime) + ' min read' + draftPill(a) + '</div>' +
      '</article>';
  }

  function featuredHTML(a) {
    var t = topicByKey(a.category);
    return '<article class="featured">' +
      '<div class="featured-media"><img src="' + imageFor(a) + '" alt="" width="900" height="600"></div>' +
      '<div><span class="eyebrow">Featured</span><br>' +
      '<a class="category-label" href="' + topicURL(t) + '">' + escapeHTML(t.name) + '</a>' + draftPill(a) +
      '<h3><a href="' + articleURL(a) + '">' + escapeHTML(a.title) + '</a></h3>' +
      '<p class="excerpt">' + escapeHTML(a.excerpt) + '</p>' +
      '<p class="meta">' + metaLine(a) + '</p>' +
      '<a class="btn btn--primary" href="' + articleURL(a) + '">Read the article <span class="arrow" aria-hidden="true">→</span></a>' +
      '</div></article>';
  }

  function featuredArticle() {
    for (var i = 0; i < ARTICLES.length; i++) if (ARTICLES[i].featured) return ARTICLES[i];
    return ARTICLES[0];
  }

  // Any element with data-articles="..." gets filled in automatically.
  document.querySelectorAll("[data-articles]").forEach(function (el) {
    var mode = el.getAttribute("data-articles");
    var limit = parseInt(el.getAttribute("data-limit") || "0", 10);
    var list = ARTICLES;

    if (mode === "featured") {
      var f = featuredArticle();
      el.innerHTML = f ? featuredHTML(f) : "";
      return;
    }
    if (mode.indexOf("topic:") === 0) {
      var key = mode.split(":")[1];
      list = ARTICLES.filter(function (a) { return a.category === key; });
      if (!list.length) {
        el.innerHTML = '<p class="empty-state">No articles in this topic yet. New pieces are in preparation — <a href="' + ROOT + 'articles.html">browse all articles</a> in the meantime.</p>';
        return;
      }
    }
    if (mode === "latest") {
      var feat = featuredArticle();
      list = ARTICLES.filter(function (a) { return a !== feat; });
    }
    if (limit) list = list.slice(0, limit);
    var style = el.getAttribute("data-style") || "card";
    el.innerHTML = list.map(style === "list" ? listItemHTML : function (a) { return cardHTML(a); }).join("");
  });

  /* 3. ARCHIVE: SEARCH + FILTERS ---------------------------------------- */
  var archive = document.getElementById("archive-grid");
  if (archive) {
    var input = document.getElementById("article-search");
    var count = document.getElementById("results-count");
    var filterBox = document.getElementById("filters");
    var params = new URLSearchParams(window.location.search);
    var state = { topic: params.get("topic") || "all", q: params.get("q") || "" };

    // Build filter buttons from the topic list
    var buttons = [{ key: "all", name: "All topics" }].concat(TOPICS);
    filterBox.insertAdjacentHTML("beforeend", buttons.map(function (t) {
      return '<button type="button" class="filter-btn" data-topic="' + t.key + '" aria-pressed="false">' + escapeHTML(t.name) + '</button>';
    }).join(""));

    function render() {
      var q = state.q.trim().toLowerCase();
      var words = q.split(/\s+/).filter(Boolean);
      var results = ARTICLES.filter(function (a) {
        if (state.topic !== "all" && a.category !== state.topic) return false;
        if (!words.length) return true;
        var hay = (a.title + " " + a.subtitle + " " + a.excerpt + " " + topicByKey(a.category).name + " " + (a.tags || []).join(" ")).toLowerCase();
        return words.every(function (w) { return hay.indexOf(w) !== -1; });
      });

      filterBox.querySelectorAll(".filter-btn").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.getAttribute("data-topic") === state.topic));
      });

      archive.innerHTML = results.length
        ? results.map(function (a) { return cardHTML(a); }).join("")
        : '<p class="empty-state" style="grid-column:1/-1">No articles match your search. Try a different word or choose “All topics”.</p>';
      count.textContent = results.length + (results.length === 1 ? " article" : " articles") +
        (state.topic !== "all" ? " in " + topicByKey(state.topic).name : "") +
        (q ? " matching “" + state.q.trim() + "”" : "");
      observeReveals();

      // Keep the address bar in sync so filtered views can be shared
      var p = new URLSearchParams();
      if (state.topic !== "all") p.set("topic", state.topic);
      if (q) p.set("q", state.q.trim());
      var qs = p.toString();
      history.replaceState(null, "", window.location.pathname + (qs ? "?" + qs : ""));
    }

    filterBox.addEventListener("click", function (e) {
      var b = e.target.closest(".filter-btn");
      if (!b) return;
      state.topic = b.getAttribute("data-topic");
      render();
    });
    input.value = state.q;
    input.addEventListener("input", function () { state.q = input.value; render(); });
    document.getElementById("search-form").addEventListener("submit", function (e) { e.preventDefault(); });
    render();
  }

  /* 4. ARTICLE PAGE ----------------------------------------------------- */
  var prose = document.querySelector(".prose");
  if (prose) {
    // Reading time (about 220 words per minute)
    var words = (prose.innerText || prose.textContent).trim().split(/\s+/).length;
    var minutes = Math.max(1, Math.round(words / 220));
    document.querySelectorAll("[data-reading-time]").forEach(function (el) { el.textContent = minutes + " min read"; });

    // Table of contents from the article's h2 headings
    var toc = document.getElementById("toc");
    var headings = prose.querySelectorAll("h2");
    if (toc && headings.length >= 3) {
      var items = [];
      headings.forEach(function (h, i) {
        if (!h.id) h.id = "section-" + (i + 1) + "-" + h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        items.push('<li><a href="#' + h.id + '">' + escapeHTML(h.textContent) + '</a></li>');
      });
      toc.innerHTML = '<h2>In this article</h2><ol>' + items.join("") + '</ol>';
      toc.hidden = false;

      if ("IntersectionObserver" in window) {
        var links = toc.querySelectorAll("a");
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) {
              links.forEach(function (l) { l.classList.toggle("is-active", l.getAttribute("href") === "#" + en.target.id); });
            }
          });
        }, { rootMargin: "-20% 0px -70% 0px" });
        headings.forEach(function (h) { io.observe(h); });
      }
    }

    // Reading progress bar
    var bar = document.querySelector(".progress");
    if (bar) {
      var onScroll = function () {
        var rect = prose.getBoundingClientRect();
        var total = prose.offsetHeight - window.innerHeight * 0.6;
        var done = Math.min(1, Math.max(0, -rect.top / (total || 1)));
        bar.style.width = (done * 100) + "%";
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  }

  /* 5. RELATED ARTICLES ------------------------------------------------- */
  var related = document.getElementById("related-grid");
  if (related) {
    var current = document.body.getAttribute("data-slug");
    var me = ARTICLES.filter(function (a) { return a.slug === current; })[0];
    var others = ARTICLES.filter(function (a) { return a.slug !== current; });
    if (me) {
      var related1 = (me.related || []).map(function (s) { return others.filter(function (a) { return a.slug === s; })[0]; }).filter(Boolean);
      var sameTopic = others.filter(function (a) { return a.category === me.category && related1.indexOf(a) === -1; });
      var rest = others.filter(function (a) { return related1.indexOf(a) === -1 && sameTopic.indexOf(a) === -1; });
      others = related1.concat(sameTopic, rest);
    }
    related.innerHTML = others.slice(0, 3).map(function (a) { return cardHTML(a); }).join("");
  }

  /* 6. REVEAL ON SCROLL + YEAR ------------------------------------------ */
  var revealObserver = "IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("is-visible"); revealObserver.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px" })
    : null;
  function observeReveals() {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
      if (revealObserver) revealObserver.observe(el); else el.classList.add("is-visible");
    });
  }
  observeReveals();

  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
