import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getMerchandiseDetail: state.merchandise.getMerchandiseDetail,
    errorMerchandiseDetail: state.merchandise.errorMerchandiseDetail,
  };
};

const DetailMerchandiseComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">ID</td>
          <td width="10">:</td>
          <td>{props.getMerchandiseDetail.merchandise_id}</td>
        </tr>
        <tr>
          <td width="200">Nama Merchandise</td>
          <td width="10">:</td>
          <td>{props.getMerchandiseDetail.nama_merchandise}</td>
        </tr>
        <tr>
          <td width="200">Tipe Merchandise</td>
          <td width="10">:</td>
          <td>{props.getMerchandiseDetail.merchandise_type}</td>
        </tr>
        <tr>
          <td width="200">Deskripsi</td>
          <td width="10">:</td>
          <td>{props.getMerchandiseDetail.deskripsi_merchandise}</td>
        </tr>
        <tr>
          <td width="200">Alamat Toko</td>
          <td width="10">:</td>
          <td>{props.getMerchandiseDetail.alamat_toko}</td>
        </tr>
        <tr>
          <td width="200">Koordinat Toko </td>
          <td width="10">:</td>
          <td>{props.getMerchandiseDetail.koordinat_toko}</td>
        </tr>

      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailMerchandiseComponent);
