import { fetchPage } from "@/utils";
import { componentLibrary } from "@/components/component-library";

export default async function Home() {
  const { story } = await fetchPage("home");
  const componentsList = story?.content?.body || [];
  return (
    <div className="flex flex-col gap-y-8">
      {componentsList.map((componentProps, idx) => {
        const Component = componentLibrary[componentProps.component];
        if (Component) return <Component {...componentProps} key={idx} />;
      })}
    </div>
  );
}
