import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import axios from "axios";

export const useInputStore = create(
  immer((set) => ({
    inputValue: "",
    currentLocationData: {},
    isMatchDomain: false,
    isMatchIPv4: false,
    setInputValue: (value) =>
      set((state) => {
        state.inputValue = value;
      }),
    inputValueValidation: () =>
      set((state) => {
        const IPv4 =
          /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/;
        const domain =
          /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?(\/.*)?$/;

        if (domain.test(state.inputValue)) {
          state.isMatchDomain = true;
          state.isMatchIPv4 = false;
        } else if (IPv4.test(state.inputValue)) {
          state.isMatchIPv4 = true;
          state.isMatchDomain = false;
        }
      }),
    getCurrentLocationData: async () => {
      try {
        const response = await axios.get(
          "https://geo.ipify.org/api/v2/country?apiKey=at_X9sD5jqtLPFKNFFSOKoKXNigTOOyQ&ipAddress=31.43.234.28"
        );
        set((state) => {
          state.currentLocationData = response.data;
        });
      } catch (e) {
        console.log(e.message);
        throw Error("Something went wrong");
      }
    },
  }))
);
