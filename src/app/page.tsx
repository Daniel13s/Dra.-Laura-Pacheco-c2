"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowDown, BsFileArrowDownFill, BsFillPatchCheckFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <>
      <main className="w-screen h-screen flex flex-col justify-start items-start gap-50 border-b-1 border-black bg-[#E574BC]">
        <Image src="/logo.png" className="w-10 h-10 rounded-2xl flex justify-center items-center mt-2" width={100} height={100} alt="logo da psicologa"></Image>
       <div className="w-screen flex flex-col justify-center items-center gap-40">
         <div className="flex flex-col justify-center items-center px-4">
           <h1 className="text-2xl font-bold">Psicologa qualificada em São Paulo - SP</h1>
           <p>Cuidar da saúde emocional é um passo essencial para viver com mais equilíbrio, clareza e bem-estar.</p>
         </div>
         <Link className="p-4 bg-[#C52184] shadow-md shadow-black rounded-4xl font-bold text-white" href="#contact">Agende sua sessão</Link>
       </div>
      </main>
      <section className="w-screen h-screen flex flex-col justify-center items-center gap-10">
        <div className="w-screen flex flex-col justify-center items-center px-4 min-[1000px]:px-70 mt-10">
          <h2 className="text-2xl font-bold">Sobre mim</h2>
          <p>Sou psicóloga clínica com foco no atendimento de adultos, utilizando a Terapia Cognitivo-Comportamental como base do meu trabalho. Acredito que cada pessoa possui uma história única e merece ser acolhida com empatia, respeito e escuta ativa. <br></br><br></br>Meu objetivo é ajudar você a compreender melhor seus pensamentos, emoções e comportamentos, desenvolvendo estratégias práticas para lidar com desafios emocionais, fortalecer a autoestima e melhorar sua qualidade de vida. O processo terapêutico acontece em um ambiente seguro, ético e sem julgamentos.</p>
        </div>
        <Image className="shadow-md rounded-md" src="https://img.freepik.com/fotos-gratis/vista-lateral-jovem-conversando-com-terapeuta_23-2150136592.jpg?semt=ais_hybrid&w=740&q=80" width={250} height={250} alt="Imagem ilustrativa"></Image>
      </section>
      <section className="w-screen h-screen flex flex-col justify-start items-center gap-10 p-10 border-b-1 border-black min-[1000px]:px-100">
        <div className="w-screen flex flex-col p-10 gap-10 min-[1000px]:px-100">
          <h2 className="text-2xl font-bold">Serviços</h2>
          <ul className="flex flex-col gap-5">
            <li className="flex items-center"><BsFillPatchCheckFill /> Psicoterapia Individual</li>
            <li className="flex items-center"><BsFillPatchCheckFill /> Tratamento para Ansiedade e Estresse</li>
            <li className="flex items-center"><BsFillPatchCheckFill /> Terapia Online</li>
          </ul>
        </div>
        <Image className="shadow-md rounded-md" src="https://img.freepik.com/vetores-gratis/visita-desenhada-a-mao-ao-conceito-de-psicologo_52683-69070.jpg?semt=ais_hybrid&w=740&q=80" width={250} height={250} alt="Imagem ilustrativa"></Image>
      </section>
      <section className="w-screen h-screen flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl font-bold">Contato</h2>
        <input className="w-70 p-2 rounded-4xl border-1 border-black" type="email" placeholder="Digite seu email" />
        <div className="flex gap-4">
          <input className="w-33 p-2 rounded-4xl border-1 border-black" type="text" placeholder="Digite seu Nome" />
          <input className="w-33 p-2 rounded-4xl border-1 border-black" type="text" placeholder="Digite seu Sobrenome" />
        </div>
        <button className="w-50 p-4 bg-[#334139] rounded-4xl text-white font-bold shadow-md shadow-black">Enviar</button>
      </section>
      <section id="contact" className="w-screen h-screen flex flex-col justify-center items-center gap-4 border-b-1 border-black">
        <h2 className="text-2xl font-bold">Duvidas frequentes</h2>
        <div className="w-70 min-[1000px]:w-200 flex flex-col gap-4">
          <div onClick={() => setIsOpen1(!isOpen1)} className="bg-[#334139] text-white rounded-4xl p-3 shadow-md flex flex-col cursor-pointer gap-3">
            <h3 className="font-bold flex justify-between items-center">Como funciona a terapia?<IoIosArrowDown /></h3>
            { isOpen1 && <p>A terapia acontece por meio de sessões semanais, com duração média de 50 minutos, onde trabalhamos de forma colaborativa suas demandas e objetivos.</p> }
          </div>
          <div onClick={() => setIsOpen2(!isOpen2)} className="bg-[#334139] text-white rounded-4xl p-3 shadow-md flex flex-col cursor-pointer gap-3">
            <h3 className="font-bold flex justify-between items-center">A terapia online é eficaz?<IoIosArrowDown /></h3>
            { isOpen2 && <p>Sim. Estudos mostram que a terapia online pode ser tão eficaz quanto a presencial, desde que realizada em um ambiente adequado e sigiloso.</p> }
          </div>
          <div onClick={() => setIsOpen3(!isOpen3)} className="bg-[#334139] text-white rounded-4xl p-3 shadow-md flex flex-col cursor-pointer gap-3">
            <h3 className="font-bold flex justify-between items-center">Preciso estar passando por um problema grave para fazer terapia?<IoIosArrowDown /></h3>
            { isOpen3 && <p>Não. A terapia também é indicada para autoconhecimento, prevenção emocional e desenvolvimento pessoal.</p> }
          </div>
        </div>  
      </section>
      <footer className="w-screen h-30 bg-[#E574BC] flex flex-col justify-center items-center gap-4 opacity-50 text-black">
        @Dra. Nome - Todos os direitos reservados
      </footer>
    </>
  );
}
