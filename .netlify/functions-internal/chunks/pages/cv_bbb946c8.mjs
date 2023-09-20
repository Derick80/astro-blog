/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro_63bc8839.mjs';
import { g as getCollection, $ as $$BaseLayout } from './__689543c7.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { ChevronUpIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react';
import 'clsx';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
/* empty css                               */
const pubs = [
  {
    id: "1",
    title: "Tumor Mutational Burden From Tumor-Only Sequencing Compared With Germline Subtraction From Paired Tumor and Normal Specimens",
    year: "2020",
    journal: "JAMA",
    authors: [
      "Parikh K, Huether R, White K, Hoskinson D, Beaubier N, Dong H, Adjei AA, Mansfield AS"
    ],
    edition: `2020 Feb 5;3(2):e200202. PMID: 32108894; PMCID: PMC7049088.`,
    type: "published",
    url: `https://doi.org/10.1001/jamanetworkopen.2020.0202`,
    pdf: `https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2762022`
  },
  {
    id: "2",
    title: "Integrated genomic profiling expands clinical options for patients with cancer ",
    year: "2020",
    journal: "Nature Biotechnology",
    authors: [
      "Beaubier, N., Bontrager, M., Huether, R., Igartua, C., Lau, D., Tell, R., Bobe, A. M., Bush, S., Chang, A. L., Hoskinson, D. C., Khan, A. A., Kudalkar, E., Leibowitz, B. D., Lozachmeur, A., Michuda, J., Parsons, J., Perera, J. F., Salahudeen, A., Shah, K. P., Taxter, T., White, K. P."
    ],
    edition: `37(11), 1351 - 1360`,
    type: "published",
    url: `https://www.nature.com/articles/s41587-019-0259-z`
  },
  {
    id: "3",
    title: `Considerations for clinical curation, classification, and reporting of low-penetrance and low effect size variants associated with disease risk`,
    year: "2019",
    journal: "Genetics in Medicine",
    authors: [
      "Manickam, K, Buchanan, AH, Schwartz, M, Hallquist, M, Williams, JL, Kulchak, A, Rahm, A, Rocha, H, Savatt, J, Evans, A, Butry, L, Lazzeri, A, Lindbuchler, DM, Flansburg, C, Leeming, R, Vogel, V, Lebo, M, Mason-Suares, H, Hoskinson, DC, Abul-Husn, NS, Dewey, F, Willard, H, Mccormick, CZ, Hartzel, N, Kost, KA, Lavage, DR, Sturm, AC, Frisbie, LR, Person, TN, Metpally, RP, Giovanni, MA, Lowry, LE, Leader, JB, Ritchie, MD, Carey, D, Kirchner, HL, Faucett, W, Williams, S,  Ledbetter, D, Murray M."
    ],
    edition: `7;1(5)`,
    type: "published",
    url: `https://doi.org/10.1038/s41436-019-0560-8`
  }
];

