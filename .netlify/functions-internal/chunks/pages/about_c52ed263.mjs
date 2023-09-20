/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, F as Fragment } from '../astro_63bc8839.mjs';
import 'clsx';
import { $ as $$BaseLayout } from './__da108687.mjs';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
/* empty css                               */import '@radix-ui/react-icons';

const $$Astro = createAstro("https://cellularwind.com/");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<img class="mx-auto w-1/2" src="/dericktotgp.webp" alt="profile picture"><div class="flex flex-col prose dark:prose-invert"><p>
I was born in western New York state but have lived and attended school in
    Missouri and Boston.
</p><p>
I completed my undergraduate degree at the <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.umb.edu">University of Massachusetts Boston</a>, where I focused on biology and <em>almost</em>minored in biochemistry.
</p><p>
I attended <a target="\&quot;_blank\&quot;" rel="noopener noreferrer
          nofollow" href="&quot;https://gsbs.tufts.edu/&quot;">Tufts Graduate School of Biomedical Sciences
</a>where I studied mRNA processing in yeast and earned my phD.
</p><p>
I worked as a post doctoral student at The <a target="\&quot;_blank\&quot;" rel="noopener'
          noreferrer
          nofollow" href="https://personalizedmedicine.partners.org/laboratory-for-molecular-medicine/">Laboratory for Molecular Medicine</a> at Harvard Medical School.
</p>${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
After a couple of years I used my skill in interpreting genomic variants to
    join a small start up called <a target="\&quot;_blank\&quot;" rel="noopener
          noreferrer
          nofollow" href="https://www.tempus.com/">Tempus labs</a> It's been five years and I have expanded the breadth of my understanding in
    genetics and have fostered emergent coding skills. I have used those skills to
    create new assays, support automation in production, and improve processes in
    between. I'm really excited about the future in genetics and web development.
    I hope to find a really great position where I can use my fantastic scientific
    knowledge to inform data analysis, display and the development of modern web
    applications to view and use the data.
` })}</div>` })}`;
}, "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/about.astro", void 0);

const $$file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
