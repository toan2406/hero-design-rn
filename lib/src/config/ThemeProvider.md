# Customized by theme
```
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

# Theme config
```
{
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
```
