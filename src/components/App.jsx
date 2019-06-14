import React, { Component } from 'react';
import Dock from 'react-dock';
import ActionBar from './ActionBar/ActionBar';
import Modules from './Modules';
import Settings from './Settings';
import './App.scss';

export default class App extends Component {
    state = {
        showDock: window.chaynsDevSettings.defaultOpened,
        showConfig: false,
        lastUserId: chayns.env.user.id,
        lastTappId: chayns.env.site.tapp.id
    };

    componentDidMount = () => {
        // Login Handling
        const { addAccessTokenChangeListener } = chayns;
        if (addAccessTokenChangeListener) {
            addAccessTokenChangeListener(() => {
                const { lastUserId } = this.state;
                const currentUserId = chayns.env.user.id;
                if (lastUserId !== currentUserId) {
                    this.setState({ lastUserId: currentUserId });
                }
            });
        }

        // Tapp-Change Handling
        window.addEventListener('message', (msg) => {
            if (msg && typeof msg.data === 'string' && msg.data.startsWith('chayns.ajaxTab')) {
                setTimeout(() => {
                    const { lastTappId } = this.state;
                    const currentTappId = chayns.env.site.tapp.id;
                    if (currentTappId !== lastTappId) {
                        this.setState({ lastTappId: currentTappId });
                    }
                }, 500);
            }
        }, false);

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
                        : <Modules />}
                </div>
            </Dock>
        );
    };
}
