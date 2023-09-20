import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_b811eb4c.mjs';
import 'react';
import 'react-dom/server';
import './chunks/astro_63bc8839.mjs';
import 'clsx';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_0f204a33.mjs');
const _page1  = () => import('./chunks/index_4ac77028.mjs');
const _page2  = () => import('./chunks/projects_ebdb605d.mjs');
const _page3  = () => import('./chunks/rss_17e4cda5.mjs');
const _page4  = () => import('./chunks/about_79513cfa.mjs');
const _page5  = () => import('./chunks/index_66424dc9.mjs');
const _page6  = () => import('./chunks/index_6d98606d.mjs');
const _page7  = () => import('./chunks/_tag__97bf87de.mjs');
const _page8  = () => import('./chunks/_.._3ca06df3.mjs');
const _page9  = () => import('./chunks/cv_6a361a9c.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/projects.astro", _page2],["src/pages/rss.xml.js", _page3],["src/pages/about.astro", _page4],["src/pages/blog/index.astro", _page5],["src/pages/blog/tags/index.astro", _page6],["src/pages/blog/tags/[tag].astro", _page7],["src/pages/blog/[...slug].astro", _page8],["src/pages/cv.astro", _page9]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
