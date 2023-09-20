import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_63bc8839.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/image-endpoint_96d47479.mjs';
import 'clsx';
import 'html-escaper';
import 'mime/lite.js';

const frontmatter = {
  "title": "Project Status",
  "description": "I will discuss the status of my project here.",
  "pubDate": "September 11, 2023",
  "featured": false,
  "tags": ["Coding", "Remix-run"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "dericks-project-status",
    "text": "Derick\u2019s Project Status"
  }, {
    "depth": 2,
    "slug": "what-i-have-done-so-far",
    "text": "What I have done so far"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "dericks-project-status",
      children: "Derick\u2019s Project Status"
    }), "\n", createVNode(_components.h2, {
      id: "what-i-have-done-so-far",
      children: "What I have done so far"
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
const url = "src/content/blog/project-ideas.mdx";
const file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/project-ideas.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/project-ideas.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
