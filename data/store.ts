import { create } from 'zustand';

export type Hash = '#about' | '#portfolio' | '#contact';

type Store = {
  hash: Hash;
  updateHash: (updatedHash: Hash) => void;
};

export const useStore = create<Store>()((set) => ({
  hash: '#about',
  updateHash: (updatedHash) => set(() => ({ hash: updatedHash })),
}));
