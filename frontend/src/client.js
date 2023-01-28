import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "3mlg45t0",
  dataset: "production",
  apiVersion: '2021-11-16',
  useCdn: true,
  token: "sk1DrrsYRg35UbIP4EkWWbMOxFBh9L347cVPBKBqo0zEJuGVSnw8mPsCxuruWGo96vOmzEv8bMU0yGXOjhvO5qsbGFduGuxTQjYAPGpKRpPqWA0qkhE38ayfLFfxZzQJHwenUwX8nnziNhQ8SBDL850d1fuYMQsJsyoUrSCRcD0mwSm0sErh",
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);