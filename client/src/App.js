import React, { Component } from "react";
import Customer from "./conponents/Customer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import "./App.css";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: 30,
    overflowX: "auto"
  },
  table: {
    minWidth: 1600
  }
});

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "임승효",
    birthday: "961222",
    gender: "남자",
    job: "아이티꿈나무"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "김으녜",
    birthday: "981123",
    gender: "여자",
    job: "꿈나무"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "문승연",
    birthday: "000000",
    gender: "여자",
    job: "리얼꿈나무"
  }
];

function App({ classes }) {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
