import LanguageSwitcher from './languageSwitcher'
import ThemeSwitcher from './themeSwitcher'

export default function AdditionalPanel() {

    return (
        <div className={`flex w-full flex-col gap-2 rounded-large`}>
            <ThemeSwitcher />
            <LanguageSwitcher />
        </div>
    )
}
