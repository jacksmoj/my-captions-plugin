// functions/getCaptions.js
const { getSubtitles } = require('youtube-captions-scraper');
exports.handler = async (event) => {
  const { videoId } = event.queryStringParameters;
  const captions = await getSubtitles({ videoID: videoId, lang: 'en' });
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(captions),
  };
};
