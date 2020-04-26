import React from "react";
import styled from "styled-components";
import { Button, Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';

import { GridContainer, GridItem } from "../common/Grid";
import { Card, CardBody, CardHeader, CardFooter } from "../common/Card";

export default class Trips extends React.Component {

  constructor() {
    super();
    this.state = {
      user: { },
      errors: {}
    };
  }

  render() {

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4>Trips</h4>
              <p>Join or create trips here!</p>
            </CardHeader>
            <CardBody>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        Organizer
                      </TableCell>
                      <TableCell>
                        Location
                      </TableCell>
                      <TableCell>
                        Slots
                      </TableCell>
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        Beau Taylor-Ladd
                      </TableCell>
                      <TableCell>
                        Mt. Hood
                      </TableCell>
                      <TableCell>
                        4/6
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          type="submit"
                        >
                          Join
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        Kirill Myagkov
                      </TableCell>
                      <TableCell>
                        Mt. Bachelor
                      </TableCell>
                      <TableCell>
                        1/6
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          type="submit"
                        >
                          Join
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        Jordan Seay
                      </TableCell>
                      <TableCell>
                        Mammoth
                      </TableCell>
                      <TableCell>
                        6/6
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          type="submit"
                          disabled
                        >
                          Full
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        Nam Tran
                      </TableCell>
                      <TableCell>
                        Big Bear
                      </TableCell>
                      <TableCell>
                        3/6
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          type="submit"
                        >
                          Join
                        </Button>
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
                Add Trip
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