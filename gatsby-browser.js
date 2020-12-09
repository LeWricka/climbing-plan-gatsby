import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const onServiceWorkerUpdateReady = () => window.location.reload(true)

export const replaceComponentRenderer = ({ props }) => {
  const children = React.createElement(props.pageResources.component, props);

  return (
    <div>
      <TransitionGroup>
        <CSSTransition key={props['*']} timeout={200} classNames="fade">
          <div
            style={{
              position: 'absolute',
              width: '100%',
              backgroundColor: '#323232',
            }}
          >
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};