function showSocialMedia () {
  let btnSocialMedia = document.querySelector (".social-media-share");
  let socialMediaLinks = document.querySelector (".no-display");

  btnSocialMedia.addEventListener ("click", function () {
    if (socialMediaLinks.getAttribute ("class") == "no-display") {
      socialMediaLinks.setAttribute ("class", "social-media");
    }
    else {
      socialMediaLinks.setAttribute ("class", "no-display");
    }
  });
  return;
}

showSocialMedia ();