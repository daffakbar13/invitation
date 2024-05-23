import { create } from 'zustand'

import UseRahasiaStore from './types'

const useRahasiaStore = create<UseRahasiaStore>((set) => ({
  isOpenModalAddGroup: false,
  isOpenModalAddGuest: false,
  viewGroupId: '',
  editGroupId: '',
  deleteGroupId: '',
  editGuestId: '',
  deleteGuestId: '',
  deleteWishId: '',
  toggleModalAddGroup() {
    set((state) => ({ isOpenModalAddGroup: !state.isOpenModalAddGroup }))
  },
  toggleModalAddGuest() {
    set((state) => ({ isOpenModalAddGuest: !state.isOpenModalAddGuest }))
  },
  handleViewGroup(viewGroupId) {
    return () => set({ viewGroupId })
  },
  handleEditGroup(editGroupId) {
    return () => set({ editGroupId })
  },
  handleDeleteGroup(deleteGroupId) {
    return () => set({ deleteGroupId })
  },
  handleEditGuest(editGuestId) {
    return () => set({ editGuestId })
  },
  handleDeleteGuest(deleteGuestId) {
    return () => set({ deleteGuestId })
  },
  handleDeleteWish(deleteWishId) {
    return () => set({ deleteWishId })
  },
}))

export default useRahasiaStore
