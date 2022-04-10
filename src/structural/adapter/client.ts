import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

const validaEmailClass = (
  emailValidator: EmailValidatorProtocol,
  email: string,
): boolean => emailValidator.isEmail(email);

const validaEmailFn = (
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): boolean => emailValidator(email);

const email = 'marcos@gmail.com';

console.log(
  `${validaEmailClass(new EmailValidatorClassAdapter(), email)} (CLASS)`,
  `${validaEmailFn(emailValidatorFnAdapter, email)} (FUNCTION)`,
);
