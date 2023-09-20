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

				const frontmatter = {"title":"Social Media App v1","description":"This is a version 1 of a social media app","heroImage":"/blogV1.png","githubLink":"https://github.com/Derick80/blog_social_media","projectLink":"https://derickcurtis.com/","pubDate":"September 2022","implementations":["Authentication","Like system","Favorite post system","Tags","TipTap text editor"],"tags":["Coding","Remix-run","Typescript","Blog","Prisma","Tailwindcss"]};
				const file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/personal_blog_v1.md";
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
