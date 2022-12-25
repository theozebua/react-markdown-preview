import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function AppLayout({ children }: Props): JSX.Element {
  return <>{children}</>
}
