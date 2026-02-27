import RandomArticleBlock from "./components/blockRandomElements/randomArticleBlock";
import RandomNewsBlock from "./components/blockRandomElements/randomNewsBlock";
import MainPageBackgroundImage from "@/public/images/background/butterfly.png"
import BackgroundImages from "./components/shared/backgroundImages";
import WelcomeBlock from "./components/mainPageComponent/welcomeBlock";


export default function Main() {
  // stores

  // 
  return (
    <main className={`flex flex-col indents-main-container  flex-1 items-center`}>
      {/* <BackgroundImages imageSrc={MainPageBackgroundImage}> */}
      <div className={`flex flex-col w-full  max-w-6xl  rounded-large bg-subContainer `}>
        <WelcomeBlock />
        {/* <RandomArticleBlock />
          <RandomNewsBlock /> */}
      </div>
      {/* </BackgroundImages> */}
    </main>
  );
}
