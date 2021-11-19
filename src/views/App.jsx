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
};

const App = () => {
    const [showConfig, setShowConfig] = useState(false);
    const [showDock, setShowDock] = useState(window.chaynsDevSettings.defaultOpened);

    const {
        isDarkMode,
    } = window.chaynsDevSettings;

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

    if (isDarkMode) {
        const body = document.body;
        body.style.color = '#ffffff';
    } else {
        const body = document.body;
        body.style.color = '#000000';
    }

    return (
        <Dock
            defaultOpen
            defaultSize={window.chaynsDevSettings.dockSize}
            dockStyle={isDarkMode ? {
                background: 'rgba(19,19,19,0.85)',
                backdropFilter: 'blur(5px)'
            } : {
                background: 'rgba(255,255,255,0.8)',
            }}
            dimMode="none"
            isVisible={showDock}
            onSizeChange={handleDockSize}
            position="right"

        >
            <ThemeProvider theme={darkTheme}>
                <ActionBar
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
