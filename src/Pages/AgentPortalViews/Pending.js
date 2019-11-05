import React, { Component } from "react";
import { Heading, Box, Image, Tile, Table } from "react-bulma-components/full";
class Pending extends Component {
  render() {
    return (
      <Box>
        <Table>
          <thead>
            <tr>
              <th>MemberID</th>
              <th>Name</th>
              <th>Application Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>MemberID</th>
              <th>Name</th>
              <th>Application Date</th>
              <th>Duration</th>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <th>1</th>
              <td>Fred Fredricson</td>
              <td>12/15/2020</td>
              <td>3 Years</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Fred Fredricson</td>
              <td>12/15/2020</td>
              <td>3 Years</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Fred Fredricson</td>
              <td>12/15/2020</td>
              <td>3 Years</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Fred Fredricson</td>
              <td>12/15/2020</td>
              <td>3 Years</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Fred Fredricson</td>
              <td>12/15/2020</td>
              <td>3 Years</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Fred Fredricson</td>
              <td>12/15/2020</td>
              <td>3 Years</td>
            </tr>
          </tbody>
        </Table>
      </Box>
    );
  }
}

export default Pending;