const work_experience = [
  {
    id: 1,
    institution: "Tempus Labs",
    period: "Mar 2019 - Present",
    title: "Senior Clinical Scientist",
    duties: [
      {
        id: "1a",
        duty: "Created a tailored bed file to optimize genomic data analysis and facilitate the identification, classification, and clinical reporting of genetic variants on a large gene panel, resulting in improved accuracy and efficiency of downstream analysis."
      },
      {
        id: "1b",
        duty: "Contributed to the development and submission of the xT CDx assay to the FDA by curating and analyzing gene data to rank evidence per gene, ensuring accurate and effective clinical use"
      },
      {
        id: 1,
        duty: "Played a vital role in the development and application of a new hereditary genetic testing panel, Tempus, xGv3 to identify germline variants in genes associated with hereditary cancer syndromes and incidental findings"
      },
      {
        id: 2,
        duty: "Identified gaps and deficiencies in current workflows and executed new workflows and SOPs to harmonize variant classification across multiple institutions"
      },
      {
        id: 3,
        duty: "Spearheaded the development and implementation of a reportable bed file solution for the Tempus xF assay, allowing for targeted reporting of specific genomic regions and improving the overall quality of data analysis."
      },
      {
        id: 4,
        duty: "Used R programming language to design and implement a regions of interest bed file for reporting insertions and deletions for Tempus xF assay"
      },
      {
        id: 5,
        duty: "Used R programming language to create, update, and modify curated data to justify the inclusion or exclusion of genomic regions for xT-oncology FDA application"
      },
      {
        id: 6,
        duty: "Acted as the scientific lead in the development of the Tempus xF liquid biopsy panel to sequence and report SNVs and indels in clinically relevant regions of 105 genes plus CNVs and DNA rearrangements in a subset of these genes"
      },
      {
        id: 7,
        duty: "Used R programming language to programmatically access data, wrangle data, analyze data and present data to implement changes in workflow or other internal processes"
      }
    ]
  },
  {
    id: 2,
    institution: "Tempus Labs",
    period: "Jun 2017 - Mar 2019",
    title: "Clinical Scientist",
    duties: [
      {
        id: 1,
        duty: "Evaluated data and analyzed variants for a project that lead to the publication of the results in Nature BioTechnology"
      },
      {
        id: 2,
        duty: "Trained over 20 M.A.s, Ph.D.’s and post-baccalaureate in germline and somatic variant classification"
      },
      {
        id: 3,
        duty: "Worked closely with colleagues to build a team of variant scientists from 2 individuals to over 20 highly skilled variant scientists"
      },
      {
        id: 4,
        duty: "ained proficiency in the R programming language and experience using Python, JavaScript, HTML, and CSS. "
      }
    ]
  },
  {
    id: 3,
    institution: `Harvard Medical School, Partners Healthcare, Brigham and Women's Hospital`,
    period: "Jun 2015 - Jun 2017",
    title: "Clinical Knowlege Curation Coordinator",
    duties: [
      {
        id: 1,
        duty: "Trained over 25 M.Ds, M.D./Ph.D.’s, rotating fellows, undergraduates, and post-baccalaureate in constitutional variant classification"
      },
      {
        id: 2,
        duty: "Assessed pathogenicity of variants from large gene panels covering cardiomyopathy, hearing loss, pulmonary disease, and Noonan syndrome"
      },
      {
        id: 3,
        duty: "Evaluated data and assessed variants as a critical member of the Geisinger MyCode project including the 56 genes recommended by the ACMG and 20 additional genes from Geisinger"
      },
      {
        id: 4,
        duty: "Extensive experience with population databases (1000 genomes, ESP, ExAC, gnomAD)"
      },
      {
        id: 5,
        duty: `Extensive experience with population databases (1000 genomes, ESP, ExAC, gnomAD)
Proficient in use of variant databases including- HGMD, ClinVar, LOVD, Deafness Variation database, Cardiodb, MitoMap, Leiden Muscular Dystrophy database, ARUP and COSMIC`
      }
    ]
  },
  {
    id: 4,
    institution: `EBSCO Information Services, DynaMed`,
    period: "Jun 2014 - Jun 2015",
    title: "Medical Writer II",
    duties: [
      {
        id: 1,
        duty: `Wrote evidence based summaries of clinical trials aimed at serving as a resource for physicians and other health care professionals at point of care.`
      },
      {
        id: 2,
        duty: `Wrote evidence based point of care references for a number of clinically important disease topics`
      },
      {
        id: 3,
        duty: `Critically assessed published clinical trials for methodological integrity`
      }
    ]
  }
];

const education = [
  {
    institution: "Tufts University School of Biomedical Sciences",
    degree: "Genetics PhD",
    location: "Boston, MA",
    startDate: "2006",
    endDate: "2014"
  },
  {
    institution: "University of Massachusetts Boston",
    degree: "Bachelors of Science in Biology",
    location: "Boston, MA",
    startDate: "2002",
    endDate: "2006"
  }
];

const skills = [
  {
    skill: "Disease Curation"
  },
  {
    skill: "Variant Analysis"
  },
  {
    skill: "Variant Curation"
  },
  {
    skill: "Variant Classification"
  },
  {
    skill: "FDA Submissions"
  },
  {
    skill: "In Silco Analysis"
  },
  {
    skill: "Family Studies"
  },
  {
    skill: "Population Databases"
  },
  {
    skill: "ClinVar"
  },
  {
    skill: "R Language"
  },
  {
    skill: "JavaScript"
  },
  {
    skill: "TypeScript"
  },
  {
    skill: "Python"
  },
  {
    skill: "HTML"
  },
  {
    skill: "CSS"
  },
  {
    skill: "GitHub"
  },
  {
    skill: "Regex"
  },
  {
    skill: "Data Wrangling"
  },
  {
    skill: "Data Visualization"
  },
  {
    skill: "Data Analysis"
  },
  {
    skill: "Cloud Computing"
  }
];

