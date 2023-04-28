import { useEffect, useState } from 'react';

import { RadioButtonsGroup } from 'components/RadioButtonsGroup/RadioButtonsGroup';
import './style.scss';

interface ModalType {
  title: string;
  type: string;
  options: string[];
}

interface ModalPropsType {
  modalData: ModalType[];
}
export const Modal = ({ modalData }: ModalPropsType) => {
  const [currentModalPage, setCurrentModalPage] = useState<number>(0);
  const [value, setValue] = useState('');

  const setValueHandler = (e: string) => {
    setValue(e);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  const renderContent = (data: ModalType) => {
    switch (data.type) {
      case 'radio':
        return <RadioButtonsGroup options={data.options} onChange={setValueHandler} />;
      case 'select':
        return <input type="input" />;
      default:
        return null;
    }
  };

  return (
    <div className="modal">
      <div className="title-block">
        <p>{modalData[currentModalPage].title}</p>
        <span>{`${currentModalPage + 1}/${modalData.length}`}</span>
      </div>
      {renderContent(modalData[currentModalPage])}

      <div className={currentModalPage ? 'buttons-block' : 'button'}>
        {!!currentModalPage && (
          <button
            onClick={() => setCurrentModalPage(prev => prev - 1)}
            style={{
              background: '#FFFFFF',
              color: '#383838',
              border: '1px solid #D8D8D8;',
            }}
          >
            Назад
          </button>
        )}
        <button
          onClick={() => setCurrentModalPage(prev => prev + 1)}
          style={{ background: '#383838', color: '#FFFFFF' }}
        >
          Далее
        </button>
      </div>
    </div>
  );
};
