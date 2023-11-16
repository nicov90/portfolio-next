import Layout from '@/components/ui/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'

const About = () => {
  return (
    <Layout title="About me">

    </Layout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common','about'])),
    }
  }
}

export default About