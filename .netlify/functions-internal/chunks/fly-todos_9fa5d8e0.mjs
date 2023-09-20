const id = "fly-todos.mdx";
						const collection = "blog";
						const slug = "fly-todos";
						const body = "\n## Deploying a small app to Fly.io\n\nI wrote a small Todo app using remix-run and a postgres database. I have been deploying my sites to Vercel for a while now and I have been very happy with it. However, I have been noticing that the loading times are a bit slow. I decided to try out Fly.io and see how it compares.\n\n## Fly.io\n\nFly.io is a bit more complicated than Vercel. You have to create a Dockerfile and a fly.toml file. The Dockerfile is pretty simple. It just copies the files from the build directory to the Docker image. The fly.toml file is a bit more complicated. It has a bunch of settings for the app. I had to look up the documentation to figure out what some of the settings did. I also had to figure out how to populate my database with my Prisma schema. I ended up using the `fly ssh console` command to get a shell on the server and then running `npx prisma db push` to populate the database. Like below:\n\n```\nfly deploy\nfly ssh console -s\n--pick instance.  For some reason only the 2nd one worked\nthen\ncd app\nnpx prisma db push\n```\n\n## Vercel\n\nVercel is so easy. You just push your code to Github and it deploys. You can also deploy from your local machine. I think I can also do this with Fly.io but I haven't tried it yet. In reality I should probably try to port my large app to Fly.io for a direct comparison but it might be difficult. Although this time around the smaller app was quite easy so perhaps I will try it.\n";
						const data = {title:"Deploying a small app to Fly.io",description:"Vercel is so easy but the loading times are a bit slow. Fly.io is a bit more complicated but the loading times seem much faster.",pubDate:new Date(1680757200000),featured:false,tags:["Remix","Deployments","Coding"]};
						const _internal = {
							type: 'content',
							filePath: "/Users/voidnation/Documents/projects/astro/astro-blog/src/content/blog/fly-todos.mdx",
							rawData: "\ntitle: \"Deploying a small app to Fly.io\"\ndescription: \"Vercel is so easy but the loading times are a bit slow. Fly.io is a bit more complicated but the loading times seem much faster.\"\npubDate: \"April 6, 2023\"\nfeatured: false\ntags: [\"Remix\", \"Deployments\", \"Coding\"]",
						};

export { _internal, body, collection, data, id, slug };
