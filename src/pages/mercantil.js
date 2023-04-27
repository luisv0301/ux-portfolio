import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import styles from "@/styles/Mercantil.module.scss";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { motion } from "framer-motion";

import error from "../../public/images/error-tpago.png";
import jerarquia from "../../public/images/jerarquia-tpago.png";
import acessibilidad from "../../public/images/acessibilidad-tpago.png";
import patrones from "../../public/images/patrones-tpago.png";
import avatarOne from "../../public/images/avatar-review.png";
import avatarTwo from "../../public/images/avatar-two.png";
import avatarThree from "../../public/images/avatar-three.png";
import pin from "../../public/images/pin.png";
import mercantilCover from "../../public/images/mercanti-portada-prueba.png";

export default function mercantil() {
  return (
    <>
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

      <motion.div
        class={styles.header__coverEdit}
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
            Tpago
          </motion.h1>
          <Image src={mercantilCover} className={styles.cover__img} />
        </div>
      </motion.div>

      <Layout>
        <Head>
          <title>Tpago</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <div>
          <header className={styles.header}>
            <ul className={styles.tableContent}>
              <p className={styles.tableContent__title}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                Tabla de contenidos
              </p>
              <li>
                <Link href="#problema">Planteamiento de problema</Link>
              </li>

              <li>
                <Link href="#solucion">Solución</Link>
              </li>

              <li>
                <Link href="#rol">Rol</Link>
              </li>

              <li>
                <Link href="#empatizando">Empatizando</Link>
              </li>
              <li>
                <Link href="#ideacion">Ideación</Link>
              </li>
              <li>
                <Link href="#refinando">Refinando</Link>
              </li>
              <li>
                <Link href="#aprendido">Lo que aprendí</Link>
              </li>
              <li>
                <Link href="#proximo">Próximos pasos</Link>
              </li>
            </ul>

            <div className={styles.header__description}>
              <Image src={pin} alt="" className={styles.header__pin} />
              <div>
                <h2 className={styles.header__subtitle} id="problema">
                  Visión general
                </h2>
                <p>
                  La aplicación de <b>Tpago</b> ofrece una forma cómoda y segura
                  de realizar pagos electrónicos, sin necesidad de efectivo o
                  tarjetas. Es una alternativa útil en el contexto del mercado
                  venezolano, donde hay una alta inflación, escasez de efectivo
                  y limitaciones en las transacciones bancarias.
                </p>
              </div>
              <div>
                <h2 className={styles.header__subtitle} id="solucion">
                  Planteamiento del problema
                </h2>
                <p>
                  El <b>Banco Mercantil</b> es una de las entidades financieras
                  más importantes de Venezuela, con más de 90 años de
                  trayectoria y más de 8 millones de clientes. Sin embargo, su
                  aplicación de pago móvil (Tpago) presentaba varios problemas
                  de usabilidad y accesibilidad que afectaban la satisfacción y
                  la fidelidad de las personas usuarias. Por esta razón, se
                  decidió realizar un rediseño completo de la aplicación.
                </p>
              </div>
              <div>
                <h2 className={styles.header__subtitle} id="rol">
                  Rol
                </h2>
                <p>
                  Diseñador UX/UI (investigación con usuarios, arquitectura de
                  información, wireframe, UI kit y prototipado).
                </p>
              </div>
            </div>
          </header>

          <section className={styles.section}>
            <h2 className={styles.icon__heading}>Investigación</h2>
            <div className={styles.section__inner}>
              <h3>Que dicen los usuarios</h3>
              <p>
                En esta primera etapa recopilé y analicé las opiniones que las
                personas expresaban sobre la aplicación en diferentes
                plataformas digitales, como tiendas de aplicaciones, redes
                sociales, blogs, foros, etc. El objetivo era conocer un poco más
                sobre las expectativas y frustraciones de las personas usuarias
                relacionadas con la aplicación.
              </p>
              <div className={styles.reviews__container}>
                <div className={styles.reviews}>
                  <Image
                    src={avatarOne}
                    alt="User persona de Ana Vasquez, donde se muestran algunas de sus necesidades y objetivos"
                  />
                  <div className={styles.reviews__text}>
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1666 23.3333C14.6463 23.3333 14.147 23.4127 13.65 23.485C13.811 22.9437 13.9766 22.393 14.2426 21.8983C14.5086 21.1797 14.924 20.5567 15.337 19.929C15.6823 19.25 16.2913 18.7903 16.7393 18.2093C17.2083 17.6447 17.8476 17.269 18.354 16.8C18.851 16.31 19.502 16.065 20.02 15.7197C20.5613 15.4093 21.0326 15.0663 21.5366 14.903L22.7943 14.385L23.9003 13.9253L22.7686 9.40332L21.3756 9.73932C20.93 9.85132 20.3863 9.98199 19.768 10.1383C19.1356 10.255 18.4613 10.5747 17.71 10.8663C16.968 11.1977 16.1093 11.4217 15.3113 11.9537C14.5086 12.4623 13.5823 12.887 12.7656 13.5683C11.9746 14.2707 11.0203 14.8797 10.3156 15.7733C9.54564 16.6087 8.78497 17.486 8.19464 18.4847C7.51097 19.4367 7.04664 20.482 6.55664 21.5157C6.11331 22.5493 5.75631 23.6063 5.46464 24.633C4.91164 26.691 4.66431 28.6463 4.56864 30.3193C4.48931 31.9947 4.53597 33.3877 4.63397 34.3957C4.66897 34.8717 4.73431 35.3337 4.78097 35.6533L4.83931 36.0453L4.89997 36.0313C5.31498 37.9699 6.27035 39.7514 7.65555 41.1697C9.04076 42.5881 10.7992 43.5852 12.7275 44.0459C14.6557 44.5066 16.675 44.4119 18.5517 43.7729C20.4285 43.1339 22.0859 41.9766 23.3324 40.435C24.5789 38.8933 25.3634 37.0303 25.5953 35.0613C25.8271 33.0924 25.4969 31.0981 24.6426 29.309C23.7884 27.52 22.4451 26.0093 20.7682 24.9518C19.0912 23.8943 17.1492 23.3332 15.1666 23.3333ZM40.8333 23.3333C40.313 23.3333 39.8136 23.4127 39.3166 23.485C39.4776 22.9437 39.6433 22.393 39.9093 21.8983C40.1753 21.1797 40.5906 20.5567 41.0036 19.929C41.349 19.25 41.958 18.7903 42.406 18.2093C42.875 17.6447 43.5143 17.269 44.0206 16.8C44.5176 16.31 45.1686 16.065 45.6866 15.7197C46.228 15.4093 46.6993 15.0663 47.2033 14.903L48.461 14.385L49.567 13.9253L48.4353 9.40332L47.0423 9.73932C46.5966 9.85132 46.053 9.98199 45.4346 10.1383C44.8023 10.255 44.128 10.5747 43.3766 10.8663C42.637 11.2 41.776 11.4217 40.978 11.956C40.1753 12.4647 39.249 12.8893 38.4323 13.5707C37.6413 14.273 36.687 14.882 35.9823 15.7733C35.2123 16.6087 34.4516 17.486 33.8613 18.4847C33.1776 19.4367 32.7133 20.482 32.2233 21.5157C31.78 22.5493 31.423 23.6063 31.1313 24.633C30.5783 26.691 30.331 28.6463 30.2353 30.3193C30.156 31.9947 30.2026 33.3877 30.3006 34.3957C30.3356 34.8717 30.401 35.3337 30.4476 35.6533L30.506 36.0453L30.5666 36.0313C30.9816 37.9699 31.937 39.7514 33.3222 41.1697C34.7074 42.5881 36.4659 43.5852 38.3941 44.0459C40.3224 44.5066 42.3417 44.4119 44.2184 43.7729C46.0951 43.1339 47.7526 41.9766 48.9991 40.435C50.2455 38.8933 51.0301 37.0303 51.2619 35.0613C51.4938 33.0924 51.1635 31.0981 50.3093 29.309C49.455 27.52 48.1118 26.0093 46.4348 24.9518C44.7579 23.8943 42.8158 23.3332 40.8333 23.3333Z"
                        fill="black"
                      />
                    </svg>
                    <p>
                      Es muy pesada para ingresar desde datos móviles en la
                      calle. Frecuentemente, te salta con un error al intentar
                      realizar un pago, pidiendo intentar más tarde, lo cual es
                      una molestia.
                    </p>
                  </div>
                </div>

                <div className={`${styles.reviews} ${styles.reviews__reverse}`}>
                  <Image
                    src={avatarTwo}
                    alt="User persona de Ana Vasquez, donde se muestran algunas de sus necesidades y objetivos"
                  />
                  <div
                    className={`${styles.reviews__text} ${styles.reviews__border}`}
                  >
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1666 23.3333C14.6463 23.3333 14.147 23.4127 13.65 23.485C13.811 22.9437 13.9766 22.393 14.2426 21.8983C14.5086 21.1797 14.924 20.5567 15.337 19.929C15.6823 19.25 16.2913 18.7903 16.7393 18.2093C17.2083 17.6447 17.8476 17.269 18.354 16.8C18.851 16.31 19.502 16.065 20.02 15.7197C20.5613 15.4093 21.0326 15.0663 21.5366 14.903L22.7943 14.385L23.9003 13.9253L22.7686 9.40332L21.3756 9.73932C20.93 9.85132 20.3863 9.98199 19.768 10.1383C19.1356 10.255 18.4613 10.5747 17.71 10.8663C16.968 11.1977 16.1093 11.4217 15.3113 11.9537C14.5086 12.4623 13.5823 12.887 12.7656 13.5683C11.9746 14.2707 11.0203 14.8797 10.3156 15.7733C9.54564 16.6087 8.78497 17.486 8.19464 18.4847C7.51097 19.4367 7.04664 20.482 6.55664 21.5157C6.11331 22.5493 5.75631 23.6063 5.46464 24.633C4.91164 26.691 4.66431 28.6463 4.56864 30.3193C4.48931 31.9947 4.53597 33.3877 4.63397 34.3957C4.66897 34.8717 4.73431 35.3337 4.78097 35.6533L4.83931 36.0453L4.89997 36.0313C5.31498 37.9699 6.27035 39.7514 7.65555 41.1697C9.04076 42.5881 10.7992 43.5852 12.7275 44.0459C14.6557 44.5066 16.675 44.4119 18.5517 43.7729C20.4285 43.1339 22.0859 41.9766 23.3324 40.435C24.5789 38.8933 25.3634 37.0303 25.5953 35.0613C25.8271 33.0924 25.4969 31.0981 24.6426 29.309C23.7884 27.52 22.4451 26.0093 20.7682 24.9518C19.0912 23.8943 17.1492 23.3332 15.1666 23.3333ZM40.8333 23.3333C40.313 23.3333 39.8136 23.4127 39.3166 23.485C39.4776 22.9437 39.6433 22.393 39.9093 21.8983C40.1753 21.1797 40.5906 20.5567 41.0036 19.929C41.349 19.25 41.958 18.7903 42.406 18.2093C42.875 17.6447 43.5143 17.269 44.0206 16.8C44.5176 16.31 45.1686 16.065 45.6866 15.7197C46.228 15.4093 46.6993 15.0663 47.2033 14.903L48.461 14.385L49.567 13.9253L48.4353 9.40332L47.0423 9.73932C46.5966 9.85132 46.053 9.98199 45.4346 10.1383C44.8023 10.255 44.128 10.5747 43.3766 10.8663C42.637 11.2 41.776 11.4217 40.978 11.956C40.1753 12.4647 39.249 12.8893 38.4323 13.5707C37.6413 14.273 36.687 14.882 35.9823 15.7733C35.2123 16.6087 34.4516 17.486 33.8613 18.4847C33.1776 19.4367 32.7133 20.482 32.2233 21.5157C31.78 22.5493 31.423 23.6063 31.1313 24.633C30.5783 26.691 30.331 28.6463 30.2353 30.3193C30.156 31.9947 30.2026 33.3877 30.3006 34.3957C30.3356 34.8717 30.401 35.3337 30.4476 35.6533L30.506 36.0453L30.5666 36.0313C30.9816 37.9699 31.937 39.7514 33.3222 41.1697C34.7074 42.5881 36.4659 43.5852 38.3941 44.0459C40.3224 44.5066 42.3417 44.4119 44.2184 43.7729C46.0951 43.1339 47.7526 41.9766 48.9991 40.435C50.2455 38.8933 51.0301 37.0303 51.2619 35.0613C51.4938 33.0924 51.1635 31.0981 50.3093 29.309C49.455 27.52 48.1118 26.0093 46.4348 24.9518C44.7579 23.8943 42.8158 23.3332 40.8333 23.3333Z"
                        fill="black"
                      />
                    </svg>
                    <p>
                      En la plataforma de Tpago no se puede agregar contactos,
                      da una información que no se puede agregar contactos
                    </p>
                  </div>
                </div>

                <div className={styles.reviews}>
                  <Image
                    src={avatarThree}
                    alt="User persona de Ana Vasquez, donde se muestran algunas de sus necesidades y objetivos"
                  />
                  <div className={styles.reviews__text}>
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1666 23.3333C14.6463 23.3333 14.147 23.4127 13.65 23.485C13.811 22.9437 13.9766 22.393 14.2426 21.8983C14.5086 21.1797 14.924 20.5567 15.337 19.929C15.6823 19.25 16.2913 18.7903 16.7393 18.2093C17.2083 17.6447 17.8476 17.269 18.354 16.8C18.851 16.31 19.502 16.065 20.02 15.7197C20.5613 15.4093 21.0326 15.0663 21.5366 14.903L22.7943 14.385L23.9003 13.9253L22.7686 9.40332L21.3756 9.73932C20.93 9.85132 20.3863 9.98199 19.768 10.1383C19.1356 10.255 18.4613 10.5747 17.71 10.8663C16.968 11.1977 16.1093 11.4217 15.3113 11.9537C14.5086 12.4623 13.5823 12.887 12.7656 13.5683C11.9746 14.2707 11.0203 14.8797 10.3156 15.7733C9.54564 16.6087 8.78497 17.486 8.19464 18.4847C7.51097 19.4367 7.04664 20.482 6.55664 21.5157C6.11331 22.5493 5.75631 23.6063 5.46464 24.633C4.91164 26.691 4.66431 28.6463 4.56864 30.3193C4.48931 31.9947 4.53597 33.3877 4.63397 34.3957C4.66897 34.8717 4.73431 35.3337 4.78097 35.6533L4.83931 36.0453L4.89997 36.0313C5.31498 37.9699 6.27035 39.7514 7.65555 41.1697C9.04076 42.5881 10.7992 43.5852 12.7275 44.0459C14.6557 44.5066 16.675 44.4119 18.5517 43.7729C20.4285 43.1339 22.0859 41.9766 23.3324 40.435C24.5789 38.8933 25.3634 37.0303 25.5953 35.0613C25.8271 33.0924 25.4969 31.0981 24.6426 29.309C23.7884 27.52 22.4451 26.0093 20.7682 24.9518C19.0912 23.8943 17.1492 23.3332 15.1666 23.3333ZM40.8333 23.3333C40.313 23.3333 39.8136 23.4127 39.3166 23.485C39.4776 22.9437 39.6433 22.393 39.9093 21.8983C40.1753 21.1797 40.5906 20.5567 41.0036 19.929C41.349 19.25 41.958 18.7903 42.406 18.2093C42.875 17.6447 43.5143 17.269 44.0206 16.8C44.5176 16.31 45.1686 16.065 45.6866 15.7197C46.228 15.4093 46.6993 15.0663 47.2033 14.903L48.461 14.385L49.567 13.9253L48.4353 9.40332L47.0423 9.73932C46.5966 9.85132 46.053 9.98199 45.4346 10.1383C44.8023 10.255 44.128 10.5747 43.3766 10.8663C42.637 11.2 41.776 11.4217 40.978 11.956C40.1753 12.4647 39.249 12.8893 38.4323 13.5707C37.6413 14.273 36.687 14.882 35.9823 15.7733C35.2123 16.6087 34.4516 17.486 33.8613 18.4847C33.1776 19.4367 32.7133 20.482 32.2233 21.5157C31.78 22.5493 31.423 23.6063 31.1313 24.633C30.5783 26.691 30.331 28.6463 30.2353 30.3193C30.156 31.9947 30.2026 33.3877 30.3006 34.3957C30.3356 34.8717 30.401 35.3337 30.4476 35.6533L30.506 36.0453L30.5666 36.0313C30.9816 37.9699 31.937 39.7514 33.3222 41.1697C34.7074 42.5881 36.4659 43.5852 38.3941 44.0459C40.3224 44.5066 42.3417 44.4119 44.2184 43.7729C46.0951 43.1339 47.7526 41.9766 48.9991 40.435C50.2455 38.8933 51.0301 37.0303 51.2619 35.0613C51.4938 33.0924 51.1635 31.0981 50.3093 29.309C49.455 27.52 48.1118 26.0093 46.4348 24.9518C44.7579 23.8943 42.8158 23.3332 40.8333 23.3333Z"
                        fill="black"
                      />
                    </svg>
                    <p>
                      "Se ha producido un error iniciando sesión. Intenta
                      nuevamente." Más de una semana viendo este mensaje cada
                      vez que intento acceder y no sé que tengo que hacer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.section__inner}>
              <h3>Evaluando la interfaz</h3>
              <p>
                Esta etapa estaba enfocada en identificar en que partes de los
                flujos principales de la aplicación las personas estaban
                presentando problemas. Para ello, realicé un estudio de
                usabilidad moderado.
              </p>
              <p>
                Cada sesión duró de 20 a 30 minutos. Los participantes fueron 3
                mujeres y 2 hombres, con edades comprendidas entre los 19 y los
                55 años, algunos de ellos eran usuarios diarios de la aplicación
                y otros, nuevos usuarios. A cada uno se le pidió que realizaran
                cuatro tareas representativas haciendo uso de la aplicación,
                mientras se les observaba y se escuchaba por feedback.
              </p>
              <div className={styles.score__container}>
                <div className={styles.score}>
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
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <p className={styles.score__number}>40%</p>
                  <p className={styles.score__description}>
                    Tasa de éxito para realizar un pago
                  </p>
                </div>
                <div className={styles.score}>
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
                      d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    />
                  </svg>

                  <p className={styles.score__number}>54</p>
                  <p className={styles.score__description}>
                    Puntuación promedio de la escala de usabilidad del sistema
                    (SUS)
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.section__inner}>
              <p>
                Con base en la investigación realizada pude identificar lo
                siguiente:
              </p>
              <h3>Manejo de errores</h3>
              <p>
                La aplicación muestra mensajes de error genéricos y ambiguos,
                que no explican la causa del problema ni ofrecen soluciones o
                alternativas para recuperarse.
              </p>
              <Image src={error} alt="" />
              <h3>Accesibilidad</h3>
              <p>
                Muchos de los textos que aparecen en la interfaz tienen un
                tamaño muy pequeño y un contraste muy bajo con respecto al
                fondo, lo que dificulta su lectura para la mayoría de las
                personas. Esto es especialmente problemático para las personas
                con problemas de visión o que usan la aplicación en condiciones
                de poca luz.
              </p>
              <Image src={acessibilidad} alt="" />
              <h3>Patrones no convencionales</h3>
              <p>
                La aplicación no sigue los principios y directrices de diseño
                establecidas por las distintas plataformas móviles, como
                Material Design para Android y Human Interface Guidelines para
                iOS. Esto hace que la interfaz sea poco intuitiva e
                inconsistente, generando confusión y frustración en las personas
                usuarias.
              </p>
              <Image src={patrones} alt="" />
              <h3>Jerarquía visual</h3>
              <p>
                Para la mayoría de las personas resultaba difícil saber en qué
                áreas de la interfaz enfocarse debido a la pobre organización de
                los elementos dentro de la interfaz.
              </p>
              <Image src={jerarquia} alt="" />
            </div>
            <div className={styles.finalDesign}>
              <h2>Aplicando los cambios</h2>
              <div className={styles.finalDesign__block}>
                <h3>Flujo para enviar pagos simplificado</h3>
                <video
                  src={"/images/mercantil-flujo.mp4"}
                  autoPlay
                  muted
                  loop
                  className={styles.finalDesign__video}
                ></video>
              </div>

              <div className={styles.finalDesign__block}>
                <h3>Fácil acceso al contenido más importante</h3>
                <video
                  src={"/images/mercentil-sections.mp4"}
                  autoPlay
                  muted
                  loop
                  className={styles.finalDesign__video}
                ></video>
              </div>

              <div className={styles.finalDesign__block}>
                <h3>Manejo de errores mejorado</h3>
                <video
                  src={"/images/mercantil-error.mp4"}
                  autoPlay
                  muted
                  loop
                  className={styles.finalDesign__video}
                ></video>
              </div>
            </div>
          </section>
          <section>
            <h2>Resultados</h2>
            <ul>
              <li>
                La tasa de éxito para realizar un pago se incrementó en un 30%
              </li>
              <li>
                La puntuación promedio de la escala de usabilidad del sistema
                (SUS) paso de 54 a 90
              </li>
            </ul>
          </section>
          <section>
            <h2>Lo que aprendí</h2>
            <ul>
              <li>
                Hacer pruebas de usabilidad frecuentes, nos permite detectar
                problemas en el diseño e identificar áreas de mejora
              </li>
              <li>
                Hacer un buen manejo de los mensajes de error es crucial para
                lograr una buena experiencia de usuario
              </li>
              <li>
                Cuando se diseña para dispositivos móviles seguir los patrones y
                principios establecidos por las distintas plataformas ayudan a
                crear interfaces coherentes e intuitivas
              </li>
            </ul>
          </section>
        </div>
      </Layout>
      <Footer />
    </>
  );
}