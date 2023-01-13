import { createContext, FC, Suspense, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from 'components/molecules';
import { ModalsNames } from 'modals';

let modalRoot = document.getElementById('modal') as HTMLElement;

// for tests
if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal');
  modalRoot.setAttribute('data-testid', 'modal');
  document.body.appendChild(modalRoot);
}

type ModalContextType = ReturnType<typeof useModal>;

const ModalContext = createContext<ModalContextType | null>(null);

const useModal = () => {
  const [modal, setModal] = useState<{ name: ModalsNames } | null>(null);

  const openModal = <Props,>(name: ModalsNames, props?: Props) => {
    setModal({
      name,
      ...props,
    });
  };

  const closeModal = () => {
    setModal(null);
  };

  const ModalPortal = () => {
    if (!modal) {
      return null;
    }

    const { name, ...rest } = modal;

    return (
      <Suspense>
        <Modal
          key={name}
          name={name}
          closeModal={closeModal}
          {...rest}
        />
      </Suspense>
    );
  };

  return {
    openModal,
    modal: createPortal(<ModalPortal />, modalRoot),
    modalVisible: Boolean(modal),
  };
};

type ProviderProps = {
  children: React.ReactNode;
};

export const ModalProvider: FC<ProviderProps> = ({ children }) => {
  const value = useModal();

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModalContext = () => {
  const value = useContext(ModalContext);

  if (!value) {
    throw new Error('useModalContext must be used inside ModalProvider');
  }

  return value;
};