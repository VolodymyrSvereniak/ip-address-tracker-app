import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import axios from "axios";

const API_KEY = "at_zFkvnBnTN130YCnU3tkPelfkWjAEy";

export const useInputStore = create(
  immer((set) => ({
    inputValue: "",
    setCurrentLocationData: [],
    isMatchDomain: false,
    isMatchIPv4: false,
    status: "pending",
    handleSubmitReset: () =>
      //без ресету дані не відправляються повторно за відповідною умовою
      set((state) => {
        state.isMatchIPv4 = false;
        state.isMatchDomain = false;
      }),
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
        const validIP = IPv4.test(state.inputValue);
        const validDomain = domain.test(state.inputValue);

        state.isMatchIPv4 = validIP;
        state.isMatchDomain = validDomain;
      }),
    getDefaultLocation: async () => {
      try {
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`
        );
        set((state) => {
          state.setCurrentLocationData = response.data;
          state.status = "successful";
        });
      } catch (e) {
        console.log(e.message);
        throw Error("Something went wrong");
      }
    },
    getNewLocationData: async (isMatchDomain, inputValue) => {
      const protocol = /^https?:\/\/(www\.)?|\/$/g;
      const isProtocolPresent = protocol.test(inputValue);
      const domainRefactor = inputValue.replace(
        /^https?:\/\/(www\.)?|\/$/g,
        ""
      );

      try {
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&${
            isMatchDomain ? "domain" : "ipAddress"
          }=${isProtocolPresent ? domainRefactor : inputValue}`
        );
        set((state) => {
          state.setCurrentLocationData = response.data;
          state.status = "successful";
        });
      } catch (e) {
        console.log(e.message);
        throw Error("Something went wrong");
      }
    },
  }))
);
