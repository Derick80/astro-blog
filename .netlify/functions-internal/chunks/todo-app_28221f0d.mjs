import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_63bc8839.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/image-endpoint_96d47479.mjs';
import 'clsx';
import 'html-escaper';
import 'mime/lite.js';

const frontmatter = {
  "title": "Todo List",
  "description": "Creating a todo list with Remix-run",
  "heroImage": "/todoappwebp.webp",
  "pubDate": "April 8, 2023",
  "featured": false,
  "tags": ["Remix", "Coding", "Typescript", "Prisma", "Projects"]
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "creating-a-basic-todo-list-with-remix",
    "text": "Creating a basic Todo list with Remix"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h3: "h3",
    ul: "ul",
    li: "li",
    p: "p",
    a: "a",
    ol: "ol"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "creating-a-basic-todo-list-with-remix",
      children: "Creating a basic Todo list with Remix"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["You can visit the deployed site here ", createVNode(_components.a, {
            href: "https://dchtodos.fly.dev/",
            children: "Todo List"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["You can view the source code here ", createVNode(_components.a, {
            href: "https://github.com/Derick80/todos",
            children: "Github"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Honestly, I overlooked the significance of creating a basic todo list when I first delved into coding. I considered it a trivial task and didn\u2019t comprehend its value until I started learning to code. A basic app like a todo list serves as a fundamental training ground for web development, encompassing the CRUD functionalities: Create, Read, Update, and Delete. By utilizing the Remix-run meta framework and formData instead of more intricate options like state and React, I reinforced my knowledge of web development basics."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "For this particular todo app, my primary focus was to strengthen my skills in a few areas:"
        }), "\n", createVNode(_components.ol, {
          children: ["\n", createVNode(_components.li, {
            children: ["\n", createVNode(_components.p, {
              children: "Layout: I needed to refine my CSS skills, and Tailwindcss proved to be an excellent tool to achieve this goal."
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["\n", createVNode(_components.p, {
              children: "Outlets: With Remix\u2019s outlets, I could seamlessly render child routes. I employed an outlet in this app to display the \u201C/new\u201D route on top of the todos list, thus eliminating any navigation required to create a new todo."
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["\n", createVNode(_components.p, {
              children: "UseFetcher My aim was to practice using fetcher to edit or delete todos without having to navigate to a separate page."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Overall, I am pleased with how this app turned out. Although I still face challenges with CSS, the app functions seamlessly. I am looking forward to creating more apps with Remix-run and improving my skills in web development."
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
const url = "src/content/blog/todo-app.mdx";
const file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/todo-app.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/todo-app.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
