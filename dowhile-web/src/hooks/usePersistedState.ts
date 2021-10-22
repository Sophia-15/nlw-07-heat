import {
  useEffect, useState, Dispatch, SetStateAction,
} from 'react';

type FunctionResponse<T> = [
  T,
  Dispatch<SetStateAction<T>>,
]

export function usePersistedState<T>(key: string, initialState: T): FunctionResponse<T> {
  const [state, setState] = useState(() => {
    const valueInStorage = localStorage.getItem(key);

    if (valueInStorage) {
      return JSON.parse(valueInStorage);
    }

    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
