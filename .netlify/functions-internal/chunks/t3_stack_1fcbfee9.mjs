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

				const html = updateImageReferences("");

				const frontmatter = {"title":"T3 Stack Blog","description":"A blog and image upload using T3 strack","heroImage":"/t3stack.png","githubLink":"https://github.com/Derick80/photogallery","projectLink":"https://photogallery-3r9pc82rg-derick80.vercel.app/","pubDate":"March 2023","implementations":["Client side upload","S3 image upload"],"tags":["Coding","Remix-run","Typescript","Prisma","Tailwindcss","tRPC"]};
				const file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/t3_stack.md";
				const url = undefined;
				function rawContent() {
					return "";
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
