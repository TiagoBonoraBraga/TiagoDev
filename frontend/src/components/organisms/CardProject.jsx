import ReactProjects from "@/components/molecules/ReactProjects";
import VanillaProjects from "../molecules/VanillaProjects";
import NextProjects from "../molecules/NextProjects";

export default function CardProject() {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <VanillaProjects />
        <ReactProjects />
        <NextProjects />
      </section>
    </>
  );
}
