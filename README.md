# Book Search and Bookshelf App

This is a React-based application that allows users to search for books using the Open Library API and add them to a personal bookshelf. The bookshelf is stored using the Web Storage API (`localStorage`) to persist data between sessions.

## Features

- **Search Books**: Users can search for books by title and see real-time search results.
- **Add to Bookshelf**: Users can add books from the search results to their personal bookshelf.
- **Personal Bookshelf**: Users can view their saved books on a separate bookshelf page.
- **Remove from Bookshelf**: Users can remove books from their personal bookshelf.
- **Persistent Storage**: Bookshelf data is persisted using `localStorage`.

## Demo

[![App Screenshot](https://i.postimg.cc/Gh8cNg7N/working.png)](https://postimg.cc/0bvRKnqd)

## Installation

Follow these steps to run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/abhishekyeole27/booksearch.git
   cd book-search-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```

4. **Open the App**:
   Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

- **`src/`**: Contains the main source code for the application.
  - **`components/`**: Contains all the React components.
    - **`Card/`**: Contains the `Card.jsx` component and associated styles.
    - **`Background/`**: Contains the `Background.jsx` component for the app background.
    - **`Home.jsx`**: Component for the main search page.
    - **`BookShelf.jsx`**: Component for the bookshelf page.
  - **`assets/`**: Contains static assets such as images and icons.
  - **`App.jsx`**: The main application component with routing.
  - **`index.js`**: Entry point for the React application.

## Technologies Used

- React
- React Router
- Open Library API
- Local Storage API
- Tailwind CSS
- Iconify

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Open Library API](https://openlibrary.org/developers/api)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)