import express from "express";
import climateTypesRouter from "../src/routes/climateTypeList";
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use("/climates", climateTypesRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});