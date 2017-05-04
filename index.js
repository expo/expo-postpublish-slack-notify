module.exports = ({ url, iosManifest, config }) => {
  const { webhookUrl } = config;
  const slack = require('slack-notify')(webhookUrl);

  return new Promise((resolve, reject) => {
    slack.send(
      {
        icon_url: iosManifest.iconUrl,
        text: `${iosManifest.name} v${iosManifest.version} published to ${url}`,
        unfurl_links: 0,
        username: config.username || 'ExpoBot',
      },
      err => {
        if (err) {
          reject(err);
        } else {
          resolve('Posted notification to Slack!');
        }
      }
    );
  });
};
