import React from 'react';
import { Table } from 'react-bootstrap';
// import moment from 'moment';

import { Trip } from './Trip';

const renderTrips = (props) => props.trips.map((trip, i) => { 
  return ( 
  <Trip 
  key={i} 
  trip={trip}
  onShowTrip={props.onShowTrip}
   />
  ); } );

export const Trips = (props) => {
  console.log('TRIPS PROPS:', props)
  return (
    <div>
      <h3>Trips:</h3>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Distance</th>
            <th>Show trip</th>
          </tr>
        </thead>
        <tbody>
          {renderTrips(props)}
        </tbody>
      </Table>
    </div>
  );
};