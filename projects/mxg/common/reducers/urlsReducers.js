const initialState = {
  cdnUrl: '',
  cdnImageBase: '',
  bundleUrl: ''
};

// 'http://localhost:8080/projects/' + activeProject + '/images/';
// 'http://localhost:8080/projects/' + activeProject + '/';

export default function updateCdnUrls (state = initialState, action) {
  switch(action.type) {
    default:
      return state;
    }
}
