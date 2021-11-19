import { ThemeProvider } from '@material-ui/core/styles';
import React, {
    useEffect,
    useState
} from 'react';
import Dock from 'react-dock';
import ActionBar from '../components/action-bar/ActionBar';
import darkTheme from '../theme/dark-theme';

import './App.scss';
import SettingsView from './settings-view/SettingsView';

import UserView from './user-view/UserView';

const useForceUpdate = () => {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const App = () => {
    const [showConfig, setShowConfig] = useState(false);
    const [showDock, setShowDock] = useState(window.chaynsDevSettings.defaultOpened);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        (
            () => componentDidMount()
        )();
    }, []);



    const componentDidMount = () => {
        // Login Handling
        const { addAccessTokenChangeListener } = chayns;
        if (addAccessTokenChangeListener) {
            addAccessTokenChangeListener(() => {
                () => useForceUpdate();
            });
        }

        // Tapp-Change Handling
        const tappWrapper = document.querySelector('.cw-tapp');
        if (tappWrapper) {
            tappWrapper.addEventListener(
                'DOMNodeInserted',
                ({ path }) => {
                    const [nextTapp] = path;

                    if (nextTapp) {
                        let nextTappId = 0;

                        if (nextTapp.nodeName === 'IFRAME') {
                            const tappElements = nextTapp.src.match('TappID=[0-9]*');

                            if (tappElements) {
                                nextTappId = +tappElements[0].replace('TappID=', '');
                            }
                        } else if (nextTapp.nodeName === 'DIV' && nextTapp.classList.contains('cw-div-tapp')) {
                            nextTappId =
                                +(
                                    Array.from(nextTapp.children)[0].id.replace('TappDiv_', '')
                                );
                        }

                        if (nextTappId) {
                            chayns.env.site.tapp.id = nextTappId;

                            () => useForceUpdate();
                        }
                    }
                },
            );
        }

        // Global-Func to toggle dock-visibility
        window.chaynsDevToggle = toggleDockVisibility;
    };

    const toggleDockVisibility = () => {
        setShowDock(!showDock);
    };

    const toggleConfigView = () => {
        setShowConfig(!showConfig);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);

        if (darkMode) {
            const body = document.body;
            body.style.color = '#ffffff';

            const inputs = document.getElementsByTagName('input');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].style.color = '#ffffff';
            }

            const copyText = document.getElementsByClassName('copyText');
            copyText.style.background = '#000000';
        } else {
            const body = document.body;
            body.style.color = '#000000';

            const inputs = document.getElementsByTagName('input');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].style.color = '#000000';
            }

            const copyText = document.getElementsByClassName('copyText');
            copyText.style.background = '#ffffff';
        }
    };

    const handleDockSize = (newSize) => {
        const resizeTimeout = setTimeout(() => {
            document.dispatchEvent(new CustomEvent(
                'UPDATE_SETTING',
                {
                    // eslint-disable-next-line no-nested-ternary
                    detail: { dockSize: newSize < 0.1 ? 0.1 : newSize > 1 ? 1 : newSize },
                },
            ));
        }, 500);

        clearTimeout(resizeTimeout);
    };

    if (darkMode) {
        const body = document.body;
        body.style.color = '#ffffff';
    } else {
        const body = document.body;
        body.style.color = '#000000';
    }

    return (
        <Dock
            defaultOpen
            dimMode="none"
            position="right"
            isVisible={showDock}
            dockStyle={darkMode ? {
                background: 'rgba(19,19,19,0.85)',
                backdropFilter: 'blur(5px)'
            } : {
                background: 'rgba(255,255,255,0.8)',
            }}
            onSizeChange={handleDockSize}
            defaultSize={window.chaynsDevSettings.dockSize}
        >
            <ThemeProvider theme={darkTheme}>
                <ActionBar
                    darkMode={darkMode}
                    onDarkMode={toggleDarkMode}
                    onHide={toggleDockVisibility}
                    onConfigure={toggleConfigView}
                />
                <div className="chayns-dev-content-wrapper">
                    {showConfig
                        ? <SettingsView/>
                        : <UserView/>}
                </div>
            </ThemeProvider>
        </Dock>
    );
};

export default App;
