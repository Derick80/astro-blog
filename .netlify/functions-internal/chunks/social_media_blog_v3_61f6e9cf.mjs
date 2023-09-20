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

				const html = updateImageReferences("<h3 id=\"stuff-here\">STuff here</h3>\n<ul>\n<li>Put more things here</li>\n</ul>\n<h3 id=\"\"></h3>");

				const frontmatter = {"title":"Social Media App V3","description":"This is a version # of a social media app","heroImage":"/smaV3.png","githubLink":"https://github.com/Derick80/blog2023","projectLink":"https://derickchoskinson.com","pubDate":"May 2023","implementations":["Authentication","Like system","Favorite post system","TipTap text editor"],"tags":["Coding","Remix-run","Typescript","Blog","Prisma","Tailwindcss"]};
				const file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/projects/social_media_blog_v3.md";
				const url = undefined;
				function rawContent() {
					return "\n### STuff here\n\n- Put more things here\n\n###\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"stuff-here","text":"STuff here"},{"depth":3,"slug":"","text":""}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
