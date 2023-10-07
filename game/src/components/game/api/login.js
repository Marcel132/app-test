// const express = require('express');
// const app = express();

// // Obsługuje żądania JSON
// app.use(express.json());

// // Endpoint dla logowania
// app.post('/api/login', async (req, res) => {
//   const { userName, password } = req.body;

//   // Tutaj dodaj logikę weryfikacji danych logowania w oparciu o modele i bazę danych
//   // Przykład z użyciem modelu User z Mongoose (zakładając, że User zawiera dane użytkownika)

//   try {
//     const user = await User.findOne({ username: userName, password: password });

//     if (user) {
//       // Zalogowano pomyślnie, możesz wysłać odpowiedź sukcesu
//       res.status(200).json({ message: 'Zalogowano pomyślnie' });
//     } else {
//       // Błąd logowania
//       res.status(401).json({ message: 'Niepoprawne dane logowania' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Wystąpił błąd podczas logowania' });
//   }
// });

// // Start serwera na wybranym porcie
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Serwer uruchomiony na porcie ${port}`);
// });