import React, {createContext, useState, useContext} from 'react';

interface NameContextType {
  name: string;
  setName: (name: string) => void;
}

const NameContext = createContext<NameContextType>({
  name: '',
  setName: () => {},
});

export const useNameContext = () => useContext(NameContext);

interface NameProviderProps {
  children: React.ReactNode;
}

export const NameProvider: React.FC<NameProviderProps> = ({children}) => {
  const [name, setName] = useState('');

  return (
    <NameContext.Provider value={{name, setName}}>
      {children}
    </NameContext.Provider>
  );
};

export default NameContext;
