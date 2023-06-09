import React from "react";
import Cinephile from "./Cinephile";

export const metadata = {
  title: "시네필 테스트",
  openGraph: {
    title: "시네필 테스트",
    images: [{ url: "/cine-thumbnail.webp", width: 1800, height: 945 }],
    locale: "ko_KR",
    siteName: "divdivdiv",
    type: "website",
    description: "나의 시네필 평점은 몇 점일까?",
  },
  twitter: {
    title: "시네필 테스트",
    card: "summary_large_image",
    creator: "@dev_carver",
    description: "나의 시네필 평점은 몇 점일까?",
    images: ["https://divdivdiv.com/cine-thumbnail.webp"],
  },
};

type Props = {
  children: React.ReactNode;
};

function Layout() {
  return (
    <div>
      <Cinephile />
    </div>
  );
}

export default Layout;
