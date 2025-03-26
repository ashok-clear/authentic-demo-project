import HeroBanner from "./components/sections/HeroBanner";
import CardWithbutton from "@/app/components/sections/CardWithButton"
import ColWithLogo from '@/app/components/sections/ColWithLogo'
import TabWithImg from "@/app//components/sections/TabWithImg"
import FooterCta from '@/app/components/sections/FooterCta'
import CardGrid from '@/app/components/sections/CardGrid'
import Footer from "@/app/components/sections/Footer"
import Product from "@/app/components/sections/Product"
import UseCases from "@/app/components/sections/UseCases"
import StickyNav from "@/app/components/sections/StickyNav"
import IntroWithImage from "@/app/components/sections/IntroWithImage"
import CardColumnFirst from "@/app/components/sections/CardColumnFirst"
import CardColumnSecond from "@/app/components/sections/CardColumnSecond"
import CardColumnThird from "@/app/components/sections/CardColumnThird"




const bannerData = {
  title: "Digital investigations without the risk",
  subtitle: "Stay isolated from malware and anonymous to prying eyes on the surface, deep and dark web with Authentic8's Silo for Research.",
}


const productData = {
  title: "Silo Web Isolation Platform",
  subtitle: "Silo shifts your risk to an isolated cloud-native environment that you control. Silo can be configured specifically to meet your most demanding requirements.",
}

const UseCasesData = {
  title: "Putting Silo to work",
  subtitle: "Whether conducting digital investigations, extending SASE capabilities or improving protection while online, Silo can be tuned to meet the specific needs of the use case.",
}

export default function Home() {
  
  return (
   <>
    <HeroBanner {...bannerData} />
     <CardWithbutton />
     <ColWithLogo />
     <TabWithImg />
     <FooterCta />
     <CardGrid />
     <Footer />
     <Product  {...productData}/>
     <UseCases {...UseCasesData}/>
     <StickyNav />
     <IntroWithImage />
     <CardColumnFirst />
     <CardColumnSecond />
     <CardColumnThird />
   </>
  );
}
