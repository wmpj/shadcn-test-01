import Link from 'next/link'

import SearchButton from '../SearchButton'
import { Icons } from '../icons'

const PageHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div>
          <Link href="/">
            <Icons.logo className="w-24" />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <SearchButton />
        </div>
      </div>
    </header>
  )
}

export default PageHeader
