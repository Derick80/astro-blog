import { prependForwardSlash } from '@astrojs/internal-helpers/path';
/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, d as renderSlot, e as renderComponent, f as renderHead, A as AstroError, C as CollectionDoesNotExistError, U as UnknownContentCollectionError, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, u as unescapeHTML } from '../astro_63bc8839.mjs';
import 'clsx';
/* empty css                               */import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

const $$Astro$6 = createAstro("https://cellularwind.com/");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg>${renderSlot($$result, $$slots["default"])}</a>`;
}, "/Users/voidnation/Documents/projects/astro/astro-blog/src/components/HeaderLink.astro", void 0);

const SITE_TITLE = `Derick's Blog`;

const $$Astro$5 = createAstro("https://cellularwind.com/");
const $$ThemeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  return renderTemplate`${maybeRenderHead()}<button class="" id="themeToggle" data-astro-cid-oemx5le4><svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-oemx5le4><path class="sun" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-oemx5le4></path><path class="moon" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z" data-astro-cid-oemx5le4></path></svg></button>`;
}, "/Users/voidnation/Documents/projects/astro/astro-blog/src/components/ThemeIcon.astro", void 0);

const $$Astro$4 = createAstro("https://cellularwind.com/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="mb-5 w-full"><h2 class="text-4xl font-bold text-black dark:text-white">${SITE_TITLE}</h2><nav class="text-black dark:text-white items-center justify-between flex ">${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text-black dark:text-white", "href": "/" }, { "default": ($$result2) => renderTemplate`Home` })}${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text-black dark:text-white", "href": "/blog" }, { "default": ($$result2) => renderTemplate`
Blog
` })}${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text-black dark:text-white", "href": "/about" }, { "default": ($$result2) => renderTemplate`
About
` })}${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text-black dark:text-white", "href": "/projects" }, { "default": ($$result2) => renderTemplate`
Projects
` })}${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text-black dark:text-white", "href": "/cv" }, { "default": ($$result2) => renderTemplate`CV` })}${renderComponent($$result, "ThemeIcon", $$ThemeIcon, {})}</nav></header>`;
}, "/Users/voidnation/Documents/projects/astro/astro-blog/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro("https://cellularwind.com/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-row items-center justify-center gap-4 p-4">${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text-black dark:text-white", "href": "https://github.com/Derick80", "target": "_blank" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "GitHubLogoIcon", GitHubLogoIcon, {})}` })}${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text-black dark:text-white", "href": "https://www.linkedin.com/in/dhoskinson/", "target": "_blank" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "LinkedInLogoIcon", LinkedInLogoIcon, {})}` })}${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "text-black dark:text-white", "href": "https://twitter.com/GeneticsStar", "target": "_blank" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "TwitterLogoIcon", TwitterLogoIcon, {})}` })}<a href="rss.xml"><img src="/rss.webp" alt="Subscribe to My Website" class="w-3 h-3"></a><a href="https://twitter.com/GeneticsStar" rel="no-referrer noopener" target="_blank"></a></footer>`;
}, "/Users/voidnation/Documents/projects/astro/astro-blog/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://cellularwind.com/");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const pageTitle = Astro2.props.title;
  return renderTemplate`<html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/BrandIcon.ico"><link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head><body class="flex flex-col text-black dark:bg-slate-800 dark:text-white max-w-5xl mx-auto h-full">${renderComponent($$result, "Header", $$Header, {})}<main class="flex w-full h-full flex-grow flex-col items-center justify- gap-4 ">${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/Users/voidnation/Documents/projects/astro/astro-blog/src/components/BaseLayout.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      throw new AstroError({
        ...CollectionDoesNotExistError,
        message: CollectionDoesNotExistError.message(collection)
      });
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/art-in-japan.mdx": () => import('../art-in-japan_d3835c8e.mjs'),"/src/content/blog/audio-player.mdx": () => import('../audio-player_2f5c6194.mjs'),"/src/content/blog/band-container.mdx": () => import('../band-container_a88b3a3b.mjs'),"/src/content/blog/fly-todos.mdx": () => import('../fly-todos_9fa5d8e0.mjs'),"/src/content/blog/kanazawa-post.mdx": () => import('../kanazawa-post_b13ee6e5.mjs'),"/src/content/blog/project-ideas.mdx": () => import('../project-ideas_ae4c23c9.mjs'),"/src/content/blog/select-box.mdx": () => import('../select-box_79ac8040.mjs'),"/src/content/blog/social-media-v3.mdx": () => import('../social-media-v3_61c85fd5.mjs'),"/src/content/blog/studies.mdx": () => import('../studies_982eaeed.mjs'),"/src/content/blog/todo-app.mdx": () => import('../todo-app_80fde667.mjs'),"/src/content/blog/variant-alleles.mdx": () => import('../variant-alleles_73464c13.mjs'),"/src/content/projects/Todo_app.md": () => import('../Todo_app_922b7f3e.mjs'),"/src/content/projects/budget_app.md": () => import('../budget_app_93596328.mjs'),"/src/content/projects/dna_rev_comp.md": () => import('../dna_rev_comp_0955d3dd.mjs'),"/src/content/projects/japan_image_car.md": () => import('../japan_image_car_63e8c099.mjs'),"/src/content/projects/personal_blog_v1.md": () => import('../personal_blog_v1_1c0d788f.mjs'),"/src/content/projects/social_media_blog_v3.md": () => import('../social_media_blog_v3_e45ad7a0.mjs'),"/src/content/projects/socialmedia_blog.md": () => import('../socialmedia_blog_70a89a69.mjs'),"/src/content/projects/t3_stack.md": () => import('../t3_stack_45511a0b.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"art-in-japan":"/src/content/blog/art-in-japan.mdx","audio-player":"/src/content/blog/audio-player.mdx","project-ideas":"/src/content/blog/project-ideas.mdx","kanazawa-post":"/src/content/blog/kanazawa-post.mdx","studies":"/src/content/blog/studies.mdx","band-container":"/src/content/blog/band-container.mdx","todo-app":"/src/content/blog/todo-app.mdx","social-media-v3":"/src/content/blog/social-media-v3.mdx","select-box":"/src/content/blog/select-box.mdx","fly-todos":"/src/content/blog/fly-todos.mdx","variant-alleles":"/src/content/blog/variant-alleles.mdx"}},"projects":{"type":"content","entries":{"budget_app":"/src/content/projects/budget_app.md","dna_rev_comp":"/src/content/projects/dna_rev_comp.md","japan_image_car":"/src/content/projects/japan_image_car.md","personal_blog_v1":"/src/content/projects/personal_blog_v1.md","social_media_blog_v3":"/src/content/projects/social_media_blog_v3.md","todo_app":"/src/content/projects/Todo_app.md","socialmedia_blog":"/src/content/projects/socialmedia_blog.md","t3_stack":"/src/content/projects/t3_stack.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/art-in-japan.mdx": () => import('../art-in-japan_048827eb.mjs'),"/src/content/blog/audio-player.mdx": () => import('../audio-player_3d61ee29.mjs'),"/src/content/blog/band-container.mdx": () => import('../band-container_e982cf16.mjs'),"/src/content/blog/fly-todos.mdx": () => import('../fly-todos_091dc838.mjs'),"/src/content/blog/kanazawa-post.mdx": () => import('../kanazawa-post_86e495ce.mjs'),"/src/content/blog/project-ideas.mdx": () => import('../project-ideas_82351fb5.mjs'),"/src/content/blog/select-box.mdx": () => import('../select-box_e92b4429.mjs'),"/src/content/blog/social-media-v3.mdx": () => import('../social-media-v3_9006c8c8.mjs'),"/src/content/blog/studies.mdx": () => import('../studies_f63ba900.mjs'),"/src/content/blog/todo-app.mdx": () => import('../todo-app_72edabfe.mjs'),"/src/content/blog/variant-alleles.mdx": () => import('../variant-alleles_d5d73566.mjs'),"/src/content/projects/Todo_app.md": () => import('../Todo_app_64b97c34.mjs'),"/src/content/projects/budget_app.md": () => import('../budget_app_90d9b2c9.mjs'),"/src/content/projects/dna_rev_comp.md": () => import('../dna_rev_comp_408dfa8b.mjs'),"/src/content/projects/japan_image_car.md": () => import('../japan_image_car_49d75eff.mjs'),"/src/content/projects/personal_blog_v1.md": () => import('../personal_blog_v1_db8772b4.mjs'),"/src/content/projects/social_media_blog_v3.md": () => import('../social_media_blog_v3_0712155e.mjs'),"/src/content/projects/socialmedia_blog.md": () => import('../socialmedia_blog_533640ad.mjs'),"/src/content/projects/t3_stack.md": () => import('../t3_stack_96da5ff2.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$1 = createAstro("https://cellularwind.com/");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage, tags } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "pageTitle": title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<article class="flex  flex-col gap-4 p-4 text-black dark:text-white w-full"><div class="flex flex-row justify-between gap-2 text-black dark:text-white"><h1 class="title text-black dark:text-white">${title}</h1>${updatedDate && renderTemplate`<div class="last-updated-on text-black dark:text-white">
Last updated on
${updatedDate}</div>`}</div><hr><div class="flex flex-col items-center gap-2 text-black dark:text-white">${heroImage && renderTemplate`<div class=""><img class="h-full w-full object-contain"${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(heroImage, "src")} alt="here is the post image"></div>`}<div class="flex flex-col gap-2"><p class="text-sm text-gray-500 underline">Tags</p><div class="flex flex-row gap-2">${tags?.map((tag) => renderTemplate`<a${addAttribute(`/blog/tags/${tag}`, "href")} class="flex h-fit w-fit rounded-md border-2 p-1 text-sm text-black dark:text-white">${tag}</a>`)}</div></div></div><hr>${renderSlot($$result2, $$slots["default"])}</article>` })}`;
}, "/Users/voidnation/Documents/projects/astro/astro-blog/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://cellularwind.com/");
async function getStaticProps({ params }) {
  const entry = await getEntry("blog", params.slug);
  return {
    props: {
      entry
    }
  };
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props.entry;
  const { Content } = entry.data;
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...entry.data }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content, {})}` })}`;
}, "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticProps,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, ____slug_ as _, getCollection as g };
