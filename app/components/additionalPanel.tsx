
import { indents, rounded, THEME_COLOR_SCHEME } from '../globalConsts/globalStyles'

import LanguageSwitcher from './languageSwitcher'
import ThemeSwitcher from './themeSwitcher'

export default function AdditionalPanel() {

    return (
        <div className={`flex w-fit ${indents.container.main} bg-mainContainer ${rounded.high}`}>
            <ThemeSwitcher />
            <LanguageSwitcher />
        </div>
    )
}
