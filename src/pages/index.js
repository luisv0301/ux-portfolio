import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";
import { motion } from "framer-motion";

import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { useRef } from "react";

import character from "../../public/images/square-try.png";

export default function Home() {
  const constraintsRef = useRef(null);

  return (
    <div>
      <motion.div className={styles.header__container} ref={constraintsRef}>
        <header className={styles.header}>
          <motion.div
            className={`${styles.squarePhoto__hidden}`}
            drag
            whileDrag={{
              scale: 1.2,
            }}
            dragConstraints={constraintsRef}
            dragMomentum={false}
          >
            <Image src={character} className={styles.covers} />
          </motion.div>
          <div className={styles.header__text}>
            <p className={styles.header__overflowHidden}>
              <motion.span
                className={styles.header__subtitle}
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.15 }}
              >
                Luis Vásquez
              </motion.span>
            </p>
            <h1>
              <span className={styles.header__clippy}>
                <motion.span
                  className={styles.header__firstLine}
                  initial={{ y: 150 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, delay: 0.15 }}
                >
                  DISEÑADOR
                </motion.span>
              </span>
              <span className={styles.header__clippy}>
                <motion.span
                  className={styles.header__secondLine}
                  initial={{ y: 150 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, delay: 0.15 }}
                >
                  UX
                  <motion.img
                    src="/images/hand.png"
                    alt=""
                    animate={{ rotateZ: [null, -20, 20, 0] }}
                    transition={{ delay: 1.25 }}
                  />
                </motion.span>
              </span>
            </h1>
            <p className={styles.header__overflowHidden}>
              <motion.span
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.15 }}
              >
                <b>Soluciones creativas enfocadas en las personas.</b>{" "}
                Actualmente trabajando para una agencia de desarrollo de
                software. Ayudo a startups y medianos/pequeños negocios a
                potenciar su presencia digital.
              </motion.span>
            </p>

            <p className={styles.header__overflowHidden}>
              <motion.span
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.15 }}
              >
                En mi tiempo libre estoy leyendo algún libro, caminado por la
                playa o jugando con CSS, sí, con CSS. ¿Tienes algún proyecto en
                mente?
              </motion.span>
            </p>
          </div>
          <Button>Contáctame</Button>
        </header>
        <motion.div
          className={styles.squarePhoto}
          drag
          whileDrag={{
            scale: 1.2,
          }}
          dragConstraints={constraintsRef}
          dragMomentum={false}
        >
          <Image src={character} className={styles.covers} />
        </motion.div>

        <motion.div
          className={`${styles.stickyNote} ${styles.stickyNote__violet}`}
          drag
          whileDrag={{
            scale: 1.2,
            boxShadow:
              "29px 71px 31px rgba(0, 0, 0, 0.02), 16px 40px 26px rgba(0, 0, 0, 0.06), 7px 18px 19px rgba(0, 0, 0, 0.1), 2px 4px 11px rgba(0, 0, 0, 0.12), 0px 0px 0px rgba(0, 0, 0, 0.12)",
          }}
          dragConstraints={constraintsRef}
          dragMomentum={false}
        >
          <p>"No asumas nada, prueba todo"</p>
        </motion.div>

        <motion.div
          className={`${styles.stickyNote} ${styles.stickyNote__red}`}
          drag
          whileDrag={{
            scale: 1.2,
            boxShadow:
              "29px 71px 31px rgba(0, 0, 0, 0.02), 16px 40px 26px rgba(0, 0, 0, 0.06), 7px 18px 19px rgba(0, 0, 0, 0.1), 2px 4px 11px rgba(0, 0, 0, 0.12), 0px 0px 0px rgba(0, 0, 0, 0.12)",
          }}
          dragConstraints={constraintsRef}
          dragMomentum={false}
        >
          <p>"Hazlo fácil de usar"</p>
        </motion.div>

        <motion.div
          className={`${styles.stickyNote} ${styles.stickyNote__blue}`}
          drag
          whileDrag={{
            scale: 1.2,
            boxShadow:
              "29px 71px 31px rgba(0, 0, 0, 0.02), 16px 40px 26px rgba(0, 0, 0, 0.06), 7px 18px 19px rgba(0, 0, 0, 0.1), 2px 4px 11px rgba(0, 0, 0, 0.12), 0px 0px 0px rgba(0, 0, 0, 0.12)",
          }}
          dragConstraints={constraintsRef}
          dragMomentum={false}
        >
          <p>"Hazlo accesible para todos"</p>
        </motion.div>
        <motion.div
          className={`${styles.stickyNote} ${styles.stickyNote__morad}`}
          drag
          whileDrag={{
            scale: 1.2,
            boxShadow:
              "29px 71px 31px rgba(0, 0, 0, 0.02), 16px 40px 26px rgba(0, 0, 0, 0.06), 7px 18px 19px rgba(0, 0, 0, 0.1), 2px 4px 11px rgba(0, 0, 0, 0.12), 0px 0px 0px rgba(0, 0, 0, 0.12)",
          }}
          dragConstraints={constraintsRef}
          dragMomentum={false}
        >
          <p>
            "Los buenos diseños comienzan con una comprensión profunda del
            usuario"
          </p>
        </motion.div>
      </motion.div>
      <Layout>
        <Head>
          <title>Luis Vásquez portafolio</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Portafolio de diseñador UX" />
          <meta
            name="keywords"
            content="Diseñador UX, UI, CSS, Portafolio UX"
          />
          <meta name="author" content="Luis Vásquez" />
          <meta
            property="og:image"
            content="https://i.ibb.co/vH2VLdM/Frame-86.png"
          />
          <meta
            property="og:url"
            content="https://ux-portfolio-eight.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Luis Vásquez Portafolio" />
          <meta
            property="og:description"
            content="Portafolio de diseñador UX"
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/vH2VLdM/Frame-86.png"
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
          <meta name="twitter:title" content="Luis Vásquez Portafolio" />
          <meta
            name="twitter:description"
            content="Portafolio de diseñador UX"
          />
          <meta
            name="twitter:image"
            content="https://i.ibb.co/vH2VLdM/Frame-86.png"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div>
          <section>
            <h2 className={styles.title__special}>Proyectos</h2>
            <div className={styles.caseStudies}>
              <article>
                <div className={styles.caseStudies__container}>
                  <div className={styles.caseStudies__description}>
                    <motion.h3
                      className={styles.caseStudies__title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                    >
                      Vagabundeando
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                    >
                      Mejorando la experiencia de usuario y el engagement para
                      un sitio web dedicado a lugares y actividades que pueden
                      realizarse en México.
                    </motion.p>
                  </div>
                  <Link
                    href="/vagabundeando"
                    className={styles.caseStudies__link}
                  >
                    Ver caso de estudio{" "}
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
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
                <motion.div
                  className={styles.caseStudies__img}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65 }}
                >
                  <Image
                    src="/images/vagabundeando.png"
                    height={379}
                    width={1039}
                    className={styles.covers}
                  />
                </motion.div>
              </article>
              <article className={styles.mt__reset}>
                <div className={styles.caseStudies__container}>
                  <div className={styles.caseStudies__description}>
                    <motion.h3
                      className={styles.caseStudies__title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                    >
                      EatWell
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                    >
                      Aplicación de recetas saludables donde las personas
                      usuarias pueden fácilmente encontrar opciones evaluadas
                      por profesionales de la salud y personalizadas a sus
                      preferencias. Además, pueden marcar recetas favoritas,
                      crear listas de compras y compartir sus experiencias con
                      la comunidad.
                    </motion.p>
                  </div>
                  <Link href="/recipes" className={styles.caseStudies__link}>
                    Ver caso de estudio
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
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
                <motion.div
                  className={styles.caseStudies__img}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65 }}
                >
                  <Image
                    src="/images/recipes.png"
                    height={379}
                    width={1039}
                    className={styles.covers}
                  />
                </motion.div>
              </article>
            </div>
          </section>
          <section className={styles.section__home}>
            <h2 className={styles.title__special}>Hey, he escrito algo...</h2>
            <article>
              <div className={styles.caseStudies__container}>
                <div className={styles.caseStudies__description}>
                  <motion.h3
                    className={styles.caseStudies__title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                  >
                    Diseño responsive con CSS moderno
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                  >
                    Si eres diseñador web o desarrollador frontend, seguramente
                    estás familiarizado con la importancia de las media queries
                    para crear diseños responsive. Sin embargo, con los avances
                    y mejoras que ha tenido CSS en los últimos años, hay otras
                    técnicas disponibles que pueden simplificar y mejorar la
                    implementación de diseños.
                  </motion.p>
                </div>
                <Link
                  href="/articulos/modernCSS"
                  className={styles.caseStudies__link}
                  aria-label="Leer diseño responsivo con CSS moderno"
                >
                  Leer artículo
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
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
              <motion.div
                className={styles.caseStudies__img}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                <Image
                  src="/images/article-cover.png"
                  height={379}
                  width={1039}
                  className={styles.covers}
                />
              </motion.div>
            </article>
          </section>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}
