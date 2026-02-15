import RandomArticleBlock from "./components/blockRandomElements/randomArticleBlock";
import RandomNewsBlock from "./components/blockRandomElements/randomNewsBlock";



export default function Main() {
  // stores

  // 
  return (
    <main className={`flex flex-col indents-main-container  flex-1 items-center`}>
      <div className={`flex flex-col  max-w-6xl  rounded-large bg-mainContainer `}>
        <RandomArticleBlock />
        <RandomNewsBlock />
      </div>

    </main>
  );
}
