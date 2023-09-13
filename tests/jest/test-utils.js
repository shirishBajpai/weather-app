import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk"; // Import Redux Thunk
import { initialStore } from "./mocks/initialStore";
// import ErrorBoundary from 'app/ErrorBoundary';
// import AuthProvider from 'app/components/AuthProvider';
// import Loader from '@dtsl/common-billing-components/src/Loader';
// import { SnackbarContainer } from '@dtsl/react';

const customRender = (ui, options = {}) => {
  const { initialState = {} } = options;
 
  const middlewares = [thunk]; // Include Redux Thunk middleware

  function Wrapper({ children }) {
    const mockStore = configureMockStore(middlewares);
    const customStore = mockStore({ ...initialStore, ...initialState });
    return (
      // <Suspense fallback={<Loader />}>
      <Provider store={customStore}>{children}</Provider>
      // </Suspense>
    );
  }

  render(ui, { wrapper: Wrapper });
};

// re-export everything
export * from "@testing-library/react";
export * from "@testing-library/jest-dom";

// override render method
export { customRender as render };
