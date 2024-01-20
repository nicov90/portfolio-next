import About from '@/components/about/AboutPage';
import Layout from '@/components/ui/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'

const Index = () => {
  return (
    <Layout title="Home">
      {/* <About /> */}
      <></>
    </Layout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common','contact','experience','skills','projects'])),
    }
  }
}

export default Index