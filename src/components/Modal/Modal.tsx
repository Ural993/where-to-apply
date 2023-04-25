import { useState } from 'react';

interface ModalType {
  title: string;
  type: string;
}

interface ModalPropsType {
  modalData: ModalType[];
}
export const Modal = ({ modalData }: ModalPropsType) => {
  const [currentModalPage, setCurrentModalPage] = useState<number>(0);

  const renderContent = (type: string) => {
    switch (type) {
      case 'checkbox':
        return <input type="checkbox" />;
      case 'select':
        return <input type="input" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>{modalData[currentModalPage].title}</h2>
      {renderContent(modalData[currentModalPage].type)}
      <button onClick={() => setCurrentModalPage(prev => prev + 1)}>Далее</button>
    </div>
  );
};
