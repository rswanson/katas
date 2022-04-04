import { kataCli } from './kata-cli';

describe('kataCli', () => {
  it('should work', () => {
    expect(kataCli()).toEqual('kata-cli');
  });
});
