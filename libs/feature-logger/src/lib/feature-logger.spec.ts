import { featureLogger } from './feature-logger';

describe('featureLogger', () => {
  it('should work', () => {
    expect(featureLogger()).toEqual('feature-logger');
  });
});
