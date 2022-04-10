import { AdminUser } from './admin-user';
import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class SystemUserProxy implements SystemUserProtocol {
  // Lazy Instantiation
  private realUser: SystemUserProtocol | null = null;
  private realUserAddress: SystemUserAddressProtocol[] | null = null;

  constructor(public firstName: string, public userName: string) {}

  private createUser(): SystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.userName);
    }

    return this.realUser;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    this.realUser = this.createUser();

    // Type Guard
    if (this.realUserAddress === null) {
      this.realUserAddress = await this.realUser.getAddresses();
    }

    return this.realUserAddress;
  }
}
