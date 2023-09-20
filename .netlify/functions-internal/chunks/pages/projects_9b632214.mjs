/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro_63bc8839.mjs';
import { g as getCollection, $ as $$BaseLayout } from './__d58a71c3.mjs';
import 'clsx';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
/* empty css                               */import '@radix-ui/react-icons';

const $$Astro = createAstro("https://cellularwind.com/");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const projects = (await getCollection("projects")).map((project) => project.data).sort((a, b) => {
    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<ul class="flex flex-col items-center">${projects.map((project) => renderTemplate`<div class="mb-2 flex w-full flex-col items-start gap-2 border-2"><a${addAttribute(project.projectLink, "href")} rel="noopener noreferrer" class="text-2xl text-black dark:text-white ">${project.title}${" "}</a><img${addAttribute(project.heroImage, "src")}${addAttribute(project.title, "alt")} class="h-full w-full object-cover"><div class="flex w-full
            flex-row gap-2
          "><div class="flex w-full flex-col items-start gap-2 p-1"><p class="text-sm ">${project.description}</p><h3 class="text-sm underline dark:text-slate-50">
Technologies:
</h3><p class="flex flex-row gap-2">${project.tags.map((tag) => renderTemplate`<span class="h-fit w-fit border p-1 text-xs text-gray-500 dark:text-slate-50">${tag}</span>`)}</p><h3 class="text-sm underline dark:text-slate-50">
Implementations:
</h3>${project.implementations.map((item) => renderTemplate`<p class="text-sm">${item}</p>`)}</div></div><div class="flex w-full flex-row gap-2 border-t-2 p-2"><div class="flex w-full  flex-row items-center gap-2"><p class="text-sm underline">Code:</p><a target="_blank" rel="noopener noreferrer"${addAttribute(project.githubLink, "href")} class="text-blue-500">
Github
</a></div><div class="flex w-full  flex-row items-center gap-2"><p class="text-sm underline">Live URL:</p><a target="_blank" rel="noopener noreferrer"${addAttribute(project.projectLink, "href")} class="text-blue-500">
Live
</a></div><div class="flex w-full flex-row items-center gap-2"><p class="text-sm underline">Date:</p><p class="text-sm">${project.pubDate}</p></div></div></div>`)}</ul>` })}`;
}, "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/projects.astro", void 0);

const $$file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
