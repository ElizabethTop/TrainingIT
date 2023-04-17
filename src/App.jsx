import { useState } from 'react'
import Navigation from './components/navigation'
import Pages from './components/pages'
import { PAGES } from './constant/constants'
import { AppBox } from './components/styled/other-styled'

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.MAIN)

  return (
    <AppBox>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Pages currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </AppBox>
  )
}

export default App
