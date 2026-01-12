import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type User = {
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
  resetStore: () => void
}

export const useMockAuthStore = create<MockAuthStore>()(
  persist(
    (set, get) => ({
      users: [],
      authUsers: [],
      createUser: (email: string, password: string) => {
        const newUser: User = { id: Date.now().toString(), email, password }
        set((state) => ({ users: [...state.users, newUser] }))
        console.log('User created:', newUser)
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
      logoutUser: (id: string) => {
        set((state) => ({
          authUsers: state.authUsers.filter((user) => user.id !== id),
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