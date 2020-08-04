import React from "react"
import CustomLayout from './wrapPageElement';

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
      <link
        rel="preconnect"
        key="preconnect-js"
        href="https://cdn.ampproject.org"
      ></link>,
      <link
        rel="dns-prefetch"
        key="dns-prefetch-js"
        href="https://cdn.ampproject.org"
      ></link>,
      <link
        rel="preconnect"
        key="preconnect-js"
        href="https://adservice.google.com"
      ></link>,
      <link
        rel="dns-prefetch"
        key="dns-prefetch-js"
        href="https://adservice.google.com"
      ></link>,
      <link
        rel="preconnect"
        key="preconnect-js"
        href="https://www.google.com"
      ></link>,
      <link
        rel="dns-prefetch"
        key="dns-prefetch-js"
        href="https://www.google.com"
      ></link>,
      <link
        rel="preconnect"
        key="preconnect-js"
        href="https://securepubads.g.doubleclick.net"
      ></link>,
      <link
        rel="dns-prefetch"
        key="dns-prefetch-js"
        href="https://securepubads.g.doubleclick.net"
      ></link>,
      <link
        rel="preconnect"
        key="preconnect-js"
        href="https://fonts.gstatic.com"
      ></link>,
      <link
        rel="dns-prefetch"
        key="dns-prefetch-js"
        href="https://fonts.gstatic.com"
      ></link>,
      <link
        rel="preconnect"
        key="preconnect-js"
        href="https://pagead2.googlesyndication.com"
      ></link>,
      <link
        rel="dns-prefetch"
        key="dns-prefetch-js"
        href="https://pagead2.googlesyndication.com"
      ></link>,
      <link
        rel="preconnect"
        key="preconnect-js"
        href="https://adservice.google.de"
      ></link>,
      <link
        rel="dns-prefetch"
        key="dns-prefetch-js"
        href="https://adservice.google.de"
      ></link>,
      <link
        rel="preconnect"
        key="preconnect-js"
        href="https://fonts.googleapis.com"
      ></link>,
      <link
        rel="dns-prefetch"
        key="dns-prefetch-js"
        href="https://fonts.googleapis.com"
      ></link>,
      <link
        rel="preconnect"
        key="preconnect-js"
        href="https://firestore.googleapis.com"
      ></link>,
      <link
        rel="dns-prefetch"
        key="dns-prefetch-js"
        href="https://firestore.googleapis.com"
      ></link>,
      <link
        rel="preconnect"
        key="preconnect-js"
        href="https://www.googletagservices.com"
      ></link>,
      <link
        rel="dns-prefetch"
        key="dns-prefetch-js"
        href="https://www.googletagservices.com"
      ></link>
    ])
  }


 

export const wrapPageElement = CustomLayout;
