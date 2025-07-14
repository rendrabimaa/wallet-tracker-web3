// src/lib/AppProviders.tsx
'use client'

import { Web3Provider } from './providers'

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return <Web3Provider>{children}</Web3Provider>
}