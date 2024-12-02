import Link from "next/link";
import Image from "next/image";
import { reactProjects } from '../../utils/mocks'
import CustomCard from "../atoms/CustomCard";
export default function ReactProject() {
  return (
    <>
      <h2 className="flex justify-center items-center mt-10 text-lg font-bold tracking-wider dark:text-white-500">Projetos React.js</h2>
      <div className="flex flex-row ss:flex-col justify-center items-center w-2/3 ss:ss:w-[120%] gap-5">



        {reactProjects.map((reactProject, index) =>
          <CustomCard key={index}>
            <div className="flex justify-center items-center p-3">
              <Image
                src={reactProject.image}
                width={300}
                height={200}
                alt="Project"
                className="rounded"
              />
            </div>
            <div>

              <h2 className="flex justify-center mb-2 mt-5 text-2xl font-bold tracking-tight text-black-500">
                {reactProject.title}
              </h2>
              <p className="mt-2 mb-2 text-justify p-5 ">
                {reactProject.description}
              </p>

              <Link href={reactProject.repository} className="flex justify-center items-center mb-3">Repositório GitHub</Link>
              {/* <Link href="https://www.foodbox.cia.tv" className="flex justify-center items-center mb-3">www.foodbox.cia.tv</Link> */}

            </div>
          </CustomCard>

        )}
      </div>
    </>
  )
}