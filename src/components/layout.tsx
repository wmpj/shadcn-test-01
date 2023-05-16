import PageHeader from '@/components/PageHeader'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <PageHeader />
      <main>{children}</main>
    </>
  )
}
