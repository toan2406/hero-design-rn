### Customized by theme
```md
import { ThemeProvider } from 'hero-design-rn'

const customeTheme = {
  text: {
    font: 'Arial'
  }
}
const App = () => {
  <ThemeProvider theme={customeTheme}>
    <Screen />
  <ThemeProvider/>
}
```

### Theme config
```md
{
  text: {
    fontFamily: string,
    fontWeight: string,
    defaultColor: string,
    primaryColor: string,
    secondaryColor: string,
    dangerColor: string,
    warningColor: string,
    successColor: string,
    h1Style: {
      fontSize: number
    },
    h2Style: {
      fontSize: number
    },
    h3Style: {
      fontSize: number
    },
    h4Style: {
      fontSize: number
    },
    h5Style: {
      fontSize: number
    },
    h6Style: {
      fontSize: number
    },
    boldStyle: {
      fontWeight: string
    },
    bolderStyle: {
      fontWeight: string
    },
    lightStyle: {
      fontWeight: string
    },
    lighterStyle: {
      fontWeight: string
    }
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
```
