import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_63bc8839.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/image-endpoint_96d47479.mjs';
import 'clsx';
import 'html-escaper';
import 'mime/lite.js';

const frontmatter = {
  "title": "Deploying a small app to Fly.io",
  "description": "Vercel is so easy but the loading times are a bit slow. Fly.io is a bit more complicated but the loading times seem much faster.",
  "pubDate": "April 6, 2023",
  "featured": false,
  "tags": ["Remix", "Deployments", "Coding"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "deploying-a-small-app-to-flyio",
    "text": "Deploying a small app to Fly.io"
  }, {
    "depth": 2,
    "slug": "flyio",
    "text": "Fly.io"
  }, {
    "depth": 2,
    "slug": "vercel",
    "text": "Vercel"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    code: "code",
    pre: "pre",
    span: "span"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "deploying-a-small-app-to-flyio",
      children: "Deploying a small app to Fly.io"
    }), "\n", createVNode(_components.p, {
      children: "I wrote a small Todo app using remix-run and a postgres database. I have been deploying my sites to Vercel for a while now and I have been very happy with it. However, I have been noticing that the loading times are a bit slow. I decided to try out Fly.io and see how it compares."
    }), "\n", createVNode(_components.h2, {
      id: "flyio",
      children: "Fly.io"
    }), "\n", createVNode(_components.p, {
      children: ["Fly.io is a bit more complicated than Vercel. You have to create a Dockerfile and a fly.toml file. The Dockerfile is pretty simple. It just copies the files from the build directory to the Docker image. The fly.toml file is a bit more complicated. It has a bunch of settings for the app. I had to look up the documentation to figure out what some of the settings did. I also had to figure out how to populate my database with my Prisma schema. I ended up using the ", createVNode(_components.code, {
        children: "fly ssh console"
      }), " command to get a shell on the server and then running ", createVNode(_components.code, {
        children: "npx prisma db push"
      }), " to populate the database. Like below:"]
    }), "\n", createVNode(_components.pre, {
      "is:raw": "",
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#e1e4e8"
            },
            children: "fly deploy"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#e1e4e8"
            },
            children: "fly ssh console -s"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#e1e4e8"
            },
            children: "--pick instance.  For some reason only the 2nd one worked"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#e1e4e8"
            },
            children: "then"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#e1e4e8"
            },
            children: "cd app"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#e1e4e8"
            },
            children: "npx prisma db push"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "vercel",
      children: "Vercel"
    }), "\n", createVNode(_components.p, {
      children: "Vercel is so easy. You just push your code to Github and it deploys. You can also deploy from your local machine. I think I can also do this with Fly.io but I haven\u2019t tried it yet. In reality I should probably try to port my large app to Fly.io for a direct comparison but it might be difficult. Although this time around the smaller app was quite easy so perhaps I will try it."
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
const url = "src/content/blog/fly-todos.mdx";
const file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/fly-todos.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/fly-todos.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
