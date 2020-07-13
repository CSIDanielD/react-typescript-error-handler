import { useState, useReducer, useEffect } from "react";

// Based on: https://www.robinwieruch.de/react-hooks-fetch-data

export interface UseFetchState<T> {
  isLoading: boolean;
  error?: string;
  data?: T;
}

enum FetchActionTypes {
  FetchInit = "FetchInit",
  FetchSuccess = "FetchSuccess",
  FetchFailure = "FetchFailure"
}

interface FetchInitAction {
  type: FetchActionTypes.FetchInit;
}

interface FetchSuccessAction<T> {
  type: FetchActionTypes.FetchSuccess;
  data: T;
}

interface FetchFailureAction {
  type: FetchActionTypes.FetchFailure;
  error?: string;
}

function useFetchReducer<T>(
  state: UseFetchState<T>,
  action: FetchInitAction | FetchSuccessAction<T> | FetchFailureAction
): UseFetchState<T> {
  switch (action.type) {
    case FetchActionTypes.FetchInit:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FetchActionTypes.FetchSuccess:
      return {
        ...state,
        isLoading: false,
        error: "",
        data: action.data
      };
    case FetchActionTypes.FetchFailure:
      return {
        ...state,
        isLoading: false,
        error: action.error || "[no error provided]"
      };
    default:
      throw new Error("fetchReducer - Invalid action type.");
  }
}

export function useFetch<T = any>(
  initialRequest: RequestInfo,
  initialData?: T
) {
  const [request, setRequest] = useState(initialRequest);
  const [state, dispatch] = useReducer(useFetchReducer, {
    isLoading: false,
    error: "",
    data: initialData
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: FetchActionTypes.FetchInit });

      try {
        const result = await fetch(request);
        const data = (await result.json()) as T;

        if (!didCancel) {
          dispatch({ type: FetchActionTypes.FetchSuccess, data: data });
        }
      } catch (ex) {
        if (!didCancel) {
          dispatch({ type: FetchActionTypes.FetchFailure });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [request]);

  return [state, setRequest];
}
