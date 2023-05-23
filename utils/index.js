export const fetchPage = async (slug = "home") => {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/${slug}?token=${process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN}`,
    { next: { revalidate: 1 } }
  );

  if (!res.ok) {
    // console.log(res.body);
    return null;
  }
  const { story } = await res.json();
  return story;
};
