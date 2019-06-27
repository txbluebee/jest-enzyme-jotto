import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './';

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('adds response word to state', async () => {
    const secretWord = 'party';
    const store = storeFactory();
    //set up Moxey.wait() to tell you how to
    //respond when axios sends out a request

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });
    await store.dispatch(getSecretWord());
    const newState = store.getState();
    expect(newState.secretWord).toBe(secretWord);
  });
});
