import { device, element, by, expect } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {});

  it('should test something', async () => {
    await element(by.id('id')).tap();
    await expect(element(by.id('id'))).toBeVisible();
  });
});
