import styles from '@/styles/Home.module.css'
import React from 'react'
import { motion } from 'framer-motion'
import Layout from '@/components/ui/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const HomeScreen = () => {
  return (
    <Layout title="Home">

    </Layout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common','home'])),
    }
  }
}


export default HomeScreen