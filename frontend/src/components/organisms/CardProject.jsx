import ReactProjects from "@/components/molecules/ReactProjects";
import VanillaProjects from "../molecules/VanillaProjects";
import NextProjects from "../molecules/NextProjects";
import BackendProjects from "../molecules/BackendProjects";

export default function CardProject() {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <VanillaProjects />
        <ReactProjects />
        <NextProjects />
        <BackendProjects />
      </section>
    </>
  );
}
