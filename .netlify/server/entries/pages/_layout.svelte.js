import { E as head, D as pop, A as push, F as escape_html } from "../../chunks/index.js";
import { l as localeStore } from "../../chunks/i18n.svelte.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  let localeLoaded = !localeStore.isLoading && localeStore.locale;
  let title = "";
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)}</title>`;
    $$payload2.out += `<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;family=Noto+Serif+KR:wght@200..900&amp;family=Sacramento&amp;display=swap"/> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&amp;display=swap"/> <meta property="og:title" content="Sujin &amp; Yungeun's Wedding"/> <meta property="og:description" content="Please join us on our most special day!"/> <meta property="og:image" content="https://sujin-marries-yungeun.vercel.app/6.webp"/> <meta property="og:url" content="https://sujin-marries-yungeun.vercel.app/"/> <meta property="og:type" content="website"/>`;
  });
  if (localeLoaded) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _layout as default
};
