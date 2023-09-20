import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_63bc8839.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/image-endpoint_96d47479.mjs';
import 'clsx';
import 'html-escaper';
import 'mime/lite.js';

const frontmatter = {
  "title": "React Select Component",
  "description": "Creating a reusable select component for my React projects",
  "pubDate": "May 6, 2023",
  "featured": false,
  "heroImage": "/selectcomponent.png",
  "tags": ["Typescript", "Coding", "React"]
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 3,
    "slug": "research",
    "text": "Research"
  }, {
    "depth": 3,
    "slug": "the-component",
    "text": "The Component"
  }, {
    "depth": 3,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h3: "h3",
    p: "p",
    a: "a",
    img: "img"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "I\u2019ve been working on a few projects lately that have required a select component. I really like radix-ui components but for my social media sites my posts required a multi-select option. Mantine has a nice functional select component but I want to move away from using any third party components that rely on a a style provider or CSS-in-JS as they do not render on the server and often cause a flash of unstyled content. So I decided to create my own select component."
    }), "\n", createVNode(_components.h3, {
      id: "research",
      children: "Research"
    }), "\n", createVNode(_components.p, {
      children: "This isn\u2019t the first time I tried to create my own select component. Everything I tried worked pretty well for a novel use case where the content you were generating was entirely new. However, using a select component to edit existing data was a bit more challenging. I needed to be able to select multiple options, modify the options that were already selected, select additional options to add and be able to use during form submission."
    }), "\n", createVNode(_components.p, {
      children: ["My research identified one ", createVNode(_components.a, {
        href: "https://github.com/WebDevSimplified/react-select",
        children: "primary article"
      }), " that I tried to build a component with but I had difficulties with implementing state management and form submission. I also wanted to use Typescript and I was having a hard time getting the types to work correctly. That said, I did come back to this article later for some technical details."]
    }), "\n", createVNode(_components.h3, {
      id: "the-component",
      children: "The Component"
    }), "\n", createVNode(_components.p, {
      children: ["The base component is shown here. It is a simple select component that takes in an array of all options and an array of selected options which can be an empty array.\n", createVNode(_components.img, {
        src: "https://res.cloudinary.com/dch-photo/image/upload/v1683399555/cellularwind/baseSelect_r7cwiv.png",
        alt: "base component"
      }), "\nI added two state variables and a ref to the component to help close the dropdown menu using the escape key or by clicking the chevron icon.\n", createVNode(_components.img, {
        src: "https://res.cloudinary.com/dch-photo/image/upload/v1683400568/cellularwind/statevariables_upci4b.png",
        alt: "statevariables"
      }), "\nThen I used a third state variable to track the selected options and a handler function to update the selected options.\n", createVNode(_components.img, {
        src: "https://res.cloudinary.com/dch-photo/image/upload/v1683400568/cellularwind/selectHandler_rjnr48.png",
        alt: "selectedoptions"
      }), "\nI added a useEffect hook to close the dropdown menu with the escape key.\n", createVNode(_components.img, {
        src: "https://res.cloudinary.com/dch-photo/image/upload/v1683400568/cellularwind/keyboardhandler_kw1y9a.png",
        alt: "useEffect"
      }), "\nFinally, here\u2019s the JSX for the component.\n", createVNode(_components.img, {
        src: "https://res.cloudinary.com/dch-photo/image/upload/v1683400895/cellularwind/return_kosgfo.png",
        alt: "jsx"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "I fought with this component for a while. I had a difficult time getting the dropdown menu to open directly below the selected options. Thankfully, I have been using Remix-run for over a year now so incorporating a hidden form input was pretty intuitive."
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
const url = "src/content/blog/select-box.mdx";
const file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/select-box.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/select-box.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
