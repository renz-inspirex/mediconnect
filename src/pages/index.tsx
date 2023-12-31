import BannerComponent from "@/components/BannerComponent"
import HeroComponent from "@/components/HeroComponent"
import NavbarComponent from "@/components/NavbarComponent"
import Section1Component from "@/components/Section1Component"
import Section2Component from "@/components/Section2Component"
import Section3Component from "@/components/Section3Component"
import BlogComponent from "@/components/BlogComponent"
import DirectoryComponent from "@/components/DirectoryComponent"
import FooterComponent from "@/components/FooterComponent"
import HeroOutputModalComponent from "@/components/HeroOutputModalComponent"
import SearchResultOutput from "@/components/SearchResultOutput"
import Head from "next/head"
import SearchModal from "@/components/SearchModal"

export default function Home() {
  return (
    <>
      <Head>
        <title>Medconnect</title>
      </Head>
      <main>
        <NavbarComponent />
        <BannerComponent />
        <HeroComponent />
        <Section1Component />
        <Section2Component />
        <Section3Component />
        <BlogComponent />
        <DirectoryComponent />
        <FooterComponent />
        <HeroOutputModalComponent />
        <SearchModal />
      </main>
    </>
  )
}
