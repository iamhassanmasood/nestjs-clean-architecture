import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { IDataServices } from "../../../core";
import { DATA_BASE_CONFIGURATION } from "../../../configuration";
import { Author, AuthorSchema, Book, BookSchema, Genre, GenreSchema } from "./model";
import { MongoDataServices } from "./mongo-data-services.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
    MongooseModule.forFeature([
      { name: Author.name, schema: AuthorSchema },
      { name: Book.name, schema: BookSchema },
      { name: Genre.name, schema: GenreSchema },
    ]),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
