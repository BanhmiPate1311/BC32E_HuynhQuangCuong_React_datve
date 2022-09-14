const stateDefault = {
  veDangDat: [],
};

export const btDatVe = (state = stateDefault, { type, payload }) => {
  switch (type) {
    case "DAT_VE": {
      let veDaDatUpdate = [...state.veDangDat];
      let index = veDaDatUpdate.findIndex((ve) => ve.soGhe === payload.soGhe);
      if (index !== -1) {
        veDaDatUpdate.splice(index, 1);
      } else {
        veDaDatUpdate.push(payload);
      }
      state.veDangDat = veDaDatUpdate;
      return { ...state };
    }
    case "HUY_VE": {
      let veDaDatUpdate = [...state.veDangDat];
      veDaDatUpdate.splice(payload, 1);
      state.veDangDat = veDaDatUpdate;
      if (veDaDatUpdate.length === 0) {
        alert("Ơ, ĐỊNH KHÔNG ĐẶT GÌ THẬT À???");
      }
      return { ...state };
    }
    default:
      return state;
  }
};
