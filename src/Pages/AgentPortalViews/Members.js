import React, { Component } from "react";
import {
  Heading,
  Box,
  Image,
  Tile,
  Table,
  Pagination,
  Level,
  Button
} from "react-bulma-components/full";
class Members extends Component {
  render() {
    return (
      <Box>
        <Pagination current={3} total={5} delta={1} color="primary" style={{color: "#00d1b2", borderColor: "#00d1b2"}}/>
        <Table>
          <thead>
            <tr>
              <th>MemberID</th>
              <th>Name</th>
              <th>Effective Date</th>
              <th>Experation Date</th>
              <th>Coverage Status</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>MemberID</th>
              <th>Name</th>
              <th>Effective Date</th>
              <th>Experation Date</th>
              <th>Coverage Status</th>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <th>1</th>
              <td>Fred Fredricson</td>
              <td>12/15/2018</td>
              <td>12/15/2020</td>
              <td>Covered</td>
            </tr>
            <tr>
              <th>1</th>
              <td>Fred Fredricson</td>
              <td>12/15/2018</td>
              <td>12/15/2020</td>
              <td>Covered</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Fred Fredricson</td>
              <td>12/15/2018</td>
              <td>12/15/2020</td>
              <td>Covered</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Fred Fredricson</td>
              <td>12/15/2018</td>
              <td>12/15/2020</td>
              <td>Covered</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Fred Fredricson</td>
              <td>12/15/2018</td>
              <td>12/15/2020</td>
              <td>Covered</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Fred Fredricson</td>
              <td>12/15/2018</td>
              <td>12/15/2020</td>
              <td>Covered</td>
            </tr>
          </tbody>
        </Table>
        <Level>
        <Level.Side align="left" ><Level.Item>Test</Level.Item></Level.Side>
          <Level.Side align="right">
            <Level.Item>
              <Button outlined color="primary">
                Export as CSV
              </Button>
            </Level.Item>
          </Level.Side>
        </Level>
      </Box>
    );
  }
}

export default Members;
