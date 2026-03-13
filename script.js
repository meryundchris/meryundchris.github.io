const weddingDate = new Date("2026-06-27T12:00:00+02:00").getTime();
const countdownIds = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

function updateCountdown() {
  const now = Date.now();
  let distance = weddingDate - now;

  if (distance < 0) distance = 0;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownIds.days.textContent = String(days);
  countdownIds.hours.textContent = String(hours);
  countdownIds.minutes.textContent = String(minutes);
  countdownIds.seconds.textContent = String(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

const photoFrame = document.getElementById("photoFrame");
const couplePhoto = document.getElementById("couplePhoto");
if (couplePhoto && photoFrame) {
  const markMissingImage = () => photoFrame.classList.add("missing-image");
  if (couplePhoto.complete && couplePhoto.naturalWidth === 0) markMissingImage();
  couplePhoto.addEventListener("error", markMissingImage);
}

const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const languageToggle = document.getElementById("languageToggle");
const languageFlag = document.getElementById("languageFlag");
const languageCode = document.getElementById("languageCode");
const topbar = document.querySelector(".topbar");
const heroSection = document.getElementById("start");
const introScreen = document.getElementById("introScreen");
const introVideo = document.getElementById("introVideo");
let introCompleted = !introScreen || !introVideo;

const navLinks = [...document.querySelectorAll(".nav-link")];
const navSections = navLinks
  .map((link) => document.getElementById(link.dataset.section))
  .filter(Boolean);
const supportedLanguages = ["de", "el", "tr"];
const languageUi = {
  de: { flag: "🇩🇪", code: "DE", nextKey: "lang_toggle_to_el" },
  el: { flag: "🇬🇷", code: "GR", nextKey: "lang_toggle_to_tr" },
  tr: { flag: "🇹🇷", code: "TR", nextKey: "lang_toggle_to_de" },
};
const languageStorageKey = "merychris3-lang";
const translations = {
  de: {
    doc_title: "Meryem & Christopher | Hochzeit",
    meta_description:
      "Hochzeitswebseite von Meryem und Christopher. Alle Infos zu Einladung, Location, Tagesablauf und Rückmeldung.",
    intro_aria: "Introanimation zur Hochzeitseinladung",
    nav_aria: "Bereiche",
    nav_location: "Location",
    nav_schedule: "Tagesablauf",
    nav_dresscode: "Dresscode",
    nav_rsvp: "Rückmeldung",
    photo_aria: "Paarfoto von Meryem und Christopher",
    photo_alt: "Meryem und Christopher",
    photo_fallback: "Bild hier platzieren: `merychris3/images/`",
    hero_getting_married: "Wir heiraten!",
    hero_date: "27. Juni 2026",
    invitation_p1: "Endlich ist es soweit, wir sagen Ja.",
    invitation_p2:
      "Wir möchten den bedeutsamsten Tag unseres Lebens mit den Menschen verbringen, die uns am wichtigsten sind. Deshalb laden wir euch von Herzen ein, unsere Hochzeit gemeinsam mit uns zu feiern.",
    invitation_p3:
      "Wir freuen uns auf einen Tag voller Emotionen, unvergesslicher Momente und vor allem auf die gemeinsame Zeit mit euch.",
    invitation_p4: "Lasst uns zusammen tanzen, lachen und einzigartige Erinnerungen schaffen.",
    countdown_days: "Tage",
    countdown_hours: "Stunden",
    countdown_minutes: "Minuten",
    countdown_seconds: "Sekunden",
    location_note: "Schloss Dachau, München",
    location_h2: "Location",
    location_p1: "Unsere Trauung und Feier finden im wunderschönen Schloss Dachau statt.",
    location_p2:
      "Um 14:00 Uhr werden wir uns im Vestibül des Schlosses das Ja-Wort geben. Wir bitten euch, bereits um 13:30 Uhr vor Ort zu sein, damit wir ganz entspannt gemeinsam starten können.",
    location_p3: "Vor dem Schloss befindet sich ein öffentlicher Parkplatz, der genutzt werden kann.",
    map_title: "Google Maps - Schloss Dachau",
    open_maps_button: "In Google Maps öffnen",
    schedule_h2: "Tagesablauf",
    timeline_1: "Ankunft der Gäste",
    timeline_2: "Trauung im Vestibül",
    timeline_3: "Empfang mit Häppchen auf der Terrasse oder im Foyer",
    timeline_4: "Kaffee und Kuchen",
    timeline_5: "Hochzeitsdinner im Gartensaal",
    timeline_time_after: "anschl.",
    timeline_6: "Party mit DJ",
    timeline_7: "Ende der Feier",
    schedule_hint: "Ablaufänderungen teilen wir euch hier rechtzeitig mit.",
    dresscode_h2: "Dresscode",
    dresscode_p1: "Summer Formal ☀️",
    rsvp_h2: "Rückmeldung",
    rsvp_p1: "Bitte gib uns hier Bescheid, ob du dabei sein kannst. Außerdem kannst du hier deine Menüauswahl treffen.",
    rsvp_hint: "Auswahl: Fleisch (Kalb), Fisch (Zander) oder vegetarisch.",
    form_name_label: "Name",
    form_attendance_legend: "Teilnahme",
    form_attendance_yes: "Ich komme",
    form_attendance_no: "Ich komme leider nicht",
    form_menu_legend: "Menüauswahl",
    form_menu_meat: "Fleisch (Kalb)",
    form_menu_fish: "Fisch (Zander)",
    form_menu_veg: "Vegetarisch",
    form_message_label: "Nachricht (optional)",
    form_submit_button: "Rückmeldung senden",
    form_small_note: "Die Rückmeldung wird lokal im Browser gespeichert und sicher über unser Formular gesendet.",
    org_h2: "Organisationsteam",
    org_p1:
      "Damit unser Tag entspannt und reibungslos abläuft, haben wir großartige Unterstützung an unserer Seite. Wenn ihr Fragen habt oder eine Überraschung plant, könnt ihr euch gern an unsere Trauzeug:innen wenden.",
    wishes_h2: "Wünsche",
    wishes_p1: "Für uns ist das größte Geschenk, diesen Tag gemeinsam mit euch zu verbringen.",
    wishes_p2:
      "Wenn ihr uns darüber hinaus eine Freude machen möchtet, freuen wir uns über einen Beitrag zu unserem gemeinsamen Start ins Eheleben.",
    contact_h2: "Kontaktdaten",
    contact_p1: "Hier findet ihr unsere Kontaktdaten für alle weiteren Fragen rund um die Hochzeit.",
    contact_photo_alt: "Meryem und Christopher",
    footer_p1: "Wir freuen uns sehr auf diesen besonderen Tag mit euch.",
    music_mute: "Musik stummschalten",
    music_unmute: "Musik aktivieren",
    lang_toggle_to_el: "Sprache wechseln zu Griechisch",
    lang_toggle_to_tr: "Sprache wechseln zu Türkisch",
    lang_toggle_to_de: "Sprache wechseln zu Deutsch",
    form_target_missing: "Formularziel fehlt. Bitte später erneut versuchen.",
    form_sending: "Rückmeldung wird gesendet...",
    form_success: "Danke! Deine Rückmeldung wurde erfolgreich gesendet.",
    form_error: "Senden fehlgeschlagen. Bitte versuche es erneut oder kontaktiere uns direkt per Telefon.",
  },
  el: {
    doc_title: "Meryem & Christopher | Γάμος",
    meta_description:
      "Ιστοσελίδα γάμου της Meryem και του Christopher. Όλες οι πληροφορίες για την πρόσκληση, την τοποθεσία, το πρόγραμμα και την επιβεβαίωση.",
    intro_aria: "Εισαγωγική κινούμενη εικόνα για την πρόσκληση γάμου",
    nav_aria: "Ενότητες",
    nav_location: "Τοποθεσία",
    nav_schedule: "Πρόγραμμα",
    nav_dresscode: "Ενδυμασία",
    nav_rsvp: "Επιβεβαίωση",
    photo_aria: "Φωτογραφία του ζευγαριού Meryem και Christopher",
    photo_alt: "Meryem και Christopher",
    photo_fallback: "Τοποθετήστε εδώ εικόνα: `merychris3/images/`",
    hero_getting_married: "Παντρευόμαστε!",
    hero_date: "27 Ιουνίου 2026",
    invitation_p1: "Επιτέλους ήρθε η στιγμή, λέμε το «ναι».",
    invitation_p2:
      "Θέλουμε να περάσουμε τη σημαντικότερη ημέρα της ζωής μας με τους ανθρώπους που είναι πιο σημαντικοί για εμάς. Γι' αυτό σας προσκαλούμε με όλη μας την καρδιά να γιορτάσετε μαζί μας τον γάμο μας.",
    invitation_p3:
      "Ανυπομονούμε για μια ημέρα γεμάτη συγκίνηση, αξέχαστες στιγμές και πάνω απ' όλα για τον κοινό χρόνο μαζί σας.",
    invitation_p4: "Ας χορέψουμε, ας γελάσουμε και ας δημιουργήσουμε μοναδικές αναμνήσεις μαζί.",
    countdown_days: "Ημέρες",
    countdown_hours: "Ώρες",
    countdown_minutes: "Λεπτά",
    countdown_seconds: "Δευτερόλεπτα",
    location_note: "Schloss Dachau, Μόναχο",
    location_h2: "Τοποθεσία",
    location_p1: "Η τελετή και η γιορτή μας θα πραγματοποιηθούν στο όμορφο Schloss Dachau.",
    location_p2:
      "Στις 14:00 θα δώσουμε όρκους στο vestibule του κάστρου. Σας παρακαλούμε να είστε στον χώρο ήδη από τις 13:30, ώστε να ξεκινήσουμε όλοι χαλαρά μαζί.",
    location_p3: "Μπροστά από το κάστρο υπάρχει δημόσιο πάρκινγκ που μπορείτε να χρησιμοποιήσετε.",
    map_title: "Google Maps - Schloss Dachau",
    open_maps_button: "Άνοιγμα στο Google Maps",
    schedule_h2: "Πρόγραμμα ημέρας",
    timeline_1: "Άφιξη καλεσμένων",
    timeline_2: "Τελετή στο vestibule",
    timeline_3: "Υποδοχή με μικρά εδέσματα στη βεράντα ή στο foyer",
    timeline_4: "Καφές και γλυκά",
    timeline_5: "Γαμήλιο δείπνο στην αίθουσα κήπου",
    timeline_time_after: "έπειτα",
    timeline_6: "Πάρτι με DJ",
    timeline_7: "Λήξη εκδήλωσης",
    schedule_hint: "Αν υπάρξουν αλλαγές στο πρόγραμμα, θα σας ενημερώσουμε εδώ έγκαιρα.",
    dresscode_h2: "Ενδυμασία",
    dresscode_p1: "Summer Formal ☀️",
    rsvp_h2: "Επιβεβαίωση",
    rsvp_p1:
      "Παρακαλούμε ενημερώστε μας εδώ αν μπορείτε να παρευρεθείτε. Επίσης μπορείτε να επιλέξετε το μενού σας.",
    rsvp_hint: "Επιλογή: Κρέας (μοσχάρι), ψάρι (ζάντερ) ή χορτοφαγικό.",
    form_name_label: "Όνομα",
    form_attendance_legend: "Συμμετοχή",
    form_attendance_yes: "Θα έρθω",
    form_attendance_no: "Δυστυχώς δεν θα έρθω",
    form_menu_legend: "Επιλογή μενού",
    form_menu_meat: "Κρέας (μοσχάρι)",
    form_menu_fish: "Ψάρι (ζάντερ)",
    form_menu_veg: "Χορτοφαγικό",
    form_message_label: "Μήνυμα (προαιρετικό)",
    form_submit_button: "Αποστολή επιβεβαίωσης",
    form_small_note: "Η επιβεβαίωση αποθηκεύεται τοπικά στον browser και αποστέλλεται με ασφάλεια μέσω της φόρμας.",
    org_h2: "Ομάδα οργάνωσης",
    org_p1:
      "Για να κυλήσει η ημέρα μας χαλαρά και ομαλά, έχουμε εξαιρετική υποστήριξη δίπλα μας. Αν έχετε απορίες ή σχεδιάζετε κάποια έκπληξη, μπορείτε να επικοινωνήσετε με τους κουμπάρους μας.",
    wishes_h2: "Ευχές",
    wishes_p1: "Για εμάς, το μεγαλύτερο δώρο είναι να μοιραστούμε αυτή την ημέρα μαζί σας.",
    wishes_p2:
      "Αν θέλετε να μας κάνετε και κάτι επιπλέον, χαιρόμαστε για μια συμβολή στο κοινό μας ξεκίνημα στη νέα μας ζωή.",
    contact_h2: "Στοιχεία επικοινωνίας",
    contact_p1: "Εδώ θα βρείτε τα στοιχεία επικοινωνίας μας για κάθε απορία σχετικά με τον γάμο.",
    contact_photo_alt: "Meryem και Christopher",
    footer_p1: "Ανυπομονούμε πολύ να μοιραστούμε αυτή την ξεχωριστή ημέρα μαζί σας.",
    music_mute: "Σίγαση μουσικής",
    music_unmute: "Ενεργοποίηση μουσικής",
    lang_toggle_to_el: "Αλλαγή γλώσσας στα Ελληνικά",
    lang_toggle_to_tr: "Αλλαγή γλώσσας στα Τουρκικά",
    lang_toggle_to_de: "Αλλαγή γλώσσας στα Γερμανικά",
    form_target_missing: "Λείπει ο προορισμός της φόρμας. Παρακαλώ δοκιμάστε ξανά αργότερα.",
    form_sending: "Η επιβεβαίωση αποστέλλεται...",
    form_success: "Ευχαριστούμε! Η επιβεβαίωσή σας στάλθηκε με επιτυχία.",
    form_error: "Η αποστολή απέτυχε. Δοκιμάστε ξανά ή επικοινωνήστε μαζί μας τηλεφωνικά.",
  },
  tr: {
    doc_title: "Meryem & Christopher | Dugun",
    meta_description:
      "Meryem ve Christopher'in dugun web sitesi. Davet, mekan, gunun akisi ve geri donus ile ilgili tum bilgiler burada.",
    intro_aria: "Dugun daveti icin giris animasyonu",
    nav_aria: "Bolumler",
    nav_location: "Mekan",
    nav_schedule: "Program",
    nav_dresscode: "Kiyafet",
    nav_rsvp: "Katilim",
    photo_aria: "Meryem ve Christopher'in cift fotografi",
    photo_alt: "Meryem ve Christopher",
    photo_fallback: "Gorseli buraya yerlestirin: `merychris3/images/`",
    hero_getting_married: "Evleniyoruz!",
    hero_date: "27 Haziran 2026",
    invitation_p1: "Nihayet vakit geldi, evet diyoruz.",
    invitation_p2:
      "Hayatimizin en anlamli gununu bizim icin en degerli insanlarla birlikte gecirmek istiyoruz. Bu nedenle sizi dugunumuzu bizimle birlikte kutlamaya yurekten davet ediyoruz.",
    invitation_p3:
      "Duygu dolu, unutulmaz anlarla gecen ve en onemlisi sizlerle birlikte oldugumuz bir gun icin sabirsizlaniyoruz.",
    invitation_p4: "Haydi birlikte dans edelim, gulelim ve essiz anilar biriktirelim.",
    countdown_days: "Gun",
    countdown_hours: "Saat",
    countdown_minutes: "Dakika",
    countdown_seconds: "Saniye",
    location_note: "Schloss Dachau, Munih",
    location_h2: "Mekan",
    location_p1: "Nikahimiz ve kutlamamiz guzel Schloss Dachau'da gerceklesecek.",
    location_p2:
      "Saat 14:00'te sarayin vestibulunde evet diyecegiz. Gune rahat bir sekilde birlikte baslayabilmemiz icin saat 13:30'da orada olmanizi rica ediyoruz.",
    location_p3: "Sarayin onunde kullanabileceginiz halka acik bir otopark bulunuyor.",
    map_title: "Google Maps - Schloss Dachau",
    open_maps_button: "Google Maps'te ac",
    schedule_h2: "Gunun akisi",
    timeline_1: "Misafirlerin gelisi",
    timeline_2: "Vestibulde nikah toreni",
    timeline_3: "Terasta veya fuayede atistirmaliklarla karsilama",
    timeline_4: "Kahve ve pasta",
    timeline_5: "Bahce salonunda dugun yemegi",
    timeline_time_after: "ardindan",
    timeline_6: "DJ ile parti",
    timeline_7: "Kutlamanin sonu",
    schedule_hint: "Programdaki degisiklikleri size burada zamaninda bildirecegiz.",
    dresscode_h2: "Kiyafet",
    dresscode_p1: "Summer Formal ☀️",
    rsvp_h2: "Katilim bildirimi",
    rsvp_p1:
      "Buradan katilip katilamayacaginizi bize bildirmenizi rica ediyoruz. Ayrica menu seciminizi de burada yapabilirsiniz.",
    rsvp_hint: "Secenekler: Et (dana), balik (sudak) veya vejetaryen.",
    form_name_label: "Isim",
    form_attendance_legend: "Katilim",
    form_attendance_yes: "Geliyorum",
    form_attendance_no: "Maalesef gelemiyorum",
    form_menu_legend: "Menu secimi",
    form_menu_meat: "Et (dana)",
    form_menu_fish: "Balik (sudak)",
    form_menu_veg: "Vejetaryen",
    form_message_label: "Mesaj (istege bagli)",
    form_submit_button: "Gonder",
    form_small_note: "Geri donus tarayicida yerel olarak saklanir ve formumuz uzerinden guvenli sekilde gonderilir.",
    org_h2: "Organizasyon ekibi",
    org_p1:
      "Gunumuzun rahat ve sorunsuz gecmesi icin yanimizda harika bir destek ekibi var. Sorulariniz varsa veya bir surpriz planliyorsaniz sahitlerimizle iletisime gecebilirsiniz.",
    wishes_h2: "Dilekler",
    wishes_p1: "Bizim icin en buyuk hediye bu ozel gunu sizlerle birlikte gecirmek.",
    wishes_p2:
      "Bunun disinda bize bir mutluluk daha yasatmak isterseniz, evlilige birlikte baslangicimiz icin yapacaginiz katkidan memnun oluruz.",
    contact_h2: "Iletisim bilgileri",
    contact_p1: "Dugunle ilgili diger tum sorulariniz icin iletisim bilgilerimizi burada bulabilirsiniz.",
    contact_photo_alt: "Meryem ve Christopher",
    footer_p1: "Bu ozel gunu sizinle birlikte gecirmek icin sabirsizlaniyoruz.",
    music_mute: "Muzigi sessize al",
    music_unmute: "Muzigi ac",
    lang_toggle_to_el: "Dili Yunanca yap",
    lang_toggle_to_tr: "Dili Turkce yap",
    lang_toggle_to_de: "Dili Almanca yap",
    form_target_missing: "Form hedefi eksik. Lutfen daha sonra tekrar deneyin.",
    form_sending: "Geri donus gonderiliyor...",
    form_success: "Tesekkurler! Geri donusunuz basariyla gonderildi.",
    form_error: "Gonderim basarisiz oldu. Lutfen tekrar deneyin veya bize dogrudan telefonla ulasin.",
  },
};

function normalizeLanguage(langCode) {
  if (!langCode) return "de";
  const lower = String(langCode).toLowerCase();
  if (lower.startsWith("el") || lower.startsWith("gr")) return "el";
  if (lower.startsWith("tr")) return "tr";
  return "de";
}

function getSavedLanguage() {
  const storedLanguage = localStorage.getItem(languageStorageKey);
  if (storedLanguage && supportedLanguages.includes(storedLanguage)) return storedLanguage;
  return normalizeLanguage(document.documentElement.lang || navigator.language);
}

let currentLanguage = getSavedLanguage();

function t(key) {
  return translations[currentLanguage][key] ?? translations.de[key] ?? "";
}

function translateElements() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (!key) return;
    element.setAttribute("aria-label", t(key));
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const key = element.dataset.i18nTitle;
    if (!key) return;
    element.setAttribute("title", t(key));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (!key) return;
    element.setAttribute("alt", t(key));
  });
}

