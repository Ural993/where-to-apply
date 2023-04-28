import React from 'react';

import './App.css';
import { Modal } from 'components/Modal/Modal';

const App = (): any => {
  const data = [
    {
      title: 'Для кого вы ищете учебное заведение?',
      type: 'radio',
      options: [
        'Себе',
        'Супругу/супруге',
        'Родственнику',
        'Коллеге',
        'Ребенку',
        'Другое',
      ],
    },
    { title: 'В каком городе планируете поступать?', type: 'select', options: [] },
    {
      title: 'Какое образование уже есть?',
      type: 'radio',
      options: [
        '9 классов',
        'Колледж/техникум',
        '11 классов',
        'Училище',
        'Неоконченное высшее',
      ],
    },
  ];

  return (
    <div className="App">
      <Modal modalData={data} />
    </div>
  );
};

export default App;
