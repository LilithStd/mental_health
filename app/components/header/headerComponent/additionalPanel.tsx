import LanguageSwitcher from './languageSwitcher'
import ThemeSwitcher from './themeSwitcher'



export default function AdditionalPanel() {
    return (
        <div className={`flex w-1/2 flex-col gap-2 rounded-large`}>
            <ThemeSwitcher />
            <LanguageSwitcher />
        </div>
    )
}
