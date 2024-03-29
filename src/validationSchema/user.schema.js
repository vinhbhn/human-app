import * as Yup from 'yup';
import { ErrorMessage } from '../utils/constants';

export const ProfileValidationSchema = Yup.object()
  .shape({
    name: Yup.string().required(ErrorMessage.requireUserName),
    email: Yup.string().email(ErrorMessage.invalidEmail).required(ErrorMessage.requireEmail),
    country: Yup.string().required(ErrorMessage.requireCountry),
    walletAddr: Yup.string()
      .length(42, ErrorMessage.invalidLengthWalletAddress)
      .required(ErrorMessage.requireWalletAddress),
  })
  .required(ErrorMessage.requireProfileDetails);
