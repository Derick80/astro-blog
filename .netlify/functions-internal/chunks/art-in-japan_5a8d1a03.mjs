import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_63bc8839.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/image-endpoint_96d47479.mjs';
import 'clsx';
import 'html-escaper';
import 'mime/lite.js';

const frontmatter = {
  "title": "Haroon Mizra",
  "description": "Art adventures in Japan",
  "pubDate": "April 05 2023",
  "heroImage": "/haroonMizra.webp",
  "featured": true,
  "tags": ["Art", "Travel", "Japan"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a",
    img: "img"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["While in Japan, I had the opportunity to view some remarkable art installations created by an artist who is not of Japanese origin. Although I am not well-versed in the artist\u2019s background beyond the details presented in the ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Haroon_Mirza",
        children: "Wikipedia"
      }), " article and the exhibit\u2019s information panel, I was thoroughly impressed by the exhibit."]
    }), "\n", createVNode(_components.p, {
      children: "The installation itself is particularly noteworthy for its use of vibrations, with the entire display resonating at a consistent frequency. There is also fascinating archaeological evidence that suggests that this frequency may have been used in ancient artifacts, making the exhibit even more intriguing."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/exhibit.webp",
        alt: "exhibit image"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/art-in-japan.mdx";
const file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/art-in-japan.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/art-in-japan.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
