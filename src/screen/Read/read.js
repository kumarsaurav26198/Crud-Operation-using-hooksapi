import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
// import AddUser from "./AddUser";
import { CSVLink } from "react-csv";
import TextareaAutosize from "react-textarea-autosize";
import './read.scss'
import ImageAvatars from "../../components/avatar";

function Read() {
  return (
    <>

    
   <div className='read' id='read'>
   <TableContainer component={Paper} style={{  width: "auto" }}>
        <Table stickyHeader aria-label="simple table">
          <TableHead style={{ fontWeight: "bold" }}>
            <TableRow>
              <TableCell align="center">ID </TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Avatar</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow>
                <TableCell align="center" component="th" scope="row">
                  1
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  Abhishek Kumar
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  sauravkumar@gmail.com
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  +916202142166
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  India,Bihar,Khagaria
                </TableCell>
                <TableCell align="end" component="th" scope="row">
                  <ImageAvatars />
                </TableCell>
                <TableCell align="center" style={{ paddingcenter: "5px" }}>
                  {/* <Link to="/edit-user" style={{ textDecoration: "none" }}> */}
                  <Button
                    variant="contained"
                    // onClick={() => {
                    //   dispatch({
                    //     type: "FETCH_USER_BY_ID",
                    //     payload: item
                    //   });
                    // }}
                    color="primary"
                  >
                    Edit
                  </Button>
                  {/* </Link> */}
                  <Button variant="contained" color="secondary">
                    Del
                  </Button>
                </TableCell>
              </TableRow>
          </TableBody>
          {/* <TableBody>
            {getalluser.users.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="right" component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="right" component="th" scope="row">
                  {item.first}
                </TableCell>
                <TableCell align="right" component="th" scope="row">
                  {item.last}
                </TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">{item.phone}</TableCell>
                <TableCell align="right">{item.location}</TableCell>
                <TableCell align="right">{item.hobby}</TableCell>
                <TableCell align="right" style={{ paddingcenter: "5px" }}>
                  <Link to="/edit-user" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      onClick={() => {
                        dispatch({
                          type: "FETCH_USER_BY_ID",
                          payload: item
                        });
                      }}
                      color="primary"
                    >
                      Edit
                    </Button>
                  </Link>
                  <Button variant="contained" color="secondary">
                    Del
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>

   </div>
    </>
  )
}

export default Read;

