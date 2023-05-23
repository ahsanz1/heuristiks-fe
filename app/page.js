import { componentLibrary } from "@/components/component-library";
import { fetchPage } from "@/utils";

export default async function Home() {
  const pageData = await fetchPage("home");
  const componentsList = pageData?.content?.body || [];
  return (
    <div className="flex flex-col gap-y-16">
      {componentsList.map((componentProps, idx) => {
        const Component = componentLibrary[componentProps.component];
        return <Component {...componentProps} />;
      })}
    </div>
  );
}
