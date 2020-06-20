import React from 'react';
 
const UserSettingsContext = React.createContext();
export const UserSettingsContextProvider = UserSettingsContext.Provider;
export const UserSettingsContextConsumer = UserSettingsContext.Consumer;
 
export default UserSettingsContext;