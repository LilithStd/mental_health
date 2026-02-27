import RandomArticleBlock from "./components/blockRandomElements/randomArticleBlock";
import RandomNewsBlock from "./components/blockRandomElements/randomNewsBlock";
import MainPageBackgroundImage from "@/public/images/background/butterfly.png"
import BackgroundImages from "./components/shared/backgroundImages";
import WelcomeBlock from "./components/mainPageComponent/welcomeBlock";
import ProblemSolvingBlock from "./components/mainPageComponent/problemSolvingBlock";
import AnalizUserProblemBlock from "./components/mainPageComponent/analizUserProblemBlock";


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

    </main>
  );
}
