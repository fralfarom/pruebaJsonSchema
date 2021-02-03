import React, { Fragment } from "react";
import Form from "@rjsf/material-ui";
import { Button } from "@material-ui/core";
import ReactTable from "react-table-6";
import { getColumns } from "./header-table";
import Pagination from "../pagination/pagination";
import "../pagination/styles.css";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AreaChart from "../areaChart";

const uiSchemaPrueba =
{
  "listOfStrings": {
    "items": {
      "ui:emptyValue": ""
    }
  },
  "multipleChoicesList": {
    "ui:widget": "checkboxes"
  },
  "fixedItemsList": {
    "items": [
      {
        "ui:widget": "textarea"
      },
      {
        "ui:widget": "select"
      }
    ],
    "additionalItems": {
      "ui:widget": "updown"
    }
  },
  "unorderable": {
    "ui:options": {
      "orderable": false
    }
  },
  "unremovable": {
    "ui:options": {
      "removable": false
    }
  },
  "noToolbar": {
    "ui:options": {
      "addable": false,
      "orderable": false,
      "removable": false
    }
  },
  "fixedNoToolbar": {
    "ui:options": {
      "addable": false,
      "orderable": false,
      "removable": false
    }
  },
}

const data = [{"label":"Series 1","data":[{"primary":"2021-01-27T19:00:00.000Z","secondary":70},{"primary":"2021-01-27T19:30:00.000Z","secondary":87},{"primary":"2021-01-27T20:00:00.000Z","secondary":86},{"primary":"2021-01-27T20:30:00.000Z","secondary":18},{"primary":"2021-01-27T21:00:00.000Z","secondary":94},{"primary":"2021-01-27T21:30:00.000Z","secondary":42},{"primary":"2021-01-27T22:00:00.000Z","secondary":6},{"primary":"2021-01-27T22:30:00.000Z","secondary":29},{"primary":"2021-01-27T23:00:00.000Z","secondary":44},{"primary":"2021-01-27T23:30:00.000Z","secondary":30}]}]




class PruebaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schema: {
        "title": "Búsqueda de Tickets",
        "type": "object",
        "required": [
          "Fecha Proceso Desde",
          "Fecha Proceso Hasta",
          "Estado de Ticket"
        ],
        "properties": {
          "Nro de Ticket": {
            "type": "number",
            "title": "Nro de Ticket"
          },
          "Estado de Ticket": {
            "type": "string",
            "title": "Estado de Ticket",
            "anyOf": props.combobox
          },
          "Fecha Proceso Desde": {
            "type": "string",
            "format": "date",
            "title": "Fecha Proceso Desde"
          },
          "Fecha Proceso Hasta": {
            "type": "string",
            "format": "date",
            "title": "Fecha Proceso Hasta"
          },
          "RUT Girador": {
            "type": "string",
            "title": "RUT Girador"
          },
          "RUT de Factura": {
            "type": "string",
            "title": "RUT de Factura",
          }
        }
      },
      clearFormKey: true,
      data: [],
      dataChart: [{"label":"Series 1","data":[{"primary":"2021-01-27T19:00:00.000Z","secondary":70},{"primary":"2021-01-27T19:30:00.000Z","secondary":87},{"primary":"2021-01-27T20:00:00.000Z","secondary":86},{"primary":"2021-01-27T20:30:00.000Z","secondary":18},{"primary":"2021-01-27T21:00:00.000Z","secondary":94},{"primary":"2021-01-27T21:30:00.000Z","secondary":42},{"primary":"2021-01-27T22:00:00.000Z","secondary":6},{"primary":"2021-01-27T22:30:00.000Z","secondary":29},{"primary":"2021-01-27T23:00:00.000Z","secondary":44},{"primary":"2021-01-27T23:30:00.000Z","secondary":30}]}],

    }

    this.formRef = React.createRef();
  }

  clearForm() {
    this.setState({ clearFormKey: !this.state.clearFormKey, data: [] });
  }

  componentDidMount() {
    this.setState({
      data: [
        {
          id: 1,
          processDate: '95/01/2021',
          processId: '001',
          nroTicket: 'SD001',
          rutGirador: '19924767-0',
          rutFactura: '19924767-0',
          ticketType: 'Comprobación de Depósitos',
          solicitante: 'Francisca Garcia',
          ticketState: 'Cerrado con éxito'
        }
      ]
    })
  }


  render() {
    return (

      <div style={{ width: '95%', marginLeft: '3%', marginRight: '3%', marginTop: '1%' }}>
        <Form ref={this.formRef}
          schema={this.state.schema}
          clearFormKey={this.state.clearFormKey}
          uiSchema={uiSchemaPrueba}
          onSubmit={(e) => {
            console.log('aqui: ', e);
          }}
          ObjectFieldTemplate={(e) => {
            console.log('ObjectFieldTemplate: ', e);
            return (
              <Fragment>
                <b style={{ fontSize: '20px' }}>{e.title}</b>
                <hr style={{ width: '100%' }} />
                <div>
                  {e.properties.map(element =>
                  (<span style={{ display: 'inline-block', margin: '5px', minWidth: '49%' }}>
                    {element.content}
                  </span>)
                  )}
                </div>
              </Fragment>
            )
          }}
          validate={(formData, errors) => {
            console.log('formDataValidate: ', formData);
          }}
        >
          <div style={{ marginTop: '20px' }}>
            <Button color={"primary"} variant="contained" style={{ marginRight: '5px' }} >Buscar</Button>
            <Button color={"secondary"} variant="contained" onClick={(e) => {
              console.log('Limpiando');
              this.clearForm();
            }}>Limpiar</Button>
          </div>

        </Form>
        <div>
          {/* <ReactTable
            columns={getColumns(this)}
            data={this.state.data}
            PaginationComponent={Pagination}
            previousText={"Siguiente"}
            nextText={"Anterior"}
            style={{ padding: '2px', height: '100%', overflow: 'auto', marginTop: '25px' }}
            pageSize={5}
            noDataText={"No hay datos"}
          /> */}
          <TableContainer component={Paper} defaultValue={"No Values"} style={{ marginTop: '25px' }} >
            <Table style={{ width: '100%' }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  {/* {Object.values(this.state.schema.properties).map(val => (
                    <TableCell
                      style={{ backgroundColor: '#06164c', color: 'white', fontSize: '14px' }}
                      align="right">
                      {val.title}
                    </TableCell>
                  ))} */}
                  <TableCell style={{ backgroundColor: '#06164c', color: 'white', fontSize: '14px' }} align="right">
                    Fecha Proceso
                  </TableCell>
                  <TableCell style={{ backgroundColor: '#06164c', color: 'white', fontSize: '14px' }} align="right">
                    ID Proceso
                  </TableCell>
                  <TableCell style={{ backgroundColor: '#06164c', color: 'white', fontSize: '14px' }} align="right">
                    Nro Ticket
                    </TableCell>
                  <TableCell style={{ backgroundColor: '#06164c', color: 'white', fontSize: '14px' }} align="right">
                    RUT Girador
                    </TableCell>
                  <TableCell style={{ backgroundColor: '#06164c', color: 'white', fontSize: '14px' }} align="right">
                    RUT de Factura
                    </TableCell>
                  <TableCell style={{ backgroundColor: '#06164c', color: 'white', fontSize: '14px' }} align="right">
                    Tipo de Ticket
                    </TableCell>
                  <TableCell style={{ backgroundColor: '#06164c', color: 'white', fontSize: '14px' }} align="right">
                    Solicitante
                    </TableCell>
                  <TableCell style={{ backgroundColor: '#06164c', color: 'white', fontSize: '14px' }} align="right">
                    Estado de Ticket
                    </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.data.map(row => (
                  <TableRow key={row.id}>
                    <TableCell align="right">{row.processDate}</TableCell>
                    <TableCell align="right">{row.processId}</TableCell>
                    <TableCell align="right">{row.nroTicket}</TableCell>
                    <TableCell align="right">{row.rutGirador}</TableCell>
                    <TableCell align="right">{row.rutFactura}</TableCell>
                    <TableCell align="right">{row.ticketType}</TableCell>
                    <TableCell align="right">{row.solicitante}</TableCell>
                    <TableCell align="right">{row.ticketState}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div style={{ marginTop: '25px' }}>
          <b style={{ fontSize: '20px' }}>Grafico de Area</b>
          <hr style={{ width: '100%' }} />
          <AreaChart />
        </div>
      </div>
    )
  }
}

export default PruebaComponent;