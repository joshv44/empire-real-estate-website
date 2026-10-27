(function () {
  "use strict";

  // Inbox that receives website form messages (Josh).
  var CONTACT_EMAIL = "joshvollmar@yahoo.com";

  var fmtMoney = function (n) {
    return n == null ? "Call for price" : "$" + Number(n).toLocaleString("en-US");
  };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  // ---------- Listings ----------
  function renderListings() {
    var grid = document.getElementById("listingsGrid");
    var data = window.EMPIRE_LISTINGS || [];
    if (!grid) return;
    if (!data.length) {
      grid.innerHTML = '<p class="empty">New listings coming soon. Call (920) 619-2170 to hear about properties before they hit the market.</p>';
      return;
    }
    grid.innerHTML = data.map(function (l) {
      var facts = [];
      if (l.beds != null) facts.push("<li><strong>" + l.beds + "</strong> bd</li>");
      if (l.baths != null) facts.push("<li><strong>" + l.baths + "</strong> ba</li>");
      if (l.sqft != null) facts.push("<li><strong>" + Number(l.sqft).toLocaleString() + "</strong> sq ft</li>");
      if (l.acres != null) facts.push("<li><strong>" + l.acres + "</strong> acres</li>");
      var media = l.photo
        ? '<img src="' + esc(l.photo) + '" alt="' + esc(l.title) + '" loading="lazy">'
        : '<div class="listing-ph"><img src="assets/logo.svg" alt="" width="44" height="44"><span>' + esc(l.type) + "</span></div>";
      var statusClass = (l.status || "").toLowerCase().replace(/\s+/g, "-");
      return (
        '<article class="listing">' +
          '<a class="listing-media" href="' + esc(l.url) + '" target="_blank" rel="noopener" aria-label="View photos of ' + esc(l.address) + '">' + media +
            '<span class="badge badge-' + statusClass + '">' + esc(l.status) + "</span>" +
            '<span class="photo-hint">View photos ↗</span>' +
          "</a>" +
          '<div class="listing-body">' +
            '<p class="listing-type">' + esc(l.type) + "</p>" +
            '<p class="listing-price">' + fmtMoney(l.price) + "</p>" +
            "<h3>" + esc(l.title) + "</h3>" +
            '<p class="listing-addr">' + esc(l.address) + "</p>" +
            '<ul class="facts">' + facts.join("") + "</ul>" +
            '<p class="listing-desc">' + esc(l.description) + "</p>" +
            '<div class="listing-foot">' +
              '<span class="fine">' + (l.mls ? "MLS# " + esc(l.mls) + " · " : "") + esc(l.agent || "") + "</span>" +
              '<a class="btn btn-sm btn-outline" href="' + esc(l.url) + '" target="_blank" rel="noopener">Full Details</a>' +
            "</div>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function renderRecent() {
    var ul = document.getElementById("recentSales");
    var data = window.EMPIRE_RECENT_SALES || [];
    if (!ul) return;
    if (!data.length) { ul.parentElement.style.display = "none"; return; }
    ul.innerHTML = data.map(function (s) {
      return '<li><span class="sold-tag">SOLD</span>' + esc(s.address) +
        ' <em>(' + (s.side === "Listing" ? "represented seller" : "represented buyer") + ")</em></li>";
    }).join("");
  }

  // ---------- Forms (mailto fallback, or POST to data-endpoint) ----------
  function wireForm(form) {
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form-status");
      var fd = new FormData(form);
      var endpoint = form.getAttribute("data-endpoint");
      if (endpoint) {
        fetch(endpoint, { method: "POST", body: fd, headers: { Accept: "application/json" } })
          .then(function (r) {
            if (!r.ok) throw new Error();
            form.reset();
            status.textContent = "Thanks! We'll be in touch shortly.";
          })
          .catch(function () {
            status.textContent = "Sorry, something went wrong. Please call (920) 619-2170.";
          });
        return;
      }
      var lines = [];
      fd.forEach(function (v, k) { if (v) lines.push(k + ": " + v); });
      var href = "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(form.getAttribute("data-subject") || "Website Inquiry") +
        "&body=" + encodeURIComponent(lines.join("\n"));
      window.location.href = href;
      status.textContent = "Your email app should open with your message ready to send. If it doesn't, call or text (920) 619-2170.";
    });
  }

  // ---------- Mobile nav ----------
  function wireNav() {
    var btn = document.getElementById("navToggle");
    var nav = document.getElementById("nav");
    if (!btn || !nav) return;
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    });
  }

  // Links with data-interest preselect the contact form's "I'm interested in" option.
  function wireInterestLinks() {
    document.querySelectorAll("[data-interest]").forEach(function (a) {
      a.addEventListener("click", function () {
        var sel = document.querySelector('#contactForm select[name="Interest"]');
        if (sel) sel.value = a.getAttribute("data-interest");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    wireInterestLinks();
    renderListings();
    renderRecent();
    wireForm(document.getElementById("valuationForm"));
    wireForm(document.getElementById("contactForm"));
    wireNav();
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
