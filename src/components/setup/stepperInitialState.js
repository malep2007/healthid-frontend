const initialState = {
  activeStep: 0,
  checked: false,
  isAcknowledged: false,
  isLoading: false,
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  secondaryEmail: '',
  mobileNumber: '',
  secondaryPhoneNumber: '',
  legalName: '',
  tradingName: '',
  businessEmail: '',
  addressLine1: '',
  addressLine2: '',
  phoneNumber: '',
  city: '',
  country: 'Nigeria',
  localGovernmentArea: '',
  website: '',
  twitter: '',
  instagram: '',
  logo: '',
  facebook: '',
  serverError: '',
  formError: false,
  isError: false,
  src: '',
  crop: {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
  },
  fileName: '',
  originalImageFile: '',
  croppedImage: '',
  open: false,
  businessId: '',
  cities: [],
  countries: [],
  dateLaunched: '2019-01-01',
  outletName: '',
  outletType: 'warehouse',
  kindId: 1,
  outletsActive: false,
  outletIsLoading: false,
  unhideMainButtons: true,
  receiptOpen: false,
  amountToPay: false,
  barcode: false,
  cashier: true,
  changeDue: false,
  discountTotal: false,
  loyalty: false,
  loyaltyBalance: false,
  loyaltyEarned: false,
  outletId: NaN,
  receiptId: NaN,
  registerId: NaN,
  registerName: '',
  registerHidden: true,
  clickedOutlet: 0,
  purchaseTotal: false,
  receipt: false,
  receiptNo: false,
  subtotal: false,
  totalTax: false,
  outletSet: [],
  edittingOutlet: false,
  // step 4: Add User(s)
  jobTitle: '',
  startingDate: '2019-01-01',
  target: '',
  fName: '',
  lName: '',
  userEmail: '',
  userUsername: '',
  phone: '',
  roleId: '',
  outlet: '',
  userId: '',
  roles: [],
  outlets: [],
  editMode: false,
  users: [],
  showUsers: true,
  phoneError: false,
  usernameError: false,
  emailError: false,
  boxChecked: false,
};

export default initialState;
