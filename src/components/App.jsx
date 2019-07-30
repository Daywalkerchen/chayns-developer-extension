import React, { Component } from 'react';
import Dock from 'react-dock';
import ActionBar from './ActionBar/ActionBar';
import Modules from './Modules';
import Settings from './Settings';
import './App.scss';

export default class App extends Component {
    state = {
        showDock: window.chaynsDevSettings.defaultOpened,
        showConfig: false
    };

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
                            nextTappId = +((nextTapp.src.match('TappID=[0-9]*')[0]).replace('TappID=', ''));
                        } else if (nextTapp.nodeName === 'DIV' && nextTapp.classList.contains('cw-div-tapp')) {
                            nextTappId = +(Array.from(nextTapp.children)[0].id.replace('TappDiv_', ''));
                        }
                        if (nextTappId) {
                            chayns.env.site.tapp.id = nextTappId;
                            this.forceUpdate();
                        }
                    }
                }
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
                    detail: { dockSize: newSize < 0 ? 0 : newSize > 1 ? 1 : newSize }
                }
            ));
        }, 500);
    };

    render = () => {
        const {
            showDock,
            showConfig
        } = this.state;
        return (
            <Dock
                position="right"
                dimMode="none"
                dockStyle={{
                    backgroundColor: 'rgba(255,255,255,0.8)'
                }}
                defaultSize={window.chaynsDevSettings.dockSize}
                defaultOpen
                isVisible={showDock}
                onSizeChange={this.handleDockSize}
            >
                <div className="contentWrapper">
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
