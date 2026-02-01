import { useState } from 'react';


export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(!value);
  return [value, toggle];
};

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({ image: '', tags: '' });

  const openModal = (image, tags) => {
    setModalData({ image, tags });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData({ image: '', tags: '' });
  };

  return { isOpen, modalData, openModal, closeModal };
};