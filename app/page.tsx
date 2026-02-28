import RandomArticleBlock from "./components/blockRandomElements/randomArticleBlock";
import RandomNewsBlock from "./components/blockRandomElements/randomNewsBlock";
import MainPageBackgroundImage from "@/public/images/background/butterfly.png"
import BackgroundImages from "./components/shared/backgroundImages";
import WelcomeBlock from "./components/mainPageComponent/welcomeBlock";
import ProblemSolvingBlock from "./components/mainPageComponent/problemSolvingBlock";
import AnalizUserProblemBlock from "./components/mainPageComponent/analizUserProblemBlock";
import AboutDoctorBlock from "./components/mainPageComponent/aboutDoctorBlock";
import AboutConsultation from "./components/mainPageComponent/aboutComsultation";
import TestsBlock from "./components/mainPageComponent/testsBlock";
import PricesBlock from "./components/mainPageComponent/pricesBlock";
import FaqBlock from "./components/mainPageComponent/faqBlock";
import LastStepBlock from "./components/mainPageComponent/lastStepBlock";


export default function Main() {
  // stores

  // 
  return (
    <main className={`flex flex-col indents-main-container  flex-1 items-center`}>
      <div className={`flex flex-col w-full  max-w-6xl  rounded-large bg-subContainer `}>
        <WelcomeBlock />
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
        <TestsBlock />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-subContainer `}>
        <PricesBlock />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-subContainer `}>
        <FaqBlock />
      </div>
      <div className={`flex flex-col w-full  max-w-6xl mt-6 rounded-large bg-subContainer `}>
        <LastStepBlock />
      </div>
    </main>
  );
}
