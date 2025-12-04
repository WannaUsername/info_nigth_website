const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "secret-nird-resistance",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/choose-role", (req, res) => {
  res.render("choose-role");
});

app.post("/choose-role", (req, res) => {
  const { role } = req.body;
  req.session.role = role;
  res.redirect(`/profile/${role}`);
});

app.get("/profile/:role", (req, res) => {
  const role = req.params.role;
  res.render("profile", { role });
});

app.get("/missions/:role", (req, res) => {
  const role = req.params.role;
  res.render("missions", { role });
});

app.get("/community", (req, res) => {
  res.render("community");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Ì∫Ä Serveur lanc√© sur http://localhost:${PORT}`);
});