function syncLanguageToggleUi() {
  if (!languageToggle || !languageFlag || !languageCode) return;
  const currentUi = languageUi[currentLanguage] ?? languageUi.de;
  languageFlag.textContent = currentUi.flag;
  languageCode.textContent = currentUi.code;
  languageToggle.setAttribute("aria-label", t(currentUi.nextKey));
  languageToggle.setAttribute("title", t(currentUi.nextKey));
}

function applyLanguage(langCode) {
  const normalized = normalizeLanguage(langCode);
  if (!supportedLanguages.includes(normalized)) return;

  currentLanguage = normalized;
  document.documentElement.lang = normalized;
  document.title = t("doc_title");

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", t("meta_description"));
  }

  translateElements();
  syncLanguageToggleUi();
  syncMusicUi();
  localStorage.setItem(languageStorageKey, normalized);
}

function syncMusicUi() {
  if (!musicToggle || !music) return;
  const isMutedState = music.muted;
  musicToggle.classList.toggle("muted", isMutedState);
  musicToggle.setAttribute("aria-label", isMutedState ? t("music_unmute") : t("music_mute"));
}

async function attemptAutoPlay() {
  if (!music) return;
  music.muted = false;
  syncMusicUi();
  try {
    await music.play();
    syncMusicUi();
  } catch {
    syncMusicUi();
  }
}

