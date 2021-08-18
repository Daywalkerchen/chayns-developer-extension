import React, { PureComponent } from 'react';
import Dock from 'react-dock';
import ActionBar from './action-bar/ActionBar';

import './App.scss';

import Modules from './Modules';
import Settings from './Settings';

export default class App extends PureComponent {
    constructor(props) {
        super();

        this.state = {
            showConfig: false,
            showDock: window.chaynsDevSettings.defaultOpened,
            darkMode: false,
        };
    }

    componentDidMount = () => {
        const { darkMode } = this.state;
        // Login Handling
        const { addAccessTokenChangeListener } = chayns;
        if (addAccessTokenChangeListener) {
            addAccessTokenChangeListener(() => {
                this.forceUpdate();
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

                            this.forceUpdate();
                        }
                    }
                },
            );
        }

        // Global-Func to toggle dock-visibility
        window.chaynsDevToggle = this.toggleDockVisibility;
    };

    toggleDockVisibility = () => {
        const { showDock } = this.state;
        this.setState({ showDock: !showDock });
    };

    toggleConfigView = () => {
        const { showConfig } = this.state;
        this.setState({ showConfig: !showConfig });
    };

    toggleDarkMode = () => {
        const { darkMode } = this.state;
        this.setState({ darkMode: !darkMode });

        if (darkMode) {
            const body = document.body;
            body.style.color = '#fff'
        } else {
            const body = document.body;
            body.style.color = '#000'
        }
    };

    handleDockSize = (newSize) => {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            document.dispatchEvent(new CustomEvent(
                'UPDATE_SETTING',
                {
                    // eslint-disable-next-line no-nested-ternary
                    detail: { dockSize: newSize < 0.1 ? 0.1 : newSize > 1 ? 1 : newSize },
                },
            ));
        }, 500);
    };

    render = () => {
        const {
            showDock,
            showConfig,
            darkMode,
        } = this.state;


        if (darkMode) {
            const body = document.body;
            body.style.color = '#fff'
        } else {
            const body = document.body;
            body.style.color = '#000'
        }

        return (
            <Dock
                defaultOpen
                dimMode="none"
                position="right"
                isVisible={showDock}
                dockStyle={darkMode ? {
                    background: '#303030'
                } : {
                    background: 'rgba(255,255,255,0.8)'
                }}
                onSizeChange={this.handleDockSize}
                defaultSize={window.chaynsDevSettings.dockSize}
            >
                <div className="chayns-dev-content-wrapper">
                    <ActionBar
                        onDarkMode={this.toggleDarkMode}
                        onHide={this.toggleDockVisibility}
                        onConfigure={this.toggleConfigView}
                    />
                    {showConfig
                        ? <Settings/>
                        : <Modules/>}
                </div>
            </Dock>
        );
    };
}
