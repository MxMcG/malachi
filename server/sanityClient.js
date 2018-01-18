const sanityClient = require('@sanity/client');

const sanityConfiguredClient = sanityClient({
  projectId: 'xv15zcgy',
  dataset: 'firstrelease',
  useCdn: true, // `false` if you want to ensure fresh data
});

export default sanityConfiguredClient;
