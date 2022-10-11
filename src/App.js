import './App.scss';
import {useState} from 'react'

function App() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="App">
      <div className='box'>
        <h1 className='box__header'>Modal Project</h1>
        <div className='box__btn'>
          <div className='box__btn__item' onClick={() => setIsOpen(true)}>open modal</div>
        </div>
      </div>

      <div className='modal' style={{display: `${isOpen ? 'flex' : ''}`}}>
        <div className='modal__box'>
          <div className='modal__box__closeBtn' onClick={() => setIsOpen(false)}>X</div>

          <h2 className='modal__box__header'>Modal Content</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
