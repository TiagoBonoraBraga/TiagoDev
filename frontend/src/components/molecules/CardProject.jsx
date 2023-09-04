import Image from "next/image";
import Fotoimage from "@/public/images/fotoimage.png";
export default function CardProject() {
  return (
    <>
      <section className="flex flex-row justify-center items-center ss:flex ss:flex-col">
        <div className="max-w-sm ring-2 ring-blue-200 bg-blue-100 opacity-25 rounded-lg hadow dark:bg-black-500 dark:border-black-500">
          <Image
            src={Fotoimage}
            width={300}
            height={300}
            alt="Project"
            className="rounded"
          />
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-black-500">
            Titulo do Projeto
          </h2>
          <p>
            Είπε, κι εμάς μάς έκοψε μεμιάς τα ήπατά μας το μουγκρητό του το βαρύ
            κι η όψη η γιγαντένια. Όμως του απολογήθηκα κι αυτά τα λόγια του
            είπα· Από την Τροία ερχόμαστε, Αχαιοί που μύριοι ανέμοι μάς πέταξαν
            στης θάλασσας τα τρίσβαθα τα πλάτια. Πατρίδα θέλαμε, κι αλλού μάς
            φέραν άλλοι δρόμοι· τέτοιο του Δία στάθηκε το θέλημα κι η γνώμη. Και
            λέμε απ' του Αγαμέμνονα του γιού του Ατρέα τ' ασκέρι πως είμαστε,
            που ακούστηκε στα πέρατα του κόσμου μεγάλη χώρα παίρνοντας, πλήθος
            λαό χαλνώντας.
          </p>
          <h3>Repositório - link do projeto</h3>
          <h3>Deploy - link</h3>
        </div>
      </section>
    </>
  );
}
