import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import { ThemeProvider } from 'styled-components';
import Menu from 'components/Menu';

const MainTemplate = ({ children }) => {
    return (
        <div>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <>
                    <Menu />
                    {children}
                </>
            </ThemeProvider>
        </div>
    );
}

export default MainTemplate;
