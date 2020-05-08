import React from "react";
import { ThemeProvider } from "emotion-theming";
import themePrimary from "src/themes/primary";

function AppTheme({ children }) {
    return <ThemeProvider theme={themePrimary}>{children}</ThemeProvider>;
}

export default AppTheme;