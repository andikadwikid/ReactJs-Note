import React from "react";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.onSearch = this.onSearch.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  onSearch(event) {
    this.setState({ search: event.target.value });
  }
  onSubmitSearch(search) {
    this.props.searchNotes(search);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand px-4" href="/">Submission React Js</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <div className="d-flex justify-content-end">
              <input
                type="text"
                placeholder="search catatan"
                className="form-control me-2"
                value={this.state.search}
                onChange={this.onSearch}
              />
              <button
                className="btn btn-success"
                onClick={() => this.onSubmitSearch(this.state.search)}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

