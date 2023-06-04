import Calendar from 'react-calendar'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import {
  CloseModal,
  Container,
  Content,
  Window,
} from './styled/modal-date-exam'

const ModalDateExam = ({ closeDateModal, saveDateExam }) => {
  const closeWindow = (date) => {
    closeDateModal()
    saveDateExam(date)
  }

  return (
    <Container>
      <Window>
        <CloseModal onClick={closeDateModal}>
          <IoIosCloseCircleOutline />
        </CloseModal>
        <Content>
          <div>
            <Calendar onChange={closeWindow} />
          </div>
        </Content>
      </Window>
    </Container>
  )
}

export default ModalDateExam
