import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_63bc8839.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/image-endpoint_96d47479.mjs';
import 'clsx';
import 'html-escaper';
import 'mime/lite.js';

const frontmatter = {
  "title": "Social Media App V3",
  "description": "Social Media App V3 Explanation",
  "pubDate": "May 4, 2023",
  "heroImage": "smaV3.png",
  "featured": false,
  "tags": ["Typescript", "Remix-run", "Coding"]
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 3,
    "slug": "version-1",
    "text": "Version 1"
  }, {
    "depth": 3,
    "slug": "version-2",
    "text": "Version 2"
  }, {
    "depth": 3,
    "slug": "version-3",
    "text": "Version 3"
  }, {
    "depth": 3,
    "slug": "incremental-improvements",
    "text": "Incremental Improvements"
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
    em: "em",
    a: "a"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "This is a long post!"
    }), "\n", createVNode(_components.p, {
      children: ["My primary learning project has been to design and create a social media app from scratch. I believe it has been nearly a year since I started V1 of the social media. So why am I writing about ", createVNode(_components.em, {
        children: "Version 3"
      }), "? Well, I have been learning a lot of Typescript and using Remix-run to build websites so what started off as a single effort soon evolved into a multi-version project. Today, I\u2019m going to recap the journey so far and explain what I\u2019ve learned along the way."]
    }), "\n", createVNode(_components.h3, {
      id: "version-1",
      children: "Version 1"
    }), "\n", createVNode(_components.p, {
      children: "The first version of the social media app was built with similar technologies but with far less knowledge than I have now."
    }), "\n", createVNode(_components.p, {
      children: ["My CSS and JavascriptTypescript was especially lacking back in the begining. For the most part I don\u2019t believe this held me back and I think the site is generally usable. I implemented user login and registration, a feed of posts, an about page and the ability for me to upload images to Amazon S3. I also implemented a few other features like allowing users to favorite and like posts. At this stage of the project I was heavily borrowing open-source code to get me going. I deployed ", createVNode(_components.a, {
        href: "https://derickcurtis.com",
        children: "My Old App"
      }), "on Vercel and set up a postgres database with Cockroachlabs."]
    }), "\n", createVNode(_components.h3, {
      id: "version-2",
      children: "Version 2"
    }), "\n", createVNode(_components.p, {
      children: ["More recently, at ", createVNode(_components.a, {
        href: "https://derickhoskinson.com",
        children: "My Old App"
      }), "(Vercel outtage at the time of this post) I deployed a newer version of the social media app. In this version I still relied heavily upon open-source code but I also made strides in writing my own code. I added social logins for Discord, Google, and Github. I fleshed out the about page a bit more, improved styling,  .."]
    }), "\n", createVNode(_components.p, {
      children: ["Once again, I deployed this app on Vercel with a Cockroachlabs database. One of the more interesting issues that I\u2019ve had is a large first contentful paint which lasted anywhere from 5-10 seconds.  I believe this is due to the fact that I\u2019m using a serverless database and the database is not always running. It was also during this time that I started working on another project with Astro ", createVNode(_components.a, {
        href: "https://cellularwind.com",
        children: "Cellular Wind"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "version-3",
      children: "Version 3"
    }), "\n", createVNode(_components.p, {
      children: ["Version 3 started off as a one off modification of my little starter ", createVNode(_components.a, {
        href: "https://github.com/Derick80/sonic-death",
        children: "template"
      }), ". I wanted to fix some of the problems I was having with user authentication. Basically, I wanted to remove Google and Github integration just for ease of development. Discord\u2019s auth process was easy and far more repeatable. I was also struggling with layouts so it was during a modification to the Sonic Death stack that I just happened to start coding my new layout and revisioning of the app. I was also messing around with Server Sent Events in Remix and wanted to include a small chat app inside the social media app. This is important because Vercel does not support websockets (or server sent events) so I had to look at another hosting provider. I chose Fly.io."]
    }), "\n", createVNode(_components.h3, {
      id: "incremental-improvements",
      children: "Incremental Improvements"
    }), "\n", createVNode(_components.p, {
      children: "One of the more interesting developments during these projects was the improvement of my assets and their usage. Starting from almost nothing at all, using pictures from graduate school and google photos, to finally ending with a \u2018set\u2019 of photos that were optimized for the web and sized appropriately."
    }), "\n", createVNode(_components.h3, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "To be honest I\u2019m still not entirely happy with any of the social media apps I\u2019ve created."
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
const url = "src/content/blog/social-media-v3.mdx";
const file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/social-media-v3.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/social-media-v3.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
