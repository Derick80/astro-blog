import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_63bc8839.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=(()=>typeof localStorage<\"u\"&&localStorage.getItem(\"theme\")?localStorage.getItem(\"theme\"):window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\")();t===\"light\"?document.documentElement.classList.remove(\"dark\"):document.documentElement.classList.add(\"dark\");window.localStorage.setItem(\"theme\",t);const l=()=>{const e=document.documentElement;e.classList.toggle(\"dark\");const o=e.classList.contains(\"dark\");localStorage.setItem(\"theme\",o?\"dark\":\"light\")};document.getElementById(\"themeToggle\").addEventListener(\"click\",l);\n"}],"styles":[{"type":"external","src":"/_astro/about.124959c4.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}h1,h2,h3,h4,h5,h6,strong,b{color:#222}h1,h2,h3,h4,h5,h6,strong,b .dark{color:#fff}a{color:#3273dc}nav a{margin-right:10px}textarea{width:100%;font-size:16px}input{font-size:16px}content{line-height:1.6}table{width:100%}img{max-width:100%;height:auto}code{padding:2px 5px;background-color:#f2f2f2}pre{padding:1rem}pre>code{all:unset}blockquote{border:1px solid #999;color:#222;padding:2px 0 2px 20px;margin:0;font-style:italic}.dark h3{color:#fff}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=(()=>typeof localStorage<\"u\"&&localStorage.getItem(\"theme\")?localStorage.getItem(\"theme\"):window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\")();t===\"light\"?document.documentElement.classList.remove(\"dark\"):document.documentElement.classList.add(\"dark\");window.localStorage.setItem(\"theme\",t);const l=()=>{const e=document.documentElement;e.classList.toggle(\"dark\");const o=e.classList.contains(\"dark\");localStorage.setItem(\"theme\",o?\"dark\":\"light\")};document.getElementById(\"themeToggle\").addEventListener(\"click\",l);\n"}],"styles":[{"type":"external","src":"/_astro/about.124959c4.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}h1,h2,h3,h4,h5,h6,strong,b{color:#222}h1,h2,h3,h4,h5,h6,strong,b .dark{color:#fff}a{color:#3273dc}nav a{margin-right:10px}textarea{width:100%;font-size:16px}input{font-size:16px}content{line-height:1.6}table{width:100%}img{max-width:100%;height:auto}code{padding:2px 5px;background-color:#f2f2f2}pre{padding:1rem}pre>code{all:unset}blockquote{border:1px solid #999;color:#222;padding:2px 0 2px 20px;margin:0;font-style:italic}.dark h3{color:#fff}\n"}],"routeData":{"route":"/projects","type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=(()=>typeof localStorage<\"u\"&&localStorage.getItem(\"theme\")?localStorage.getItem(\"theme\"):window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\")();t===\"light\"?document.documentElement.classList.remove(\"dark\"):document.documentElement.classList.add(\"dark\");window.localStorage.setItem(\"theme\",t);const l=()=>{const e=document.documentElement;e.classList.toggle(\"dark\");const o=e.classList.contains(\"dark\");localStorage.setItem(\"theme\",o?\"dark\":\"light\")};document.getElementById(\"themeToggle\").addEventListener(\"click\",l);\n"}],"styles":[{"type":"external","src":"/_astro/about.124959c4.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}h1,h2,h3,h4,h5,h6,strong,b{color:#222}h1,h2,h3,h4,h5,h6,strong,b .dark{color:#fff}a{color:#3273dc}nav a{margin-right:10px}textarea{width:100%;font-size:16px}input{font-size:16px}content{line-height:1.6}table{width:100%}img{max-width:100%;height:auto}code{padding:2px 5px;background-color:#f2f2f2}pre{padding:1rem}pre>code{all:unset}blockquote{border:1px solid #999;color:#222;padding:2px 0 2px 20px;margin:0;font-style:italic}.dark h3{color:#fff}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=(()=>typeof localStorage<\"u\"&&localStorage.getItem(\"theme\")?localStorage.getItem(\"theme\"):window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\")();t===\"light\"?document.documentElement.classList.remove(\"dark\"):document.documentElement.classList.add(\"dark\");window.localStorage.setItem(\"theme\",t);const l=()=>{const e=document.documentElement;e.classList.toggle(\"dark\");const o=e.classList.contains(\"dark\");localStorage.setItem(\"theme\",o?\"dark\":\"light\")};document.getElementById(\"themeToggle\").addEventListener(\"click\",l);\n"}],"styles":[{"type":"external","src":"/_astro/about.124959c4.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}h1,h2,h3,h4,h5,h6,strong,b{color:#222}h1,h2,h3,h4,h5,h6,strong,b .dark{color:#fff}a{color:#3273dc}nav a{margin-right:10px}textarea{width:100%;font-size:16px}input{font-size:16px}content{line-height:1.6}table{width:100%}img{max-width:100%;height:auto}code{padding:2px 5px;background-color:#f2f2f2}pre{padding:1rem}pre>code{all:unset}blockquote{border:1px solid #999;color:#222;padding:2px 0 2px 20px;margin:0;font-style:italic}.dark h3{color:#fff}\n"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=(()=>typeof localStorage<\"u\"&&localStorage.getItem(\"theme\")?localStorage.getItem(\"theme\"):window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\")();t===\"light\"?document.documentElement.classList.remove(\"dark\"):document.documentElement.classList.add(\"dark\");window.localStorage.setItem(\"theme\",t);const l=()=>{const e=document.documentElement;e.classList.toggle(\"dark\");const o=e.classList.contains(\"dark\");localStorage.setItem(\"theme\",o?\"dark\":\"light\")};document.getElementById(\"themeToggle\").addEventListener(\"click\",l);\n"}],"styles":[{"type":"external","src":"/_astro/about.124959c4.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}h1,h2,h3,h4,h5,h6,strong,b{color:#222}h1,h2,h3,h4,h5,h6,strong,b .dark{color:#fff}a{color:#3273dc}nav a{margin-right:10px}textarea{width:100%;font-size:16px}input{font-size:16px}content{line-height:1.6}table{width:100%}img{max-width:100%;height:auto}code{padding:2px 5px;background-color:#f2f2f2}pre{padding:1rem}pre>code{all:unset}blockquote{border:1px solid #999;color:#222;padding:2px 0 2px 20px;margin:0;font-style:italic}.dark h3{color:#fff}\n"}],"routeData":{"route":"/blog/tags","type":"page","pattern":"^\\/blog\\/tags\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/tags/index.astro","pathname":"/blog/tags","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=(()=>typeof localStorage<\"u\"&&localStorage.getItem(\"theme\")?localStorage.getItem(\"theme\"):window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\")();t===\"light\"?document.documentElement.classList.remove(\"dark\"):document.documentElement.classList.add(\"dark\");window.localStorage.setItem(\"theme\",t);const l=()=>{const e=document.documentElement;e.classList.toggle(\"dark\");const o=e.classList.contains(\"dark\");localStorage.setItem(\"theme\",o?\"dark\":\"light\")};document.getElementById(\"themeToggle\").addEventListener(\"click\",l);\n"}],"styles":[{"type":"external","src":"/_astro/about.124959c4.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}h1,h2,h3,h4,h5,h6,strong,b{color:#222}h1,h2,h3,h4,h5,h6,strong,b .dark{color:#fff}a{color:#3273dc}nav a{margin-right:10px}textarea{width:100%;font-size:16px}input{font-size:16px}content{line-height:1.6}table{width:100%}img{max-width:100%;height:auto}code{padding:2px 5px;background-color:#f2f2f2}pre{padding:1rem}pre>code{all:unset}blockquote{border:1px solid #999;color:#222;padding:2px 0 2px 20px;margin:0;font-style:italic}.dark h3{color:#fff}\n"}],"routeData":{"route":"/blog/[...slug]","type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=(()=>typeof localStorage<\"u\"&&localStorage.getItem(\"theme\")?localStorage.getItem(\"theme\"):window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\")();t===\"light\"?document.documentElement.classList.remove(\"dark\"):document.documentElement.classList.add(\"dark\");window.localStorage.setItem(\"theme\",t);const l=()=>{const e=document.documentElement;e.classList.toggle(\"dark\");const o=e.classList.contains(\"dark\");localStorage.setItem(\"theme\",o?\"dark\":\"light\")};document.getElementById(\"themeToggle\").addEventListener(\"click\",l);\n"}],"styles":[{"type":"external","src":"/_astro/about.124959c4.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}h1,h2,h3,h4,h5,h6,strong,b{color:#222}h1,h2,h3,h4,h5,h6,strong,b .dark{color:#fff}a{color:#3273dc}nav a{margin-right:10px}textarea{width:100%;font-size:16px}input{font-size:16px}content{line-height:1.6}table{width:100%}img{max-width:100%;height:auto}code{padding:2px 5px;background-color:#f2f2f2}pre{padding:1rem}pre>code{all:unset}blockquote{border:1px solid #999;color:#222;padding:2px 0 2px 20px;margin:0;font-style:italic}.dark h3{color:#fff}\n"}],"routeData":{"route":"/cv","type":"page","pattern":"^\\/cv\\/?$","segments":[[{"content":"cv","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cv.astro","pathname":"/cv","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://cellularwind.com/","base":"/","compressHTML":true,"componentMetadata":[["/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/blog/tags/[tag].astro",{"propagation":"in-tree","containsHead":true}],["/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/blog/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/cv.astro",{"propagation":"in-tree","containsHead":true}],["/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/tags/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/cv@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/about.astro":"chunks/pages/about_c52ed263.mjs","/src/pages/cv.astro":"chunks/pages/cv_8dfd9eac.mjs","/src/pages/projects.astro":"chunks/pages/projects_e006dfb4.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_42375f59.mjs","/src/pages/blog/tags/[tag].astro":"chunks/prerender_4220891b.mjs","\u0000@astrojs-manifest":"manifest_6d24c88c.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3769332a.mjs","\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js":"chunks/image-endpoint_0f204a33.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_5ec5845f.mjs","\u0000@astro-page:src/pages/projects@_@astro":"chunks/projects_78b2560c.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_d5cf5a76.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_88efcf7f.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_ee37e131.mjs","\u0000@astro-page:src/pages/blog/tags/index@_@astro":"chunks/index_9f2f6895.mjs","\u0000@astro-page:src/pages/blog/tags/[tag]@_@astro":"chunks/_tag__c0928478.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._c6f51d42.mjs","\u0000@astro-page:src/pages/cv@_@astro":"chunks/cv_130e205a.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_75ba993f.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/art-in-japan.mdx?astroContentCollectionEntry=true":"chunks/art-in-japan_d3835c8e.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/audio-player.mdx?astroContentCollectionEntry=true":"chunks/audio-player_2f5c6194.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/band-container.mdx?astroContentCollectionEntry=true":"chunks/band-container_a88b3a3b.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/fly-todos.mdx?astroContentCollectionEntry=true":"chunks/fly-todos_9fa5d8e0.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/kanazawa-post.mdx?astroContentCollectionEntry=true":"chunks/kanazawa-post_b13ee6e5.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/project-ideas.mdx?astroContentCollectionEntry=true":"chunks/project-ideas_ae4c23c9.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/select-box.mdx?astroContentCollectionEntry=true":"chunks/select-box_79ac8040.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/social-media-v3.mdx?astroContentCollectionEntry=true":"chunks/social-media-v3_61c85fd5.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/studies.mdx?astroContentCollectionEntry=true":"chunks/studies_982eaeed.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/todo-app.mdx?astroContentCollectionEntry=true":"chunks/todo-app_80fde667.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/variant-alleles.mdx?astroContentCollectionEntry=true":"chunks/variant-alleles_73464c13.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/Todo_app.md?astroContentCollectionEntry=true":"chunks/Todo_app_922b7f3e.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/budget_app.md?astroContentCollectionEntry=true":"chunks/budget_app_93596328.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/dna_rev_comp.md?astroContentCollectionEntry=true":"chunks/dna_rev_comp_0955d3dd.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/japan_image_car.md?astroContentCollectionEntry=true":"chunks/japan_image_car_63e8c099.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/personal_blog_v1.md?astroContentCollectionEntry=true":"chunks/personal_blog_v1_1c0d788f.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/social_media_blog_v3.md?astroContentCollectionEntry=true":"chunks/social_media_blog_v3_e45ad7a0.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/socialmedia_blog.md?astroContentCollectionEntry=true":"chunks/socialmedia_blog_70a89a69.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/t3_stack.md?astroContentCollectionEntry=true":"chunks/t3_stack_45511a0b.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/art-in-japan.mdx?astroPropagatedAssets":"chunks/art-in-japan_048827eb.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/audio-player.mdx?astroPropagatedAssets":"chunks/audio-player_3d61ee29.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/band-container.mdx?astroPropagatedAssets":"chunks/band-container_e982cf16.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/fly-todos.mdx?astroPropagatedAssets":"chunks/fly-todos_091dc838.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/kanazawa-post.mdx?astroPropagatedAssets":"chunks/kanazawa-post_86e495ce.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/project-ideas.mdx?astroPropagatedAssets":"chunks/project-ideas_82351fb5.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/select-box.mdx?astroPropagatedAssets":"chunks/select-box_e92b4429.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/social-media-v3.mdx?astroPropagatedAssets":"chunks/social-media-v3_9006c8c8.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/studies.mdx?astroPropagatedAssets":"chunks/studies_f63ba900.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/todo-app.mdx?astroPropagatedAssets":"chunks/todo-app_72edabfe.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/variant-alleles.mdx?astroPropagatedAssets":"chunks/variant-alleles_d5d73566.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/Todo_app.md?astroPropagatedAssets":"chunks/Todo_app_64b97c34.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/budget_app.md?astroPropagatedAssets":"chunks/budget_app_90d9b2c9.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/dna_rev_comp.md?astroPropagatedAssets":"chunks/dna_rev_comp_408dfa8b.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/japan_image_car.md?astroPropagatedAssets":"chunks/japan_image_car_49d75eff.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/personal_blog_v1.md?astroPropagatedAssets":"chunks/personal_blog_v1_db8772b4.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/social_media_blog_v3.md?astroPropagatedAssets":"chunks/social_media_blog_v3_0712155e.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/socialmedia_blog.md?astroPropagatedAssets":"chunks/socialmedia_blog_533640ad.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/t3_stack.md?astroPropagatedAssets":"chunks/t3_stack_96da5ff2.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/art-in-japan.mdx":"chunks/art-in-japan_5a8d1a03.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/audio-player.mdx":"chunks/audio-player_4e27893a.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/band-container.mdx":"chunks/band-container_d5d939da.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/fly-todos.mdx":"chunks/fly-todos_04f06124.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/kanazawa-post.mdx":"chunks/kanazawa-post_b2fb3d69.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/project-ideas.mdx":"chunks/project-ideas_be5f43ac.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/select-box.mdx":"chunks/select-box_c55ff802.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/social-media-v3.mdx":"chunks/social-media-v3_3148fe0f.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/studies.mdx":"chunks/studies_f859cdcb.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/todo-app.mdx":"chunks/todo-app_28221f0d.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/variant-alleles.mdx":"chunks/variant-alleles_8b48a4da.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/Todo_app.md":"chunks/Todo_app_424c8345.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/budget_app.md":"chunks/budget_app_8a703181.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/dna_rev_comp.md":"chunks/dna_rev_comp_0f6ff664.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/japan_image_car.md":"chunks/japan_image_car_29c642c9.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/personal_blog_v1.md":"chunks/personal_blog_v1_0d1bfc4a.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/social_media_blog_v3.md":"chunks/social_media_blog_v3_61f6e9cf.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/socialmedia_blog.md":"chunks/socialmedia_blog_5128d54b.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/t3_stack.md":"chunks/t3_stack_1fcbfee9.mjs","/Users/voidnation/Documents/projects/astro/astro-blog/src/components/accordianTrigger":"_astro/accordianTrigger.80306bb9.js","/astro/hoisted.js?q=0":"_astro/hoisted.1ffeb636.js","@astrojs/react/client.js":"_astro/client.4ae814ea.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_...slug_.8789b46b.css","/_astro/about.124959c4.css","/BrandIcon.ico","/acmgsite.png","/bankapp.png","/blogV1.png","/blogv2.png","/book1.jpg","/cv.png","/derickJapan.jpg","/derickjapan1.jpg","/dericktotgp.webp","/dnarevcomp.png","/exhibit.webp","/favicon.svg","/haroonMizra.webp","/ipodjpg.jpeg","/microscope_light.svg","/microscope_light1.png","/microscope_light1.svg","/placeholder-about.jpg","/placeholder-hero.jpg","/placeholder-social.jpg","/rss.webp","/selectcomponent.png","/smaV3.png","/social_preview_k.jpg","/t3stack.png","/todoapp.mov","/todoappwebp.webp","/yookoso.webp","/yookosojpg.jpeg","/_astro/accordianTrigger.80306bb9.js","/_astro/client.4ae814ea.js","/_astro/index.03be2d59.js","/pdfs/32108894.pdf"]});

export { manifest };
