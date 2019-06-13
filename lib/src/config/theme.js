// @flow

export default {
  text: {
    font: "proxima nova"
  },
  colors: {
    primaryColor: "#003580",
    dangerColor: "#ff4136",
    borderColor: "#aaaaaa"
  },
  button: {
    textSize: 16,
    paddingVertical: 15
  },
  input: {
    textSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 4
  }
};

export type ThemeType = {
  text: {
    font: string
  },
  colors: {
    primaryColor: string,
    dangerColor: string,
    borderColor: string
  },
  button: {
    textSize: number,
    paddingVertical: number
  },
  input: {
    textSize: number,
    paddingVertical: number,
    paddingHorizontal: number,
    marginBottom: number,
    borderRadius: number
  }
};
