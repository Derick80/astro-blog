/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro_63bc8839.mjs';
import { g as getCollection, $ as $$BaseLayout } from './__25b7eb63.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://cellularwind.com/");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const pageTitle = "home";
  const featuredPosts = (await getCollection("blog")).filter((post) => post.data.featured === true);
  const posts = featuredPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-4 text-black dark:text-white">${posts.map((post) => renderTemplate`<div class="flex h-full w-full flex-col shadow-md rounded-md shadow-black p-1 md:p-2 prose dark:prose-invert"><div class="flex flex-row justify-between gap-2 text-xl"><a${addAttribute(`/blog/${post.slug}/`, "href")}>${post.data.title}</a></div><div class="flex flex-row gap-2 w-full items-start">${post.data.heroImage && renderTemplate`<div class="w-1/2"><img${addAttribute(post.data.heroImage, "src")}${addAttribute(post.data.title, "alt")} class="h-full w-full object-scale-down"></div>`}<div class="flex flex-col gap-1 md:gap-2 w-1/2"><p class="text-sm">${post.data.description}</p><div class="flex flex-row gap-2"><div class="flex flex-col gap-2"><p class="text-sm underline">Tags</p><div class="flex flex-row gap-2 md:gap-2 flex-wrap">${post.data?.tags?.map((tag) => renderTemplate`<a${addAttribute(`/blog/tags/${tag}`, "href")} class="flex h-fit w-fit rounded-md border-2 p-1 text-xs text-black dark:text-white">${tag}</a>`)}</div></div></div></div></div></div>`)}</div><div class="flex h-24 w-24 flex-col items-center"><svg version="1.1" class="fill-current stroke-current text-black dark:text-white" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 216.4 252.2" xml:space="preserve"><style type="text/css">
          .st0 {
            fill: none;
            stroke: currentColor;
            stroke-width: 20;
            stroke-miterlimit: 10;
          }
          .st1 {
            fill: currentColor;
            stroke: currentColor;
            stroke-width: 20;
            stroke-miterlimit: 10;
          }
          .st2 {
            fill: currentColor;
            stroke: currentColor;
            stroke-width: 10;
            stroke-miterlimit: 10;
          }
          .st3 {
            fill: currentColor;
            stroke: currentColor;
            stroke-miterlimit: 10;
          }
        </style><path class="st0" d="M135,
61c40.8,5.9,71.4,41.9,71.4,83.9c0,46.5-37.5,84.7-83.1,84.7c-28.1,0-54.4-14.6-69.7-38.6"></path><rect x="10" y="184.2" class="st1" width="104.8" height="3.2"></rect><g><rect x="87" y="57.7" transform="matrix(0.5373 -0.8434 0.8434 0.5373 7.9322 138.4206)" class="st1" width="86.3" height="8.5"></rect><rect x="157.8" y="8.4" transform="matrix(0.5373 -0.8434 0.8434 0.5373 64.4387 142.1138)" class="st2" width="7.8" height="7.8"></rect><rect x="93.3" y="109.7" transform="matrix(0.5373 -0.8434 0.8434 0.5373 -50.8109 134.5597)" class="st2" width="7.8" height="7.8"></rect></g><rect x="77.6" y="239" class="st1" width="104.8" height="3.2"></rect><circle class="st3" cx="145.6" cy="61.9" r="19.5"></circle></svg></div>` })}`;
}, "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/index.astro", void 0);

const $$file$2 = "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://cellularwind.com/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const tags = [...new Set(posts.map((post) => post.data.tags).flat())];
  const pageTitle = "Blog Posts";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-2 w-full items-center"><h2>Blog Post Categories</h2><div class="mb-4 flex flex-wrap gap-2 text-xs">${tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tags/${tag}/`, "href")} class="w-fit rounded-md border-2 p-2">${tag}</a>`)}</div><div class="flex flex-col gap-4 text-black dark:text-white w-full items-center">${posts.map((post) => renderTemplate`<div class="flex h-full w-full flex-col shadow-md rounded-md shadow-black p-1 md:p-2 prose dark:prose-invert md:not-prose"><div class="flex flex-row justify-between gap-2 text-xl"><a${addAttribute(`/blog/${post.slug}/`, "href")}>${post.data.title}</a></div><div class="flex flex-row gap-2 w-full items-start">${post.data.heroImage && renderTemplate`<div class="w-1/2"><img${addAttribute(post.data.heroImage, "src")}${addAttribute(post.data.title, "alt")} class="h-full w-full object-scale-down"></div>`}<div class="flex flex-col gap-1 md:gap-2 w-1/2"><p class="text-sm">${post.data.description}</p><div class="flex flex-row gap-2"><div class="flex flex-col gap-2"><p class="text-sm underline">Tags</p><div class="flex flex-row gap-2 md:gap-2 flex-wrap">${post.data.tags?.map((tag) => renderTemplate`<a${addAttribute(`/blog/tags/${tag}`, "href")} class="flex h-fit w-fit rounded-md border-2 p-1 text-xs text-black dark:text-white">${tag}</a>`)}</div></div></div></div></div></div>`)}</div></section>` })}`;
}, "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/blog/index.astro", void 0);

const $$file$1 = "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://cellularwind.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Tag Index";
  const allPosts = await getCollection("blog");
  const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  console.log(tags, "tags");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle })}`;
}, "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/blog/tags/index.astro", void 0);

const $$file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/blog/tags/index.astro";
const $$url = "/blog/tags";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
