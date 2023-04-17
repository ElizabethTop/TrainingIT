import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Rings, ThreeCircles } from 'react-loader-spinner'
import Navigation from './components/navigation'
import Pages from './components/pages'
import { PAGES } from './constant/constants'
import { AppBox, Loading } from './components/styled/other-styled'

function App() {
  const { loading } = useSelector((state) => state.other)
  const [currentPage, setCurrentPage] = useState(PAGES.MAIN)

  return (
    <AppBox>
      {loading && (
        <Loading>
          <ThreeCircles height='150' width='150' color='#42b9dd' />
        </Loading>
      )}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Pages currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </AppBox>
  )
}

export default App
