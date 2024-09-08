import ReactProjects from "@/components/molecules/ReactProjects";
import VanillaProjects from "../molecules/VanillaProjects";
import NextProjects from "../molecules/NextProjects";
import BackendProjects from "../molecules/BackendProjects";
import WordPressProjects from "../molecules/WordPressProjects";

export default function CardProject() {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <ReactProjects />
        <NextProjects />
        <VanillaProjects />
        <WordPressProjects />
        <BackendProjects />
      </section>
    </>
  );
}
