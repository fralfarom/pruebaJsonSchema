import React, { Fragment } from "react";
import PruebaComponent from "../prueba";

class PrincipalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            combobox: []
        }
    }

    componentDidMount() {
        this.setState({
            combobox: [
                {
                    "type": "string",
                    "enum": [
                        "0"
                    ],
                    "title": "CERRADO CON EXITO"
                },
                {
                    "type": "string",
                    "enum": [
                        "1"
                    ],
                    "title": "CERRADO CON ERROR"
                },
                {
                    "type": "string",
                    "enum": [
                        "2"
                    ],
                    "title": "DERIVADO"
                },
                {
                    "type": "string",
                    "enum": [
                        "3"
                    ],
                    "title": "TODAS LAS ANTERIORES"
                },
            ]
        });
    }

    clearForm() {
    }

    render() {
        return (
            <Fragment>
                {this.state.combobox.length > 0 ?
                    <PruebaComponent combobox={this.state.combobox} />
                    : null}
            </Fragment>
        )
    }
}

export default PrincipalComponent;