"use client"

import { useState } from "react";
import './globals.css'
import styles from "../styles/baseLayout.module.css"
import Foot from '../components/footer'
import Map from '../components/map'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [FlexbarWidth, setFlexBarWidth] = useState("650px");

  const toggleFlexBarWidth = () => {
    setFlexBarWidth((prevWidth) => {
      if (prevWidth === "0px") return "650px"; // 0이면 600으로 변경
      if (prevWidth === "650px") return "100%"; // 600이면 전체 화면 너비로 변경
      return "0px"; // 나머지 경우에는 0으로 변경
    });
  };

  return (
      <html lang="en">
        <head>
          <script
            type="text/javascript"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
            async
          /> {/* https://nextjs.org/docs/messages/no-sync-scripts */}
        </head>
        <body>
          <section className={styles.container}>
            <aside className={styles.sidebar}>
              사이드바
            </aside>
            <section className={styles.map}>
              <Map />
            </section>
            <div className={styles.maincontent} style={{width:FlexbarWidth}}>
              <main>
                {
                  FlexbarWidth != "0px" &&
                  <div>
                    {children}
                  </div>
                }
              </main>
            </div>
            <button onClick={toggleFlexBarWidth} className={styles.mainButton}>버튼1</button>
          </section>
          <Foot/>
        </body>
      </html>
  )
}
