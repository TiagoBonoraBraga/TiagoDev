import ReactProjects from "@/components/molecules/ReactProjects";
import VanillaProjects from "../molecules/VanillaProjects";

export default function CardProject() {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <VanillaProjects />
        <ReactProjects />
      </section>
    </>
  );
}
