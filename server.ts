import app from "./app";

const bootstrap = () => {
    try {
        app.listen(5000, () => {
            console.log(Server is running on http://localhost:5000);
        })
    } catch (error) {
        console.log("Fight to start server", error);
    }
}
bootstrap()

// Update version: 10.0.0 - Task complete
