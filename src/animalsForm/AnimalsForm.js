import React from 'react';
import {Form, FormGroup, Label, Input, Col, Button} from 'reactstrap';

class AnimalForm extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="number-of-photos" sm={4}>
                        How many animal photos you want to see?
                    </Label>
                    <Col sm={8}>
                        <Input type="number"
                               name="number-of-photos"
                               id="number-of-photos"
                               min={1}
                               max={10}
                               placeholder="Enter number between 1 and 10"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="animal-type" sm={4}>
                        Choose animal type
                    </Label>
                    <Col sm={8}>
                        <Input type="select" name="animal-type" id="animal-type">
                            <option value="shibes">shibes</option>
                            <option value="cats">cats</option>
                            <option value="birds">birds</option>
                            <option value="random">random</option>
                        </Input>
                    </Col>
                </FormGroup>
                <div className="text-center">
                    <Button color="primary" size="lg">Submit</Button>
                </div>
            </Form>
        )
    }
}

export default AnimalForm;