function finishIntro() {
  if (introCompleted) return;
  introCompleted = true;
  document.body.classList.remove("intro-active");
  introScreen.classList.add("is-hidden");
  if (music && music.paused) attemptAutoPlay();
}

if (!introCompleted) {
  document.body.classList.add("intro-active");
  introVideo.addEventListener(
    "ended",
    () => {
      finishIntro();
    },
    { once: true }
  );
  introVideo.addEventListener(
    "error",
    () => {
      finishIntro();
    },
    { once: true }
  );
  introVideo.muted = true;
  introVideo.setAttribute("muted", "");

  const startIntroVideo = () => {
    if (!introVideo.paused) return;
    introVideo.play().catch(() => {});
  };

  introScreen.addEventListener("click", startIntroVideo);
  introScreen.addEventListener("touchstart", startIntroVideo, { passive: true });
} else {
  attemptAutoPlay();
}

if (music) {
  ["pointerdown", "touchstart", "scroll"].forEach((eventName) => {
    document.addEventListener(
      eventName,
      () => {
        if (music.paused) {
          attemptAutoPlay();
        }
      },
      { once: true, passive: true }
    );
  });
  ["keydown", "visibilitychange"].forEach((eventName) => {
    document.addEventListener(
      eventName,
      () => {
        if (music.paused) {
          attemptAutoPlay();
        }
      },
      { once: true }
    );
  });
}

