import Layout from '@/components/ui/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'

const Skills = () => {
  return (
    <Layout title="Skills">

    </Layout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common','skills'])),
    }
  }
}

export default Skills