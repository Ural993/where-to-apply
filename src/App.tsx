import React, { useEffect, useState } from 'react';

import './App.css';
import { Modal } from 'components/Modal/Modal';

export type AllValueType = {
  title: string;
  option: string | string[];
};

const App = (): any => {
  const [allValue, setAllValue] = useState<AllValueType[]>([]);

  const onChange = (value: AllValueType) => {
    setAllValue([...allValue, value]);
  };

  useEffect(() => {
    console.log(allValue);
  }, [allValue]);

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
      <Modal modalData={data} onChange={onChange} />
    </div>
  );
};

export default App;
