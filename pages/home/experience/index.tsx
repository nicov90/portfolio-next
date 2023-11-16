import Layout from '@/components/ui/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'

const Experience = () => {
  return (
    <Layout title="Experience">

    </Layout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common','experience'])),
    }
  }
}

export default Experience