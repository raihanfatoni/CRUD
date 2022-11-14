import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getVideovrDetail: state.videovr.getVideovrDetail,
    errorVideovrDetail: state.videovr.errorVideovrDetail,
  };
};

const DetailVideovrComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">ID</td>
          <td width="10">:</td>
          <td>{props.getVideovrDetail.video_id}</td>
        </tr>
        <tr>
          <td width="200">ID Kota</td>
          <td width="10">:</td>
          <td>{props.getVideovrDetail.destination_id}</td>
        </tr>
        <tr>
          <td width="200">Link</td>
          <td width="10">:</td>
          <td>{props.getVideovrDetail.link_video}</td>
        </tr>
        <tr>
          <td width="200">Deskripsi</td>
          <td width="10">:</td>
          <td>{props.getVideovrDetail.deskripsi}</td>
        </tr>
        <tr>
          <td width="200">Durasi</td>
          <td width="10">:</td>
          <td>{props.getVideovrDetail.durasi}</td>
        </tr>

      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailVideovrComponent);
