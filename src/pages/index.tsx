import React from "react"
import type { HeadFC, PageProps } from "gatsby"

import MainLayout from "../layouts/MainLayout"
import MainHero from "../components/Heros/MainHeros"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <MainHero />
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Adonis Martin Portfolio</title>
