self.addEventListener("push", (e) => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: "Heyo! This notification was generated from a push!",
    icon: "https://cataas.com/cat",
  });
});
