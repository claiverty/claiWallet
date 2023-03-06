function shareUrl() {
  if (navigator.share) {
    // Copiar url e compartilhar URL
    navigator
      .share({
        title: document.title,
        url: window.location.href,
      })
      .then(() => {
        console.log("URL compartilhado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao compartilhar URL:", error);
      });
  } else {
    // Compartilhar URL em apps
    var whatsappUrl =
      "whatsapp://send?text=" +
      encodeURIComponent(document.title + " " + window.location.href);
    var facebookUrl =
      "https://www.facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent(window.location.href);
    var instagramUrl =
      "https://www.instagram.com/share/url?url=" +
      encodeURIComponent(window.location.href);
    var twitterUrl =
      "https://twitter.com/intent/tweet?url=" +
      encodeURIComponent(window.location.href) +
      "&text=" +
      encodeURIComponent(document.title);
    var gmailUrl =
      "https://mail.google.com/mail/?view=cm&to=&su=" +
      encodeURIComponent(document.title) +
      "&body=" +
      encodeURIComponent(window.location.href);
    var copyUrl = window.location.href;

    var popupWidth = 600;
    var popupHeight = 400;
    var popupTop = (screen.height - popupHeight) / 2;
    var popupLeft = (screen.width - popupWidth) / 2;

    var whatsappPopup = window.open(
      whatsappUrl,
      "whatsapp",
      "height=" +
        popupHeight +
        ",width=" +
        popupWidth +
        ",top=" +
        popupTop +
        ",left=" +
        popupLeft
    );
    var facebookPopup = window.open(
      facebookUrl,
      "facebook",
      "height=" +
        popupHeight +
        ",width=" +
        popupWidth +
        ",top=" +
        popupTop +
        ",left=" +
        popupLeft
    );
    var instagramPopup = window.open(
      instagramUrl,
      "instagram",
      "height=" +
        popupHeight +
        ",width=" +
        popupWidth +
        ",top=" +
        popupTop +
        ",left=" +
        popupLeft
    );
    var twitterPopup = window.open(
      twitterUrl,
      "twitter",
      "height=" +
        popupHeight +
        ",width=" +
        popupWidth +
        ",top=" +
        popupTop +
        ",left=" +
        popupLeft
    );
    var gmailPopup = window.open(
      gmailUrl,
      "gmail",
      "height=" +
        popupHeight +
        ",width=" +
        popupWidth +
        ",top=" +
        popupTop +
        ",left=" +
        popupLeft
    );

    if (
      whatsappPopup ||
      facebookPopup ||
      instagramPopup ||
      twitterPopup ||
      gmailPopup
    ) {
      console.log("Janela de compartilhamento aberta.");
    } else {
      alert("Por favor, permita pop-ups para este site.");
    }
  }
}
