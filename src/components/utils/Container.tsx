import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Container({ children }: Props): JSX.Element {
  return <div className='container mx-auto p-4'>{children}</div>
}
