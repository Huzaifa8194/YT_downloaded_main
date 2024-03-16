Documentation:

# YouTube Downloader

This project is a simple YouTube video downloader that allows users to input a YouTube video URL and download the video in MP4 format. It consists of a frontend interface built with HTML, CSS, and JavaScript, and a backend server built with Node.js using Express and ytdl-core.

## Features

- Input a YouTube video URL
- Download the video in MP4 format


## Installation

To install and run the YouTube downloader on your local machine, follow these steps:

1. **Clone the Repository:** Begin by cloning the repository to your local environment using the following command:

    ```bash
    git clone <repository-url>
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


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the **GNU General Public License version 3 (GPL-3.0)**. 

You are free to use, modify, and distribute this software under the terms and conditions of the GPL-3.0 license. Any distribution of derivative works must also be licensed under the GPL-3.0 license and must provide access to the corresponding source code. For more information, please see the [GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html).





