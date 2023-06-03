import React from "react";

import styles from "@/styles/ArticulosHome.module.scss";
import Layout from "@/components/Layout";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";

export default function Articles() {
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
            <h1 className={styles.title__special}>Artículos</h1>
            <article>
              <div className={styles.caseStudies__container}>
                <div className={styles.caseStudies__description}>
                  <motion.h2
                    className={styles.caseStudies__title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                  >
                    Diseño responsive con CSS moderno
                  </motion.h2>
                </div>
                <Link
                  href="/articulos/modern-css"
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

            <article>
              <div className={styles.caseStudies__container}>
                <div className={styles.caseStudies__description}>
                  <motion.h2
                    className={styles.caseStudies__title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                  >
                    Creando formularios más fáciles de completar
                  </motion.h2>
                </div>
                <Link
                  href="/articulos/forms-tips"
                  className={styles.caseStudies__link}
                  aria-label="Leer Creando formularios más fáciles de completar"
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
                  src="/images/article-cover-two.png"
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
      <MobileNav />
    </div>
  );
}
