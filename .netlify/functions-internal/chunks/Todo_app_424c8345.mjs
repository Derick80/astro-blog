import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_63bc8839.mjs';
import '@astrojs/internal-helpers/path';
import './pages/image-endpoint_96d47479.mjs';
import 'clsx';
import 'html-escaper';
import 'mime/lite.js';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h3 class=\"text-white\"> \n    A simple todo application created with Remix    \n<ul>\n<li>Put more things here</li>\n</ul></h3>");

				const frontmatter = {"title":"Todo Application","description":"A simple todo application created with Remix","heroImage":"/todoappwebp.webp","githubLink":"https://github.com/Derick80/todos","projectLink":"https://dchtodos.fly.dev/","pubDate":"April 2023","implementations":["SearchParams","useFetcher","Nested Routing"],"tags":["Coding","Remix-run","Typescript","Blog","Prisma","Tailwindcss"]};
				const file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/Todo_app.md";
				const url = undefined;
				function rawContent() {
					return "\n<h3 \n    class='text-white'\n> \n    A simple todo application created with Remix    \n    \n- Put more things here\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
