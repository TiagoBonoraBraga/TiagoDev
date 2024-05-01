import CustomP from "../atoms/CustomP";
// import CustomTitle from "../atoms/CustomTitle";

export default function SecondHeader() {
    return (
        <>
            <div className="flex flex-col justify-center text-center z-0 tracking-wider py-10 px-6 w-5/6 bg-gray-100 rounded-lg p-8 shadow-md shadow-blue-100 hover:shadow-lg hover:shadow-blue-100 transition duration-300 ease-in-out transform hover:-translate-y-1 dark:shadow-gray-100">
                <h1 className="text-4xl font-bold mb-8 text-blue-500 dark:text-black-500">Bem-vindo ao TIAGO DEV</h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-800 dark:text-gray-300 leading-relaxed">O lugar onde a tecnologia e a inovação se encontram para criar soluções extraordinárias.</p>
                <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-800 dark:text-gray-300 leading-relaxed">Transformando ideias em realidade, utilizando as mais recentes tecnologias e abordagens criativas. Nosso objetivo é não apenas satisfazer as necessidades dos nossos clientes, mas superar suas expectativas.</p>
                <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-800 dark:text-gray-300 leading-relaxed">Estamos ansiosos para embarcar em jornadas emocionantes com vocês, trazendo inovação, qualidade e confiabilidade para cada projeto.</p>
                <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-800 dark:text-gray-300 leading-relaxed"> <span className="font-semibold text-blue-500 dark:text-black-500">TIAGO DEV</span>, onde o futuro é criado hoje.</p>
            </div>

        </>
    )
}

