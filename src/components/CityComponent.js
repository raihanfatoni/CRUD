import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from 'sweetalert';
import { deleteCity } from "../actions/cityAction";


const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  
  swal({
    title: "Apakah Anda yakin akan menghapus data ini ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deleteCity(id))
      swal("Data City Sukses dihapus", {
        icon: "success",
      });
    } else {
      swal("Data gagal dihapus");
    }
  });
}


const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getCityList: state.city.getCityList,
    errorCityList: state.city.errorCityList,
  };
};
const CityComponent = (props) => {

  const columns = [
    {
      dataField: "city_id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "nama_kota",
      text: "Nama Kota",
      sort: true,
    },
    {
      dataField: "email_dinas_pariwisata_kota",
      text: "Email",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return ( 
          <div>
            <Link to={"detailcity/" + row.city_id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>
  
            <Link to={"editcity/" + row.city_id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>
  
            <Button color="dark" className="mr-2" onClick={() => handleClick(props.dispatch, row.city_id)}>
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        );
      },
    },
  ];

  
  return (
    <Container>
      {props.getCityList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getCityList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="/createcity">
                    <Button color="dark" className="mr-2">
                      <FontAwesomeIcon icon={faUserPlus} /> Create City
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} placeholder="Search .." />
                  </div>
                </Col>
              </Row>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
                    {props.errorCityList ? (
            <h4>{props.errorCityList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(CityComponent);
