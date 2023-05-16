import React from 'react';
import type { GatsbySSR } from "gatsby"

const HandleRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/SpaceGrotesk-Medium.ttf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/SpaceGrotesk-Bold.ttf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/SpaceGrotesk-VariableFont_wght.ttf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}

export default HandleRenderBody;