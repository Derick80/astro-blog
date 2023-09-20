const id = "band-container.mdx";
						const collection = "blog";
						const slug = "band-container";
						const body = "\nData visualization has become increasingly important to me since starting my career in industry. I started with basic tools like Microsoft Office and Google Docs, but have since graduated to more advanced tools like ggplot in R. However, as I build a finance app for fun, I find that the data visualization landscape in Javascript is vast and confusing.\n\nInitially, I thought about using a pie chart to display amounts by category, but ultimately decided to build my own band chart. Drawing inspiration from a portfolio tutorial on HTML and CSS, I created two elements: a container element that represents 0-100% and a child container element that takes a coded width to correspond to the percentage skill I want to visualize.I found that by reshaping my data into data organized by category, I could display each category as a segment of a band-chart.\n\nThis chart is responsive and works at all viewpoints tested. I also decided to only display categories that are 10% or more, with the first three letters of the category, as I found that this displayed the most information with the least amount of clutter\n";
						const data = {title:"Data Visualization",description:"Where I explore the world of data visualization a little bit at a time...",pubDate:new Date(1677823200000),heroImage:"/bankapp.png",featured:false,tags:["Coding","Remix"]};
						const _internal = {
							type: 'content',
							filePath: "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/band-container.mdx",
							rawData: "\ntitle: \"Data Visualization\"\ndescription: \"Where I explore the world of data visualization a little bit at a time...\"\npubDate: \"March 03 2023\"\ntags: [\"Coding\", \"Remix\"]\nfeatured: false\nheroImage: \"/bankapp.png\"",
						};

export { _internal, body, collection, data, id, slug };
