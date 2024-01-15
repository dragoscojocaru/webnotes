// LocalStorageService.js
const LocalStorageService = {
  saveAccount: (account) => {
    const existingAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const updatedAccounts = [...existingAccounts, account];
    localStorage.setItem('accounts', JSON.stringify(updatedAccounts));
  },

  getAccounts: () => {
    return JSON.parse(localStorage.getItem('accounts')) || [];
  },
};

export default LocalStorageService;
