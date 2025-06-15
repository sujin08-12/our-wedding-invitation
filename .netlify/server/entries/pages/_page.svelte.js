import { J as attr, K as attr_class, F as escape_html, M as stringify, N as store_get, O as unsubscribe_stores, D as pop, A as push, P as ensure_array_like, Q as attr_style, R as spread_attributes, S as clsx, T as element, U as spread_props } from "../../chunks/index.js";
import { l as localeStore, $ as $format } from "../../chunks/i18n.svelte.js";
import "photoswipe/lightbox";
import "photoswipe";
function html(value) {
  var html2 = String(value);
  var open = "<!---->";
  return open + html2 + "<!---->";
}
const calendarDeco = "/_app/immutable/assets/calendar.DTSrudG-.png";
function Calendar($$payload) {
  $$payload.out += `<section class="calendar svelte-p5ko0o"><img class="calendar-deco svelte-p5ko0o"${attr("src", calendarDeco)} alt="calendar deco"></section>`;
}
const letterBottom = "/_app/immutable/assets/letter-bottom.Bn3YmCV8.webp";
const letterDeco = "/_app/immutable/assets/letter-deco.sOi_jrUG.svg";
function Letter($$payload, $$props) {
  push();
  var $$store_subs;
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
  $$payload.out += `<section class="cover svelte-1xgbs3q"${attr_style("", { height: `${sectionHeight}px` })}><div class="confetti-area svelte-1xgbs3q">`;
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
  $$payload.out += `<!----></div> <div class="names-kr-box svelte-1xgbs3q"><span class="names kr svelte-1xgbs3q">김윤근</span> <span class="names kr svelte-1xgbs3q">그리고</span> <span class="names kr svelte-1xgbs3q">정수진</span></div> <div class="cover-title-container svelte-1xgbs3q"><div class="names-en-box svelte-1xgbs3q"><span class="names en-sacramento svelte-1xgbs3q">Sujin &amp; Yungeun</span></div> <div class="event-date-and-place-box svelte-1xgbs3q"><span${attr_class(`event-date-and-time ${stringify(localeStore.locale)}`, "svelte-1xgbs3q")}>${escape_html(store_get($$store_subs ??= {}, "$_", $format)("cover.date"))}</span> <span${attr_class(`event-place ${stringify(localeStore.locale)}`, "svelte-1xgbs3q")}>${escape_html(store_get($$store_subs ??= {}, "$_", $format)("cover.place"))}</span></div></div></section>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
const locationTopWave = "data:image/svg+xml,%3csvg%20width='100%25'%20height='100%25'%20id='svg'%20viewBox='0%200%201440%20390'%20xmlns='http://www.w3.org/2000/svg'%20class='transition%20duration-300%20ease-in-out%20delay-150'%3e%3cpath%20d='M%200,400%20L%200,100%20C%2091.14832535885165,75.47368421052632%20182.2966507177033,50.94736842105264%20273,54%20C%20363.7033492822967,57.05263157894736%20453.9617224880384,87.68421052631578%20545,99%20C%20636.0382775119616,110.31578947368422%20727.8564593301437,102.31578947368422%20839,91%20C%20950.1435406698563,79.68421052631578%201080.6124401913876,65.05263157894737%201184,66%20C%201287.3875598086124,66.94736842105263%201363.6937799043062,83.47368421052632%201440,100%20L%201440,400%20L%200,400%20Z'%20stroke='none'%20stroke-width='0'%20fill='%23ffffff'%20fill-opacity='0.53'%20class='transition-all%20duration-300%20ease-in-out%20delay-150%20path-0'%20transform='rotate(-180%20720%20200)'%3e%3c/path%3e%3cpath%20d='M%200,400%20L%200,233%20C%2093.25358851674642,224.13875598086122%20186.50717703349284,215.27751196172247%20297,208%20C%20407.49282296650716,200.72248803827753%20535.2248803827753,195.0287081339713%20626,194%20C%20716.7751196172247,192.9712918660287%20770.5933014354066,196.60765550239236%20858,196%20C%20945.4066985645934,195.39234449760764%201066.4019138755982,190.54066985645935%201169,196%20C%201271.5980861244018,201.45933014354065%201355.7990430622008,217.22966507177034%201440,233%20L%201440,400%20L%200,400%20Z'%20stroke='none'%20stroke-width='0'%20fill='%23ffffff'%20fill-opacity='1'%20class='transition-all%20duration-300%20ease-in-out%20delay-150%20path-1'%20transform='rotate(-180%20720%20200)'%3e%3c/path%3e%3c/svg%3e";
const locationDeco = "data:image/svg+xml,%3csvg%20width='57'%20height='97'%20viewBox='0%200%2057%2097'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.1957%2096.3367C20.8809%2089.7546%2038.8394%2076.1299%2048.7423%2057.042C53.9223%2047.0571%2056.8551%2035.7821%2056.9948%2024.4347C57.0646%2018.7939%2056.4361%2013.1203%2055.0523%207.66377C54.5%205.47196%2053.9541%202.67461%2052.0243%201.30555C49.7834%20-0.280719%2047.5045%201.46352%2045.8223%203.0432C37.4937%2010.8758%2033.6658%2023.2631%2035.8432%2034.6632C36.0527%2035.769%2037.8745%2035.5386%2037.7603%2034.3933C36.8716%2025.9091%2034.599%2017.6355%2030.9552%209.97405C30.1744%208.32855%2029.4126%206.2289%2028.0161%205.02439C26.6068%203.80672%2024.823%204.20163%2023.4963%205.33373C20.9761%207.47947%2019.3891%2011.1325%2018.5893%2014.3379C16.8499%2021.3478%2018.1957%2028.8776%2020.2144%2035.6637C22.5885%2043.6608%2025.8831%2051.4605%2029.3238%2059.0232C33.4055%2068.0011%2038.0523%2076.7025%2043.2005%2085.0682C43.8734%2086.1674%2045.5683%2085.1473%2044.8891%2084.0481C36.5034%2070.4299%2029.4698%2055.9231%2023.9914%2040.7976C21.6681%2034.3867%2019.6684%2027.6204%2019.7637%2020.7093C19.8017%2017.5368%2020.335%2014.305%2021.6681%2011.4287C22.3536%209.93456%2023.2297%208.40753%2024.3723%207.23593C24.9436%206.65672%2025.7879%205.96561%2026.6005%206.4461C27.3559%206.88709%2027.7939%208.0521%2028.1811%208.80903C32.2819%2016.7206%2034.8719%2025.4615%2035.8051%2034.3933C36.4462%2034.3078%2037.0874%2034.2156%2037.7222%2034.1301C35.9067%2024.5861%2038.6553%2014.2655%2044.8383%206.96607C45.581%206.09066%2046.3682%205.25476%2047.2061%204.4715C48.0377%203.69482%2049.2311%202.39816%2050.469%202.75359C51.4085%203.02345%2051.9291%204.16215%2052.2591%205.03097C52.7289%206.26181%2053.0273%207.59138%2053.3383%208.87487C54.5635%2013.9562%2055.1031%2019.1955%2055.0396%2024.4347C54.9126%2035.0713%2052.2528%2045.6617%2047.5299%2055.0938C43.0545%2064.0256%2036.7192%2071.8516%2029.2603%2078.2756C20.8682%2085.5027%2011.0542%2090.9131%200.675165%2094.3818C-0.511914%2094.7767%20-0.00407349%2096.7316%201.1957%2096.3367Z'%20fill='%23AA8988'/%3e%3c/svg%3e";
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
  $$payload.out += `<img${attr("src", locationTopWave)} class="location-top-wave svelte-1agmywo" alt=""> <section class="location svelte-1agmywo"><h2${attr_class(`title ${stringify(localeStore.locale)}`, "svelte-1agmywo")}>${escape_html(store_get($$store_subs ??= {}, "$_", $format)("location.title"))}</h2> <p class="venue en svelte-1agmywo">Woodbury Community Association</p> <button class="copy-address en svelte-1agmywo"><span class="clipboard-icon svelte-1agmywo">`;
  Clipboard($$payload, { size: "1.1em" });
  $$payload.out += `<!----></span> <span class="address svelte-1agmywo">108 Lamplighter, Irvine, CA 92620</span></button> <div id="naver-map" class="map svelte-1agmywo"></div> <p class="signature en svelte-1agmywo">made with ♡ by Sujin &amp; Yungeun</p> <a class="github-icon svelte-1agmywo" href="https://github.com/anthopark/our-wedding-invitation" target="_blank">`;
  Github($$payload, { size: "1.1em", strokeWidth: 1 });
  $$payload.out += `<!----></a> <img class="location-deco svelte-1agmywo"${attr("src", locationDeco)} alt=""></section>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
const photo2 = "/_app/immutable/assets/2.BAUU3_5r.webp";
const photo3 = "/_app/immutable/assets/3.BXKTP2iR.webp";
const photo4 = "/_app/immutable/assets/4.Bcy3T4ly.webp";
const photo5 = "/_app/immutable/assets/5.CrpWwzjT.webp";
const photo6 = "/_app/immutable/assets/6.Ds87WYU5.webp";
const photo7 = "/_app/immutable/assets/7.QnhK2lh8.webp";
const photo8 = "/_app/immutable/assets/8.Ckq217qq.webp";
const photo9 = "/_app/immutable/assets/9.DLmvIb6-.webp";
const photo10 = "/_app/immutable/assets/10.BwsRfl7d.webp";
const photo11 = "/_app/immutable/assets/11.C8QGYdtV.webp";
function Gallery($$payload, $$props) {
  push();
  var $$store_subs;
  const photos = [
    { src: photo10, width: 1200, height: 1800 },
    { src: photo2, width: 1200, height: 1800 },
    { src: photo3, width: 1200, height: 1800 },
    { src: photo4, width: 2e3, height: 1333 },
    { src: photo5, width: 1200, height: 1800 },
    { src: photo6, width: 2e3, height: 1333 },
    { src: photo7, width: 1200, height: 1800 },
    { src: photo8, width: 1200, height: 1800 },
    { src: photo9, width: 1200, height: 1790 },
    { src: photo11, width: 1200, height: 1790 }
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
