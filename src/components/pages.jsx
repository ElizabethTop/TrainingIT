import { PAGES } from '../constant/constants'
import Main from './main'
import Authorization from './authorization-a'
import Materials from './materials'
import RecordingPC from './recordingPC'

function Pages({ currentPage, setCurrentPage }) {
  switch (currentPage) {
    case PAGES.MAIN:
      return <Main />

    case PAGES.SIGN_IN:
      return <Authorization setCurrentPage={setCurrentPage} />

    case PAGES.MATERIALS:
      return <Materials />

    case PAGES.RECORDING_PC:
      return <RecordingPC />

    default:
      return <p>Что-то пошло не так</p>
  }
}

export default Pages
