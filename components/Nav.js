export default links => `
<header>
<div class="nav-bar">
<p class="logo">Pack Fitness</p>
<nav>
<ul>
${links.reduce(
  (html, link) =>
    html +
    `<li><a href="/${link.title !== "Home" ? link.title : ""}" title="${
      link.title
    }" data-navigo>${link.text}</a></li>`,
  ``
)}
</ul>
</nav>
</div>
</header>
`;