if (musicToggle && music) {
  musicToggle.addEventListener("click", async () => {
    if (music.paused) {
      try {
        await music.play();
      } catch {
        return;
      }
    }
    music.muted = !music.muted;
    syncMusicUi();
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const currentIndex = supportedLanguages.indexOf(currentLanguage);
    const nextLanguage = supportedLanguages[(currentIndex + 1) % supportedLanguages.length];
    applyLanguage(nextLanguage);
  });
}

document.addEventListener(
  "click",
  () => {
    if (music && music.paused) {
      music
        .play()
        .then(() => {
          music.muted = false;
          syncMusicUi();
        })
        .catch(() => {});
    }
  },
  { once: true }
);

applyLanguage(currentLanguage);

if (topbar && heroSection) {
  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      topbar.classList.toggle("visible", !entry.isIntersecting);
    },
    { threshold: 0.05 }
  );
  heroObserver.observe(heroSection);
}

function setActiveNavLink(activeId) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === activeId);
  });
}

function getActivationOffset() {
  const firstTrackedSection = navSections[0];
  if (firstTrackedSection) {
    const scrollMarginTop = Number.parseFloat(getComputedStyle(firstTrackedSection).scrollMarginTop);
    if (Number.isFinite(scrollMarginTop) && scrollMarginTop > 0) return scrollMarginTop;
  }

  const topbarHeight = topbar ? topbar.getBoundingClientRect().height : 0;
  return topbarHeight + 24;
}

