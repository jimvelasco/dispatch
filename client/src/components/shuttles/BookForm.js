import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export default class BookForm extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Input type="text" name="guestName" id="guestName" placeholder="Guest Name" />
          <i className="book-icon fas fa-user"></i>
        </FormGroup>
        <FormGroup>
          <Input type="text" name="pickUp" id="pickUp" placeholder="Pick Up" />
          <i className="book-icon fas fa-location-arrow"></i>
        </FormGroup>
        <FormGroup>
          <Input type="text" name="dropOff" id="dropOff" placeholder="Drop Off" />
          <i className="book-icon fas fa-map-marker"></i>
        </FormGroup>
        <FormGroup>
          <Input type="select" name="properties" id="properties" defaultValue="1">
            <option className="select-default" value="1">Properties</option>
            <option value="2">Sunrise</option>
            <option value="3">Highnoon</option>
            <option value="4">Sundown</option>
            <option value="5">Alpenglow</option>
          </Input>
          <i className="book-icon fas fa-angle-down"></i>
        </FormGroup>
        <FormGroup>
          <div className="form-sub">
            <Input type="text" name="roomNum" id="roomNum" placeholder="Room #" />
            <Input type="number" name="numRiders" id="numRiders" placeholder="# Riders" />
          </div>
        </FormGroup>
        <div>
          <Button>BOOK NOW</Button>
        </div>
      </Form>
    );
  }
}
