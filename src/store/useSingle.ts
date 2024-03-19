import axios from "axios";
import { create } from "zustand";
// import { persist } from "zustand/middleware";
type storeType = {
  loading: boolean;
  datas: any;
  getDatas: () => void;
  getIddata: (id: number) => void;
  iddata: any;
  torf: boolean;
  stTorf: () => void;
};

let allDatas = create<storeType>((set) => ({
  loading: true,
  torf: false,
  datas: [],
  iddata: {},

  getDatas: async () => {
    try {
      let res = await axios.get(
        "https://65bb677f52189914b5bc02b7.mockapi.io/products"
      );
      let dat = await res.data;
      set(() => ({
        loading: false,
        datas: dat,
      }));
    } catch (error) {
      console.log(error);
    }
  },
  getIddata: async (id) => {
    let x = await axios.get(
      `https://65bb677f52189914b5bc02b7.mockapi.io/products/${id}`
    );
    let y = await x.data;
    set(() => ({
      iddata: y,
    }));
  },
  stTorf: () => {
    set(() => ({
      torf: true,
    }));
  },
}));

export default allDatas;
