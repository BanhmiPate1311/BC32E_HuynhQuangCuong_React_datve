import React, { Component } from "react";
import "./BTDatVe.css";
import GheDaChon from "./GheDaChon";
import DanhSachHangGhe from "./DanhSachHangGhe";
import data from "./danhSachGhe.json";

export default class BTDatVe extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./images/btDatVe/bgmovie.jpg)",
          // position: "fixed",
          // height: "100%",
          // width: "100%",
          backgroundSize: "cover",
        }}
      >
        <div className="block absolute w-[100%] h-[100%] top-0 right-0 bg-black/50"></div>
        <div className="container mx-auto lg:flex xl:flex 2xl:flex relative min-h-screen">
          <div className="lg:w-8/12 xl:w-8/12 2xl:w-8/12 text-center z-[1]">
            <h1 className="text-orange-300 text-2xl font-bold">
              ĐẶT VÉ XEM PHIM
            </h1>
            <p className="text-white mt-5">Màn hình</p>
            <div className="screen mx-auto mb-5"></div>
            <DanhSachHangGhe dataGhe={data} />
          </div>
          <div className="lg:w-4/12 xl:w-4/12 2xl:w-4/12 z-[1]">
            <h1 className="text-center text-white text-2xl font-bold">
              DANH SÁCH GHẾ BẠN CHỌN
            </h1>
            <GheDaChon />
          </div>
        </div>
      </div>
    );
  }
}
