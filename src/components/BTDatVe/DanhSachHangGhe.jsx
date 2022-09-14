import React, { Component } from "react";
import Ghe from "./Ghe";

export default class DanhSachHangGhe extends Component {
  render() {
    const { dataGhe } = this.props;
    return (
      <div>
        {dataGhe.map((hangGhe, index) => {
          return (
            <div key={index}>
              <span className="w-[35px] inline-block text-yellow-300">
                {hangGhe.hang}
              </span>
              <Ghe dsGhe={hangGhe.danhSachGhe} soHang={index} />
            </div>
          );
        })}
      </div>
    );
  }
}
