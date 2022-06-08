import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getCulinaryDetail: state.culinary.getCulinaryDetail,
    errorCulinaryDetail: state.culinary.errorCulinaryDetail,
  };
};

const DetailCulinaryComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">ID Kuliner</td>
          <td width="10">:</td>
          <td>{props.getCulinaryDetail.culinary_id}</td>
        </tr>
        <tr>
          <td width="200">ID Kota</td>
          <td width="10">:</td>
          <td>{props.getCulinaryDetail.city_id}</td>
        </tr>
        <tr>
          <td width="200">Nama Kuliner</td>
          <td width="10">:</td>
          <td>{props.getCulinaryDetail.nama_kuliner}</td>
        </tr>
        <tr>
          <td width="200">Deskripsi</td>
          <td width="10">:</td>
          <td>{props.getCulinaryDetail.deskripsi_kuliner}</td>
        </tr>
    </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailCulinaryComponent);
