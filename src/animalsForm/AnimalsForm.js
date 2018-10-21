import React from 'react';
import {Form, FormGroup, Label, Input, Col, Button} from 'reactstrap';

class AnimalForm extends React.Component {
    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Label for="number-of-photos" sm={4}>
                        How many animal photos you want to see?
                    </Label>
                    <Col sm={8}>
                        <Input type="number"
                               name="numberOfPhotos"
                               id="number-of-photos"
                               min={1}
                               max={10}
                               placeholder="Enter number between 1 and 10"
                               value={this.props.numberOfPhotos}
                               onChange={this.props.handleChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="animal-type" sm={4}>
                        Choose animal type
                    </Label>
                    <Col sm={8}>
                        <Input type="select"
                               name="animalType"
                               id="animal-type"
                               value={this.props.animalType}
                               onChange={this.props.handleChange}>
                            {this.props.animalTypes.map(type =>
                                <option key={type}
                                        value={type}>
                                {type}
                                </option>
                            )}
                        </Input>
                    </Col>
                </FormGroup>
                <div className="text-center">
                    <Button color="primary"
                            size="lg"
                            disabled={this.props.pending}>
                        {this.props.pending ?
                            'Loading images...' :
                            'Submit'
                        }
                    </Button>
                </div>
            </Form>
        )
    }
}

export default AnimalForm;