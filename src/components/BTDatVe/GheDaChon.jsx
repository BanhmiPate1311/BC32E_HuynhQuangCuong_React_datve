import React, { Component } from "react";
import { connect } from "react-redux";

class GheDaChon extends Component {
  render() {
    const { gheDangDat } = this.props;
    const huyVe = (index) => {
      this.props.dispatch({
        type: "HUY_VE",
        payload: index,
      });
    };
    return (
      <div className="text-white">
        <div>
          <button className="gheDuocChon mt-5"></button>
          <span className="ml-2 text-lg font-bold">Ghế đã đặt</span>
        </div>
        <div>
          <button className="gheDangChon mt-5"></button>
          <span className="ml-2 text-lg font-bold">Ghế đang chọn</span>
        </div>
        <div>
          <button className="ghe mt-5"></button>
          <span className="ml-2 text-lg font-bold">Ghế chưa đặt</span>
        </div>
        <table className="table-auto border-collapse border border-slate-400 w-full mt-5">
          <thead>
            <tr>
              <th className="border border-slate-400 w-[30%]">Số ghế</th>
              <th className="border border-slate-400 w-[30%]">Giá</th>
              <th className="border border-slate-400 w-[30%]">Hủy</th>
            </tr>
          </thead>
          <tbody>
            {gheDangDat.map((ghe, index) => {
              return (
                <tr className="text-orange-300" key={index}>
                  <td className="border border-slate-400">{ghe.soGhe}</td>
                  <td className="border border-slate-400">
                    {ghe.gia.toLocaleString()}
                  </td>
                  <td className="border border-slate-400">
                    <span
                      className="cursor-pointer text-red-600 font-bold"
                      onClick={() => {
                        huyVe(index);
                      }}
                    >
                      X
                    </span>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" className="border border-slate-400">
                Tổng Tiền
              </td>
              <td className="border border-slate-400 text-orange-300">
                {gheDangDat
                  .reduce((tongtien, ghe) => {
                    return (tongtien += ghe.gia);
                  }, 0)
                  .toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    gheDangDat: state.btDatVe.veDangDat,
  };
};

export default connect(mapStateToProp)(GheDaChon);
