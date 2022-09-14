import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Ghe extends Component {
  render() {
    const { dsGhe, soHang, veDangDat } = this.props;
    // console.log(veDangDat);
    const datVe = (ghe) => {
      this.props.dispatch({
        type: "DAT_VE",
        payload: ghe,
      });
    };
    return (
      <Fragment>
        {dsGhe.map((ghe, index) => {
          let cssGhe = "";
          let disabled = false;
          // Trạng thái ghế đã được người khác chọn(unavailable)
          if (ghe.daDat) {
            cssGhe = "gheDuocChon";
            disabled = true;
          }

          //Xét trạng thái ghế đang đặt
          let indexGheDangDat = veDangDat.findIndex(
            (gheDaDat) => gheDaDat.soGhe === ghe.soGhe
          );
          if (indexGheDangDat !== -1) {
            cssGhe = "gheDangChon";
          }
          return soHang === 0 ? (
            <span key={index} className="w-[35px] inline-block rowNumber">
              {ghe.soGhe}
            </span>
          ) : (
            <button
              onClick={() => {
                datVe(ghe);
              }}
              disabled={disabled}
              className={`ghe ${cssGhe} ml-[2%]`}
              key={index}
            >
              {ghe.soGhe}
            </button>
          );
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    veDangDat: state.btDatVe.veDangDat,
  };
};

export default connect(mapStateToProps)(Ghe);
