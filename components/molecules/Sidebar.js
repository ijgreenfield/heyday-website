import React from 'react';
import { BaseModal, ModalCloseTarget, ModalTitle} from 'react-spring-modal'
import 'react-spring-modal/styles.css';

export default function Sidebar({isOpen, onDismiss }) {
    return (
      <>
        <BaseModal 
            isOpen={isOpen} 
            onDismiss={onDismiss}
            contentProps={{
                style: {
                  width: '400px',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  zIndex: '999',
                  background: '#fff'
                },
            }}
            contentTransition={{
                from: { transform: 'translateX(100%)' },
                enter: { transform: 'translateX(0)' },
                leave: { transform: 'translateX(100%)' },
            }}
            >
          {/* Defaults to <h1> and gives it an id to make it the label for your modal */}
          <ModalTitle>My Bottom Modal</ModalTitle>
          <p>Lorem ipsum dolor sit amet.</p>
  
          {/* Automatically adds onClick that dismisses modal */}
          <ModalCloseTarget>
            <button>Close</button>
          </ModalCloseTarget>
        </BaseModal>
      </>
    );
  }