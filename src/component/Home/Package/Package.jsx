import React from "react";
import "./Package.css";
const Package = (props) => {
  return (
    <div>
      <div>
        <div className="card">
          <div className="product-text">{props.title}</div>
          {/* <img src={props.image} alt="product" /> */}
          <h1>{props.title}</h1>
          <p className="price">{props.price}</p>
          <p>میلیون تومان</p>
          <ul className="">
            <li className="packService">دامین رایگان IR</li>
            <li className="packService">6 ماه پشتیبانی رایگان</li>
            <li className="packService">طراحی سایت متناسب با سلیقه شما</li>
          </ul>
          <button className="">خرید این پلن</button>
          <p>این طرح شامل بروز رسانی رایگان است</p>
        </div>
      </div>
    </div>
  );
};

export default Package;
