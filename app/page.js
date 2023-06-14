import { fetchPage } from "@/utils";
import { componentLibrary } from "@/components/component-library";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default async function Home() {
  const { story } = await fetchPage("home");
  const componentsList = story?.content?.body || [];
  return (
    <>
      <header>
        <Navigation bgClassName="bg-layout" />
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
