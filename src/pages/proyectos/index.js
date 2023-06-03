import React from "react";

import styles from "@/styles/Proyectos.module.scss";
import Layout from "@/components/Layout";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";

import vagabundeando from "../../../public/images/vagabundando-well.png";

import eatwell from "../../../public/images/eatwell-new.png";
import tpago from "../../../public/images/mercantil-new.png";
import colegio from "../../../public/images/colegio-cover-card.png";

export default function Proyectos() {
  return (
    <div>
      <Navbar />
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
          <section className={styles.section__home}>
            <h1 className={styles.title__special}>Proyectos</h1>

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
                    <motion.div
                      className={styles.caseStudies__chips}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                    >
                      <p>Sitio web</p>
                      <p>Turismo</p>
                    </motion.div>
                  </div>
                  <Link
                    href="/proyectos/vagabundeando"
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
                    src={vagabundeando}
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
                      Tu colegio ideal
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                    >
                      Ayudando a los padres a encontrar el colegio ideal para
                      sus hijos/as
                    </motion.p>
                    <motion.div
                      className={styles.caseStudies__chips}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                    >
                      <p>Sitio web</p>
                      <p>Educación</p>
                    </motion.div>
                  </div>
                  <Link
                    href="/proyectos/colegio-ideal"
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
                    src={colegio}
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
                      Tpago
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                    >
                      Haciendo la aplicación de pagos electrónicos más usada en
                      Venezuela más fácil de usar y accesible.
                    </motion.p>
                    <motion.div
                      className={styles.caseStudies__chips}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                    >
                      <p>App</p>
                      <p>Banca pública</p>
                    </motion.div>
                  </div>
                  <Link
                    href="/proyectos/mercantil"
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
                    src={tpago}
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
                      Facilitando el accesso a recetas de comida sencillas,
                      personalizadas y saludables.
                    </motion.p>
                    <motion.div
                      className={styles.caseStudies__chips}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                    >
                      <p>App</p>
                      <p>Comida</p>
                    </motion.div>
                  </div>
                  <Link
                    href="/proyectos/recipes"
                    className={styles.caseStudies__link}
                  >
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
                    src={eatwell}
                    height={379}
                    width={1039}
                    className={styles.covers}
                  />
                </motion.div>
              </article>
            </div>
          </section>
        </div>
      </Layout>
      <Footer />

      <MobileNav />
    </div>
  );
}
