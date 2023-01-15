export const regExp = {
  name: /^[a-zA-Zа-яА-ЯёЁіІїЇґҐ' -]+$/,
  phone: /^[+]{1}[0-9]*$/,
  string: /^\D*$/,
  price: /^([1-9]+[0-9]*)*\$$/,
  lettersAndDigits: /^\D*|\d*$/,
  email:
    /^([a-zA-Z0-9._]{1}[a-zA-Z0-9._-]+)+@[a-zA-Z0-9._-]+\.([a-zA-Z0-9._-]*[a-zA-Z0-9._]+)$/,
  date: /^\d\d\.\d\d\.\d\d\d\d$/i,
};
