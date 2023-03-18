import Layout from "@/components/Layout";
import styles from "@/styles/Articulos.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter";

import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";

import cover from "../../../public/images/article-cover.png";
import typo from "../../../public/images/typo-fluid.gif";
import minFunc from "../../../public/images/min-func.png";
import flexGif from "../../../public/images/flex-optimized.gif";
import gridOverflow from "../../../public/images/grid-overflow.gif";
import grid from "../../../public/images/grid.gif";
import flex from "../../../public/images/flex.png";
import flexWrap from "../../../public/images/flex-wrap.png";
import Image from "next/image";

import { motion, wrap } from "framer-motion";

export default function ModernCSS() {
  const codeFlex = `.section {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }`;

  const htmlCode = `
  <div class="section">
    <div class="text">
    </div>
    <div class="img">
    </div>
  </div>
  `;

  const gridList = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.6 },
  };

  const flexText = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };

  const flexItem = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.6 },
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Diseño responsive con CSS moderno</title>
          <meta
            name="description"
            content="Si eres diseñador web o desarrollador frontend, seguramente
                    estás familiarizado con la importancia de las media queries
                    para crear diseños responsive. Sin embargo, con los avances
                    y mejoras que ha tenido CSS en los últimos años, hay otras
                    técnicas disponibles que pueden simplificar y mejorar la
                    implementación de diseños."
          />
          <meta
            name="keywords"
            content="Diseñador UX, CSS, CSS moderno, Diseño responsive"
          />
          <meta name="author" content="Luis Vásquez" />
          <meta
            property="og:image"
            content="https://i.ibb.co/2yqgHPC/article-cover.png"
          />
          <meta
            property="og:url"
            content="https://ux-portfolio-eight.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Diseño responsive con CSS moderno"
          />
          <meta
            property="og:description"
            content="Si eres diseñador web o desarrollador frontend, seguramente
            estás familiarizado con la importancia de las media queries
            para crear diseños responsive. Sin embargo, con los avances
            y mejoras que ha tenido CSS en los últimos años, hay otras
            técnicas disponibles que pueden simplificar y mejorar la
            implementación de diseños."
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/2yqgHPC/article-cover.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:domain"
            content="ux-portfolio-eight.vercel.app"
          />
          <meta
            property="twitter:url"
            content="https://ux-portfolio-eight.vercel.app/"
          />
          <meta
            name="twitter:title"
            content="Diseño responsive con CSS moderno"
          />
          <meta
            name="twitter:description"
            content="Si eres diseñador web o desarrollador frontend, seguramente
            estás familiarizado con la importancia de las media queries
            para crear diseños responsive. Sin embargo, con los avances
            y mejoras que ha tenido CSS en los últimos años, hay otras
            técnicas disponibles que pueden simplificar y mejorar la
            implementación de diseños."
          />
          <meta
            name="twitter:image"
            content="https://i.ibb.co/2yqgHPC/article-cover.png"
          />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <nav className={styles.nav}>
          <Link href="/" className={styles.nav__link}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            Regresar a inicio
          </Link>
        </nav>
        <main className={styles.main}>
          <motion.h1
            className={styles.title}
            initial={{ y: 45, opacity: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Diseño responsive con CSS moderno
          </motion.h1>
          <Image src={cover} className={styles.cover} />
          <p>
            Por lo general, cuando queremos crear un diseño responsive, nos
            vienen a la mente las media queries. Estas nos permiten ajustar el
            diseño en función del tamaño de la pantalla del dispositivo. Aunque,
            depender únicamente de las media queries para hacer un diseño
            responsive puede resultar complicado. Imagina que tienes varios
            componentes que deben cambiar constantemente con el tamaño de la
            pantalla, tendrías que escribir múltiples media queries, esto
            generaría un código CSS complejo y difícil de mantener.
            Afortunadamente, CSS ha evolucionado enormemente en los últimos
            años, incorporando nuevas características y mejoras que nos
            facilitan la implementación de diseños responsive. En este artículo,
            exploraremos algunas de estas características.
          </p>
          <h2>¿Qué es el diseño responsive?</h2>
          <p>
            El diseño responsive es una técnica de diseño web que se enfoca en
            crear sitios que se puedan adaptar de manera optima a distintos
            tamaños de pantallas y resoluciones, sin sacrificar su funcionalidad
            o usabilidad. En otras palabras, el objetivo es asegurar que los
            usuarios tengan una experiencia óptima al visitar el sitio,
            independientemente del dispositivo que utilicen, ya sea una
            computadora de escritorio, una tableta, un reloj inteligente o un
            teléfono móvil.
          </p>
          <p>Ahora vamos con los ejemplos.</p>
          <h2>Layout de 2 columnas</h2>
          <div className={styles.skeleton__container}>
            <div className={styles.skeleton}>
              <motion.div
                className={styles.skeleton__text}
                initial="hidden"
                whileInView="visible"
                variants={flexText}
              >
                <motion.div
                  className={styles.skeleton__title}
                  variants={flexItem}
                ></motion.div>
                <motion.div
                  className={styles.skeleton__paragraph}
                  variants={flexItem}
                ></motion.div>

                <motion.div
                  className={styles.skeleton__paragraph}
                  variants={flexItem}
                ></motion.div>
                <motion.div
                  className={styles.skeleton__paragraph}
                  variants={flexItem}
                ></motion.div>
                <motion.div
                  className={styles.skeleton__paragraph}
                  variants={flexItem}
                ></motion.div>
              </motion.div>
              <motion.div
                className={styles.skeleton__img}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              ></motion.div>
            </div>
          </div>
          <p>
            Este es un diseño bastante común en la que el contenido se divide en
            dos secciones, generalmente para mostrar diferentes tipos de
            información, como en una barra de navegación global o un área de
            contenido principal.
          </p>
          <p>
            Empezaremos una estructura HTML básica, algunos elementos estarán
            ocultos para enfocarnos en la estructura general.
          </p>
          <SyntaxHighlighter
            language="html"
            customStyle={{ backgroundColor: "#f1f5f9" }}
          >
            {htmlCode}
          </SyntaxHighlighter>
          <p>
            En el padre usaremos <code>display: flex</code> y un pequeno gap
            entre los elementos.
          </p>
          <SyntaxHighlighter
            language="css"
            customStyle={{ backgroundColor: "#f1f5f9" }}
          >{`.section {
    display: flex;
    gap: 1rem;
  }`}</SyntaxHighlighter>
          <p>Se veria de esta manera.</p>
          <Image src={flex} />
          <p>
            Ahora con <code>flex-wrap: wrap</code>, los elementos flexibles
            (hijos del elemento con la propiedad flex) van a poder ajustarse a
            varias lineas.
          </p>
          <SyntaxHighlighter
            language="css"
            customStyle={{ backgroundColor: "#f1f5f9" }}
          >
            {codeFlex}
          </SyntaxHighlighter>
          <Image src={flexWrap} />
          <p>
            Como has notado la imagen ha saltado a la siguente linea ubicandose
            debajo del texto, ahora necesitamos controlar cuando ocurre ese
            salto. Para esto podemos usar la propiedad <code>flex-basis</code>.
          </p>
          <SyntaxHighlighter
            language="css"
            customStyle={{ backgroundColor: "#f1f5f9" }}
          >{`.section > * {
    flex-basis: 500px;
    flex-grow: 1;
  }`}</SyntaxHighlighter>
          <p>
            Estamos indicando al navegador que el ancho base para cada elemento
            flexible es de 500px, si no hay suficiente espacio en esa línea para
            mantener a los dos elementos con un ancho de 500px cada uno,
            ajustalos a la siguiente línea. Podemos pensar en el valor de{" "}
            <code>flex-basis</code> como un breakpoint.
          </p>
          <p>Este seria el resultado.</p>
          <Image src={flexGif} />
          <p>
            Puedes ver que aunque hayamos etablecido 500px como ancho base para
            los elementos, se estiran hasta llenar cualquier espacio vacío que
            tenga el contenedor, esto ocurre porque hemos establecido{" "}
            <code>flex-grow: 1</code>.
          </p>
          <h2>Lista de elementos</h2>
          <div className={styles.skeleton__container}>
            <div className={styles.skeleton__grid}>
              <motion.div
                className={styles.skeleton__title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              ></motion.div>
              <motion.div
                className={styles.skeleton__list}
                initial="hidden"
                whileInView="visible"
                variants={gridList}
              >
                <motion.div
                  className={styles.skeleton__item}
                  variants={item}
                ></motion.div>
                <motion.div
                  className={styles.skeleton__item}
                  variants={item}
                ></motion.div>
                <motion.div
                  className={styles.skeleton__item}
                  variants={item}
                ></motion.div>
                <motion.div
                  className={styles.skeleton__item}
                  variants={item}
                ></motion.div>
                <motion.div
                  className={styles.skeleton__item}
                  variants={item}
                ></motion.div>
                <motion.div
                  className={styles.skeleton__item}
                  variants={item}
                ></motion.div>
              </motion.div>
            </div>
          </div>
          <p>
            Este es un patrón muy popular cuando se quieren mostrar elementos de
            una manera ordenada y fácilmente escaneable. Podríamos intentar
            realizarlo con flexbox, pero opino que usar grid nos daría mucho más
            control para alinear y distribuir los elementos de la lista de una
            manera más precisa. Así que utilizaremos grid.
          </p>
          <SyntaxHighlighter
            language="html"
            customStyle={{ backgroundColor: "#f1f5f9" }}
          >{`<ul class="container">
  <li class="card"></li>
  <li class="card"></li>    
  <li class="card"></li>    
  <li class="card"></li>    
  <li class="card"></li>    
  <li class="card"></li>
  <li class="card"></li>             
</ul>
  `}</SyntaxHighlighter>
          <SyntaxHighlighter
            language="css"
            customStyle={{ backgroundColor: "#f1f5f9" }}
          >{`.container {
  --min-col-size: 378px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--min-col-size), 1fr));
  gap: 2rem;
}`}</SyntaxHighlighter>
          <p>
            En el contenedor definimos la rejilla junto con la propiedad{" "}
            <code> grid-template-columns</code>, en esta es donde ocurre la
            magia, así que vamos por parte.
          </p>
          <p>
            Con la función <code>repeat()</code> hacemos que el tamaño de
            columna definido se aplique al resto de columnas, como primer
            argumento le pasamos <code>auto-fit</code> para que repita el
            conjunto de columnas tantas veces como sea necesario para llenar el
            espacio disponible en el contenedor, el segundo argumento es{" "}
            <code>minmax()</code>, en esta definimos el valor mínimo y máximo
            que quiero que tengan las columnas.
          </p>
          <Image src={grid} />
          <p>
            Al utilizar 1fr como valor máximo garantizamos que el espacio se
            distribuya equitativamente.
          </p>
          <p>
            Aparte de <code>auto-fit</code> también pudimos haber usado{" "}
            <code>auto-fill</code>, la diferencia entre ambos es con{" "}
            <code>auto-fit</code> las columnas se van a expandir tanto como se
            necesite para adaptarse al tamaño de la fila, mientras que con{" "}
            <code>auto-fill</code> si en la fila hay espacio suficiente para
            agregar una nueva columna se agregará sin importar que esta este
            vacía. La elección de una u otra dependerá del resultado que quieras
            lograr.
          </p>
          <h2>Algo no esta bien</h2>
          <p>
            En el caso anterior pudimos crear una grilla totalmente responsiva,
            pero ocurre algo interesante. Trata de adivinar que es…
          </p>
          <Image src={gridOverflow} />
          <p>
            Cuando el viewport es menor a 378px, ocurre un overflow, ya que
            hemos definido que el tamaño mínimo para la columna es 378px, aquí
            es donde entra la función <code>min()</code> al rescate, esta recibe
            recibe una lista de valores y establece el menor, como su valor. Sí
            la agregamos a queda de esta manera.
          </p>
          <SyntaxHighlighter
            language="css"
            customStyle={{ backgroundColor: "#f1f5f9" }}
          >{`.container {
  --min-col-size: 378px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(var(--min-col-size), 100%), 1fr));
  gap: 2rem;
}`}</SyntaxHighlighter>
          <p>
            ¿Qué ocurre? Cuando 100% es menor a 378px, este será el valor que
            tome <code>min()</code>, evitando así el overflow en viewport
            pequeños.
          </p>
          <p>
            <code>min()</code> también la he encontrado muy útil para cuando
            queremos establecer el ancho de un elemento que tenga un tamaño
            máximo, pero que en viewports menores al tamaño máximo ocupe todo el
            espacio disponible.
          </p>
          <SyntaxHighlighter
            language="css"
            customStyle={{ backgroundColor: "#f1f5f9" }}
          >{`.container {
 width: min(100%, 600px)
}`}</SyntaxHighlighter>
          <p>
            Con esto el ancho del contenedor no será mayor a 600px, y en
            viewport menores a 600px su ancho será del 100%.
          </p>
          <p>
            Dentro de <code>min()</code> también se pueden realizar operaciones
            matemáticas, vamos a verlo.
          </p>
          <SyntaxHighlighter
            language="css"
            customStyle={{ backgroundColor: "#f1f5f9" }}
          >{` .container {
  width: min(1200px, 100% - 2rem);
  margin-inline: auto;
}`}</SyntaxHighlighter>
          <p>
            Estamos indicando que se resten 2rem al valor del ancho cuando se
            establece en 100%, y con <code>margin-inline:auto</code> centramos
            el elemento horizontalmente. Esto da un efecto de padding de 1rem a
            ambos lados del elemento. Bastante genial.
          </p>
          <p>Con la siguente ilustración puedes entenderlo mucho mejor.</p>
          <Image src={minFunc} />

          <h2>Fluidez con límites</h2>
          <p>
            A menudo, al trabajar con tamaños de fuente en CSS, es cuando más
            recurrimos al uso de media queries. Sin embargo, este enfoque puede
            resultar tedioso y poco natural, con cambios bruscos entre los
            diferentes breakpoints que establecemos. ¿No sería mejor crear un
            tamaño de fuente que sea fluido, que cambie su tamaño de acuerdo al
            viewport pero sin salirse de unos límites predefinidos? Te lo tengo!
            para ello, vamos a usar <code>clamp()</code>.
          </p>
          <SyntaxHighlighter
            language="css"
            customStyle={{ backgroundColor: "#f1f5f9" }}
          >{`h1 {
  --font-large: clamp(2.8rem, 2.18rem + 3.09vw, 4.58rem);
  font-size: var(--font-large);
}
h2 {
  --font-medium: clamp(1.94rem, 1.6rem + 1.72vw, 2.93rem);
  font-size: var(--font-medium);
}
h3 {
  --font-small: clamp(1.35rem, 1.17rem + 0.91vw, 1.88rem);
  font-size: var(--font-small);
}
            `}</SyntaxHighlighter>
          <p>
            Definimos varias custom properties y a <code>clamp</code> le pasamos
            un valor mínimo, uno preferencial y un máximo.
          </p>
          <Image src={typo} />
          <p>
            Ahora el tamaño de las letras se ajustan automáticamente sin salirse
            de los limites que hemos definido como valor minimo y maximo.
            Perfecto!
          </p>
          <p>
            Es importante destacar que al establecer el valor preferido con
            unidades de viewport, debemos combinarlo con una unidad relativa
            como rem. De lo contrario, el usuario no podrá realizar zoom para
            aumentar el tamaño de la fuente. Por ello, recomiendo siempre hacer
            pruebas para identificar posibles problemas de accesibilidad.
          </p>
          <p>
            Aunque aquí hayamos utilizado <code>clamp()</code> para establecer
            el tamaño de fuente, también se puede emplear con otras propiedades,
            como: <code>gap</code>, <code>padding</code>, <code>margin</code>,
            etc. En definitiva, se trata de una herramienta muy versátil que nos
            permite crear diseños fluidos y naturales.
          </p>
          <h2>Conclusión</h2>
          <p>
            Hemos explorado diversas técnicas como el uso de{" "}
            <code>flexbox</code>, <code>grid</code>, <code>min()</code>, y{" "}
            <code>clamp</code> las cuales nos permiten crear diseños fluidos y
            adaptables a diferentes tamaños de pantalla sin tener que escribir
            varias media queries. Con esto no quiero decir que usar media
            queries esté mal, no, estas siguen siendo bastante útiles, y al
            combinarlas con las técnicas que hemos discutido nos facilitan
            bastante la implementación de diseños responsives, logrando un
            código CSS más eficiente y escalable.
          </p>
          <p>
            Espero que este artículo te haya sido de utilidad, y ahora tengas
            nuevas herramientas en tu arsenal para ayudarte en tu día a día :)
          </p>
        </main>
      </Layout>
      <Footer />
    </>
  );
}
