import rss from '@astrojs/rss';
import { g as getCollection } from './__25b7eb63.mjs';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import '@astrojs/internal-helpers/path';
/* empty css                           */import '../astro_63bc8839.mjs';
import 'clsx';
import 'html-escaper';
/* empty css                               */import '@radix-ui/react-icons';

const parser = new MarkdownIt();

async function get(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'My Blog',
    description: 'a blog',
    feed_url: `${context.siteUrl}/rss.xml`,
    site: context.site,
    heroImage: context.heroImage,
    items: blog.map((post) => ({
      link: `/blog/${post.slug}/`,
      // Note: this will not process components or JSX expressions in MDX files.
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
    })),
  });
}

export { get };
