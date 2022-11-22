import Advantage from "./feature/Advantage/Advantage";
import Banner from "./feature/Banner/Banner";
import FeatureIntelligence from "./feature/FeatureIntelligence/FeatureIntelligence";
import Footer from "./feature/Footer/Footer";
import Header from "./feature/Header/Header";
import Integration from "./feature/Integration/Integration";
import KnowledgeCenter from "./feature/KnowledgeCenter/KnowledgeCenter";

const MainComponent = () => {
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
};

export default MainComponent;
