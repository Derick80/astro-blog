import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_63bc8839.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/image-endpoint_96d47479.mjs';
import 'clsx';
import 'html-escaper';
import 'mime/lite.js';

const frontmatter = {
  "title": "DIY Audio Player",
  "description": "DIY Audio Player Planning",
  "pubDate": "April 10, 2023",
  "heroImage": "/ipodjpg.jpeg",
  "featured": false,
  "tags": ["DIY", "Audio", "Coding"]
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "introduction",
    "text": "Introduction"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h3: "h3",
    p: "p"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "I want to build a DIY audio player. Think iPod but still cool. I have an extensive collection of music and I want to be able to listen to it on the go. I also want to learn more about electronics and coding."
    }), "\n", createVNode(_components.p, {
      children: "I asked ChatGPT for help with this and it suggested the following:"
    }), "\n", createVNode(_components.p, {
      children: "Choose the hardware components: The first step is to choose the hardware components that you will use to build your iPod. This includes a circuit board, display screen, battery, storage drive, audio codec, and other necessary components. You may also need to purchase special tools and equipment, such as a soldering iron, multimeter, and wire strippers."
    }), "\n", createVNode(_components.p, {
      children: "I asked ChatGPT which audio codec to use with my collection and it was suggested to use Ogg Vorbis or Opus. So obviously, I asked which one is better and here\u2019s what ChatGPT said:"
    }), "\n", createVNode(_components.p, {
      children: "Ogg Vorbis is a well-established codec that has been around for many years. It is a free and open-source codec that offers high-quality audio at lower bit rates than other codecs such as MP3. It is compatible with a wide range of devices and media players and is a popular choice among audiophiles and music enthusiasts."
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
const url = "src/content/blog/audio-player.mdx";
const file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/audio-player.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/audio-player.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
