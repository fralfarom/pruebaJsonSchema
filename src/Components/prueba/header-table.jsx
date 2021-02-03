import React from "react";

const WIDTH_CELL_POSNUMBER = 140;
const WIDTH_CELL_AGENCY = 300;
const WIDTH_CELL_ACTION = 180;

export const getColumns = (props) => {
  // const tamañoCelda = 20;

  const columns = [
    {
      Header: "Fecha Proceso",
      accessor: "processDate",
      minWidth: WIDTH_CELL_POSNUMBER,
      width: WIDTH_CELL_POSNUMBER,
      style: { whiteSpace: "unset", paddingTop: 30 }
    },
    {
      Header: "ID Proceso",
      accessor: "processId",
      minWidth: WIDTH_CELL_AGENCY,
      width: WIDTH_CELL_AGENCY,
      style: { whiteSpace: "unset", paddingTop: 30 }
    },
    {
      Header: "Nro Ticket",
      accessor: "nroTicket",
      minWidth: WIDTH_CELL_AGENCY,
      width: WIDTH_CELL_AGENCY,
      style: { whiteSpace: "unset", paddingTop: 30 }
    },
    {
      Header: "RUT Girador",
      accessor: "rutGirador",
      minWidth: WIDTH_CELL_AGENCY,
      width: WIDTH_CELL_AGENCY,
      style: { whiteSpace: "unset", paddingTop: 30 }
    },
    {
      Header: "RUT de Factura",
      accessor: "rutFactura",
      minWidth: WIDTH_CELL_AGENCY,
      width: WIDTH_CELL_AGENCY,
      style: { whiteSpace: "unset", paddingTop: 30 }
    },
    {
      Header: "Tipo de Ticket",
      accessor: "ticketType",
      minWidth: WIDTH_CELL_AGENCY,
      width: WIDTH_CELL_AGENCY,
      style: { whiteSpace: "unset", paddingTop: 30 }
    },
    {
      Header: "Solicitante",
      accessor: "solicitante",
      minWidth: WIDTH_CELL_AGENCY,
      width: WIDTH_CELL_AGENCY,
      style: { whiteSpace: "unset", paddingTop: 30 }
    },
    {
      Header: "Estado de Ticket",
      accessor: "ticketState",
      minWidth: WIDTH_CELL_AGENCY,
      width: WIDTH_CELL_AGENCY,
      style: { whiteSpace: "unset", paddingTop: 30 }
    }
  ];

  return columns;
};
