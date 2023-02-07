export const useGlobalUser = () => useState('globalUser', () => ({}));

export const useIsGlobalUserAuth = () => useState('isGlobalUserAuth', () => false);
