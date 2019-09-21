import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div id="dashboard">
        <Link
          className="link"
          style={{ textDecoration: "none" }}
          to="/hospital"
        >
          <img
            src="https://i.dlpng.com/static/png/1805547-hospital-clinic-cartoon-png-and-psd-hospital-png-512_512_preview.png"
            alt=""
          />
          <p>Hospital Users</p>
        </Link>

        <Link className="link" style={{ textDecoration: "none" }} to="/super">
          <img
            src="https://bankkita.com/images/admin-png-images-7.png"
            alt=""
          />
          <p>Higher Authority</p>
        </Link>

        <Link className="link" style={{ textDecoration: "none" }} to="/admin">
          <img
            src="https://www.nicepng.com/png/detail/772-7726577_refrubished-employee-icon-admin-assets-upload-id.png"
            alt=""
          />
          <p>Admin Users</p>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
