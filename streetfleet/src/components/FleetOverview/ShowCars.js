import React from 'react';
import isEmpty from 'lodash/isEmpty';
import CarItem from './CarItem';

const ShowCar = ({cars, onClickEdit, onClickDelete}) => {
  if (!isEmpty(cars)) {
    return cars.map(car => (
      <CarItem
        key={car._id}
        car={car}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
      />
    )
    );
  } else {
    return (
      <h2>It seems you have no cars in your fleet.</h2>
    );
  }
};

export default ShowCar;
