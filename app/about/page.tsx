import Link from "next/link";
import React from "react";
import { AiOutlineFire, AiOutlineRise, AiOutlineStar } from "react-icons/ai";


const AboutPage = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-center mt-10 ">
        <Link href={"/"} className="hover:underline  
              hover:extrabold hover:duration-300 ">
          <h3 className="cursor-pointer p-2 align-middle text-3xl">Home</h3>
        </Link>
        {/* <div className="bg-indigo-500  hover:bg-indigo-400  rounded w-40 px-2 py-4 text-center"> */}
          <Link href={'https://jsb9.netlify.app'} className="bg-indigo-500  hover:bg-indigo-400  rounded w-40 px-2 py-4 text-center">
            More About Me
          </Link>
        {/* </div> */}
      </div>
      <div className="mt-5">
        <hr />
      </div>

      <div className="mt-10 sm:mt-20 flex flex-col sm:flex-row p-2">
        <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight sm:leading-normal">
          JULIAN SANTIAGO <br className=""/> BARBOSA ALVARADO
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 space-x-0 sm:space-x-9 mt-10">
        <div className="flex flex-col sm:w-max-md ">
          <div className="border p-4 ">
            <div className="text-7xl">
              <AiOutlineFire/>
            </div>
            <h3 className="text-3xl my-5 font-extrabold text-indigo-500">Proyecto Personal y Auco Proyección</h3>
            <p>
            Mi objetivo es crear una empresa de software, aprender y especializarme en tecnologías clave como la computación en la nube e Ingeniera de Software, y proyectarme en Auco como un miembro activo y colaborador veo a <span className="text-indigo-500 font-extrabold text-xl">Auco</span> como un entorno donde puedo aportar mis ideas y experiencias, así como aprender mucho de otros profesionales y emprendedores apasionados por la tecnología. . 
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:w-max-md">
          <div className="border p-4">
            <div className="text-7xl ">
              <AiOutlineRise/>
            </div>
            <h3 className="text-3xl my-5 font-extrabold text-indigo-500">Aspiraciones Profesionales </h3>
            <p>
            Mis aspiraciones profesionales incluyen continuar creciendo tanto en el ámbito profesional como personal en el desarrollo de software. Mi enfoque a corto plazo es aprender y perfeccionar mis habilidades actuales, mientras que a largo plazo, tengo la meta de realizar un postgrado en ingeniería de software y establecer mi propia empresa de software. Estoy entusiasmado por seguir aprendiendo y aplicando mis conocimientos en soluciones.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:w-max-md">
          <div className="border p-4">
            <div className="text-7xl  ">
              <AiOutlineStar />
            </div>
            <h3 className="text-3xl my-5 font-extrabold text-indigo-500">Contribución a la Empresa</h3>
            <p>
            Mi contribución a la empresa se caracteriza por mi enfoque en el cumplimiento de objetivos, mi creatividad, mis habilidades como full stack y mi pasión por aprender constantemente. Estas cualidades pueden beneficiar a la empresa al impulsar la eficiencia en la ejecución de proyectos, aportar ideas frescas y soluciones innovadoras, abordar integralmente el desarrollo de aplicaciones y mantenerse al día con las últimas tendencias tecnológicas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
