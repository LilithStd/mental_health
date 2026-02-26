import RandomArticleBlock from "./components/blockRandomElements/randomArticleBlock";
import RandomNewsBlock from "./components/blockRandomElements/randomNewsBlock";
import MainPageBackgroundImage from "@/public/images/background/butterfly.png"
import BackgroundImages from "./components/shared/backgroundImages";


export default function Main() {
  // stores

  // 
  return (
    <main className={`flex flex-col indents-main-container  flex-1 items-center`}>
      <BackgroundImages imageSrc={MainPageBackgroundImage}>
        <div className={`flex flex-col  max-w-6xl  rounded-large bg-mainContainer `}>
          <RandomArticleBlock />
          <RandomNewsBlock />
        </div>
      </BackgroundImages>
    </main>
  );
}
