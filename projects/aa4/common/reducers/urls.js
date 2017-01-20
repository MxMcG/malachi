import update from 'immutability-helper';

const initialState = {
  cdnUrl: '',
  cdnImageBase: '',
  bundleUrl: ''
};

// 'http://localhost:8080/projects/' + activeProject + '/images/';
// 'http://localhost:8080/projects/' + activeProject + '/';

export default function updateCdnUrls (state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_CDN_URLS':
      const projectAbv = action.payload;
      const cdnUrl = state.cdnUrl;
      const cdnImageBase = state.cdnImageBase;
      const updatedCdnUrl = cdnUrl.replace('/tvd', `/${projectAbv}`);
      const updatedImageBase = cdnImageBase.replace('/tvd', `/${projectAbv}`);
      return update(state, {
       cdnUrl: { $set: updatedCdnUrl },
       cdnImageBase: { $set: updatedImageBase }
      });
      default:
      return state;
    }
}
