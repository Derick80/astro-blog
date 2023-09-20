import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_63bc8839.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/image-endpoint_96d47479.mjs';
import 'clsx';
import 'html-escaper';
import 'mime/lite.js';

const frontmatter = {
  "title": "ACMG Variant Calculator",
  "description": "Creating a Variant Calculator Remix-run",
  "heroImage": "/acmgsite.png",
  "pubDate": "June 1, 2023",
  "featured": true,
  "tags": ["Remix", "Coding", "Typescript", "Prisma", "Projects"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I am an experienced clinical geneticist who has delved into the world of coding for over a year now. During this time, I have successfully deployed several personal websites. However, I wanted to take on a more ambitious project with a scientific focus."
    }), "\n", createVNode(_components.p, {
      children: "As part of my daily work, I deal with DNA variants and their potential association with diseases. In 2015, the American College of Medical Genetics introduced groundbreaking guidelines on how to evaluate evidence and determine whether a specific variant causes disease or not. This was a major milestone in our field. While the guidelines themselves are not qualitative, a recent publication introduced a point-based scoring system using Bayesian analysis."
    }), "\n", createVNode(_components.p, {
      children: "For my latest project, I took inspiration from the ACMG guidelines and adapted them into a web-based app. Existing online apps in this domain suffer from various issues, such as enabling double scoring in certain evidence types when it should not be allowed, being outdated, or lacking a comprehensive point-based system."
    }), "\n", createVNode(_components.p, {
      children: ["My goal was to create a proof of concept using TypeScript and Remix, combining them to develop a robust application. Although my ultimate vision involves simulating real input from a processed VCF file, incorporating auto-classification capabilities and expert panel guidelines for certain genes. For now, I invite you to explore the current version of the app at ", createVNode(_components.a, {
        href: "https://www.variantalleles.com/",
        children: "https://www.variantalleles.com/"
      }), ". Enjoy the experience!"]
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
const url = "src/content/blog/variant-alleles.mdx";
const file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/variant-alleles.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/variant-alleles.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
