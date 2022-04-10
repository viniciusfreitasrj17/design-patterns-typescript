// Protocol
export abstract class ValidationProtocol {
  abstract validate(value: unknown): boolean;
}

// Leafs
export class ValidateEmail extends ValidationProtocol {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateString extends ValidationProtocol {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumber extends ValidationProtocol {
  validate(value: unknown): boolean {
    // return typeof value === 'number';
    if (typeof value !== 'string') return false;
    return /\d+/.test(value);
  }
}

// Composite
export class ValidationComposite extends ValidationProtocol {
  private readonly _children: ValidationProtocol[] = [];

  validate(value: unknown): boolean {
    for (const child of this._children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }
    return true;
  }

  add(...validations: ValidationProtocol[]): void {
    validations.forEach((validation) => this._children.push(validation));
  }
}

// Client
const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();
const validationComposite = new ValidationComposite();
validationComposite.add(validateString, validateEmail, validateNumber);
console.log(validationComposite.validate('luis123@gmail.com'));
