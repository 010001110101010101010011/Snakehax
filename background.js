browser.tabs.create({url: "https://tricksplit.io"}).then(() => {
  browser.tabs.executeScript({
    code: `console.log('location:', window.location.href);`
  });
});
