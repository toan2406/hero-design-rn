// @flow
import React from "react";

import { shallow } from "enzyme";

import ThemeProvider from "../../config/ThemeProvider";
import TextThemed, { Text } from "../Text";
import { getTheme } from "../../config/theme";
import renderer from "react-test-renderer";

const theme = getTheme();

describe("Text Component", () => {
  it("should render without issues", () => {
    const component = shallow(<Text theme={theme} />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("should have correct fontsize when h1", () => {
    const component = shallow(<Text h1 theme={theme} />);
    expect(component).toMatchSnapshot();
  });

  it("should have correct fontsize when h2", () => {
    const component = shallow(<Text h2 theme={theme} />);
    expect(component).toMatchSnapshot();
  });

  it("should have correct fontsize when h3", () => {
    const component = shallow(<Text h3 theme={theme} />);
    expect(component).toMatchSnapshot();
  });

  it("should have correct fontsize when h4", () => {
    const component = shallow(<Text h4 theme={theme} />);
    expect(component).toMatchSnapshot();
  });

  it("should have correct fontsize when h5", () => {
    const component = shallow(<Text h5 theme={theme} />);
    expect(component).toMatchSnapshot();
  });

  it("should have correct color when primary", () => {
    const component = shallow(<Text primary theme={theme} />);
    expect(component).toMatchSnapshot();
  });

  it("should have correct color when secondary", () => {
    const component = shallow(<Text secondary theme={theme} />);
    expect(component).toMatchSnapshot();
  });

  it("should have correct color when danger", () => {
    const component = shallow(<Text danger theme={theme} />);
    expect(component).toMatchSnapshot();
  });

  it("should have correct color when warning", () => {
    const component = shallow(<Text warning theme={theme} />);
    expect(component).toMatchSnapshot();
  });

  it("should have correct color when success", () => {
    const component = shallow(<Text success theme={theme} />);
    expect(component).toMatchSnapshot();
  });

  it("should have text as children", () => {
    const component = shallow(<Text theme={theme}>Children Text</Text>);

    expect(component.props().children).toBe("Children Text");
  });

  it("should apply style prop as an array", () => {
    const component = shallow(
      <Text theme={theme} style={[{ color: "red" }, { fontSize: 30 }]}>
        Children Text
      </Text>
    );
    expect(component.props().style).toEqual({
      color: "red",
      fontSize: 30,
      fontFamily: "Arial",
      fontWeight: "400"
    });
  });

  it("should use values from the theme", () => {
    const theme = {
      text: {
        fontFamily: "Arial",
        fontWeight: "500",
        primaryColor: "#ffffff",
        h1Style: {
          fontSize: 50
        }
      }
    };

    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <TextThemed h1>Hey</TextThemed>
      </ThemeProvider>
    );
    expect(
      component.root.findByType(TextThemed).children[0].children[0].props.style
        .fontSize
    ).toEqual(50);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("local props should override style props on theme", () => {
    const theme = {
      text: {
        fontFamily: "Arial",
        fontWeight: "500",
        primaryColor: "#ffffff",
        h1Style: {
          fontSize: 50
        }
      }
    };

    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <TextThemed style={{ fontSize: 20 }}>Hey</TextThemed>
      </ThemeProvider>
    );

    expect(
      component.root.findByType(TextThemed).children[0].children[0].props.style
        .fontSize
    ).toBe(20);
    expect(component).toMatchSnapshot();
  });
});
