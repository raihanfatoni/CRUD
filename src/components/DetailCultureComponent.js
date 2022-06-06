import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getCultureDetail: state.culture.getCultureDetail,
    errorCultureDetail: state.culture.errorCultureDetail,
  };
};

const DetailCultureComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">ID</td>
          <td width="10">:</td>
          <td>{props.getCultureDetail.culture_id}</td>
        </tr>
        <tr>
          <td width="200">Nama</td>
          <td width="10">:</td>
          <td>{props.getCultureDetail.nama_budaya}</td>
        </tr>
        <tr>
          <td width="200">Deskripsi</td>
          <td width="10">:</td>
          <td>{props.getCultureDetail.deskripsi_budaya}</td>
        </tr>
        <tr>
          <td width="200">Filosofi</td>
          <td width="10">:</td>
          <td>{props.getCultureDetail.filosofi_budaya}</td>
        </tr>
        <tr>
          <td width="200">Sejarah</td>
          <td width="10">:</td>
          <td>{props.getCultureDetail.sejarah_budaya}</td>
        </tr>

      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailCultureComponent);
