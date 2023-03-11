"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
require("dotenv/config");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("@nestjs/common/pipes/validation.pipe");
async function main() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = 3001;
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe({ transform: true }));
    await app.listen(port);
}
main();
//# sourceMappingURL=main.js.map