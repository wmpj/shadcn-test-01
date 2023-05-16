'use client'

import { Icons } from '@/components/icons'

import { Button } from '../ui/button'

const SearchButton = () => {
  return (
    <nav className="flex items-center space-x-1">
      <div onClick={() => console.log('search')}>
        <Button variant="ghost" size="sm" className="rounded-md">
          <Icons.search className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  )
}

export default SearchButton