function updateActiveNavByScrollPosition() {
  if (!navSections.length) return;

  const activationOffset = getActivationOffset();
  let activeId = null;

  navSections.forEach((section) => {
    if (section.getBoundingClientRect().top <= activationOffset) {
      activeId = section.id;
    }
  });

  if (!activeId) {
    setActiveNavLink(null);
    return;
  }

  setActiveNavLink(activeId);
}

let activeNavRafId = null;
function queueActiveNavUpdate() {
  if (activeNavRafId !== null) return;
  activeNavRafId = requestAnimationFrame(() => {
    activeNavRafId = null;
    updateActiveNavByScrollPosition();
  });
}

window.addEventListener("scroll", queueActiveNavUpdate, { passive: true });
window.addEventListener("resize", queueActiveNavUpdate);
window.addEventListener("hashchange", queueActiveNavUpdate);

updateActiveNavByScrollPosition();

const form = document.getElementById("rsvp-form");
const status = document.getElementById("form-status");
const storageKey = "merychris3-rsvp";

const saved = localStorage.getItem(storageKey);
if (saved && form) {
  try {
    const data = JSON.parse(saved);
    if (data.guestName) form.guestName.value = data.guestName;
    if (data.attendance) {
      const radio = form.querySelector(`input[name="attendance"][value="${data.attendance}"]`);
      if (radio) radio.checked = true;
    }
    if (data.menuChoice) {
      const menuRadio = form.querySelector(`input[name="menuChoice"][value="${data.menuChoice}"]`);
      if (menuRadio) menuRadio.checked = true;
    }
    if (data.message) form.message.value = data.message;
  } catch {
    localStorage.removeItem(storageKey);
  }
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const guestName = String(formData.get("guestName") || "").trim();
    const attendance = String(formData.get("attendance") || "").trim();
    const menuChoice = String(formData.get("menuChoice") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const payload = { guestName, attendance, menuChoice, message };
    localStorage.setItem(storageKey, JSON.stringify(payload));
    const submitButton = form.querySelector('button[type="submit"]');
    const action = form.getAttribute("action");

    if (!action) {
      if (status) status.textContent = t("form_target_missing");
      return;
    }

    if (submitButton) submitButton.disabled = true;
    if (status) status.textContent = t("form_sending");

    try {
      const response = await fetch(action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      if (status) status.textContent = t("form_success");
      form.reset();
      localStorage.removeItem(storageKey);
    } catch {
      if (status) {
        status.textContent = t("form_error");
      }
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}
