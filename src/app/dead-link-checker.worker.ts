import { deadLinkChecker } from 'dead-link-checker';

addEventListener('message', async ({ data }) => {
  console.log('in the workerer', data);

  // Breaks everything
  await deadLinkChecker(data.domainName, undefined, data.links);

  postMessage('link checking complete', undefined);
});
