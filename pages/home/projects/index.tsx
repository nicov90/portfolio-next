import Layout from '@/components/ui/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'

const Projects = () => {
  return (
    <Layout title="Projects">

    </Layout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common','projects'])),
    }
  }
}

export default Projects