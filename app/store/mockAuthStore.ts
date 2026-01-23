import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ROLE_AUTH_USER_PRIVILEGE, ROLE_AUTHORIZED_USER, UPDATE_USER_DATA_TYPE, USER_FAVORITES_ACTION } from '../globalConsts/globalEnum'

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

const listCMSEmailUsers = [
  '2@2.com',
]


type MockAuthStore = {
  users: User[]
  authUsers: User[]
  createUser: (email: string, password: string) => User | null
  authenticateUser: (email: string, password: string) => User | null
  logoutUser: (id: string) => void
  updateUserData:(updateUserData: UserUpdateData) => void
  currentAuthUser: User | null
  setCurrentAuthUser: (userData: User) => void
  resetStore: () => void
  checkUserExists: (email: string) => boolean
}

export const useMockAuthStore = create<MockAuthStore>()(
  persist(
    (set, get) => ({
      users: [],
      authUsers: [],
      createUser: (email: string, password: string) => {
        if (get().checkUserExists(email)) {
            console.log('User already exists with email:', email);
          return null
        }
        const checkCMSUser = listCMSEmailUsers.includes(email)
        const newUser: User = { id: Date.now().toString(), email, password, role: ROLE_AUTHORIZED_USER.USER, privilege:  checkCMSUser ? ROLE_AUTH_USER_PRIVILEGE.EDIT_CONTENT : ROLE_AUTH_USER_PRIVILEGE.READ_ONLY, favorites: { ARTICLES: [], TESTS: [], NEWS: [] } }
        set((state) => ({ users: [...state.users, newUser] }))
        return newUser
      },
      authenticateUser: (email: string, password: string) => {
        const user = get().users.find(
          (user) => user.email === email && user.password === password,
        )
        if (user) {
          set((state) => ({ authUsers: [...state.authUsers, user] }))
          return user
        }
        return null
      },
      currentAuthUser: null,
      setCurrentAuthUser: (userData) => {
        const currentAuthUserData = get().authUsers.find((user) => user.id === userData.id)
        if(currentAuthUserData){
            set({ currentAuthUser: currentAuthUserData })
            return currentAuthUserData
        }
        // if(currentAuthUserData){
        //     return currentAuthUserData
        // }else {{return userData}}
      },
     checkUserExists: (email: string) => {
        const normalizedEmail = email.trim().toLowerCase()

        return get().users.some(
             user => user.email.trim().toLowerCase() === normalizedEmail)
    },
      logoutUser: (id: string) => {
        set((state) => ({
          authUsers: state.authUsers.filter((user) => user.id !== id),
          currentAuthUser: null,
        }))
      },
    updateUserData: (updateUserData: UserUpdateData) => {
      set(state => {
      const user = state.currentAuthUser
      if (!user) return {}

      if (updateUserData.typeUpdate !== UPDATE_USER_DATA_TYPE.FAVORITES) {
        return {}
      }

      const currentArticles = user.favorites.ARTICLES
      const id = updateUserData.dataUpdate

      let updatedArticles = currentArticles

      if (updateUserData.favoriteAction === USER_FAVORITES_ACTION.ADD) {
        // ✅ без дубликатов
        if (!currentArticles.includes(id)) {
          updatedArticles = [...currentArticles, id]
        }
      }

      if (updateUserData.favoriteAction === USER_FAVORITES_ACTION.REMOVE) {
        updatedArticles = currentArticles.filter(a => a !== id)
      }
      
      return {
        currentAuthUser: {
          ...user,
          favorites: {
            ...user.favorites,
            ARTICLES: updatedArticles,
          },
        },
      }
      console.log('Updated user favorites:', get().currentAuthUser?.favorites);
  })
    },
    resetStore: () => {
      set({ users: [], authUsers: [] })
      console.log('Mock auth store has been reset');
    },
    }),
    {
      name: 'mock-auth-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)