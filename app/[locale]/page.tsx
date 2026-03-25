
import AboutConsultation from "../components/mainPageComponent/aboutConsultation";
import AboutDoctorBlock from "../components/mainPageComponent/aboutDoctorBlock";
import AnalizUserProblemBlock from "../components/mainPageComponent/analizUserProblemBlock";
import FaqBlock from "../components/mainPageComponent/faqBlock";
import LastStepBlock from "../components/mainPageComponent/lastStepBlock";
import PricesBlock from "../components/mainPageComponent/pricesBlock";
import ProblemSolvingBlock from "../components/mainPageComponent/problemSolvingBlock";
import TestsBlock from "../components/mainPageComponent/testsBlock";
import WelcomeBlockComponent from "../components/mainPageComponent/welcomeBlock";
import { LocaleType } from "../types/types";


export default function Main({ locale }: { locale: LocaleType }) {

  // stores

  // 
  return (
    <main className={`flex flex-col indents-main-container  flex-1 items-center`}>
      <div className={`flex flex-col w-full  max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md `}>
        <WelcomeBlockComponent />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md `}>
        <ProblemSolvingBlock />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md `}>
        <AnalizUserProblemBlock />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md `}>
        <AboutDoctorBlock />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md `}>
        <AboutConsultation />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md `}>
        <TestsBlock />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md `}>
        <PricesBlock />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md `}>
        <FaqBlock />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md `}>
        <LastStepBlock />
      </div>
    </main>
  );
}
