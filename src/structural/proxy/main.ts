import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Marcos', 'marcosvinicius');
  console.log('Wait 2 seconds');
  console.log(await user.getAddresses());

  console.log('Repeat (CACHE)');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
