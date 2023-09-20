import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_63bc8839.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/image-endpoint_96d47479.mjs';
import 'clsx';
import 'html-escaper';
import 'mime/lite.js';

const frontmatter = {
  "title": "Data Visualization",
  "description": "Where I explore the world of data visualization a little bit at a time...",
  "pubDate": "March 03 2023",
  "tags": ["Coding", "Remix"],
  "featured": false,
  "heroImage": "/bankapp.png"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Data visualization has become increasingly important to me since starting my career in industry. I started with basic tools like Microsoft Office and Google Docs, but have since graduated to more advanced tools like ggplot in R. However, as I build a finance app for fun, I find that the data visualization landscape in Javascript is vast and confusing."
    }), "\n", createVNode(_components.p, {
      children: "Initially, I thought about using a pie chart to display amounts by category, but ultimately decided to build my own band chart. Drawing inspiration from a portfolio tutorial on HTML and CSS, I created two elements: a container element that represents 0-100% and a child container element that takes a coded width to correspond to the percentage skill I want to visualize.I found that by reshaping my data into data organized by category, I could display each category as a segment of a band-chart."
    }), "\n", createVNode(_components.p, {
      children: "This chart is responsive and works at all viewpoints tested. I also decided to only display categories that are 10% or more, with the first three letters of the category, as I found that this displayed the most information with the least amount of clutter"
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
const url = "src/content/blog/band-container.mdx";
const file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/band-container.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/band-container.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
