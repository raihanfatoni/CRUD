import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
      <tr>
          <td width="200">ID</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.user_id}</td>
        </tr>
        <tr>
          <td width="200">Nama</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.name}</td>
        </tr>
        <tr>
          <td width="200">Email</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.email}</td>
        </tr>
        <tr>
          <td width="200">Role</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.role}</td>
        </tr>
        <tr>
          <td width="200">Address</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.address}</td>
        </tr>
        <tr>
          <td width="200">Handphone</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.handphone}</td>
        </tr>
        <tr>
          <td width="200">Profile Pic Link</td>
          <td width="10">:</td>
          <td><a href={props.getUserDetail.prof_pic_link}>{props.getUserDetail.prof_pic_link}</a></td>
        </tr>

      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