function AccordianTrigger(props) {
  const { children, job } = props;
  const toggleOpen = React.useCallback(() => {
    setOpen((open2) => !open2);
  }, []);
  const [open, setOpen] = React.useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col rounded-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-between text-xs", children: [
      /* @__PURE__ */ jsx("p", { className: "flex flex-shrink px-1 text-xs italic", children: job.title }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-shrink-0 text-black/50 dark:text-white/50 ", children: job.period }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center pl-4", children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: toggleOpen,
            "aria-label": "Search database",
            className: "rounded-md p-2 text-teal-400 transition-all duration-300 hover:backdrop-blur-sm",
            children: open ? /* @__PURE__ */ jsx(ChevronUpIcon, {}) : /* @__PURE__ */ jsx(ChevronDownIcon, {})
          }
        ) })
      ] })
    ] }),
    open && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-stretch", children }) }, job.id)
  ] });
}

const $$Astro = createAstro("https://cellularwind.com/");
const $$Cv = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cv;
  (await getCollection("blog")).map((post) => {
    return {
      ...post,
      url: `/posts/${post.slug}`
    };
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="Montserrat flex w-full flex-col items-center p-4"><div class="mb-2 flex flex-col border-b"><h1 class="text-3xl font-bold text-black dark:text-white">
Derick Hoskinson, PhD
</h1><p class="text-base italic">
I am a senior clinical scientist keen on using my expertise in variant
        curation and analysis to help patients and families. I am also a
        software developer focused on learning fundamental web technologies such
        as JavaScript, TypeScript, and React. I am open to new opportunities in
        the field of variant curation and analysis with a focus on developing
        web applications to work with genomic data
</p></div><div class="border- mb-2 flex w-full flex-col gap-2"><p class="text-2xl font-bold">Work Experience</p>${work_experience.map((job) => renderTemplate`${renderComponent($$result2, "AccordianTrigger", AccordianTrigger, { "client:load": true, "job": job, "client:component-hydration": "load", "client:component-path": "/Users/voidnation/Documents/projects/astro/astro-blog/src/components/accordianTrigger", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`<div class="flex flex-col items-start px-5"><ul>${job.duties.map((duty) => renderTemplate`<li class="list-disc text-teal-400"><div class="flex flex-row items-center"><span class="text-xs leading-5 text-slate-900 dark:text-slate-50">${duty.duty}</span></div></li>`)}</ul></div>` })}`)}<div class="mb-2 flex w-full flex-col"></div><div class="mb-2 border-b"><h2 class="text-xl font-bold text-black dark:text-white">Education</h2>${education.map((edu) => renderTemplate`<div class="text-sm "><div class="flex justify-between"><h3 class="text-xs italic text-black dark:text-white">${edu.institution}</h3><p class="text-xs text-black/50 dark:text-white/50">${edu.startDate} - ${edu.endDate}</p></div><p class="text-xs font-semibold">${edu.degree}</p></div>`)}</div><h3 class="text-xl font-bold text-black dark:text-white">Publications</h3>${pubs.map((pub, index) => renderTemplate`<div class="flex flex-col items-stretch gap-2 rounded-md  p-1">${renderComponent($$result2, "AccordianTrigger", AccordianTrigger, { "client:load": true, "job": pub, "client:component-hydration": "load", "client:component-path": "/Users/voidnation/Documents/projects/astro/astro-blog/src/components/accordianTrigger", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`<div class="flex flex-col items-start px-4"><ul><li class="list-disc text-teal-400"><div class="flex flex-row items-center">${pub.authors.map((author, index2) => renderTemplate`<div class="flex flex-col"><span class="text-xs leading-5 text-slate-900 dark:text-slate-50">${author}</span><span class="text-xs leading-5 text-slate-900 dark:text-slate-50">${pub.edition}${pub.type}</span><span class="text-xs leading-5 text-slate-900 dark:text-slate-50"><a${addAttribute(pub.url, "href")}>${pub.journal}</a></span><div class="flex flex-row"><span class="text-xs leading-5 text-slate-900 dark:text-slate-50"></span></div></div>`)}</div></li></ul></div>` })}</div>`)}<div></div><div class="flex flex-col gap-2 border-t-2"><h1 class="text 2xl font-bold text-black dark:text-white">Skills</h1><div class="w-fill flex flex-wrap gap-2">${skills.map((skill) => renderTemplate`<div class="flex flex-row flex-wrap border p-1"><h3 class="text-xs font-bold text-black dark:text-white">${skill.skill}</h3></div>`)}</div></div></div></section>` })}
../content/cv/_education../content/cv/_pubs../content/cv/education`;
}, "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/cv.astro", void 0);

const $$file = "/Users/voidnation/Documents/projects/astro/astro-blog/src/pages/cv.astro";
const $$url = "/cv";

export { $$Cv as default, $$file as file, $$url as url };
