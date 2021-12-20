import React from "react";

class DataCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/serv/ible")
      .then((a) => a.json())
      .then((b) => this.setState({ data: b }));
  }

  render() {
    return (
      <>
        <table className="table table-striped">
          {this.state.data.map((n) => (
            <tr>
              <td>{n.name}</td>
              <td>{n.email}</td>
              <td>{n.mobile}</td>
            </tr>
          ))}
        </table>
      </>
    );
  }
}

export default DataCom;
