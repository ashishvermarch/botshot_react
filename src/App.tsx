import "./App.css";
import Banner from "./components/feature/Banner/Banner";
import Footer from "./components/feature/Footer/Footer";
import Header from "./components/feature/Header/Header";
import FeatureIntelligence from "./components/feature/Section2/FeatureIntelligence";
import Advantage from "./components/feature/Section3/Advantage";
import Integration from "./components/feature/Section4/Integration";
import KnowledgeCenter from "./components/feature/Section5/KnowledgeCenter";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <FeatureIntelligence />
      <Advantage />
      <Integration />
      <KnowledgeCenter />
      <Footer />
    </>
  );
}

export default App;
