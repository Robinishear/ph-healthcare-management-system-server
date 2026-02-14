import app from "./app";
import { envConfig } from "./app/config/env";

const bootstrap = () => {
  try {
    app.listen(envConfig.PORT, () => {
      console.log(`Server is running on http://localhost:${envConfig.PORT}`);
    });
  } catch (error) {
    console.log("Fight to start server", error);
  }
};
bootstrap();
