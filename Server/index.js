const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const util = require('util');
const which = require('which');

const app = express();
app.use(cors());

// Detailed format mapping
// Detailed format mapping
const formatMapping = {
  'mp4-360': { formatCode: '18', extension: 'mp4', audio: false },
  'mp4-480': { formatCode: '22', extension: 'mp4', audio: false },
  'mp4-720': { formatCode: '136', extension: 'mp4', audio: false },
  'mp4-1080': { formatCode: '299', extension: 'mp4', audio: false },
  'webm-4k': { formatCode: '313', extension: 'webm', audio: false },
  'webm-8k': { formatCode: '/* appropriate code */', extension: 'webm', audio: false },
  'mp3': { formatCode: '140', extension: 'mp3', audio: true },
  'mp3-320': { formatCode: '/* appropriate code or conversion */', extension: 'mp3', audio: true },
  'wav': { formatCode: '140', extension: 'wav', audio: true },
  'm4a': { formatCode: '140', extension: 'm4a', audio: true },
  'webm-audio': { formatCode: '251', extension: 'webm', audio: true },
  'aac': { formatCode: '140', extension: 'aac', audio: true },
  'ogg': { formatCode: '171', extension: 'ogg', audio: true },
  'flac': { formatCode: '140', extension: 'flac', audio: true },
};

// Promisify exec for use with async/await
const execPromise = util.promisify(require('child_process').exec);

app.get('/download', async (req, res) => {
  const URL = req.query.URL;
  const format = req.query.format;

  if (!URL || !format) {
    return res.status(400).send('URL and format are required.');
  }

  const formatInfo = formatMapping[format];
  if (!formatInfo) {
    return res.status(400).send('Invalid format selected.');
  }

  let ytDlpPath;
  try {
    ytDlpPath = which.sync('yt-dlp');
  } catch (e) {
    console.error('yt-dlp not found in system PATH');
    return res.status(500).send('yt-dlp not found');
  }

  try {
    // Fetch available formats to ensure formatCode exists
    const { stdout: formatsOutput } = await execPromise(`"${ytDlpPath}" --list-formats "${URL}"`);
    if (!formatsOutput.includes(formatInfo.formatCode)) {
      return res.status(400).send('Selected format is not available for this video.');
    }

    // Fetch the video title
    const { stdout: title } = await execPromise(`"${ytDlpPath}" --get-title "${URL}"`);
    const videoTitle = title.trim();

    // Set headers for file download
    let contentType;
    if (formatInfo.audio) {
      switch (formatInfo.extension) {
        case 'mp3':
          contentType = 'audio/mpeg';
          break;
        case 'wav':
          contentType = 'audio/wav';
          break;
        case 'm4a':
          contentType = 'audio/mp4';
          break;
        case 'webm':
          contentType = 'audio/webm';
          break;
        case 'aac':
          contentType = 'audio/aac';
          break;
        case 'ogg':
          contentType = 'audio/ogg';
          break;
        case 'flac':
          contentType = 'audio/flac';
          break;
        default:
          contentType = 'application/octet-stream';
      }
    } else {
      switch (formatInfo.extension) {
        case 'mp4':
          contentType = 'video/mp4';
          break;
        case 'webm':
          contentType = 'video/webm';
          break;
        default:
          contentType = 'application/octet-stream';
      }
    }

    // Sanitize the filename
    const safeTitle = sanitizeFilename(videoTitle);
    const filename = `${safeTitle}.${formatInfo.extension}`;

    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', contentType);

    // Construct the yt-dlp command arguments
    let args = [];
    if (formatInfo.audio) {
      args = ['-x', '--audio-format', formatInfo.extension, '-f', formatInfo.formatCode, '-o', '-', URL];
    } else {
      args = ['-f', formatInfo.formatCode, '-o', '-', URL];
    }

    // Spawn the child process
    const child = spawn(ytDlpPath, args);

    // Pipe stdout to response
    child.stdout.pipe(res);

    // Handle stderr
    child.stderr.on('data', (data) => {
      console.error(`Stderr: ${data}`);
    });

    // Handle child process exit
    child.on('close', (code) => {
      if (code !== 0) {
        console.error(`Child process exited with code ${code}`);
        res.status(500).send('Error downloading the video.');
      }
    });

  } catch (error) {
    console.error('Error downloading video:', error);
    res.status(500).send('Error downloading the video.');
  }
});

// Sanitize filename function
function sanitizeFilename(filename) {
  return filename.replace(/[/\\?%*:|"<>]/g, '-');
}

// Start the server
app.listen(4000, () => {
  console.log('Server started at port 4000');
});