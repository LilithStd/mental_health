'use client';

import { ROLE_AUTH_USER_PRIVILEGE } from "../globalConsts/globalEnum";
import { indents, rounded, THEME_COLOR_SCHEME } from "../globalConsts/globalStyles";
import { useGlobalStore } from "../store/globalStore";
import { useMockAuthStore } from "../store/mockAuthStore";

export default function Articles() {
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    const currentAuthUser = useMockAuthStore((state) => state.currentAuthUser);
    return (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} flex-1 ${indents.container.main}`}>
            <h2>Articles</h2>
            {currentAuthUser && currentAuthUser.privilege === ROLE_AUTH_USER_PRIVILEGE.EDIT_CONTENT && (
                <div>
                    <button>New Articles</button>
                </div>
            )}
        </div>
    )
}
