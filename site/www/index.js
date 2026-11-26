// www.lemonmath.com -> lemonmath.com (same path and query), so every page has one address.
// A separate tiny Worker: the main site (lemonmath-site) is static files only and runs no code per request.
export default {
  fetch(request) {
    const url = new URL(request.url);
    url.hostname = 'lemonmath.com';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  },
};
