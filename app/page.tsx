import LanguageSwitcher from "./components/languageSwitcher";
import ThemeSwitcher from "./components/themeSwitcher";
import { indents, titleBaseStyles } from "./globalConsts/globalStyles";

export default function Main() {
  return (
    <main>
      {/* <h1 className={`${titleBaseStyles} text-center`}>Mental Health</h1> */}
      <div className={`flex ${indents.container}`}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </main >
  );
}
