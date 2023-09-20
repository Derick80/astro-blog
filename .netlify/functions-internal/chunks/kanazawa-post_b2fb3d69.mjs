import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_63bc8839.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/image-endpoint_96d47479.mjs';
import 'clsx';
import 'html-escaper';
import 'mime/lite.js';

const frontmatter = {
  "title": "Kanazawa \u91D1\u6CA2",
  "description": "Reflections and thoughts on my time in KanaZawa",
  "pubDate": "April 20, 2023",
  "heroImage": "/derickJapan.jpg",
  "featured": false,
  "tags": ["Travel", "Japan", "Culture", "Food"],
  "meta": [{
    "name": "og:image"
  }, {
    "content": "https://derick.dev/derickJapan.jpg"
  }, {
    "name": "twitter:image"
  }, {
    "content": "https://derick.dev/derickJapan.jpg"
  }, {
    "name": "twitter:card"
  }, {
    "content": "summary_large_image"
  }, {
    "name": "twitter:site"
  }, {
    "content": "@GeneticsStar"
  }]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    pre: "pre",
    code: "code",
    span: "span",
    p: "p",
    ul: "ul",
    li: "li"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.pre, {
      "is:raw": "",
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { Hero } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"derick.dev/components/Hero\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })
      })
    }), "\n", createVNode("h3", {
      class: "text-white",
      children: createVNode(_components.p, {
        children: "My Trip to Japan"
      })
    }), "\n", createVNode(_components.p, {
      children: "I had the pleasure of visiting Japan earlier this year, and I must say, it was an incredible experience. Although I had visited the country before in 2018, this time around, everything felt even more amazing. I believe this was due to the fact that I was able to immerse myself in the culture and interact with the locals in a way that I couldn\u2019t during my previous visit."
    }), "\n", createVNode(_components.p, {
      children: "One of the highlights of my trip was indulging in the country\u2019s delicious seafood. Being a popular delicacy in Japan, I made sure to sample some of the best the country had to offer. Kanazawa, in particular, is renowned for its fresh seafood, and I was blown away by the incredible dishes I tasted at the Omicho Market. From the mouthwatering sushi to the delectable sashimi, every bite was a moment to savor. But what impressed me the most was the sea urchin, a delicacy that I had never tried before, but instantly fell in love with."
    }), "\n", createVNode(_components.p, {
      children: "Overall, my trip to Japan was a beautiful experience, and I can\u2019t wait to go back and explore more of the country\u2019s culture and cuisine."
    }), "\n", createVNode("h3", {
      class: "text-white",
      children: createVNode(_components.p, {
        children: "Other highlights of my trip"
      })
    }), "\n", createVNode("p", {
      class: "dark:text-slate-50",
      children: [createVNode(_components.p, {
        children: "The beautiful landscapes: Japan is known for its stunning natural beauty, from the snow-capped peaks of Mount Fuji to the tranquil gardens of Kyoto. You can talk about some of the beautiful landscapes that you saw and how they made you feel."
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "The traditional Japanese culture: Japan is steeped in rich traditions, and you can talk about some of the traditional practices that you observed during your trip, such as tea ceremonies or martial arts."
        }), "\n", createVNode(_components.li, {
          children: "The technology and innovation: Japan is also known for its cutting-edge technology and innovation. You can talk about some of the high-tech gadgets and innovations that you encountered during your trip."
        }), "\n", createVNode(_components.li, {
          children: "The bustling cities: Japan\u2019s cities are known for their energy and vibrancy. You can talk about some of the bustling cities that you visited and the unique experiences that they offered."
        }), "\n", createVNode(_components.li, {
          children: "The people: Japanese people are known for their hospitality and kindness. You can talk about the interactions you had with locals and how they made you feel welcomed."
        }), "\n", createVNode(_components.li, {
          children: "The food: In addition to seafood, Japan has a diverse and delicious cuisine. You can talk about some of the other dishes that you tried and what you liked about them."
        }), "\n", createVNode(_components.li, {
          children: "The art and culture: Japan has a rich artistic and cultural heritage, from ancient temples and shrines to modern art museums. You can talk about some of the art and cultural experiences that you had during your trip."
        }), "\n"]
      })]
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
const url = "src/content/blog/kanazawa-post.mdx";
const file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/kanazawa-post.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/kanazawa-post.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
