import { J as attr, K as attr_class, F as escape_html, M as stringify, N as store_get, O as unsubscribe_stores, D as pop, A as push, P as ensure_array_like, Q as attr_style, R as spread_attributes, S as clsx, T as element, U as spread_props } from "../../chunks/index.js";
import { l as localeStore, $ as $format } from "../../chunks/i18n.svelte.js";
import "photoswipe/lightbox";
import "photoswipe";
function html(value) {
  var html2 = String(value);
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Calendar($$payload) {
  const calendarDeco = "/calendar.png";
  $$payload.out += `<section class="calendar svelte-p5ko0o"><img class="calendar-deco svelte-p5ko0o"${attr("src", calendarDeco)} alt="calendar deco"></section>`;
}
function Letter($$payload, $$props) {
  push();
  var $$store_subs;
  const letterBottom = "/letter-bottom.webp";
  const letterDeco = "/letter-deco.svg";
  const nameDivider = `
    <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#B99493"/>
    </svg>`;
  $$payload.out += `<section class="letter svelte-15smenq"><div class="header svelte-15smenq"><img class="header-deco svelte-15smenq"${attr("src", letterDeco)} alt="letter header deco"> <h2${attr_class(`title ${stringify(localeStore.locale)}`, "svelte-15smenq")}>${escape_html(store_get($$store_subs ??= {}, "$_", $format)("letter.date"))}</h2> <p${attr_class(`sub-title ${stringify(localeStore.locale)}`, "svelte-15smenq")}>${escape_html(store_get($$store_subs ??= {}, "$_", $format)("letter.sub_title"))}</p></div> <div class="letter-container"><p${attr_class(`letter ${stringify(localeStore.locale)}`, "svelte-15smenq")}>${escape_html(store_get($$store_subs ??= {}, "$_", $format)("letter.letter_content"))}</p> `;
  if (localeStore.isEn) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="letter-signature svelte-15smenq"><p class="en svelte-15smenq">with love</p> <p class="en svelte-15smenq">Yungeun &amp; Sujin</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="family-description kr svelte-15smenq"><p class="svelte-15smenq">김성훈<span class="name-divider svelte-15smenq">${html(nameDivider)}</span> 윤경숙 <span class="son svelte-15smenq">의 아들</span>김윤근</p> <p class="svelte-15smenq">정재철<span class="name-divider svelte-15smenq">${html(nameDivider)}</span> 김선순<span class="daughter svelte-15smenq">의 딸</span>정수진</p></div>`;
  }
  $$payload.out += `<!--]--></div></section> <img class="letter-bottom"${attr("src", letterBottom)} alt="letter bottom">`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Confetti($$payload, $$props) {
  push();
  const {
    size = 10,
    x = [-0.5, 0.5],
    y = [0.25, 1],
    duration = 2e3,
    infinite = false,
    delay = [0, 50],
    colorRange = [0, 360],
    colorArray = [],
    amount = 50,
    iterationCount = 1,
    fallDistance = "100px",
    rounded = false,
    cone = false,
    noGravity = false,
    xSpread = 0.15,
    disableForReducedMotion = false
  } = $$props;
  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
  function getColor() {
    if (colorArray.length) return colorArray[Math.round(Math.random() * (colorArray.length - 1))];
    else return `hsl(${Math.round(randomBetween(colorRange[0], colorRange[1]))}, 75%, 50%)`;
  }
  {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like({ length: amount });
    $$payload.out += `<div${attr_class("confetti-holder svelte-15ksp55", void 0, {
      "rounded": rounded,
      "cone": cone,
      "no-gravity": noGravity,
      "reduced-motion": disableForReducedMotion
    })}${attr_style(` --fall-distance: ${stringify(fallDistance)}; --size: ${stringify(size)}px; --x-spread: ${stringify(1 - xSpread)}; --transition-iteration-count: ${stringify(infinite ? "infinite" : iterationCount)};`)}><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      each_array[$$index];
      $$payload.out += `<div class="confetti svelte-15ksp55"${attr_style(` --color: ${stringify(getColor())}; --skew: ${stringify(randomBetween(-45, 45))}deg,${stringify(randomBetween(-45, 45))}deg; --rotation-xyz: ${stringify(randomBetween(-10, 10))}, ${stringify(randomBetween(-10, 10))}, ${stringify(randomBetween(-10, 10))}; --rotation-deg: ${stringify(randomBetween(0, 360))}deg; --translate-y-multiplier: ${stringify(randomBetween(y[0], y[1]))}; --translate-x-multiplier: ${stringify(randomBetween(x[0], x[1]))}; --scale: ${stringify(0.1 * randomBetween(2, 10))}; --transition-delay: ${stringify(randomBetween(delay[0], delay[1]))}ms; --transition-duration: ${stringify(infinite ? `calc(${duration}ms * var(--scale))` : `${duration}ms`)};`)}></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Cover($$payload, $$props) {
  push();
  var $$store_subs;
  const maxSectionHeight = 900;
  let sectionHeight = maxSectionHeight;
  $$payload.out += `<section class="cover svelte-1jkgejr"${attr_style("", { height: `${sectionHeight}px` })}><div class="confetti-area svelte-1jkgejr">`;
  Confetti($$payload, {
    x: [-5, 5],
    y: [0, 0.1],
    colorArray: ["#588adb", "#f5e298", "#fff", "#9aa3f5"],
    delay: [500, 2e3],
    infinite: true,
    duration: 5e3,
    amount: 70,
    fallDistance: `${sectionHeight}px`
  });
  $$payload.out += `<!----></div> <div class="names-kr-box svelte-1jkgejr"><span class="names kr svelte-1jkgejr">김윤근</span> <span class="names kr svelte-1jkgejr">그리고</span> <span class="names kr svelte-1jkgejr">정수진</span></div> <div class="cover-title-container svelte-1jkgejr"><div class="names-en-box svelte-1jkgejr"><span class="names en-sacramento svelte-1jkgejr">Sujin &amp; Yungeun</span></div> <div class="event-date-and-place-box svelte-1jkgejr"><span${attr_class(`event-date-and-time ${stringify(localeStore.locale)}`, "svelte-1jkgejr")}>${escape_html(store_get($$store_subs ??= {}, "$_", $format)("cover.date"))}</span> <span${attr_class(`event-place ${stringify(localeStore.locale)}`, "svelte-1jkgejr")}>${escape_html(store_get($$store_subs ??= {}, "$_", $format)("cover.place"))}</span></div></div></section>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
/**
 * @license @lucide/svelte v0.482.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  push();
  const {
    name,
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    children,
    $$slots,
    $$events,
    ...props
  } = $$props;
  const each_array = ensure_array_like(iconNode);
  $$payload.out += `<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...props,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: clsx([
        "lucide-icon lucide",
        name && `lucide-${name}`,
        props.class
      ])
    },
    null,
    void 0,
    void 0,
    3
  )}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [tag, attrs] = each_array[$$index];
    element($$payload, tag, () => {
      $$payload.out += `${spread_attributes({ ...attrs }, null, void 0, void 0, 3)}`;
    });
  }
  $$payload.out += `<!--]-->`;
  children?.($$payload);
  $$payload.out += `<!----></svg>`;
  pop();
}
function Clipboard($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "rect",
      {
        "width": "8",
        "height": "4",
        "x": "8",
        "y": "2",
        "rx": "1",
        "ry": "1"
      }
    ],
    [
      "path",
      {
        "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "clipboard" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Github($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  Icon($$payload, spread_props([
    { name: "github" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Location($$payload, $$props) {
  push();
  var $$store_subs;
  const locationTopWave = "/location-top-wave.svg";
  const locationDeco = "/location-deco.svg";
  $$payload.out += `<img${attr("src", locationTopWave)} class="location-top-wave svelte-1agmywo" alt=""> <section class="location svelte-1agmywo"><h2${attr_class(`title ${stringify(localeStore.locale)}`, "svelte-1agmywo")}>${escape_html(store_get($$store_subs ??= {}, "$_", $format)("location.title"))}</h2> <p class="venue en svelte-1agmywo">브라이드 밸리</p> <button class="copy-address en svelte-1agmywo"><span class="clipboard-icon svelte-1agmywo">`;
  Clipboard($$payload, { size: "1.1em" });
  $$payload.out += `<!----></span> <span class="address svelte-1agmywo">서울 강남구 강남대로 262 B1층 브라이드밸리 웨딩홀</span></button> <div id="naver-map" class="map svelte-1agmywo"></div> <p class="signature en svelte-1agmywo">made with ♡ by Sujin &amp; Yungeun</p> <a class="github-icon svelte-1agmywo" href="https://github.com/alxdr3k/our-wedding-invitation" target="_blank">`;
  Github($$payload, { size: "1.1em", strokeWidth: 1 });
  $$payload.out += `<!----></a> <img class="location-deco svelte-1agmywo"${attr("src", locationDeco)} alt=""></section>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Gallery($$payload, $$props) {
  push();
  var $$store_subs;
  const photos = [
    { src: "/10.webp", width: 1200, height: 1800 },
    { src: "/2.webp", width: 1200, height: 1800 },
    { src: "/3.webp", width: 1200, height: 1800 },
    { src: "/4.webp", width: 2e3, height: 1333 },
    { src: "/5.webp", width: 1200, height: 1800 },
    { src: "/6.webp", width: 2e3, height: 1333 },
    { src: "/7.webp", width: 1200, height: 1800 },
    { src: "/8.webp", width: 1200, height: 1800 },
    { src: "/9.webp", width: 1200, height: 1790 },
    { src: "/11.webp", width: 1200, height: 1790 }
  ];
  const each_array = ensure_array_like(photos);
  $$payload.out += `<section class="gallery svelte-wnxxjj"><div class="header svelte-wnxxjj"><h2${attr_class(`title ${stringify(localeStore.locale)}`, "svelte-wnxxjj")}>${escape_html(store_get($$store_subs ??= {}, "$_", $format)("gallery.title"))}</h2> <p${attr_class(`sub-title ${stringify(localeStore.locale)}`, "svelte-wnxxjj")}>${escape_html(store_get($$store_subs ??= {}, "$_", $format)("gallery.sub_title"))}</p></div> <div id="gallery" class="svelte-wnxxjj"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let photo = each_array[$$index];
    $$payload.out += `<a${attr("href", photo.src)} class="slide svelte-wnxxjj"${attr("data-pswp-width", photo.width)}${attr("data-pswp-height", photo.height)} target="_blank"><img class="thumbnail svelte-wnxxjj"${attr("src", photo.src)} alt=""></a>`;
  }
  $$payload.out += `<!--]--></div></section>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  Cover($$payload);
  $$payload.out += `<!----> `;
  Letter($$payload);
  $$payload.out += `<!----> `;
  Gallery($$payload);
  $$payload.out += `<!----> `;
  Calendar($$payload);
  $$payload.out += `<!----> `;
  Location($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
