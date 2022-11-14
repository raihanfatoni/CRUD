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
import { deleteVideovr } from "../actions/videovrAction";


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
      dispatch(deleteVideovr(id))
      swal("Data Videovr Sukses dihapus", {
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
    getVideovrList: state.videovr.getVideovrList,
    errorVideovrList: state.videovr.errorVideovrList,
  };
};
const VideovrComponent = (props) => {

  const columns = [
    {
      dataField: "video_id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "destination_id",
      text: "ID Destinasi",
      sort: true,
    },
    {
      dataField: "link_video",
      text: "Link Video",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return ( 
          <div>
            <Link to={"detailvideovr/" + row.video_id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>
  
            <Link to={"editvideovr/" + row.video_id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>
  
            <Button color="dark" className="mr-2" onClick={() => handleClick(props.dispatch, row.video_id)}>
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        );
      },
    },
  ];

  
  return (
    <Container>
      {props.getVideovrList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getVideovrList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="/createvideovr">
                    <Button color="dark" className="mr-2">
                      <FontAwesomeIcon icon={faUserPlus} /> Create Videovr
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
                    {props.errorVideovrList ? (
            <h4>{props.errorVideovrList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(VideovrComponent);
