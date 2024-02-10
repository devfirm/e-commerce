"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use(morgan('dev'));
    app.use(cookieParser());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Co-Ms')
        .setDescription('Co-Ms API Documentation')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const options = {
        operationIdFactory: (controllerKey, methodKey) => methodKey,
    };
    const document = swagger_1.SwaggerModule.createDocument(app, config, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(4000, () => {
        console.log(`server listening on 4000`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map