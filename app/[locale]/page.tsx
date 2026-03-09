
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
      <div className={`flex flex-col w-full  max-w-6xl  rounded-large bg-subContainer `}>
        <WelcomeBlockComponent />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-subContainer `}>
        <ProblemSolvingBlock />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-subContainer `}>
        <AnalizUserProblemBlock />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-subContainer `}>
        <AboutDoctorBlock />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-subContainer `}>
        <AboutConsultation />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-subContainer `}>
        <TestsBlock locale={locale} />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-subContainer `}>
        <PricesBlock locale={locale} />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-subContainer `}>
        <FaqBlock locale={locale} />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-subContainer `}>
        <LastStepBlock locale={locale} />
      </div>
    </main>
  );
}
