

import RandomArticleBlock from "./components/blockRandomElements/randomArticleBlock";
import RandomNewsBlock from "./components/blockRandomElements/randomNewsBlock";
import { indents, rounded } from "./globalConsts/globalStyles";


export default function Main() {
  // stores

  // 
  return (
    <main className={`flex flex-col bg-mainContainer ${rounded.medium} flex-1 ${indents.container.main} items-center`}>
      <p>main</p>
      <div>
        <RandomArticleBlock />
        <RandomNewsBlock />
      </div>

    </main>
  );
}
