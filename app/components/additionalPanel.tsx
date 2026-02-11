import LanguageSwitcher from './languageSwitcher'
import ThemeSwitcher from './themeSwitcher'

export default function AdditionalPanel() {

    return (
        <div className={`flex w-fit indents-container-sub  rounded-large`}>
            <ThemeSwitcher />
            <LanguageSwitcher />
        </div>
    )
}
