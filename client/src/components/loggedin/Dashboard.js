import React from "react";
import styled from "styled-components";
import { Button, Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';

import { GridContainer, GridItem } from "../common/Grid";
import { Card, CardBody, CardHeader, CardFooter } from "../common/Card";

export default class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      user: { },
      errors: { }
    };
  }

  render() {

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4>Reading Daze</h4>
              <p>Trip Summary</p>
            </CardHeader>
            <CardBody>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        Student ID
                      </TableCell>
                      <TableCell>
                        Name
                      </TableCell>
                      <TableCell>
                        Experience Level
                      </TableCell>
                      <TableCell>
                        Needs Gear
                      </TableCell>
                      <TableCell>
                        Needs Pass
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        40189725
                      </TableCell>
                      <TableCell>
                        Beau Taylor-Ladd
                      </TableCell>
                      <TableCell>
                        Beginner
                      </TableCell>
                      <TableCell>
                        Yes
                      </TableCell>
                      <TableCell>
                        Yes
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        40175624
                      </TableCell>
                      <TableCell>
                        Kirill Myagkov
                      </TableCell>
                      <TableCell>
                        Advanced
                      </TableCell>
                      <TableCell>
                        No
                      </TableCell>
                      <TableCell>
                        No
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        401985364
                      </TableCell>
                      <TableCell>
                        Jordan Seay
                      </TableCell>
                      <TableCell>
                        Advanced
                      </TableCell>
                      <TableCell>
                        No
                      </TableCell>
                      <TableCell>
                        No
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        12345678
                      </TableCell>
                      <TableCell>
                        Nam Tran
                      </TableCell>
                      <TableCell>
                        Beginner
                      </TableCell>
                      <TableCell>
                        Yes
                      </TableCell>
                      <TableCell>
                        Yes
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardBody>
            <CardFooter>
              <Button
                variant="contained"
                type="submit"
                style={{float: 'right'}}
              >
                Export as CSV
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4>Syllabus Daze</h4>
              <p>Trip Summary</p>
            </CardHeader>
            <CardBody>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        Student ID
                      </TableCell>
                      <TableCell>
                        Name
                      </TableCell>
                      <TableCell>
                        Experience Level
                      </TableCell>
                      <TableCell>
                        Needs Gear
                      </TableCell>
                      <TableCell>
                        Needs Pass
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        40189725
                      </TableCell>
                      <TableCell>
                        Beau Taylor-Ladd
                      </TableCell>
                      <TableCell>
                        Beginner
                      </TableCell>
                      <TableCell>
                        Yes
                      </TableCell>
                      <TableCell>
                        Yes
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        40175624
                      </TableCell>
                      <TableCell>
                        Kirill Myagkov
                      </TableCell>
                      <TableCell>
                        Advanced
                      </TableCell>
                      <TableCell>
                        No
                      </TableCell>
                      <TableCell>
                        No
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        401985364
                      </TableCell>
                      <TableCell>
                        Jordan Seay
                      </TableCell>
                      <TableCell>
                        Advanced
                      </TableCell>
                      <TableCell>
                        No
                      </TableCell>
                      <TableCell>
                        No
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        12345678
                      </TableCell>
                      <TableCell>
                        Nam Tran
                      </TableCell>
                      <TableCell>
                        Beginner
                      </TableCell>
                      <TableCell>
                        Yes
                      </TableCell>
                      <TableCell>
                        Yes
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardBody>
            <CardFooter>
              <Button
                variant="contained"
                type="submit"
                style={{float: 'right'}}
              >
                Export as CSV
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4>Beginner Daze</h4>
              <p>Trip Summary</p>
            </CardHeader>
            <CardBody>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        Student ID
                      </TableCell>
                      <TableCell>
                        Name
                      </TableCell>
                      <TableCell>
                        Experience Level
                      </TableCell>
                      <TableCell>
                        Needs Gear
                      </TableCell>
                      <TableCell>
                        Needs Pass
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        40189725
                      </TableCell>
                      <TableCell>
                        Beau Taylor-Ladd
                      </TableCell>
                      <TableCell>
                        Beginner
                      </TableCell>
                      <TableCell>
                        Yes
                      </TableCell>
                      <TableCell>
                        Yes
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        40175624
                      </TableCell>
                      <TableCell>
                        Kirill Myagkov
                      </TableCell>
                      <TableCell>
                        Advanced
                      </TableCell>
                      <TableCell>
                        No
                      </TableCell>
                      <TableCell>
                        No
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        401985364
                      </TableCell>
                      <TableCell>
                        Jordan Seay
                      </TableCell>
                      <TableCell>
                        Advanced
                      </TableCell>
                      <TableCell>
                        No
                      </TableCell>
                      <TableCell>
                        No
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        12345678
                      </TableCell>
                      <TableCell>
                        Nam Tran
                      </TableCell>
                      <TableCell>
                        Beginner
                      </TableCell>
                      <TableCell>
                        Yes
                      </TableCell>
                      <TableCell>
                        Yes
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardBody>
            <CardFooter>
              <Button
                variant="contained"
                type="submit"
                style={{float: 'right'}}
              >
                Export as CSV
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    );
  };
}

const TableContainer = styled.span`

  .MuiTableCell-root {
    font-size: 1.4rem;
  }

  .MuiTableCell-head {
    color: #9c27b0;
    font-size: 1.6rem;
  }

  button {
    font-size: 1.2rem;
    float: right;
    background-color: #4caf50;

    &:hover {
      background-color: #4caf50;
    }

    &.Mui-disabled {
      background-color: rgba(76, 175, 80, 0.32);
    }
  }
`;