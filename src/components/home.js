import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

export default class home extends Component {
  state = {
    store: [],
  };

  async componentDidMount() {
    const url = 'http://peril3as3a4.nearbygrocer.com/branchList/123456?DATA=5';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    console.log(data.DATA[0]);
    this.setState({ store: data.DATA });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            {this.state.store.map((store) => (
              <div className="col-sm-3">
                <div className="ele">
                  <h6>{store.branch_name}</h6>
                  <img src="https://nearbygrocer.com/images/logo/store_1/ab983403de8d907efb0576b6b9cab913.png" />
                  <br />
                  <p>Phone- {store.phone}</p>
                  {
                    <Link className="btn btn-sm btn-info mb-3" to="/categories">
                      Go to store
                    </Link>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
