/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro_63bc8839.mjs';
import { g as getCollection, $ as $$BaseLayout } from './__689543c7.mjs';
import 'clsx';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
/* empty css                               */import '@radix-ui/react-icons';

const $$Astro = createAstro("https://cellularwind.com/");
async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  const uniquetags = [
    ...new Set(allPosts.map((post) => post.data.tags).flat())
  ];
  return uniquetags.map((tag) => {
    return {
      params: {
        tag
      }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const allPosts = await getCollection("blog");
  console.log(allPosts, "allposts");
  const { tag } = Astro2.params;
  const filteredPosts = allPosts.filter((post) => post.data.tags.includes(tag));
  console.log(filteredPosts, "filteredPosts");
  const title = `BLOGTAGs`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<p>Posts tagged with ${tag}</p><ul class="flex flex-col gap-2">${filteredPosts.map((post) => renderTemplate`<div class="flex w-full flex-col border p-1"><div class="flex flex-row justify-between gap-2"><a${addAttribute(`/blog/${post.slug}/`, "href")}>${post.data.title}</a></div><div class="flex flex-row gap-2"><div class="h-20 w-20">${post.data.heroImage && renderTemplate`<img${addAttribute(post.data.heroImage, "src")}${addAttribute(post.data.title, "alt")} class="h-full w-full object-scale-down">`}</div><div class="flex flex-col gap-2">${post.data.description}<div class="flex flex-row gap-2">${post.data.tags.map((tag2) => renderTemplate`<a${addAttribute(`/blog/tags/${tag2}/`, "href")} class=" w-fit border-2 p-1 text-xs">${tag2}</a>`)}</div></div></div></div>`)}</ul>` })}`;
}, "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/blog/tags/[tag].astro", void 0);

const $$file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/blog/tags/[tag].astro";
const $$url = "/blog/tags/[tag]";

export { $$tag as default, $$file as file, getStaticPaths, $$url as url };
