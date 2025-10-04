import ClientCoinRate from "./components/ClientCoinRate";
import ExchangeForm from "./components/ExchangeForm";
import TrustedSection from "./components/feature";
import { Footer } from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import RecentTransactions from "./components/recent";
import NewsSlider from "./components/review";
import Tutorial from "./components/tutorial";


export default function Home() {
  return (
   <main>
   
    {/* <ClientCoinRate/> */}
    <Hero/>
     {/* <ExchangeForm/> */}
    <TrustedSection/>
   <RecentTransactions/>
   <NewsSlider/>
 <Tutorial/>

   </main>
  );
}
