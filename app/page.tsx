import RandomArticleBlock from "./components/blockRandomElements/randomArticleBlock";
import RandomNewsBlock from "./components/blockRandomElements/randomNewsBlock";



export default function Main() {
  // stores

  // 
  return (
    <main className={`flex flex-col bg-mainContainer indents-main-container rounded-medium flex-1 items-center`}>
      <div>
        <RandomArticleBlock />
        <RandomNewsBlock />
      </div>

    </main>
  );
}
