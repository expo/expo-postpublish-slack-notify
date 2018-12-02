module.exports = ({ url, iosManifest, config }) => {
  const { webhookUrl } = config;
  const slack = require('slack-notify')(webhookUrl);

  return new Promise((resolve, reject) => {
    
    const releaseChannel = iosManifest.releaseChannel || 'default';
    const queryString = releaseChannel === 'default' ? '' :
      '?release-channel='+encodeURIComponent(releaseChannel)
   
    slack.send(
      {
        icon_url: iosManifest.iconUrl,
        text: `${iosManifest.name} v${iosManifest.version} published to ${url + queryString}`,
        unfurl_links: 0,
        username: config.username || 'ExpoBot',
        channel: config.channel || ''
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
