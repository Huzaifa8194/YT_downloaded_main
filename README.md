# YouTube Downloader

This project is a simple YouTube video downloader that allows users to input a YouTube video URL and download the video in MP4 format. It consists of a frontend interface built with HTML, CSS, and JavaScript, and a backend server built with Node.js using Express and `ytdl-core`.

![Screenshot](assets/screenshot.png)

## Features

- **Input YouTube Video URL:** Users can conveniently input any valid YouTube video URL into the provided input field.
- **Download in MP4 Format:** The application seamlessly downloads the specified YouTube video in MP4 format, ensuring compatibility across various devices and platforms.

## Installation

To install and run the YouTube downloader on your local machine, follow these steps:

1. **Clone the Repository:** Begin by cloning the repository to your local environment using the following command:

   ```bash
   git clone https://github.com/Ki11switch12/YT-Downloader.git
   ```

2. **Install Server Dependencies:** Navigate to the `Server` directory and install the required dependencies by executing the following command:

   ```bash
   cd Server
   npm install
   ```

3. **Start the Server:** Launch the Node.js server by running the following command:

   ```bash
   node index.js
   ```

4. **Open the Frontend:** Open the `index.html` file in a web browser to access the frontend interface.

## Usage

1. Start the Node.js server:

   ```bash
   cd Server
   node index.js
   ```

2. Open `index.html` in a web browser.

3. Enter a valid YouTube video URL in the input field.

4. Click on the "Convert" button.

5. The video will start downloading automatically.

## Folder Structure

- `Server/`: Contains the backend server code.

  - `index.js`: Express server code.
  - `package.json`: Dependencies and scripts.
  - `package-lock.json`: Dependency lock file.

- `index.html`: Frontend HTML file.
- `script.js`: Frontend JavaScript file.
- `styles.css`: Frontend CSS file.

## Dependencies

- Express: Web framework for Node.js.
- cors: CORS middleware for Express.
- ytdl-core: YouTube video downloader.

## ytdl-core

[`ytdl-core`](https://github.com/fent/node-ytdl-core) is a Node.js module that provides a simple way to download YouTube videos programmatically. It offers a range of features, including the ability to retrieve video information, validate YouTube URLs, and download videos in various formats and quality levels. `ytdl-core` is widely used in projects that require YouTube video downloading functionality due to its reliability and ease of use.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the **GNU General Public License version 3 (GPL-3.0)**.

You are free to use, modify, and distribute this software under the terms and conditions of the GPL-3.0 license. Any distribution of derivative works must also be licensed under the GPL-3.0 license and must provide access to the corresponding source code. For more information, please see the [GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html).
