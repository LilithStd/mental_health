import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type User = {
  id: string
  email: string
  password: string
}

type MockAuthStore = {
  users: User[]
  authUsers: User[]
  createUser: (email: string, password: string) => User | null
  authenticateUser: (email: string, password: string) => User | null
  logoutUser: (id: string) => void
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
        const newUser: User = { id: Date.now().toString(), email, password }
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