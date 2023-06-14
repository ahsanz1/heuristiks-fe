export const fetchPage = async (slug = "home") => {
  try {
    const res = await fetch(
      `https://api.storyblok.com/v2/cdn/stories/${slug}?token=${process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN}&resolve_relations=global_reference.reference`,
      { next: { revalidate: 1 } }
    );
    if (!res.ok) {
      return null;
    }
    const { story = {}, rels = [] } = await res.json();
    return { story, rels };
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllPages = async () => {
  try {
    const res = await fetch(
      `https://api.storyblok.com/v2/cdn/stories?token=${process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN}&resolve_relations=global_reference.reference`,
      { next: { revalidate: 1 } }
    );
    if (!res.ok) {
      return null;
    }
    const { stories = [], rels = [] } = await res.json();
    return { stories, rels };
  } catch (error) {
    console.log(error);
  }
};

export const transformSlugToPageName = (slug = "") => {
  if (!slug) return;

  const tokens = slug.split("-");
  const captitalizedTokens = tokens.map(
    (t) => t.charAt(0).toUpperCase() + t.slice(1)
  );
  return captitalizedTokens.join(" ");
};
