import React, { PureComponent } from 'react';
import Dock from 'react-dock';

import Modules from './Modules';
import Settings from './Settings';
import ActionBar from './action-bar/ActionBar';

import './App.scss';

const DOCK_STYLE = {
    backgroundColor: 'rgba(255,255,255,0.8)',
};

export default class App extends PureComponent {
    constructor(props) {
        super();

        this.state = {
            showConfig: false,
            showDock: window.chaynsDevSettings.defaultOpened,
        };
    }

    componentDidMount = () => {
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
                            nextTappId = +(Array.from(nextTapp.children)[0].id.replace('TappDiv_', ''));
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
        } = this.state;
        return (
            <Dock
                defaultOpen
                dimMode="none"
                position="right"
                isVisible={showDock}
                dockStyle={DOCK_STYLE}
                onSizeChange={this.handleDockSize}
                defaultSize={window.chaynsDevSettings.dockSize}
            >
                <div className="content-wrapper">
                    <ActionBar
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
