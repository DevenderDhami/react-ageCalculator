// Modal.js

import React from 'react';
import Modal from 'react-modal';
import image from '../../assets/images/images.jpeg'
const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    // height:"50vh",
    minWidth:"300px",
    transform: 'translate(-50%, -50%)',
    // backgroundColor:""
  },
};
Modal.setAppElement('#root'); // Set the root element for accessibility
const ImageModal = ({ isOpen, closeModal,children}) => {
    
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
        {children}
      {/* <img src={image} alt="Modal Content" style={{ width: '100%', height: 'auto' }} /> */}
      <button className='calc-btn' onClick={closeModal}>Try Again</button>
    </Modal>
  );
};

export default ImageModal;
