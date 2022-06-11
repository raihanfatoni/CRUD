import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getMarketplaceDetail: state.marketplace.getMarketplaceDetail,
    errorMarketplaceDetail: state.marketplace.errorMarketplaceDetail,
  };
};

const DetailMarketplaceComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">ID</td>
          <td width="10">:</td>
          <td>{props.getMarketplaceDetail.marketplace_id}</td>
        </tr>
        <tr>
          <td width="200">Whatsapp</td>
          <td width="10">:</td>
          <td>{props.getMarketplaceDetail.whatsapp}</td>
        </tr>
        <tr>
          <td width="200">Facebook </td>
          <td width="10">:</td>
          <td>{props.getMarketplaceDetail.facebook}</td>
        </tr>
        <tr>
          <td width="200">Shopee</td>
          <td width="10">:</td>
          <td>{props.getMarketplaceDetail.shopee}</td>
        </tr>
        <tr>
          <td width="200">Tokopedia</td>
          <td width="10">:</td>
          <td>{props.getMarketplaceDetail.tokopedia}</td>
        </tr>
        <tr>
          <td width="200">Bukalapak</td>
          <td width="10">:</td>
          <td>{props.getMarketplaceDetail.bukalapak}</td>
        </tr>
        <tr>
          <td width="200">Merchandise ID</td>
          <td width="10">:</td>
          <td>{props.getMarketplaceDetail.merchandise_id}</td>
        </tr>

      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailMarketplaceComponent);
