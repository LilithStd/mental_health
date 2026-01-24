'use client'

import RandomArticleBlock from "./components/blockRandomElements/randomArticleBlock";
import { indents, rounded, THEME_COLOR_SCHEME } from "./globalConsts/globalStyles";
import { useGlobalStore } from "./store/globalStore";

export default function Main() {
  // stores
  const currentTheme = useGlobalStore((state) => state.currentTheme);
  // 
  return (
    <main className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} flex-1 ${indents.container.main} items-center`}>
      <p>main</p>
      <RandomArticleBlock />
    </main>
  );
}
