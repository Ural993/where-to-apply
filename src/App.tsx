import React from 'react';

import './App.css';
import { Modal } from 'components/Modal/Modal';

const App = (): any => {
  const data = [
    { title: 'Для кого вы ищете учебное заведение?', type: 'checkbox' },
    { title: 'В каком городе планируете поступать?', type: 'select' },
  ];

  return (
    <div className="App">
      <Modal modalData={data} />
    </div>
  );
};

export default App;
