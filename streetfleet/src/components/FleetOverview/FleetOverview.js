import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import CarItem from './CarItem';
import ShowCars from './ShowCars';
import Actions from './../../store/actions/cars.actions';
import '../../css/FleetOverview.css';
import '../../css/Tables.css';

class FleetOverview extends Component {

  componentDidMount = () => {
    this.props.getCars();
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid text-capitalize">
          <Col md={10} mdOffset={1} className="TableBackground">
            <h2>Fleet Overview</h2>
            <Table hover className="OverviewTable">
              <thead>
                <tr>
                  <th>License </th>
                  <th>Make </th>
                  <th>Model </th>
                  <th>Driving time</th>
                  <th>Distance</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                <ShowCars
                  cars={this.props.cars}
                  onClickDelete={this.props.deleteCar}
                  onClickEdit={this.props.onShowEditVehicle}
                />
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  cars: state.cars.cars,
  fetching: state.cars.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getCars: () => { dispatch(Actions.getCars); },
  deleteCar: (car) => { dispatch(Actions.deleteCar(car)); },
  onShowEditVehicle: (car) => { dispatch(Actions.onShowEditVehicle(car)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(FleetOverview);
