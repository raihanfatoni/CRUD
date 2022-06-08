import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getDestinationDetail: state.destination.getDestinationDetail,
    errorDestinationDetail: state.destination.errorDestinationDetail,
  };
};

const DetailDestinationComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">ID</td>
          <td width="10">:</td>
          <td>{props.getDestinationDetail.destination_id}</td>
        </tr>
        <tr>
          <td width="200">Nama Destinasi</td>
          <td width="10">:</td>
          <td>{props.getDestinationDetail.nama_destinasi}</td>
        </tr>
        <tr>
          <td width="200">Tipe </td>
          <td width="10">:</td>
          <td>{props.getDestinationDetail.tipe_destinasi}</td>
        </tr>
        <tr>
          <td width="200">Deskripsi</td>
          <td width="10">:</td>
          <td>{props.getDestinationDetail.deskripsi_destinasi}</td>
        </tr>
        <tr>
          <td width="200">Koordinat</td>
          <td width="10">:</td>
          <td>{props.getDestinationDetail.koordinat_destinasi}</td>
        </tr>

      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailDestinationComponent);
