import express from "express";
import db from "./config/database.js";
import routerBiodata from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log("Koneksi database berhasil!");
} catch (error) {
    console.log("Koneksi database gagal: ", error);
}

app.use(cors());
// app.use(cors);
app.use(express.json());
app.use("/biodata", routerBiodata);

app.listen(5001, () => 
    console.log("Server berjalan pada http://localhost:5001")
);