import { componentLibrary } from "@/components/component-library";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { fetchAllPages, fetchPage } from "@/utils";
import { notFound } from "next/navigation";
import React from "react";

const Services = async ({ params }) => {
  const { story = {}, rels = [] } = (await fetchPage(params.slug)) || {
    story: {},
    rels: [],
  };
  if (Object.keys(story) === 0 || rels.length === 0) notFound();
  const componentsList = story?.content?.body || [];
  const headerProps = rels.find((r) => r.name.toLowerCase() === "header");

  const { HeaderCTALinks = {} } = headerProps?.content?.global[0];
  const { ServicesCTAs = {} } = headerProps?.content?.global[0];
  const { ButtonLink = "" } = headerProps?.content?.global[0];
  const { ButtonText = "" } = headerProps?.content?.global[0];

  return (
    <>
      <header>
        <Navigation
          bgClassName={"bg-white"}
          HeaderCTALinks={HeaderCTALinks}
          ServicesCTAs={ServicesCTAs}
          ButtonLink={ButtonLink}
          ButtonText={ButtonText}
        />
      </header>
      <main className="min-h-screen px-8 mb-20 mt-20 md:px-8 bg-white">
        {" "}
        <div className="flex flex-col gap-y-8">
          {componentsList.map((componentProps, idx) => {
            const Component = componentLibrary[componentProps.component];
            if (Component) return <Component {...componentProps} key={idx} />;
          })}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Services;

export async function generateStaticParams() {
  const { stories } = await fetchAllPages();
  const staticallyGeneratedRoutes = stories
    .filter(
      (s) =>
        !s.name.includes("Home") &&
        !s.name.includes("Header") &&
        !s.name.includes("Footer")
    )
    .map((s) => ({
      slug: s.slug,
    }));
  return staticallyGeneratedRoutes;
}
