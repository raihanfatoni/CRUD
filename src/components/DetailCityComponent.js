import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getCityDetail: state.city.getCityDetail,
    errorCityDetail: state.city.errorCityDetail,
  };
};

const DetailCityComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">ID</td>
          <td width="10">:</td>
          <td>{props.getCityDetail.city_id}</td>
        </tr>
        <tr>
          <td width="200">Nama</td>
          <td width="10">:</td>
          <td>{props.getCityDetail.nama_kota}</td>
        </tr>
        <tr>
          <td width="200">Deskripsi</td>
          <td width="10">:</td>
          <td>{props.getCityDetail.informasi_kota}</td>
        </tr>
        <tr>
          <td width="200">Koordinat Kota</td>
          <td width="10">:</td>
          <td>{props.getCityDetail.koordinat_kota}</td>
        </tr>
        <tr>
          <td width="200">Email</td>
          <td width="10">:</td>
          <td>{props.getCityDetail.email_dinas_pariwisata_kota}</td>
        </tr>

      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailCityComponent);
