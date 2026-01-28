import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ROLE_AUTHORIZED_USER, ROLE_AUTH_USER_PRIVILEGE, UPDATE_USER_DATA_TYPE, USER_FAVORITES_ACTION } from "../globalConsts/globalEnum";

export type User = {
  id: string
  email: string
  password: string
  role: ROLE_AUTHORIZED_USER
  privilege: ROLE_AUTH_USER_PRIVILEGE
  favorites: USER_FAVORITES
}

type USER_FAVORITES = {
  ARTICLES:string[],
  TESTS:string[],
  NEWS:string[],

}

type UserUpdateData = {
  id: string,
  typeUpdate: UPDATE_USER_DATA_TYPE
  dataUpdate:string,
  favoriteAction?: USER_FAVORITES_ACTION

}

interface useAuthorizationStoreInterface {
  authUsers: User[]
  currentAuthUser: User | null
  setCurrentAuthUser: (userData: User) => void
  updateCurrentAuthUser: (userData: UserUpdateData) => void
  logoutUser: (id: string) => void
}

export const useAuthorizationStore = create<useAuthorizationStoreInterface>()(
  persist(
    (set, get) => ({
      authUsers: [],
      currentAuthUser: null,
      setCurrentAuthUser: (userData: User) => {
        set(() => ({ currentAuthUser: userData }))
      },
      updateCurrentAuthUser: (userData: UserUpdateData) => {
        set((state) => {
          const user = state.currentAuthUser
          if (!user) return {}

          if (userData.typeUpdate === UPDATE_USER_DATA_TYPE.FAVORITES && userData.favoriteAction) {
            const id = userData.dataUpdate
            let updatedArticles = user.favorites.ARTICLES

            if (userData.favoriteAction === USER_FAVORITES_ACTION.ADD) {
              if (!updatedArticles.includes(id)) {
                updatedArticles = [...updatedArticles, id]
              }
            }

            if (userData.favoriteAction === USER_FAVORITES_ACTION.REMOVE) {
              updatedArticles = updatedArticles.filter(a => a !== id)
            }
            console.log('Updated Articles Favorites:', updatedArticles);
            return {
              currentAuthUser: {
                ...user,
                favorites: {
                  ...user.favorites,
                  ARTICLES: updatedArticles,
                },
              },
            }
          }

          return {}
        })
      },
      logoutUser: (id: string) => {
        const updatedAuthUsers = get().authUsers.filter(user => user.id !== id)
        set(() => ({ authUsers: updatedAuthUsers, currentAuthUser: null }))
    },
    }),
    {
      name: 'authorization-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)
