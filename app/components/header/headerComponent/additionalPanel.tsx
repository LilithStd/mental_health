import LanguageSwitcher from './languageSwitcher'
import ThemeSwitcher from './themeSwitcher'



export default function AdditionalPanel() {
    return (
        <div className={`flex  gap-2 rounded-large`}>
            <ThemeSwitcher />
            <LanguageSwitcher />
        </div>
    )
}
