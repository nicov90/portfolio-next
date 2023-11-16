import Layout from '@/components/ui/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'

const Contact = () => {
  return (
    <Layout title="Contact">

    </Layout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common','contact'])),
    }
  }
}

export default Contact