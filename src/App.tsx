import Header from './components/Header/Header';
import SectionHero from './components/SectionHero/SectionHero';
import BetweenSections from './components/BetweenSections/BetweenSections';
import SectionTwo from './components/SectionTwo/SectionTwo'

const App: React.FC = () => {
  return (
    <>
    <Header />
    <SectionHero></SectionHero>
    <BetweenSections></BetweenSections>
    <SectionTwo></SectionTwo>
    </>
  );
};

export default App
