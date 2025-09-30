import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { QuestionAccordion } from "./QuestionAccordion";
import Image from "next/image";
export const FAQcontainer = () => {
  const questionAnswer = [
    {
      question:
        "Cual es la mejor forma para hacer un fetch de datos en javascript??",
      answer:
        "La mejor forma de hacer un fetch de datos en javascript es utilizando la API Fetch, que es una interfaz moderna y flexible para realizar solicitudes HTTP. Permite trabajar con promesas y proporciona una sintaxis más limpia y legible en comparación con XMLHttpRequest.",
    },
    {
      question: "Que es React?",
      answer:
        "React es una biblioteca de JavaScript para construir interfaces de usuario. Fue desarrollada por Facebook y se utiliza para crear aplicaciones web de una sola página (SPA) y aplicaciones móviles. React permite a los desarrolladores crear componentes reutilizables que gestionan su propio estado, lo que facilita la construcción de interfaces complejas y dinámicas.",
    },
    {
      question: "Que es Next.js?",
      answer:
        "Next.js es un framework de React que facilita la creación de aplicaciones web y sitios web estáticos. Proporciona características como renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG), enrutamiento automático, soporte para CSS y Sass, y optimización del rendimiento. Next.js permite a los desarrolladores construir aplicaciones web rápidas y escalables con una configuración mínima.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        padding: "2rem",
        borderRadius: "2rem",
        width: "37.5rem",
        height: "35.31rem",
        zIndex: 4,
      }}
    >
      <Typography variant="h2" sx={{ marginLeft: "2rem" }}>
        <Image src="/icon-star.svg" height={40} width={40} alt="icon-start" />{" "}
        FAQs
      </Typography>
      {questionAnswer.map((QA) => {
        return <QuestionAccordion key={QA.question} data={QA} />;
      })}
    </Box>
  );
};
