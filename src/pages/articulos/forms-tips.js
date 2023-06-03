import Layout from "@/components/Layout";
import styles from "@/styles/Articulos.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter";

import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";

import cover from "../../../public/images/article-cover.png";

import airbnb from "../../../public/images/airbnb.png";
import trip from "../../../public/images/trip.png";
import caribe from "../../../public/images/caribe.png";

import teclado from "../../../public/images/teclado.png";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion, wrap } from "framer-motion";

import MobileNav from "@/components/MobileNav";

export default function ModernCSS() {
  const codeFlex = `.section {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }`;

  const htmlCode = `
  <h2 id="producto">Comprar producto</h2>
  <form aria-labelledby="producto"></form>
  `;

  const labelExample = `
  <label for="email">Email</label>
  <input id="email" name="email" />
  `;

  const autocompleteExample = `
  <label for="email">Email</label>
  <input id="email" name="email" autocomplete="email" />
  `;

  const infoExample = `
  <label for="password">Contraseña</label>
    <input
      required
      minlength="8"
      type="password"
      id="password"
      name="password"
      aria-describedby="password-length"
    />
  <span id="password-length">Debe ingresar al menos 8 caracteres</span>
  `;

  return (
    <>
      <Navbar />
      <motion.div
        class={`${styles.header__coverEdit} ${styles.header__coverEditForm}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
      >
        <div class={styles.header__coverEditInner}>
          <motion.h1
            initial={{ y: 45, opacity: 0.4 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65 }}
            id="top"
            class={styles.header__title}
          >
            Creando formularios más fáciles de completar
          </motion.h1>
        </div>
      </motion.div>

      <Layout>
        <Head>
          <title>Creando formularios más fáciles de completar</title>
          <meta
            name="description"
            content="Si eres diseñador web o desarrollador frontend, conoces la importancia de las media queries para diseños responsive. CSS ofrece nuevas técnicas para simplificar y mejorar la implementación de estos diseños."
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
            content="Si eres diseñador web o desarrollador frontend, conoces la importancia de las media queries para diseños responsive. CSS ofrece nuevas técnicas para simplificar y mejorar la implementación de estos diseños."
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
            content="Si eres diseñador web o desarrollador frontend, conoces la importancia de las media queries para diseños responsive. CSS ofrece nuevas técnicas para simplificar y mejorar la implementación de estos diseños."
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
          {/*  <motion.h1
            className={styles.title}
            initial={{ y: 45, opacity: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Creando formularios mas faciles de completar
          </motion.h1>
          <Image src={cover} className={styles.cover} />*/}
          <p>
            Es muy probable que las personas deban completar un formulario
            cuando intentan completar algún objetivo, como comprar un producto o
            ver su película favorita. Sin embargo, esta tarea no es muy
            divertida de realizar y en ocasiones puede ser frustrante, de hecho,
            el <b>81%</b> de las personas ha abandonado un formulario en línea
            después de comenzar a llenarlo.
          </p>
          <p>
            En este artículo compartiré algunas recomendaciones que he ido
            aprendiendo de cómo podemos hacer los formularios que sean más
            fáciles y rápidos de completar. Así que, vamos a ello.
          </p>
          <h2>Nombres accesibles</h2>
          <p>
            Los formularios deben de tener un nombre accesible que ayude a
            comunicar su propósito para las personas que usan tecnologías
            asistivas, como lectores de pantalla. Esto se puede lograr haciendo
            uso del atributo <code>aria-labelledby</code>, donde se referencie a
            un elemento de encabezado visible (h1 - h6) que contenga el nombre
            del formulario. Otras maneras manera de definir un nombre es
            haciendo uso de <code>aria-label</code> o <code>title</code>.
          </p>
          <SyntaxHighlighter
            language="html"
            customStyle={{ backgroundColor: "#f9fafb" }}
          >
            {htmlCode}
          </SyntaxHighlighter>
          <h2>Etiqueta label</h2>
          <p>
            Cada campo de un formulario debe estar asociado a una etiqueta
            <code>label</code>. Así, los lectores de pantallas pueden enunciar
            la etiqueta cuando el usuario se sitúe en el campo. Otro beneficio
            es que esto amplía el área de clic, ya que al hacer clic en la
            etiqueta se hace foco en el campo correspondiente.
          </p>
          <SyntaxHighlighter
            language="html"
            customStyle={{ backgroundColor: "#f9fafb" }}
          >
            {labelExample}
          </SyntaxHighlighter>
          <p>
            Al registrarse en amazon, al hacer clic en las etiquetas se puede
            ver como se hace foco en el campo al cual se encuentra asociada.
          </p>
          <video
            src={"/images/amazon.mp4"}
            autoPlay
            muted
            loop
            className={styles.finalDesign__video}
          ></video>
          <h2>Autocompletado</h2>
          <p>
            Los navegadores pueden ayudar a completar los campos de un
            formulario automáticamente, dando sugerencias basadas en atributos
            como <code>name</code>, <code>type</code> y <code>id</code> del
            campo. A veces, esta información no es suficiente para que el
            navegador pueda ofrecer las mejores sugerencias, en este caso,
            podemos ayudar al navegador haciendo uso del atributo{" "}
            <code>autocomplete</code>. Este puede tomar varios valores
            dependiendo del tipo de información que se requiera.
          </p>
          <SyntaxHighlighter
            language="html"
            customStyle={{ backgroundColor: "#f9fafb" }}
          >
            {autocompleteExample}
          </SyntaxHighlighter>
          <p>
            En GetYourGuide utilizan <code>autocomplete="email"</code> para dar
            sugerencias basadas en valores de tipo email que se habían ingresado
            previamente.
          </p>
          <video
            src={"/images/get-your-guide.mp4"}
            autoPlay
            muted
            loop
            className={styles.finalDesign__video}
          ></video>
          <p>
            Otra situación similar es donde podemos utilizar valores por
            defectos en los campos haciendo uso de la información que tenemos
            disponible en ese momento o implementando una API. Airbnb detecta
            automáticamente el país y el código telefónico, haciendo mucho más
            rápido y fácil el llenado del formulario.
          </p>

          <Image src={airbnb} alt="" />

          <h2>Teclado apropiado</h2>
          <p>
            Cuando estás trabajando campos como código postal, número de tarjeta
            o un número de cuenta, es probable que pienses en usar el atributo
            <code>type="number"</code> en el campo, esto hace que aparezcan unas
            flechas para aumentar o disminuir el valor introducido, lo cual no
            tiene mucho sentido para estos casos. Si queremos evitar este
            comportamiento, pero mostrar un teclado adecuado en los dispositivos
            móviles, podemos usar el atributo <code>inputmode="numeric"</code> y
            dejar <code>type="text"</code>.
          </p>
          <p>
            En el lado izquierdo, usamos <code>type="number"</code>. A la
            derecha,
            <code>inputmode="numeric"</code> y <code>type="text"</code> para
            eliminar las flechas y mostrar el teclado virtual apropiado.
          </p>
          <Image src={teclado} alt="" />
          <p>
            Además, podemos mejorar la experiencia de usuario con el atributo
            <code>enterkeyhint</code>, que nos permite personalizar la tecla
            enter del teclado virtual con las acciones más comunes, como:
            buscar, enviar, añadir nueva línea, etc.
          </p>
          {/*<p>
            En el siguiente ejemplo hacemos uso de{" "}
            <code>enterkeyhint="done"</code> en el último campo del formulario,
            para indicar con la tecla enter que ahora el formulario puede ser
            enviado
          </p> */}

          <h2>Placeholder como etiquetas</h2>
          <p>
            No uses el atributo <code>placeholder</code> para indicar el tipo de
            información que se espera en un campo. Este desaparece cuando el
            usuario empieza a escribir, lo que puede causar confusión o
            dificultad para recordar lo que se debe ingresar. Además, suele
            tener un color gris claro que no cumple con los estándares de
            accesibilidad para el contraste de color. Algunos lectores de
            pantalla tampoco leen su valor. Por eso, es mejor usar una etiqueta
            <code>label</code> visible para cada campo de entrada.
          </p>

          <p>
            En el Banco Bancaribe usan el <code>placeholder</code> como
            etiqueta. Si el usuario se distrae después de escribir en el primer
            campo, cuando lo retome, ¿que se supone que estaba escribiendo? ¿el
            usuario? ¿el nombre? la única manera de saberlo es borrando lo que
            escribió para poder visaulizar el valor del <code>placeholder</code>{" "}
            de nuevo. Frustrante, ¿no?
          </p>
          <Image src={caribe} />

          <h2>Visibilidad de la información</h2>
          <p>
            Si hay información que el usuario debe de conocer para completar el
            formulario con éxito, esta debe de ser siempre visible.
          </p>
          <p>
            En MercadoLibre, los requisitos para crear una contraseña se
            encuentran ocultos en un tooltip, si se activa desaparece cuando se
            empieza a llenar el campo, esto obliga a los usuarios a tener que
            recordar cada uno de los requisitos aumentando la carga cognitiva.
          </p>
          <video
            src={"/images/meli.mp4"}
            autoPlay
            muted
            loop
            className={styles.finalDesign__video}
          ></video>
          <p>
            Una mejor opción es que los requisitos sean siempre visibles, como
            lo hace TripAdvisor, que indica que la contraseña debe de tener al
            menos 10 caracteres y uno de ellos especial.
          </p>
          <Image src={trip} alt="" />
          <p>
            Esta información también debe ser accesible, puedes usar
            <code>aria-describedby</code> para asociar el campo a un elemento
            que explique cómo debe ser ingresada la información.
          </p>
          <SyntaxHighlighter
            language="html"
            customStyle={{ backgroundColor: "#f9fafb" }}
          >
            {infoExample}
          </SyntaxHighlighter>
          <h2>Validar cuando hace sentido</h2>
          <p>
            Para evitar que los usuarios se frustren o cometan errores al llenar
            un formulario, es importante elegir el momento adecuado para mostrar
            los mensajes de validación. Lo ideal es que estos aparezcan cuando
            los usuarios han terminado de escribir en un campo y se muevan al
            siguiente. Esto se puede lograr usando el evento <code>blur</code>{" "}
            en el campo.
          </p>
          <p>
            Un ejemplo de este tipo de validación lo encontramos en Stripe, que
            espera a que el usuario salga del campo para mostrar el mensaje
            correspondiente.
          </p>
          <video
            src={"/images/stripe.mp4"}
            autoPlay
            muted
            loop
            className={styles.finalDesign__video}
          ></video>
          <p>
            Sin embargo, hay casos en los que puede ser útil mostrar las
            validaciones mientras los usuarios están escribiendo. Por ejemplo,
            Hotjar válida inmediatamente si la contraseña cumple con los
            requisitos del sistema ayudando a prevenir errores.
          </p>

          <video
            src={"/images/hotjar-validation.mp4"}
            autoPlay
            muted
            loop
            className={styles.finalDesign__video}
          ></video>
          <h2>Navegación mediante teclado</h2>
          <p>
            Muchas personas navegan por internet haciendo uso del teclado, por
            lo que es importante crear formularios que sean accesibles para
            estas personas. Debemos tener en cuenta dos aspectos: usar los
            elementos HTML apropiados y mostrar el indicador de foco.
          </p>
          <p>
            Los elementos como <code>input</code>, <code>select</code> y{" "}
            <code>button</code> reciben foco con el teclado por defecto, pero
            otros elementos como <code>div</code> o <code>span</code> no. Por
            eso, es mejor usar los primeros para crear formularios. Si en lugar
            de los elementos nativos vas a crear tus propios componentes, es
            importante que los pruebes para garantizar que sean accesibles.
          </p>
          <p>
            El indicador de foco es una señal visual que muestra dónde está el
            cursor del teclado en la página. Algunos sitios web eliminan el
            indicador porque no les gusta cómo se ve, pero esto dificulta la
            navegación con el teclado. Lo recomendable es personalizar el
            indicador con la pseudoclase <code>:focus</code> para que haga
            sentido con el diseño del sitio.
          </p>
          <p>
            Cuando navegamos por Twitter usando la tecla <b>tab</b> el indicador
            de foco nos muestra donde nos encontramos.
          </p>
          <video
            src={"/images/twitter.mp4"}
            autoPlay
            muted
            loop
            className={styles.finalDesign__video}
          ></video>
          <h2>Conclusión</h2>

          <p>
            Los formularios son una parte esencial de la experiencia de usuario
            en internet, pero también pueden ser una fuente de frustración y
            abandono. Espero que con estas recomendaciones puedas crear
            formularios que sean mucho más amigables y accesibles para las
            personas.
          </p>
        </main>
      </Layout>

      <MobileNav />
      <Footer />
    </>
  );
}
