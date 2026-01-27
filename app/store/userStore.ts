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


interface UserStoresInterface {
  users: User[]
  createUser: (email: string, password: string) => User | null
  updateUserData:(updateUserData: UserUpdateData) => void
  resetStore: () => void
  checkUserExists: (email: string) => boolean
}

export const useUserStore = create<UserStoresInterface>()(
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
        checkUserExists: (email: string) => {
        const userExists = get().users.some((user) => user.email === email)
        return userExists
        },
        updateUserData: (updateUserData: UserUpdateData) => {},
        resetStore: () => {
      set({ users: [], })
      console.log('Users store has been reset');
    },
    }),
    {
      name: 'users-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)