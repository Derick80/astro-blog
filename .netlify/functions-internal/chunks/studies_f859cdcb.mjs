import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_63bc8839.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/image-endpoint_96d47479.mjs';
import 'clsx';
import 'html-escaper';
import 'mime/lite.js';

const frontmatter = {
  "title": "What I am studying",
  "description": "My current future plans of study for career and life",
  "pubDate": "April 17 2023",
  "heroImage": "/yookosojpg.jpeg",
  "featured": false,
  "tags": ["Study", "Coding", "Genetics"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    ul: "ul",
    li: "li"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In this post I describe my current interests and how I will study these interests. My motivation comes from the desire to increase my knowledge and expertise in some interests of old and some newer interests."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Career Life"
      }), "\n", createVNode(_components.li, {
        children: "This year I want to figure out a way to update my resume with really great duties."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Life & Japanese"
    }), "\n", createVNode(_components.p, {
      children: "I studied Japanese for about 6 years throughout undergrad. I wasn\u2019t always successfull but the japanese language has always been an interest of mine. I\u2019m not entirely sure why, but I love the sounds and the different characters."
    }), "\n", createVNode(_components.p, {
      children: "Over the next year I would like to learn about 500 Kanji. I used to know about that many but have completely forgotten them. I\u2019m down to about 10-20 kanji that I can recognize and speak."
    }), "\n", createVNode(_components.p, {
      children: "500 might be entirely too many and already it has taken me longer than usual to remember the kanji I\u2019ve been studying. So maybe I\u2019ll settle for 100-125 by end of year. That seems reasonable\u2026I think"
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
const url = "src/content/blog/studies.mdx";
const file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/studies.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/studies.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
