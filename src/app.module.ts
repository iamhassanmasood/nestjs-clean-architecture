import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController, BookController, AuthorController, GenreController } from "./controllers";
import { DataServicesModule } from "./services/data-services/data-services.module";
import { BookUseCasesModule } from "./use-cases/book/book-use-cases.module";
import { AuthorUseCasesModule } from "./use-cases/author/author-use-cases.module";
import { GenreUseCasesModule } from "./use-cases/genre/genre-use-cases.module";
import { CrmServicesModule } from "./services/crm-services/crm-services.module";
import { envFilePath } from "src/utills/helper";

console.log(envFilePath);
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
    }),
    DataServicesModule,
    BookUseCasesModule,
    AuthorUseCasesModule,
    GenreUseCasesModule,
    CrmServicesModule,
  ],
  controllers: [AppController, BookController, AuthorController, GenreController],
  providers: [],
})
export class AppModule {}
