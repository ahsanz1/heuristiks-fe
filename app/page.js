import { fetchPage } from "@/utils";
import { componentLibrary } from "@/components/component-library";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default async function Home() {
  const { story, rels } = await fetchPage("home");
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
          bgClassName={"bg-layout"}
          HeaderCTALinks={HeaderCTALinks}
          ServicesCTAs={ServicesCTAs}
          ButtonLink={ButtonLink}
          ButtonText={ButtonText}
        />
      </header>
      <main className="min-h-screen px-8 mb-20 md:px-8 bg-layout">
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
}
