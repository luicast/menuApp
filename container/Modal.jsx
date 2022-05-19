import ReactDOM from 'react-dom'
import '../styles/Modal.css'

const Modal = ({ component }) => {
  return ReactDOM.createPortal(
    <>{component}</>,
    document.getElementById('modal')
  )
}

export default Modal
